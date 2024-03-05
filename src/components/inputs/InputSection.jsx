import PropTypes from "prop-types";

const InputSection = ({ inputs, handleInput, inputErr }) => {
  return (
    <div className='text-stone-700'>
      <p className='text-xl font-semibold pb-2'>Inputs</p>
      <div className='grid gap-3 md:grid-cols-2 '>
        <input
          type='number'
          value={inputs.a}
          onChange={handleInput}
          name='a'
          className='text-xl font-semibold p-2 bg-gray-200 rounded-md w-[70%] md:w-full'
        />
        <input
          type='number'
          value={inputs.b}
          onChange={handleInput}
          name='b'
          className='text-xl font-semibold p-2 bg-gray-200 rounded-md w-[70%] md:w-full'
        />
      </div>
      {inputErr == true ? (
        <p className='text-red-600 pt-2 font-semibold'>
          Please! Enter Valid Inputs.
        </p>
      ) : (
        ""
      )}
    </div>
  );
};
InputSection.propTypes = {
  inputs: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleInput: PropTypes.func.isRequired,
  inputErr: PropTypes.bool,
};

export default InputSection;
