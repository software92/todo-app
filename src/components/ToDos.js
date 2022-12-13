import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Item = styled.li`
  border-bottom: 2px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 5px;
`;
const Text = styled.span`
  width: 80%;
  height: auto;
  font-size: 25px;
  word-break: break-all;
  line-height: 1.3;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 50px;
  border-radius: 5px;
  background: red;
  color: white;
  padding: 2px;
  &:first-child {
    margin-bottom: 3px;
  }
`;

const ToDos = ({ id, text, changeCategory, delRow, index }) => (
  <Draggable draggableId={String(id)} index={index}>
    {(provided) => {
      return (
        <Item
          id={id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Text>{text}</Text>
          <ButtonContainer>
            {/* <button>Rewrite</button> */}
            <Button name='toDo' onClick={changeCategory}>
              Done
            </Button>
            <Button name='toDo' onClick={delRow}>
              Del
            </Button>
          </ButtonContainer>
        </Item>
      );
    }}
  </Draggable>
);

export default ToDos;
