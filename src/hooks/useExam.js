import { toast } from "react-toastify";
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
      time: 120,
      date: new Date().toISOString().split("T")[0],
      questions: [
        {
          id: uuidv4(),
          questionTitle: "Question Title",
          questionType: "radio",
          options: [
            {
              id: uuidv4().split("-")[0],
              title: "Option 1",
            },
          ],
          open: true,
          point: 1,
          correctID: null,
        },
      ],
    }
  );

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

  const changeOptionValue = (optValue, optID, questionID) => {
    let newQuestions = examData.questions.map((question) => {
      if (question.id === questionID) {
        return {
          ...question,
          options: question.options.map((option) => {
            if (option.id === optID) {
              return { ...option, title: optValue };
            }
            return option;
          }),
        };
      }
      return question;
    });
    setExamData({ ...examData, questions: newQuestions });
  };

  const removeOption = (optionID, quesIndex) => {
    let newQuestions = [...examData.questions];
    newQuestions[quesIndex].options = newQuestions[quesIndex].options.filter(
      (option) => {
        if (option.id === newQuestions[quesIndex].correctID) {
          toast.error("Düzgün cavab variantını silə bilməzsiniz!");
          return true;
        }
        return option.id !== optionID;
      }
    );
    setExamData({ ...examData, questions: newQuestions });
  };

  const addOption = (questionID) => {
    let newQuestions = examData.questions.map((question) => {
      if (question.id === questionID) {
        return {
          ...question,
          options: [
            ...question.options,
            { id: uuidv4().split("-")[0], title: "Option" },
          ],
        };
      }
      return question;
    });
    setExamData({ ...examData, questions: newQuestions });
  };

  const copyQuestion = (quesIndex) => {
    let newQuestions = [...examData.questions];
    let copyQuestion = newQuestions[quesIndex];
    newQuestions.push({ ...copyQuestion, id: uuidv4() });
    setExamData({ ...examData, questions: newQuestions });
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
    newQuestions.push({
      id: uuidv4(),
      questionTitle: "Question Title",
      questionType: "radio",
      correctID: null,
      point: 1,
      options: [{ id: uuidv4().split("-")[0], title: "Option" }],
      open: true,
    });
    setExamData({ ...examData, questions: newQuestions });
  };

  const correctAnswer = (optionID, questionID) => {
    let newQuestions = examData.questions.map((question) => {
      if (question.id === questionID) {
        return { ...question, correctID: optionID };
      }
      return question;
    });
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
