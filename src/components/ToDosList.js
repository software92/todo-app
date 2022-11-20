const ToDosList = ({ toDos, handleDelToDos, convertToDo }) => {
  return (
    toDos && (
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index} id={toDo.id}>
            <span>{toDo.text}</span>
            <div>
              {/* <button>Rewrite</button> */}
              <button onClick={convertToDo}>Done</button>
              <button onClick={handleDelToDos}>Del</button>
            </div>
          </li>
        ))}
      </ul>
    )
  );
};

export default ToDosList;
