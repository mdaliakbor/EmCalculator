import PropTypes from "prop-types";

const Operators = ({ handleArithmeticOps, handleClearOps }) => {
  return (
    <div>
      <p>operators</p>
      <button onClick={() => handleArithmeticOps("+")}>+</button>
      <button onClick={() => handleArithmeticOps("-")}>-</button>
      <button onClick={() => handleArithmeticOps("*")}>*</button>
      <button onClick={() => handleArithmeticOps("/")}>/</button>
      <button onClick={() => handleArithmeticOps("%")}>%</button>
      <button onClick={handleClearOps}>Clear</button>
    </div>
  );
};
Operators.propTypes = {
  handleArithmeticOps: PropTypes.func.isRequired,
  handleClearOps: PropTypes.func.isRequired,
};
export default Operators;
