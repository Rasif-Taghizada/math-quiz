import { CountDown, QuestionCard } from "../../components";

import { Progress } from "flowbite-react";
import { auth } from "../../config/firebase";
import { useLocation } from "react-router-dom";

export const ExamQuestions = () => {
  const { examData } = useLocation().state;
  const userData = auth.currentUser;

  const finished = (isFinished) => {
    if (isFinished) {
      window.location.href = "/";
    }
  };

  return (
    <div>
      <header className="text-center mb-5">
        <h1 className="text-black font-bold text-[20px]">
          İmtahan /{" "}
          <span className="text-[#8A7E7E] font-medium text-[20px]">
            {examData.title}
          </span>
        </h1>
      </header>
      <div className="flex justify-between items-center">
        <div className="w-[50%] relative bg-white flex justify-between items-center p-3 rounded-xl">
          <p className="text-[#2B2A2A] font-medium">
            Tələbənin adı:{" "}
            <span className="text-[#8A7E7E] font-bold ml-2 border-b-2 border-[#8A7E7E] pb-1 px-1 transition-all duration-300 ease-in-out">
              {userData?.displayName}
            </span>
          </p>
          <svg
            width="30.000000"
            height="30.000000"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Vector"
              d="M15 15.93C11.03 15.93 7.81 12.71 7.81 8.75C7.81 4.78 11.03 1.56 15 1.56C18.96 1.56 22.18 4.78 22.18 8.75C22.18 12.71 18.96 15.93 15 15.93ZM15 3.43C12.07 3.43 9.68 5.82 9.68 8.75C9.68 11.67 12.07 14.06 15 14.06C17.92 14.06 20.31 11.67 20.31 8.75C20.31 5.82 17.92 3.43 15 3.43Z"
              fill="#2B2A2A"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
            <path
              id="Vector"
              d="M25.73 28.43C25.22 28.43 24.8 28.01 24.8 27.5C24.8 23.18 20.4 19.68 15 19.68C9.6 19.68 5.2 23.18 5.2 27.5C5.2 28.01 4.77 28.43 4.26 28.43C3.75 28.43 3.32 28.01 3.32 27.5C3.32 22.16 8.56 17.81 15 17.81C21.43 17.81 26.67 22.16 26.67 27.5C26.67 28.01 26.25 28.43 25.73 28.43Z"
              fill="#2B2A2A"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
            <g opacity="0.000000" />
          </svg>
        </div>
        <div className="min-w-[300px] flex justify-between items-center bg-white p-3 rounded-xl">
          <CountDown time={examData.time} finished={finished} />
          <p className="font-bold text-[20px]"></p>
          <svg
            width="30.000000"
            height="30.000000"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Vector"
              d="M15 28.43C8.44 28.43 3.12 23.11 3.12 16.56C3.12 10.01 8.44 4.68 15 4.68C21.55 4.68 26.87 10.01 26.87 16.56C26.87 23.11 21.55 28.43 15 28.43ZM15 6.56C9.48 6.56 5 11.04 5 16.56C5 22.07 9.48 26.56 15 26.56C20.51 26.56 25 22.07 25 16.56C25 11.04 20.51 6.56 15 6.56Z"
              fill="#34A853"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
            <path
              id="Vector"
              d="M15 17.18C14.48 17.18 14.06 16.76 14.06 16.25L14.06 10C14.06 9.48 14.48 9.06 15 9.06C15.51 9.06 15.93 9.48 15.93 10L15.93 16.25C15.93 16.76 15.51 17.18 15 17.18Z"
              fill="#34A853"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
            <path
              id="Vector"
              d="M18.75 3.43L11.25 3.43C10.73 3.43 10.31 3.01 10.31 2.5C10.31 1.98 10.73 1.56 11.25 1.56L18.75 1.56C19.26 1.56 19.68 1.98 19.68 2.5C19.68 3.01 19.26 3.43 18.75 3.43Z"
              fill="#34A853"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
            <g opacity="0.000000" />
          </svg>
        </div>
      </div>
      <p className="text-center mt-[20px] mb-[20px] font-bold">Səhifə 1 / 5</p>
      <Progress progress={45} className="bg-white w-[60%] m-auto" />
      {/* questions */}

      <div className="mt-6 flex flex-col gap-8">
        <QuestionCard questions={examData.questions} examID={examData.id} />
      </div>
    </div>
  );
};
