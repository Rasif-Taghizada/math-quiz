import { Link, useLocation } from "react-router-dom";

import { auth } from "../../config/firebase";

export const ExamStart = () => {
  const userData = auth.currentUser;
  const location = useLocation();
  const { examData } = location.state;
  return (
    <div className="w-full h-full bg-white rounded-md p-5 flex flex-col items-center">
      <h1>
        <span className="font-bold text-xl">İmtahan / </span>
        <span className="text-[#8A7E7E] font-bold">{examData.title}</span>
      </h1>
      <div className="mt-8 flex gap-10">
        <div>
          <p>Tələbə adı</p>
          <input
            type="text"
            readOnly
            value={userData.displayName}
            className="max-w-[320px] rounded-md border-1 border-gray-300 p-2 mt-2 font-bold"
          />
        </div>
        <div>
          <p>İmtahan vaxtı</p>
          <input
            type="text"
            readOnly
            value={examData.time}
            className="max-w-[150px] rounded-md border-1 border-gray-300 p-2 mt-2 font-bold"
          />
        </div>
        <div>
          <p>Sualların sayı</p>
          <input
            type="number"
            readOnly
            value={examData.questionsCount}
            className="max-w-[80px] rounded-md border-1 border-gray-300 p-2 mt-2 text-center font-bold"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-[220px] h-[220px] border-[#675AF0] border-4 rounded-full mt-[20px]">
        <img
          src="/exam-preview.svg"
          alt="exam preview image"
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="flex flex-col items-center mt-[30px]">
        <p className="font-medium text-center max-w-[400px]">
          Məlumatlar doğrudursa imtahana başlaya bilərsiniz, başladıqdan sonra
          əvvəlki səhifəyə qayıda bilməyəcəksiniz.
        </p>
        <Link
          to={`/preview/${examData.id}/start`}
          state={{ examData }}
          className="bg-[#675AF0] text-white rounded-md p-2 mt-5 hover:bg-[#4C3D9B] transition-all duration-300 ease-in-out w-[220px] text-center cursor-pointer"
        >
          İmtahana başla
        </Link>
      </div>
    </div>
  );
};
