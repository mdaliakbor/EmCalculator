import PropTypes from "prop-types";

const Operators = ({ handleArithmeticOps, handleClearOps }) => {
  return (
    <div className='text-stone-700'>
      <p className='text-xl font-semibold py-2'>operators</p>
      <button
        className='font-bold bg-gray-400 m-2 py-2 px-5 rounded-md'
        onClick={() => handleArithmeticOps("+")}
      >
        +
      </button>
      <button
        className='font-bold bg-gray-400 m-2 py-2 px-5 rounded-md'
        onClick={() => handleArithmeticOps("-")}
      >
        -
      </button>
      <button
        className='font-bold bg-gray-400 m-2 py-2 px-5 rounded-md'
        onClick={() => handleArithmeticOps("*")}
      >
        *
      </button>
      <button
        className='font-bold bg-gray-400 m-2 py-2 px-5 rounded-md'
        onClick={() => handleArithmeticOps("/")}
      >
        /
      </button>
      <button
        className='font-bold bg-gray-400 m-2 py-2 px-5 rounded-md'
        onClick={() => handleArithmeticOps("%")}
      >
        %
      </button>
      <button
        className='font-bold bg-gray-400 m-2 py-2 px-5 rounded-md'
        onClick={handleClearOps}
      >
        Clear
      </button>
    </div>
  );
};
Operators.propTypes = {
  handleArithmeticOps: PropTypes.func.isRequired,
  handleClearOps: PropTypes.func.isRequired,
};
export default Operators;
