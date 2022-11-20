const ToDonesList = ({ toDones, handleDelToDones, convertToDone }) => {
  return (
    toDones && (
      <ul>
        {toDones.map((toDone, index) => (
          <li key={index} id={toDone.id}>
            <span>{toDone.text}</span>
            <div>
              <button onClick={convertToDone}>Do</button>
              <button onClick={handleDelToDones}>Del</button>
            </div>
          </li>
        ))}
      </ul>
    )
  );
};

export default ToDonesList;
