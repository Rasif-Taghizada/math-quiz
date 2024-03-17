import { Dropdown } from "flowbite-react";
import { ExamCard } from "../../components";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Exams = () => {
  const exams = useSelector((state) => state.exams.examsArray);

  const [selectedType, setSelectedType] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const types = ["Blok", "Buraxılış", "Məntiq"];
  const prices = [5, 10, 20];

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  return (
    <div className="">
      <h1>Exams</h1>
      <div className="flex items-center justify-center">
        <form className="mr-auto w-1/4">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative w-[300px]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-[220px] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Exams..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-0 bottom-0 bg-[#0e7490] hover:bg-[#155e75] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex items-center gap-x-4">
          <Dropdown
            label={selectedType !== "" ? selectedType : "Növ seçin"}
            value={selectedType}
          >
            {types.map((type, index) => (
              <Dropdown.Item
                onClick={() => handleTypeChange(type)}
                key={index}
                value={type}
              >
                {type}
              </Dropdown.Item>
            ))}
          </Dropdown>
          <Dropdown
            label={
              selectedPrice !== "" ? selectedPrice.toString() : "Qiymət seçin"
            }
            value={selectedPrice}
          >
            {prices.map((price, index) => (
              <Dropdown.Item
                onClick={() => handlePriceChange(price)}
                key={index}
                value={price}
              >
                {price}
              </Dropdown.Item>
            ))}
          </Dropdown>
        </div>
      </div>
      {/*! Active Exams */}
      <div className="flex flex-wrap gap-4 mt-8 p-4 bg-white dark:bg-gray-800">
        {exams.map((exam) => (
          <ExamCard
            key={exam.id}
            questionsCount={exam?.questionsCount}
            time={exam?.time}
            author={exam?.author}
            price={exam?.price}
            title={exam?.title}
            data={exam}
          />
        ))}
      </div>
    </div>
  );
};
