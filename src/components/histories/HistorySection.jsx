import PropTypes from "prop-types";

const HistorySection = ({ histories, handleRestoreBtn, restoredHistory }) => {
  return (
    <div className='text-stone-700'>
      <p className='text-xl font-semibold py-2'>History</p>
      {histories.length === 0 ? (
        <p className=' font-semibold text-cyan-600'>There is no history.</p>
      ) : (
        <ul>
          {histories.map((historyItem) => (
            <li key={historyItem.id}>
              <p className='font-bold'>
                operator: {historyItem.inputs.a} {historyItem.operator}{" "}
                {historyItem.inputs.b}, Result: {historyItem.result}
              </p>
              <small className='font-bold'>
                {historyItem.date.toLocaleDateString()}{" "}
                {historyItem.date.toLocaleTimeString()}
              </small>
              <br />
              <button
                onClick={() => handleRestoreBtn(historyItem)}
                disabled={
                  restoredHistory != null && restoredHistory === historyItem.id
                }
                className=' bg-gray-400 px-4 py-1 rounded-md text-purple-900 font-bold disabled:opacity-50 disabled:cursor-not-allowed mb-5'
              >
                restore
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
HistorySection.propTypes = {
  histories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      inputs: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
      }),
      operation: PropTypes.string.isRequired,
      result: PropTypes.number.isRequired,
      date: PropTypes.object.isRequired,
    })
  ),
  restoredHistory: PropTypes.number.isRequired,
  handleRestoreBtn: PropTypes.func.isRequired,
};

export default HistorySection;
