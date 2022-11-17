import { useState } from 'react';

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

    if (toDo) {
      setToDos((prev) => [...prev, toDo]);
    }
    setValue('');
  };

  const onChange = (e) => {
    const {
      currentTarget: { value },
    } = e;

    setValue(value);
  };

  return (
    <div>
      {/* {console.log(toDos)} */}
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={value}
          type='text'
          placeholder='Write your to do'
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
