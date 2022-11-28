import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Form from './components/Form';
import ToDonesList from './components/ToDonesList';
import ToDosList from './components/ToDosList';
import { loadInitialValues, saveValues } from './localValues';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: yellow;
  border: 1px solid blue;
  overflow: auto;
  padding-bottom: 30px;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 90%;
`;

const StanbyText = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;

const Lists = () => {
  const { initialToDo, initialToDone } = loadInitialValues();
  const [value, setValue] = useState('');
  const [toDos, setToDos] = useState(initialToDo);
  const [toDones, setToDones] = useState(initialToDone);

  // 할 일(toDos) 추가
  const onSubmit = (e) => {
    e.preventDefault();
    const toDo = value.trim();
    const toDoObj = {
      id: Date.now(),
      text: toDo,
    };

    if (toDo) {
      setToDos((prev) => [...prev, toDoObj]);
    }
    setValue('');
  };

  const onChange = (e) => {
    const {
      currentTarget: { value },
    } = e;

    setValue(value);
  };

  // to do list의 선택된 항목 제거, to done list의 선택된 항목 제거
  const delRow = (e) => {
    const {
      target: {
        parentNode: {
          parentNode: { id },
        },
      },
      currentTarget: { name },
    } = e;

    // 1
    if (name === 'toDo') {
      const newToDos = toDos.filter((toDo) => toDo.id !== parseInt(id));
      setToDos(newToDos);
    } else {
      const newToDones = toDones.filter((toDone) => toDone.id !== parseInt(id));
      setToDones(newToDones);
    }

    // 2, 3번의 코드는 1번 코드보다 짧지만, 가독성이 떨어져 사용 안함
    // 2
    // if (name === 'toDo') {
    //   setToDos(toDos.filter((toDo) => toDo.id !== parseInt(id)));
    // } else {
    //   setToDones(toDones.filter((toDone) => toDone.id !== parseInt(id)));
    // }
    //
    // 3
    // const newRow =
    //   name === 'toDo'
    //     ? toDos.filter((toDo) => toDo.id !== parseInt(id))
    //     : toDones.filter((toDone) => toDone.id !== parseInt(id));
    // name === 'toDo' ? setToDos(newRow) : setToDones(newRow);

    // name === 'toDo'
    //   ? setToDos(() => {
    //       return toDos.filter((toDo) => toDo.id !== parseInt(id));
    //     })
    //   : setToDones(() => {
    //       return toDones.filter((toDone) => toDone.id !== parseInt(id));
    //     });
  };
  // to do -> to done 항목 이동, to done -> to do 항목 이동
  const changeCategory = (e) => {
    const {
      target: {
        parentNode: {
          parentNode: { id },
        },
      },
      currentTarget: { name },
    } = e;

    // 1
    let newArray = [];
    let selectRow = [];

    if (name === 'toDo') {
      newArray = toDos.filter((toDo) => toDo.id !== parseInt(id));
      selectRow = toDos.find((toDo) => toDo.id === parseInt(id));

      setToDos(newArray);
      setToDones((prev) => [...prev, selectRow]);
    } else {
      newArray = toDones.filter((toDone) => toDone.id !== parseInt(id));
      selectRow = toDones.find((toDone) => toDone.id === parseInt(id));

      setToDones(newArray);
      setToDos((prev) => [...prev, selectRow]);
    }

    // 2 - 1번 코드보다 짧을 수 있지만, 가독성이 떨어져 사용 안함
    // const newArray =
    //   name === 'toDos'
    //     ? toDos.filter((toDo) => toDo.id !== parseInt(id))
    //     : toDones.filter((toDone) => toDone.id !== parseInt(id));
    // const selectItem =
    //   name === 'toDos'
    //     ? toDos.find((toDo) => toDo.id === parseInt(id))
    //     : toDones.find((toDone) => toDone.id === parseInt(id));
    //
    // name === 'toDos' ? setToDos(newArray) : setToDones(newArray);
    // name === 'toDos'
    //   ? setToDones((prev) => [...prev, selectItem])
    //   : setToDos((prev) => [...prev, selectItem]);
  };

  // toDos, toDones 저장 / 수정 / 삭제 시, 저장
  useEffect(() => {
    saveValues(toDos, toDones);
    return saveValues(toDos, toDones);
  }, [toDos, toDones]);

  return (
    <Container>
      <Form onSubmit={onSubmit} onChange={onChange} value={value} />
      {toDos.length === 0 && toDones.length === 0 ? (
        <StanbyText>You are free!</StanbyText>
      ) : (
        <ListContainer>
          <ToDosList
            toDos={toDos}
            changeCategory={changeCategory}
            delRow={delRow}
          />
          <ToDonesList
            toDones={toDones}
            changeCategory={changeCategory}
            delRow={delRow}
          />
        </ListContainer>
      )}
    </Container>
  );
};

export default Lists;
