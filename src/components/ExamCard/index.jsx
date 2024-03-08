import { Button, Card } from "flowbite-react";

import { FaCircleUser } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import PropTypes from "prop-types";

export const ExamCard = (props) => {
  return (
    <Card
      className="max-w-[300px]"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/exam-card-image.svg"
    >
      <h2 className="text-lg font-semibold">{props.title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
        <FaCircleUser className="text-gray-500 dark:text-gray-400" />
        {props.author}
      </p>
      <div className="flex items-center gap-x-2">
        <IoMdTime className="text-gray-500 dark:text-gray-400" />
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {props.time}
        </span>
      </div>
      <div className="flex items-center gap-x-2 justify-between">
        <span className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
          {props.questionsCount} sual
        </span>
        <span className="text-sm text-gray-600 text-red-500 dark:text-gray-400 dark:text-red-400 font-bold	">
          {props.price}
        </span>
      </div>
      <div className="flex items-center justify-between gap-x-4">
        <Button size={"sm"}>Testə başla</Button>
        <Button outline size={"sm"}>
          Read more
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </Card>
  );
};

ExamCard.propTypes = {
  questionsCount: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};