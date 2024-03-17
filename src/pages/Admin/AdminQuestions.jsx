import {
  addExamToFirestore,
  updateExamInFirestore,
} from "../../redux/exams/examSlice";

import { Dropdown } from "flowbite-react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { IoIosCheckboxOutline } from "react-icons/io";
import { IoMdRadioButtonOn } from "react-icons/io";
import { MdOutlineShortText } from "react-icons/md";
import { MdOutlineUploadFile } from "react-icons/md";
import { PiTextAlignLeftFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { useExam } from "../../hooks/useExam";
import { useNavigate } from "react-router-dom";

export const AdminQuestions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const points = [1, 2, 3, 4, 5];
  const {
    isEdited,
    addMoreQuestionField,
    addOption,
    addQuestionType,
    changeOptionValue,
    changeQuestion,
    copyQuestion,
    deleteQuestion,
    removeOption,
    examData,
    setExamData,
    changeQuestionPoint,
    correctAnswer,
  } = useExam();

  const saveExam = () => {
    let result = {
      ...examData,
      questionsCount: examData.questions.length,
    };
    console.log("result", result);
    if (isEdited) {
      dispatch(updateExamInFirestore(result));
    } else {
      dispatch(addExamToFirestore(result));
    }
    navigate("/admin/exams");
  };

  const handlePoints = (point, questionIndex) => {
    console.log("point & questionIndex", point, questionIndex);
    changeQuestionPoint(point, questionIndex);
  };

  const questionsUI = examData.questions.map((question, qIndex) => {
    return (
      <div className="flex gap-5" key={question.id}>
        <div className="w-[750px] bg-white rounded-xl p-6">
          {/* header content */}
          <div className="flex gap-4 items-center mb-4">
            <div className="bg-[#F7F7F7] w-3/4 rounded-xl">
              <input
                type="text"
                placeholder="Question"
                onChange={(e) => changeQuestion(e.target.value, qIndex)}
                defaultValue={question.questionTitle}
                className="bg-transparent border-none w-full rounded-xl"
              />
            </div>
            <Dropdown label="Seçin" color="gray">
              <Dropdown.Item
                icon={MdOutlineShortText}
                onClick={() => addQuestionType("text", qIndex)}
              >
                Qısa cavab
              </Dropdown.Item>
              <Dropdown.Item icon={PiTextAlignLeftFill}>
                Uzun cavab
              </Dropdown.Item>
              <Dropdown.Divider></Dropdown.Divider>
              <Dropdown.Item
                icon={IoMdRadioButtonOn}
                onClick={() => addQuestionType("radio", qIndex)}
              >
                One choice
              </Dropdown.Item>
              <Dropdown.Item
                icon={IoIosCheckboxOutline}
                onClick={() => addQuestionType("checkbox", qIndex)}
              >
                Multiple choice
              </Dropdown.Item>
              <Dropdown.Item icon={IoChevronDownCircleOutline}>
                Aşağı açılan menyu
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item icon={MdOutlineUploadFile}>
                Fayl yükləmə
              </Dropdown.Item>
            </Dropdown>
          </div>
          {/* questions content */}
          <div>
            {question.options.map((option) => (
              <div
                className="flex gap-3 items-center mb-[10px]"
                key={option.id}
              >
                <input
                  type={question.questionType}
                  name={`question-${qIndex}`}
                  defaultChecked={question.correctID === option.id}
                  className="cursor-pointer"
                  onClick={() => correctAnswer(option.id, question.id)}
                />
                <input
                  type="text"
                  defaultValue={option.title}
                  onChange={(e) =>
                    changeOptionValue(e.target.value, option.id, question.id)
                  }
                  className="flex-1 border-none rounded-tl-md rounded-tr-md hover:bg-gray-100 hover:border-b-2"
                />
                <button className="hover:bg-gray-100 p-2 rounded-full">
                  <svg
                    width="24.000000"
                    height="24.000000"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Vector"
                      d="M15 22.75L9 22.75C3.57 22.75 1.25 20.43 1.25 15L1.25 9C1.25 3.56 3.57 1.25 9 1.25L15 1.25C20.43 1.25 22.75 3.56 22.75 9L22.75 15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9L2.75 15C2.75 19.6 4.39 21.25 9 21.25L15 21.25C19.61 21.25 21.25 19.6 21.25 15L21.25 9C21.25 4.39 19.61 2.75 15 2.75L9 2.75Z"
                      fill="#30333D"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M9 10.75C7.47 10.75 6.25 9.52 6.25 8C6.25 6.47 7.47 5.25 9 5.25C10.52 5.25 11.75 6.47 11.75 8C11.75 9.52 10.52 10.75 9 10.75ZM9 6.75C8.31 6.75 7.75 7.31 7.75 8C7.75 8.68 8.31 9.25 9 9.25C9.68 9.25 10.25 8.68 10.25 8C10.25 7.31 9.68 6.75 9 6.75Z"
                      fill="#30333D"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M2.67 19.7C2.42 19.7 2.19 19.58 2.04 19.37C1.82 19.03 1.91 18.56 2.26 18.33L7.19 15.02C8.27 14.29 9.76 14.37 10.74 15.21L11.07 15.5C11.57 15.93 12.42 15.93 12.91 15.5L17.07 11.93C18.12 11.02 19.79 11.02 20.87 11.93L22.5 13.33C22.81 13.6 22.85 14.06 22.58 14.39C22.31 14.7 21.84 14.74 21.52 14.47L19.89 13.06C19.39 12.64 18.54 12.64 18.04 13.06L13.88 16.64C12.82 17.55 11.15 17.55 10.08 16.64L9.75 16.35C9.29 15.96 8.53 15.91 8.02 16.27L3.09 19.58C2.96 19.66 2.81 19.7 2.67 19.7Z"
                      fill="#30333D"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                    <g opacity="0.000000" />
                  </svg>
                </button>
                <button
                  className="hover:bg-gray-100 p-1 rounded-full"
                  onClick={() => removeOption(option.id, qIndex)}
                >
                  <svg
                    width="40.000000"
                    height="40.000000"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Vector"
                      d="M15.28 25.96C14.96 25.96 14.65 25.85 14.4 25.6C13.91 25.11 13.91 24.31 14.4 23.83L23.83 14.39C24.31 13.91 25.11 13.91 25.6 14.39C26.08 14.88 26.08 15.68 25.6 16.16L16.16 25.6C15.93 25.85 15.6 25.96 15.28 25.96Z"
                      fill="#292D32"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M24.71 25.96C24.4 25.96 24.08 25.85 23.83 25.6L14.4 16.16C13.91 15.68 13.91 14.88 14.4 14.39C14.88 13.91 15.68 13.91 16.16 14.39L25.6 23.83C26.08 24.31 26.08 25.11 25.6 25.6C25.35 25.85 25.03 25.96 24.71 25.96Z"
                      fill="#292D32"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                    <g opacity="0.000000" />
                  </svg>
                </button>
              </div>
            ))}
            <div className="flex gap-3 items-center mb-[10px] border-b-2 pb-3 border-[#E2E2E2]">
              <input
                type={question.questionType}
                name="field1"
                className="cursor-pointer"
              />
              <p>
                <span className="text-[#8A7E7E] font-medium">Add option </span>
                <span className="text-[#30333D] font-medium">or </span>
                <span
                  className="text-[#675AF0] font-bold cursor-pointer"
                  onClick={() => addOption(question.id)}
                >
                  add Other
                </span>
              </p>
            </div>
          </div>
          {/* footer content */}
          <div className="flex justify-between">
            <Dropdown label="Bal seçin" size="xs" outline color="light">
              {points.map((point) => (
                <Dropdown.Item
                  key={point}
                  onClick={() => handlePoints(point, qIndex)}
                >
                  {point}
                </Dropdown.Item>
              ))}
            </Dropdown>
            <div className="flex gap-2 items-center">
              <button
                className="hover:bg-gray-300 p-1 rounded-md"
                onClick={() => copyQuestion(qIndex)}
              >
                <svg
                  width="24.000000"
                  height="24.000000"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M11.1 22.75L6.9 22.75C2.98 22.75 1.25 21 1.25 17.1L1.25 12.89C1.25 8.99 2.98 7.25 6.9 7.25L11.1 7.25C15.01 7.25 16.75 8.99 16.75 12.89L16.75 17.1C16.75 21 15.01 22.75 11.1 22.75ZM6.9 8.75C3.8 8.75 2.75 9.79 2.75 12.89L2.75 17.1C2.75 20.2 3.8 21.25 6.9 21.25L11.1 21.25C14.2 21.25 15.25 20.2 15.25 17.1L15.25 12.89C15.25 9.79 14.2 8.75 11.1 8.75L6.9 8.75Z"
                    fill="#30333D"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M17.1 16.75L16 16.75C15.59 16.75 15.25 16.41 15.25 16L15.25 12.89C15.25 9.79 14.2 8.75 11.1 8.75L8 8.75C7.58 8.75 7.25 8.41 7.25 8L7.25 6.89C7.25 2.99 8.98 1.25 12.9 1.25L17.1 1.25C21.01 1.25 22.75 2.99 22.75 6.89L22.75 11.1C22.75 15 21.01 16.75 17.1 16.75ZM16.75 15.25L17.1 15.25C20.2 15.25 21.25 14.2 21.25 11.1L21.25 6.89C21.25 3.79 20.2 2.75 17.1 2.75L12.9 2.75C9.8 2.75 8.75 3.79 8.75 6.89L8.75 7.25L11.1 7.25C15.01 7.25 16.75 8.99 16.75 12.89L16.75 15.25Z"
                    fill="#30333D"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                  <g opacity="0.000000" />
                </svg>
              </button>
              <button
                className="hover:bg-gray-300 p-1 rounded-md"
                onClick={() => deleteQuestion(qIndex)}
              >
                <svg
                  width="24.000000"
                  height="24.000000"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M20.99 6.72C20.97 6.72 20.94 6.72 20.91 6.72C15.62 6.2 10.34 6 5.11 6.52L3.07 6.72C2.65 6.77 2.28 6.47 2.24 6.04C2.2 5.62 2.5 5.27 2.91 5.22L4.95 5.02C10.27 4.48 15.66 4.7 21.06 5.22C21.47 5.27 21.77 5.64 21.73 6.04C21.7 6.43 21.37 6.72 20.99 6.72Z"
                    fill="#30333D"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M8.5 5.72C8.46 5.72 8.41 5.72 8.37 5.7C7.96 5.64 7.69 5.25 7.76 4.85L7.97 3.54C8.14 2.58 8.35 1.25 10.69 1.25L13.31 1.25C15.65 1.25 15.87 2.62 16.02 3.54L16.24 4.85C16.31 5.25 16.03 5.64 15.63 5.7C15.22 5.77 14.83 5.5 14.77 5.1L14.55 3.79C14.41 2.93 14.38 2.75 13.32 2.75L10.7 2.75C9.64 2.75 9.62 2.89 9.47 3.79L9.23 5.08C9.17 5.45 8.85 5.72 8.5 5.72Z"
                    fill="#30333D"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M15.21 22.75L8.79 22.75C5.3 22.75 5.16 20.82 5.05 19.26L4.4 9.18C4.37 8.78 4.69 8.41 5.09 8.39C5.52 8.37 5.87 8.68 5.9 9.08L6.55 19.16C6.66 20.68 6.7 21.25 8.79 21.25L15.21 21.25C17.31 21.25 17.35 20.68 17.45 19.16L18.1 9.08C18.12 8.68 18.49 8.37 18.9 8.39C19.31 8.41 19.62 8.77 19.6 9.18L18.95 19.26C18.84 20.82 18.7 22.75 15.21 22.75Z"
                    fill="#30333D"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M13.66 17.25L10.33 17.25C9.92 17.25 9.58 16.91 9.58 16.5C9.58 16.08 9.92 15.75 10.33 15.75L13.66 15.75C14.07 15.75 14.41 16.08 14.41 16.5C14.41 16.91 14.07 17.25 13.66 17.25Z"
                    fill="#30333D"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M14.5 13.25L9.5 13.25C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.08 9.09 11.75 9.5 11.75L14.5 11.75C14.91 11.75 15.25 12.08 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z"
                    fill="#30333D"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                  <g opacity="0.000000" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {question.open && (
          <div className="max-h-[170px] max-w-[50px] bg-white rounded-xl flex flex-col justify-between">
            <button
              className="hover:bg-gray-300 p-2 hover:rounded-tl-xl hover:rounded-tr-xl"
              onClick={() => addMoreQuestionField()}
            >
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.06 6.07 1.25 12 1.25C17.93 1.25 22.75 6.06 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.89 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.89 17.1 2.75 12 2.75Z"
                  fill="#30333D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M15.75 12.5L7.75 12.5C7.34 12.5 7 12.16 7 11.75C7 11.33 7.34 11 7.75 11L15.75 11C16.16 11 16.5 11.33 16.5 11.75C16.5 12.16 16.16 12.5 15.75 12.5Z"
                  fill="#30333D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16L11.25 8C11.25 7.58 11.59 7.25 12 7.25C12.41 7.25 12.75 7.58 12.75 8L12.75 16C12.75 16.41 12.41 16.75 12 16.75Z"
                  fill="#30333D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <g opacity="0.000000" />
              </svg>
            </button>
            <button className="hover:bg-gray-300 p-2">
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M15 22.75L9 22.75C3.57 22.75 1.25 20.43 1.25 15L1.25 9C1.25 3.56 3.57 1.25 9 1.25L15 1.25C20.43 1.25 22.75 3.56 22.75 9L22.75 15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9L2.75 15C2.75 19.6 4.39 21.25 9 21.25L15 21.25C19.61 21.25 21.25 19.6 21.25 15L21.25 9C21.25 4.39 19.61 2.75 15 2.75L9 2.75Z"
                  fill="#30333D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M9 10.75C7.47 10.75 6.25 9.52 6.25 8C6.25 6.47 7.47 5.25 9 5.25C10.52 5.25 11.75 6.47 11.75 8C11.75 9.52 10.52 10.75 9 10.75ZM9 6.75C8.31 6.75 7.75 7.31 7.75 8C7.75 8.68 8.31 9.25 9 9.25C9.68 9.25 10.25 8.68 10.25 8C10.25 7.31 9.68 6.75 9 6.75Z"
                  fill="#30333D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M2.67 19.7C2.42 19.7 2.19 19.58 2.04 19.37C1.82 19.03 1.91 18.56 2.26 18.33L7.19 15.02C8.27 14.29 9.76 14.37 10.74 15.21L11.07 15.5C11.57 15.93 12.42 15.93 12.91 15.5L17.07 11.93C18.12 11.02 19.79 11.02 20.87 11.93L22.5 13.33C22.81 13.6 22.85 14.06 22.58 14.39C22.31 14.7 21.84 14.74 21.52 14.47L19.89 13.06C19.39 12.64 18.54 12.64 18.04 13.06L13.88 16.64C12.82 17.55 11.15 17.55 10.08 16.64L9.75 16.35C9.29 15.96 8.53 15.91 8.02 16.27L3.09 19.58C2.96 19.66 2.81 19.7 2.67 19.7Z"
                  fill="#30333D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <g opacity="0.000000" />
              </svg>
            </button>
            <button className="hover:bg-gray-300 p-2">
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M15 22.75L9 22.75C3.57 22.75 1.25 20.43 1.25 15L1.25 9C1.25 3.56 3.57 1.25 9 1.25L15 1.25C20.43 1.25 22.75 3.56 22.75 9L22.75 15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9L2.75 15C2.75 19.6 4.39 21.25 9 21.25L15 21.25C19.61 21.25 21.25 19.6 21.25 15L21.25 9C21.25 4.39 19.61 2.75 15 2.75L9 2.75Z"
                  fill="#30333D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M10.75 16.36C10.34 16.36 9.94 16.27 9.59 16.06C8.79 15.6 8.33 14.66 8.33 13.48L8.33 10.52C8.33 9.33 8.79 8.38 9.59 7.92C10.4 7.46 11.43 7.54 12.47 8.13L15.04 9.61C16.05 10.21 16.65 11.07 16.65 12C16.65 12.91 16.05 13.79 15.04 14.37L12.47 15.85C11.89 16.19 11.3 16.36 10.75 16.36ZM10.77 9.12C10.61 9.12 10.47 9.15 10.36 9.22C10.04 9.41 9.84 9.88 9.84 10.52L9.84 13.48C9.84 14.1 10.03 14.57 10.36 14.77C10.68 14.96 11.18 14.87 11.73 14.55L14.3 13.07C14.85 12.75 15.16 12.36 15.16 12C15.16 11.62 14.85 11.23 14.3 10.91L11.73 9.43C11.37 9.22 11.04 9.12 10.77 9.12Z"
                  fill="#30333D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <g opacity="0.000000" />
              </svg>
            </button>
            <button className="hover:bg-gray-300 p-2 hover:rounded-bl-xl hover:rounded-br-xl">
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M18.61 6.67C18.2 6.67 17.86 6.33 17.86 5.92L17.86 4.41C17.86 3.81 17.37 3.31 16.76 3.31L3.83 3.31C3.22 3.31 2.72 3.81 2.72 4.41L2.72 5.92C2.72 6.33 2.39 6.67 1.97 6.67C1.57 6.67 1.23 6.33 1.23 5.92L1.23 4.41C1.23 2.98 2.4 1.81 3.83 1.81L16.76 1.81C18.19 1.81 19.36 2.97 19.36 4.41L19.36 5.92C19.36 6.33 19.02 6.67 18.61 6.67Z"
                  fill="#30333D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M10.3 18.84C9.89 18.84 9.55 18.5 9.55 18.09L9.55 3.31C9.55 2.9 9.89 2.56 10.3 2.56C10.71 2.56 11.05 2.9 11.05 3.31L11.05 18.09C11.05 18.52 10.71 18.84 10.3 18.84Z"
                  fill="#30333D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M12.48 18.85L6.9 18.85C6.49 18.85 6.15 18.51 6.15 18.1C6.15 17.68 6.49 17.35 6.9 17.35L12.48 17.35C12.89 17.35 13.23 17.68 13.23 18.1C13.23 18.51 12.89 18.85 12.48 18.85Z"
                  fill="#30333D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M22.01 13.2C21.6 13.2 21.26 12.85 21.26 12.45L21.26 11.64C21.26 11.33 21 11.08 20.69 11.08L13.68 11.08C13.27 11.08 12.93 10.74 12.93 10.33C12.93 9.91 13.27 9.58 13.68 9.58L20.69 9.58C21.83 9.58 22.76 10.51 22.76 11.64L22.76 12.45C22.76 12.87 22.43 13.2 22.01 13.2Z"
                  fill="#30333D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M16.08 22.18C15.67 22.18 15.33 21.84 15.33 21.43L15.33 10.87C15.33 10.46 15.67 10.12 16.08 10.12C16.48 10.12 16.83 10.46 16.83 10.87L16.83 21.43C16.83 21.84 16.48 22.18 16.08 22.18Z"
                  fill="#30333D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Vector"
                  d="M18.21 22.18L13.93 22.18C13.53 22.18 13.18 21.84 13.18 21.43C13.18 21.02 13.53 20.68 13.93 20.68L18.21 20.68C18.62 20.68 18.96 21.02 18.96 21.43C18.96 21.84 18.62 22.18 18.21 22.18Z"
                  fill="#30333D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <g opacity="0.000000" />
              </svg>
            </button>
          </div>
        )}
      </div>
    );
  });

  return (
    <div>
      <div className="flex items-end gap-[30px] mb-8">
        <div>
          <p className="text-[#30333D] font-bold mb-2 ms-2">İmtahan adı</p>
          <input
            type="text"
            placeholder="İmtahan adı"
            defaultValue={examData.title}
            onChange={(e) => {
              setExamData({ ...examData, title: e.target.value });
            }}
            className="w-full text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 shadow-lg"
          />
        </div>
        <div>
          <p className="text-[#30333D] font-bold mb-2 ms-2">Tarix</p>
          <input
            type="date"
            defaultValue={examData.date}
            onChange={(e) => {
              setExamData({ ...examData, date: e.target.value });
            }}
            className="w-full text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 cursor-pointer shadow-lg"
          />
        </div>
        <div>
          <p className="text-[#30333D] font-bold mb-2 ms-2">Qiymət</p>
          <input
            type="number"
            placeholder="0 AZN"
            defaultValue={examData.price}
            min={1}
            onChange={(e) => {
              setExamData({ ...examData, price: Number(e.target.value) });
            }}
            className="w-full text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 shadow-lg"
          />
        </div>
        <div>
          <p className="text-[#30333D] font-bold mb-2 ms-2">İmtahan vaxtı</p>
          <label htmlFor="" className="relative">
            <input
              type="number"
              placeholder="120"
              defaultValue={examData.time}
              onChange={(e) => {
                setExamData({ ...examData, time: e.target.value });
              }}
              className="w-full text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 shadow-lg"
            />
            <svg
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 z-100 bg-white"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M12 22.75C6.76 22.75 2.5 18.49 2.5 13.25C2.5 8 6.76 3.75 12 3.75C17.24 3.75 21.5 8 21.5 13.25C21.5 18.49 17.24 22.75 12 22.75ZM12 5.25C7.59 5.25 4 8.83 4 13.25C4 17.66 7.59 21.25 12 21.25C16.41 21.25 20 17.66 20 13.25C20 8.83 16.41 5.25 12 5.25Z"
                fill="#30333D"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13L11.25 8C11.25 7.58 11.59 7.25 12 7.25C12.41 7.25 12.75 7.58 12.75 8L12.75 13C12.75 13.41 12.41 13.75 12 13.75Z"
                fill="#30333D"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M15 2.75L9 2.75C8.59 2.75 8.25 2.41 8.25 2C8.25 1.58 8.59 1.25 9 1.25L15 1.25C15.41 1.25 15.75 1.58 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z"
                fill="#30333D"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <g opacity="0.000000" />
            </svg>
          </label>
        </div>
        <div className="ml-auto">
          <button
            className="bg-[#675AF0] text-white px-5 py-2 rounded-md whitespace-nowrap hover:bg-[#7E6CFA] transition-all duration-300 ease-in-out"
            onClick={() => {
              saveExam();
            }}
          >
            Yadda saxla
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5">{questionsUI}</div>
    </div>
  );
};
