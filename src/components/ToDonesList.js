import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import ToDone from './ToDone';

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

const ToDonesList = ({ toDones, changeCategory, delRow }) => {
  return (
    toDones.length > 0 && (
      <DoContainer>
        <ListTitle>Done List</ListTitle>
        <Droppable droppableId='toDonesId'>
          {(provided) => (
            <List ref={provided.innerRef} {...provided.droppableProps}>
              {toDones.map((toDone, index) => (
                <ToDone
                  key={toDone.id}
                  {...toDone}
                  changeCategory={changeCategory}
                  delRow={delRow}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DoContainer>
    )
  );
};

export default ToDonesList;
