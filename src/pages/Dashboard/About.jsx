import { addExamToFirestore, fetchExams } from "../../redux/exams/examSlice";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

export const About = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [sinif, setSinif] = useState(null);

  useEffect(() => {
    dispatch(fetchExams());
  }, [dispatch]);
  const handleExamSubmit = (e) => {
    e.preventDefault();
    let examData = {
      title,
      price,
      class: sinif,
    };

    dispatch(addExamToFirestore(examData));
    setPrice("");
    setSinif("");
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleExamSubmit}>
        <label htmlFor="">
          Exam Title:
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label htmlFor="">
          Exam Price:
          <input type="number" onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label htmlFor="">
          Exam Class:
          <input type="number" onChange={(e) => setSinif(e.target.value)} />
        </label>
        <button>Add Exam</button>
      </form>
    </div>
  );
};
