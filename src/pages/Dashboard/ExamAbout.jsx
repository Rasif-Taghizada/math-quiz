import { Link, useLocation } from "react-router-dom";

import { BsFillPersonFill } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";

export const ExamAbout = () => {
  const location = useLocation();
  const { data } = location.state;
  console.log(data);
  return (
    <div>
      <div className="flex items-start justify-between">
        <div className="w-1/2 flex flex-col justify-center items-start p-8">
          <h1 className="text-3xl font-semibold text-[#2B2A2A] mb-4">
            {data?.title}
          </h1>
          <p className="text-[#8A7E7E] mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nulla
            quisquam, consequatur iure dolore ratione. Sequi dolore aspernatur
            deserunt repellat commodi eum fugit, aliquid optio fuga rem aut
            saepe aliquam.
          </p>
          <p className="text-[#D54949] font-bold mb-4">{data.price} AZN</p>
          <button className="bg-[#675AF0] hover:bg-[#4137ae] text-white py-2 px-4 rounded">
            <Link to="/exams/:id/start">Testə başla</Link>
          </button>
        </div>
        <div>
          <img
            src="/exam-about-cover.jpeg"
            alt="Meaningful alt text for an image that is not purely decorative"
          />
        </div>
      </div>
      <div className="mt-[40px] mb-[40px]">
        <h2 className="text-2xl font-semibold text-[#2B2A2A] mb-6 text-center">
          Testin məlumatları
        </h2>
        <div className="flex items-center gap-x-4 justify-center">
          <div className="flex flex-col items-center">
            <p className="text-[#2B2A2A] mb-4 font-bold">Müəllif</p>
            <p className="w-24 h-24 rounded-full bg-[#675AF0] flex justify-center items-center">
              <BsFillPersonFill size={50} color="white" />
            </p>
            <p className="text-[#8A7E7E] font-semibold mt-3">{data.author}</p>
          </div>
          <div className="w-[150px] h-[0px] mx-4 border-dashed border-t-2 border-[#8A7E7E]"></div>
          <div className="flex flex-col items-center">
            <p className="text-[#2B2A2A] mb-4 font-bold">Müddət</p>
            <p className="w-24 h-24 rounded-full bg-[#675AF0] flex justify-center items-center">
              <GiSandsOfTime size={50} color="white" />
            </p>
            <p className="text-[#8A7E7E] font-semibold mt-3">{data.time}</p>
          </div>
          <div className="w-[150px] h-[0px] mx-4 border-dashed border-t-2 border-[#8A7E7E]"></div>
          <div className="flex flex-col items-center">
            <p className="text-[#2B2A2A] mb-4 font-bold">Tərkib</p>
            <p className="w-24 h-24 rounded-full bg-[#675AF0] flex justify-center items-center">
              <span className="text-white">{data.questionsCount} sual</span>
            </p>
            <p className="text-[#8A7E7E] font-semibold mt-3">Riyaziyyat</p>
          </div>
        </div>
      </div>
    </div>
  );
};
