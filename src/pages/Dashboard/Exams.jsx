import { Dropdown } from "flowbite-react";
import { ExamCard } from "../../components/ExamCard";

export const Exams = () => {
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
          <div className="relative">
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
              className="block w-100 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Exams..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex items-center gap-x-4">
          <Dropdown label="Növ seçin">
            <Dropdown.Item>Blok</Dropdown.Item>
            <Dropdown.Item>Buraxılış</Dropdown.Item>
            <Dropdown.Item>Məntiq</Dropdown.Item>
          </Dropdown>
          <Dropdown label="Qiymət seçin">
            <Dropdown.Item>5</Dropdown.Item>
            <Dropdown.Item>10</Dropdown.Item>
            <Dropdown.Item>20</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      {/*! Active Exams */}
      <div className="flex flex-col gap-y-4 mt-8 p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 min-h-[300px] max-h-[500px]">
        <ExamCard
          questionsCount={25}
          time={"60 dəqiqə"}
          author={"Filankəs Filankəsov"}
          price={"Pulsuz"}
          title={"9-cu sinif buraxılış"}
        />
      </div>
    </div>
  );
};