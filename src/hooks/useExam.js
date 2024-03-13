import { useLocation } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useExam = () => {
  const location = useLocation();
  const editedExam = location.state;
  let isEdited = editedExam ? true : false;
  const [examData, setExamData] = useState(
    editedExam || {
      title: "Exam Title",
      author: "Əliyar Nuriyev",
      price: 1,
      time: "1saat 30dəqiqə",
      date: new Date().toISOString().split("T")[0],
      questions: [
        {
          id: uuidv4(),
          questionTitle: "Question Title",
          questionType: "radio",
          options: [{ id: 1, title: "Option 1" }],
          open: true,
          point: 1,
          correctIndex: 0,
        },
      ],
    }
  );

  console.log("examData", examData);

  const changeQuestion = (text, index) => {
    let newQuestions = [...examData.questions];
    newQuestions[index].questionTitle = text;
    setExamData({ ...examData, questions: newQuestions });
  };

  const addQuestionType = (type, index) => {
    let newQuestions = [...examData.questions];
    newQuestions[index].questionType = type;
    setExamData({ ...examData, questions: newQuestions });
  };

  const changeOptionValue = (optValue, optIndex, quesIndex) => {
    let newQuestions = [...examData.questions];
    newQuestions[quesIndex].options[optIndex].title = optValue;
    setExamData({ ...examData, questions: newQuestions });
  };

  const removeOption = (optIndex, quesIndex) => {
    let newQuestions = [...examData.questions];
    let newOptions = newQuestions[quesIndex].options.filter(
      (option) => option.id !== optIndex
    ); // remove option
    console.log("newOptions", newOptions);
    setExamData({ ...examData, questions: newQuestions });
  };

  const addOption = (quesIndex) => {
    let newQuestions = [...examData.questions];
    newQuestions[quesIndex].options.push({
      id: newQuestions[quesIndex].options.length + 1,
      title: `Option ${newQuestions[quesIndex].options.length + 1}`,
    });
    setExamData({ ...examData, questions: newQuestions });
  };

  const copyQuestion = (quesIndex) => {
    let newQuestions = [...examData.questions];
    console.log("newQuestions", newQuestions[quesIndex]);
    let copyQuestion = { ...newQuestions[quesIndex] };
    console.log("copyQuestion", copyQuestion);
    copyQuestion.id = uuidv4();
    newQuestions.push(copyQuestion);
    setExamData({ ...examData, questions: newQuestions });
    console.log(editedExam);
  };

  const deleteQuestion = (quesIndex) => {
    let newQuestions = [...examData.questions];
    if (newQuestions.length > 1) newQuestions.splice(quesIndex, 1);
    setExamData({ ...examData, questions: newQuestions });
  };

  const addMoreQuestionField = () => {
    let newQuestions = examData.questions.map((question) => {
      return { ...question, open: true };
    });
    console.log("add more question field", newQuestions);
    newQuestions.push({
      id: newQuestions.length + 1,
      questionTitle: "Question Title",
      questionType: "radio",
      correctIndex: 0,
      point: 1,
      options: [{ id: 1, title: "Option 1" }],
      open: true,
    });
    setExamData({ ...examData, questions: newQuestions });
  };

  const correctAnswer = (index, quesIndex) => {
    let newQuestions = [...examData.questions];
    newQuestions[quesIndex].correctIndex = index;
    setExamData({ ...examData, questions: newQuestions });
  };

  const changeQuestionPoint = (point, quesIndex) => {
    let newQuestions = [...examData.questions];
    newQuestions[quesIndex].point = point;
    setExamData({ ...examData, questions: newQuestions });
  };
  return {
    isEdited,
    examData,
    setExamData,
    changeQuestion,
    addQuestionType,
    changeOptionValue,
    removeOption,
    addOption,
    copyQuestion,
    deleteQuestion,
    addMoreQuestionField,
    correctAnswer,
    changeQuestionPoint,
  };
};
