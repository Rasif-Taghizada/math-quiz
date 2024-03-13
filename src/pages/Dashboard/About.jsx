export const About = () => {
  return (
    <div className="p-[30px] bg-white rounded-xl">
      <div className="flex gap-[30px]">
        <div>
          <div className="w-[212px] h-[252px]">
            <img src="/about-profile.svg" alt="teacher profile" />
          </div>
          <p className="font-bold mt-3 font-bold">Əliyar Nuriyev</p>
          <p className=" mt-3 font-bold text-[#8A7E7E]">
            <span className="text-black">İş:</span> Riyaziyyat Müəllimi
          </p>
          <p className=" mt-3 font-bold text-[#8A7E7E]">
            <span className="text-black">Yaş:</span> 35
          </p>
          <p className=" mt-3 font-bold text-[#8A7E7E]">
            <span className="text-black">İş Təcrübəsi:</span> 5il
          </p>
        </div>
        <div>
          <p className="text-[#2B2A2A] font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-center mb-10 text-[#2B2A2A] font-bold text-xl">
          Sertifikatlar
        </h2>
        <div className="flex justify-between">
          <div className="h-[350px] flex flex-col justify-center">
            <img
              src="/certificate.svg"
              alt="certificate template"
              className="border-2 border-[#8A7E7E] rounded-tl-2xl rounded-br-2xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            />
            <p className="text-[#8A7E7E]">info</p>
          </div>
          <div className="h-[350px] flex flex-col justify-start">
            <img
              src="/certificate.svg"
              alt="certificate template"
              className="border-2 border-[#8A7E7E] rounded-tl-2xl rounded-br-2xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            />
            <p className="text-[#8A7E7E]">info</p>
          </div>
          <div className="h-[350px] flex flex-col justify-center">
            <img
              src="/certificate.svg"
              alt="certificate template"
              className="border-2 border-[#8A7E7E] rounded-tl-2xl rounded-br-2xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            />
            <p className="text-[#8A7E7E]">info</p>
          </div>
        </div>
      </div>
    </div>
  );
};
