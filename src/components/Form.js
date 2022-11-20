const Form = ({ onSubmit, onChange, value }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        type='text'
        placeholder='Write your to do'
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
