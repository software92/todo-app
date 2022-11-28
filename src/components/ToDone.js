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

const ToDone = ({ id, text, changeCategory, delRow }) => (
  <Item id={id}>
    <Text>{text}</Text>
    <ButtonContainer>
      <Button name='toDone' onClick={changeCategory}>
        Do
      </Button>
      <Button name='toDone' onClick={delRow}>
        Del
      </Button>
    </ButtonContainer>
  </Item>
);

export default ToDone;
