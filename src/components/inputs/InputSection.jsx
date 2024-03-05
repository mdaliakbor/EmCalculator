import PropTypes from "prop-types";

const InputSection = ({ inputs, handleInput }) => {
  return (
    <div>
      <p>Inputs</p>
      <input type='number' value={inputs.a} onChange={handleInput} name='a' />
      <input type='number' value={inputs.b} onChange={handleInput} name='b' />
    </div>
  );
};
InputSection.propTypes = {
  inputs: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default InputSection;
