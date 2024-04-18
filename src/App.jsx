import { useState } from "react";
import InputSection from "./components/inputs/InputSection";
import Operators from "./components/operators/Operators";
import HistorySection from "./components/histories/HistorySection";
function* generateId() {
  let id = 0;

  while (true) {
    yield id++;
  }
}

const getId = generateId();

const InitialInputState = {
  a: 0,
  b: 0,
};

const App = () => {
  const [inputState, setInputState] = useState({ ...InitialInputState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoredHistory, setRestoredHistory] = useState(0);
  const [inputErr, setInputErr] = useState(false);

  const handleInputFields = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleClearOps = () => {
    setInputState({ ...InitialInputState });
    setResult(0);
  };

  const handleArithmeticOps = (operator) => {
    if (!inputState.a || !inputState.b) {
      setInputErr(true);
      return;
    }

    const f = new Function(
      "operator",
      `
		  return ${inputState.a} ${operator} ${inputState.b}
		`
    );
    const result = f(operator);
    setResult(result);

    const historyItem = {
      id: getId.next().value,
      inputs: { ...inputState },
      operator,
      result,
      date: new Date(),
    };
    setHistories([historyItem, ...histories]);
    setInputErr(false);
  };

  const handleRestoreBtn = (historyItem) => {
    setInputState({ ...historyItem.inputs });
    setResult(historyItem.result);
    setRestoredHistory(historyItem.id);
  };

  return (
    <div className='w-2/4 mx-auto mt-10 border p-10 bg-cyan-50 rounded-md'>
      <h1 className='text-3xl font-bold py-5 text-stone-700'>
        Result: {result}
      </h1>
      <InputSection
        inputs={inputState}
        handleInput={handleInputFields}
        inputErr={inputErr}
      />
      <Operators
        handleArithmeticOps={handleArithmeticOps}
        handleClearOps={handleClearOps}
      />
      <HistorySection
        handleRestoreBtn={handleRestoreBtn}
        restoredHistory={restoredHistory}
        histories={histories}
      />
    </div>
  );
};

export default App;
