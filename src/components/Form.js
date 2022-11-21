import styled from 'styled-components';

const FormTag = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputTag = styled.input`
  width: 400px;
  height: 50px;
  border: 3px solid green;
  border-radius: 15px;
  text-align: center;
  font-size: 33px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;
const Button = styled.button`
  background: red;
  color: rgba(255, 255, 255, 1);
  border-radius: 25px;
  padding: 5px 15px;
  margin: 20px 0 40px 0;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Form = ({ onSubmit, onChange, value }) => {
  return (
    <FormTag onSubmit={onSubmit}>
      <InputTag
        onChange={onChange}
        value={value}
        type='text'
        placeholder='Write your to do'
      />
      <Button>Submit</Button>
    </FormTag>
  );
};

export default Form;
