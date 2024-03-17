import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Modal } from "flowbite-react/lib/esm";
import propTypes from "prop-types";
import { store } from "../../redux/store";
import { updateStudentInFirestore } from "../../redux/students/studentSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

let point = 0;
let userAnswers = [];
export const QuestionCard = ({ questions, examID }) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  let givenExamsFromDB =
    store
      .getState()
      .students.studentsArray.find(
        (student) => student.id === store.getState().user.id
      ).givenExams || [];
  //* check users answer
  const checkAnswer = (questionId, selectedOptionId) => {
    let isCorrect = false;
    const question = questions.find((question) => question.id === questionId);
    if (question.correctID === selectedOptionId) {
      console.log("Doğru cavab");
      point += question.point;
      isCorrect = true;
    } else {
      console.log("Səhv cavab");
      isCorrect = false;
    }
    userAnswers.push({ questionId, selectedOptionId, isCorrect: isCorrect });
  };
  //* show result
  const showResult = () => {
    store.dispatch(
      updateStudentInFirestore({
        id: store.getState().user.id,
        givenExams: [
          ...givenExamsFromDB,
          {
            examID,
            point,
            userAnswers,
          },
        ],
      })
    );
    point = 0;
    userAnswers = [];
    setTimeout(() => {
      navigate("/exams", { state: { point, userAnswers } });
    }, 1000);
  };

  return (
    <>
      {questions.map((question, questIndex) => (
        <div key={question.id}>
          <div className="flex justify-between w-full">
            <p className="text-[#2B2A2A] font-bold max-w-[80%]">
              {++questIndex}. {question.questionTitle}
            </p>
            <p className="text-[#2B2A2A] font-bold">
              ( {question.point} point )
            </p>
          </div>
          <p className="text-[#8A7E7E] mt-3 mb-3">Düzgün variantı seçin</p>
          <div className="flex flex-col gap-5">
            {question.options.map((option, optIndex) => (
              <div
                className="flex items-center gap-3 bg-white w-[50%] p-3 rounded-lg"
                key={option.id}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  id={`question${questIndex}-${optIndex}`}
                  className="cursor-pointer"
                  onChange={() => checkAnswer(question.id, option.id, optIndex)}
                />
                <label
                  htmlFor={`question${questIndex}-${optIndex}`}
                  className="cursor-pointer"
                >
                  {option.title}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        className="bg-[#675AF0] text-white rounded-md p-2 hover:bg-[#4C3D9B] transition-all duration-300 ease-in-out"
        onClick={() => setOpenModal(true)}
      >
        Cavabla
      </button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-red-400 dark:text-red-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              İmtahanı bitirdikdən sonra geri dönə bilməyəcəksiniz
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="bg-white text-[#4C3D9B] rounded-md p-2 transition-all duration-300 ease-in-out hover:bg-[#EDE9FE] hover:text-[#675AF0] border border-[#675AF0]"
                onClick={() => setOpenModal(false)}
              >
                Geri dön
              </button>
              <button
                className="bg-[#675AF0] text-white rounded-md p-2 hover:bg-[#4C3D9B] transition-all duration-300 ease-in-out"
                onClick={() => {
                  showResult();
                  setOpenModal(false);
                }}
              >
                İmtahanı bitir
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

QuestionCard.propTypes = {
  questions: propTypes.array.isRequired,
  examID: propTypes.string.isRequired,
};
