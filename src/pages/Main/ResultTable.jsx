import { useLocation } from "react-router-dom";

export const ResultTable = () => {
  const state = useLocation().state;
  console.log(state);
  return (
    <div>
      <h1>Result Table</h1>
      <p>Point: {state.point}</p>
      <p>Answers: </p>
    </div>
  );
};
