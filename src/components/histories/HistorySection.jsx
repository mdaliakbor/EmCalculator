import PropTypes from "prop-types";

const HistorySection = ({ histories, handleRestoreBtn, restoredHistory }) => {
  return (
    <div>
      <p>History</p>
      {histories.length === 0 ? (
        <p>
          <small>There is no history</small>
        </p>
      ) : (
        <ul>
          {histories.map((historyItem) => (
            <li key={historyItem.id}>
              <p>
                operator: {historyItem.inputs.a} {historyItem.operator}{" "}
                {historyItem.inputs.b}, Result: {historyItem.result}
              </p>
              <small>
                {historyItem.date.toLocaleDateString()}{" "}
                {historyItem.date.toLocaleTimeString()}
              </small>
              <br />
              <button
                onClick={() => handleRestoreBtn(historyItem)}
                disabled={
                  restoredHistory != null && restoredHistory === historyItem.id
                }
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
