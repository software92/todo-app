import styled from 'styled-components';
import ToDos from './ToDos';

const DoContainer = styled.div`
  width: 40%;
`;

const ListTitle = styled.h1`
  margin-left: 15px;
  margin-bottom: 30px;
  font-size: 35px;
  font-weight: bold;
`;

const List = styled.ul`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.9);
  padding: 5px 10px 10px 10px;
  background: rgba(255, 255, 255, 1);
`;

const ToDosList = ({ toDos, changeCategory, delRow }) => {
  return (
    toDos.length > 0 && (
      <DoContainer>
        <ListTitle>Do List</ListTitle>
        <List>
          {toDos.map((toDo) => (
            <ToDos
              key={toDo.id}
              {...toDo}
              changeCategory={changeCategory}
              delRow={delRow}
            />
          ))}
        </List>
      </DoContainer>
    )
  );
};

export default ToDosList;
