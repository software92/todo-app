import { useEffect, useState } from 'react';

const loadInitialToDos = () => {
  const loadToDos = JSON.parse(localStorage.getItem('toDos'));
  return loadToDos || [];
};
const loadInitialToDones = () => {
  const loadToDones = JSON.parse(localStorage.getItem('toDones'));
  return loadToDones || [];
};

function App() {
  // 1
  // toDos, toDone 2가지 형태로 데이터 분리
  // 처음 to do 추가시 무조건 toDos에 저장
  // 저장 후 toDos <==> toDone 데이터 변경 가능
  const [value, setValue] = useState('');
  const [toDos, setToDos] = useState(loadInitialToDos());
  const [toDones, setToDones] = useState(loadInitialToDones());

  const onSubmit = (e) => {
    e.preventDefault();
    const toDo = value.trim();
    const toDoObj = {
      id: Date.now(),
      text: toDo,
    };

    // 아무것도 입력되지 않거나, 공백인 문자만 입력될 때는 toDos 변경 없음
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

  const handleDelToDos = (e) => {
    // console.dir(e.target.parentNode.parentNode.id);
    const {
      target: {
        parentNode: {
          parentNode: { id },
        },
      },
    } = e;
    const newToDos = toDos.filter((toDo) => toDo.id !== parseInt(id));
    setToDos(newToDos);
    // console.log(newToDos, id);
    // console.log(toDos, id);
  };

  const handleDelToDones = (e) => {
    // console.dir(e.target.parentNode.parentNode.id);
    const {
      target: {
        parentNode: {
          parentNode: { id },
        },
      },
    } = e;
    const newToDones = toDones.filter((toDone) => toDone.id !== parseInt(id));
    setToDones(newToDones);
    // console.log(newToDos, id);
    // console.log(toDos, id);
  };

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

  // useEffect(() => {
  //   console.log('load', loadInitialToDos());
  //   console.log('load', loadInitialToDones());
  // }, []);

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
    localStorage.setItem('toDones', JSON.stringify(toDones));

    console.log('toDos', toDos);
    console.log('toDone', toDones);
  }, [toDos, toDones]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={value}
          type='text'
          placeholder='Write your to do'
        />
        <button>Submit</button>
      </form>
      {toDos && (
        <ul>
          {toDos.map((toDo, index) => (
            <li key={index} id={toDo.id}>
              <span>{toDo.text}</span>
              <div>
                <button onClick={handleDelToDos}>Del</button>
                <button>Rewrite</button>
                <button onClick={convertToDo}>Done</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {toDones && (
        <ul>
          {toDones.map((toDone, index) => (
            <li key={index} id={toDone.id}>
              <span>{toDone.text}</span>
              <div>
                <button onClick={handleDelToDones}>Del</button>
                <button>Rewrite</button>
                <button onClick={convertToDone}>Do</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
