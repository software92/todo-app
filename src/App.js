import { useEffect, useState } from 'react';

function App() {
  // 1
  // toDos, toDone 2가지 형태로 데이터 분리
  // 처음 to do 추가시 무조건 toDos에 저장
  // 저장 후 toDos <==> toDone 데이터 변경 가능
  const [value, setValue] = useState('');
  const [toDos, setToDos] = useState([]);
  // const [toDone, setToDone] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const toDo = value.trim();
    const toDoObj = {
      id: Date.now(),
      toDo,
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

  const handleDel = (e) => {
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

  useEffect(() => {
    {
      console.log(toDos);
    }
  }, [toDos]);

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
              <span>{toDo.toDo}</span>
              <div>
                <button onClick={handleDel}>Done</button>
                <button>Rewrite</button>
                <button>Del</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
