import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Form from './components/Form';
import ToDonesList from './components/ToDonesList';
import ToDosList from './components/ToDosList';

const TODOS = 'toDos';
const TODONES = 'toDones';

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

// Web 접속 / 페이지 reload,
// localStorage에 저장되어 있는 toDos, toDones를 가져옴
// 데이터가 없으면 []
const loadInitialToDos = () => {
  const loadToDos = JSON.parse(localStorage.getItem(TODOS));
  return loadToDos || [];
};
const loadInitialToDones = () => {
  const loadToDones = JSON.parse(localStorage.getItem(TODONES));
  return loadToDones || [];
};

function App() {
  const [value, setValue] = useState('');
  const [toDos, setToDos] = useState(loadInitialToDos());
  const [toDones, setToDones] = useState(loadInitialToDones());

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

  // to do list의 선택된 항목 제거
  const handleDelToDos = (e) => {
    const {
      target: {
        parentNode: {
          parentNode: { id },
        },
      },
    } = e;
    const newToDos = toDos.filter((toDo) => toDo.id !== parseInt(id));
    setToDos(newToDos);
  };

  // to done list의 선택된 항목 제거
  const handleDelToDones = (e) => {
    const {
      target: {
        parentNode: {
          parentNode: { id },
        },
      },
    } = e;
    const newToDones = toDones.filter((toDone) => toDone.id !== parseInt(id));
    setToDones(newToDones);
  };

  // to do -> to done 항목 이동
  const convertToDo = (e) => {
    const {
      target: {
        parentNode: {
          parentNode: { id },
        },
      },
    } = e;

    const newToDos = toDos.filter((toDo) => toDo.id !== parseInt(id));
    const doneToDo = toDos.find((toDo) => toDo.id === parseInt(id));

    setToDos(newToDos);
    setToDones((prev) => [...prev, doneToDo]);
  };

  // to done -> to do 항목 이동
  const convertToDone = (e) => {
    const {
      target: {
        parentNode: {
          parentNode: { id },
        },
      },
    } = e;

    const newToDones = toDones.filter((toDone) => toDone.id !== parseInt(id));
    const doToDone = toDones.find((toDone) => toDone.id === parseInt(id));

    setToDones(newToDones);
    setToDos((prev) => [...prev, doToDone]);
  };

  // toDos, toDones 저장 / 수정 / 삭제 시, 저장
  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
    localStorage.setItem(TODONES, JSON.stringify(toDones));
  }, [toDos, toDones]);

  return (
    <Container>
      <Form onSubmit={onSubmit} onChange={onChange} value={value} />
      <ListContainer>
        <ToDosList
          toDos={toDos}
          handleDelToDos={handleDelToDos}
          convertToDo={convertToDo}
        />
        <ToDonesList
          toDones={toDones}
          handleDelToDones={handleDelToDones}
          convertToDone={convertToDone}
        />
      </ListContainer>
    </Container>
  );
}

export default App;
