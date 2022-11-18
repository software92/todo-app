const ToDos = ({ toDos }) => {
  return (
    <ul>
      {toDos.map((toDo, index) => (
        <li key={index}>{toDo}</li>
      ))}
    </ul>
  );
};

export default ToDos;
