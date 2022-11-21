import styled from 'styled-components';

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
const Item = styled.li`
  border-bottom: 2px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 5px;
`;
const TEXT = styled.span`
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

const ToDonesList = ({ toDones, handleDelToDones, convertToDone }) => {
  return (
    toDones.length > 0 && (
      <DoContainer>
        <ListTitle>Done List</ListTitle>
        <List>
          {toDones.map((toDone, index) => (
            <Item key={index} id={toDone.id}>
              <TEXT>{toDone.text}</TEXT>
              <ButtonContainer>
                <Button onClick={convertToDone}>Do</Button>
                <Button onClick={handleDelToDones}>Del</Button>
              </ButtonContainer>
            </Item>
          ))}
        </List>
      </DoContainer>
    )
  );
};

export default ToDonesList;
