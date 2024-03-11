import { Link, useLocation } from "react-router-dom";

import { BsFillPersonFill } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import { Table } from "flowbite-react";

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
            <Link to={`/preview/${data.id}`} state={{ examData: data }}>
              Testə başla
            </Link>
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
          İmtahanın məlumatları
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
      <div>
        <h2 className="text-2xl	ml-3 mb-3 font-bold text-[#2B2A2A]">Reytinq</h2>
        <div className="overflow-x-auto">
          <Table hoverable className="cursor-pointer">
            <Table.Head>
              <Table.HeadCell colSpan={6}>Tələbənin adı</Table.HeadCell>
              <Table.HeadCell>Topladığı bal</Table.HeadCell>
              <Table.HeadCell>Tarix</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-2">
                  <span>
                    <svg
                      width="21.579590"
                      height="18.500000"
                      viewBox="0 0 21.5796 18.5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <desc>Created with Pixso.</desc>
                      <defs />
                      <path
                        id="Vector"
                        d="M15.5283 18.5L6.12842 18.5C5.38867 18.5 4.63867 17.9702 4.38867 17.2798L0.248535 5.68994C-0.26123 4.22998 0.108398 3.56006 0.508789 3.25977C0.908691 2.95996 1.65869 2.77979 2.91846 3.68018L6.81836 6.47021C6.93848 6.54004 7.04834 6.56982 7.12842 6.5498C7.21875 6.52002 7.28857 6.43994 7.33838 6.2998L9.09863 1.60986C9.62842 0.209961 10.4087 0 10.8286 0C11.2485 0 12.0283 0.209961 12.5586 1.60986L14.3184 6.2998C14.3687 6.43018 14.4385 6.52002 14.5283 6.5498C14.6187 6.58008 14.7285 6.5498 14.8384 6.45996L18.4985 3.8501C19.8384 2.89014 20.6187 3.08008 21.0483 3.39014C21.4688 3.70996 21.8584 4.41992 21.3086 5.97021L17.2686 17.2798C17.0186 17.9702 16.2686 18.5 15.5283 18.5ZM1.50879 4.58008C1.52832 4.72021 1.56836 4.91992 1.66846 5.18018L5.80859 16.77C5.84863 16.8701 6.02832 17 6.12842 17L15.5283 17C15.6387 17 15.8184 16.8701 15.8486 16.77L19.8887 5.47021C20.0283 5.08984 20.0684 4.83008 20.0786 4.68018C19.9287 4.72998 19.6987 4.83984 19.3687 5.08008L15.7085 7.68994C15.2085 8.04004 14.6187 8.1499 14.0884 7.99023C13.5586 7.83008 13.1284 7.41016 12.9087 6.83984L11.1484 2.1499C11.0186 1.7998 10.8984 1.62988 10.8286 1.5498C10.7588 1.62988 10.6387 1.7998 10.5088 2.14014L8.74854 6.83008C8.53857 7.3999 8.1084 7.81982 7.56836 7.97998C7.03857 8.14014 6.43848 8.02979 5.94873 7.68018L2.04834 4.89014C1.81836 4.72998 1.63867 4.62988 1.50879 4.58008Z"
                        fill="#EBB44A"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </svg>
                  </span>
                  {"Abdullayev Sənan"}
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>25 bal</Table.Cell>
                <Table.Cell>10/02/2023</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-2">
                  <span>
                    <svg
                      width="21.579590"
                      height="18.500000"
                      viewBox="0 0 21.5796 18.5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <desc>Created with Pixso.</desc>
                      <defs />
                      <path
                        id="Vector"
                        d="M15.5283 18.5L6.12842 18.5C5.38867 18.5 4.63867 17.9702 4.38867 17.2798L0.248535 5.68994C-0.26123 4.22998 0.108398 3.56006 0.508789 3.25977C0.908691 2.95996 1.65869 2.77979 2.91846 3.68018L6.81836 6.47021C6.93848 6.54004 7.04834 6.56982 7.12842 6.5498C7.21875 6.52002 7.28857 6.43994 7.33838 6.2998L9.09863 1.60986C9.62842 0.209961 10.4087 0 10.8286 0C11.2485 0 12.0283 0.209961 12.5586 1.60986L14.3184 6.2998C14.3687 6.43018 14.4385 6.52002 14.5283 6.5498C14.6187 6.58008 14.7285 6.5498 14.8384 6.45996L18.4985 3.8501C19.8384 2.89014 20.6187 3.08008 21.0483 3.39014C21.4688 3.70996 21.8584 4.41992 21.3086 5.97021L17.2686 17.2798C17.0186 17.9702 16.2686 18.5 15.5283 18.5ZM1.50879 4.58008C1.52832 4.72021 1.56836 4.91992 1.66846 5.18018L5.80859 16.77C5.84863 16.8701 6.02832 17 6.12842 17L15.5283 17C15.6387 17 15.8184 16.8701 15.8486 16.77L19.8887 5.47021C20.0283 5.08984 20.0684 4.83008 20.0786 4.68018C19.9287 4.72998 19.6987 4.83984 19.3687 5.08008L15.7085 7.68994C15.2085 8.04004 14.6187 8.1499 14.0884 7.99023C13.5586 7.83008 13.1284 7.41016 12.9087 6.83984L11.1484 2.1499C11.0186 1.7998 10.8984 1.62988 10.8286 1.5498C10.7588 1.62988 10.6387 1.7998 10.5088 2.14014L8.74854 6.83008C8.53857 7.3999 8.1084 7.81982 7.56836 7.97998C7.03857 8.14014 6.43848 8.02979 5.94873 7.68018L2.04834 4.89014C1.81836 4.72998 1.63867 4.62988 1.50879 4.58008Z"
                        fill="#EBB44A"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </svg>
                  </span>
                  {"Abdullayev Sənan"}
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>25 bal</Table.Cell>
                <Table.Cell>10/02/2023</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-2">
                  <span>
                    <svg
                      width="21.579590"
                      height="18.500000"
                      viewBox="0 0 21.5796 18.5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <desc>Created with Pixso.</desc>
                      <defs />
                      <path
                        id="Vector"
                        d="M15.5283 18.5L6.12842 18.5C5.38867 18.5 4.63867 17.9702 4.38867 17.2798L0.248535 5.68994C-0.26123 4.22998 0.108398 3.56006 0.508789 3.25977C0.908691 2.95996 1.65869 2.77979 2.91846 3.68018L6.81836 6.47021C6.93848 6.54004 7.04834 6.56982 7.12842 6.5498C7.21875 6.52002 7.28857 6.43994 7.33838 6.2998L9.09863 1.60986C9.62842 0.209961 10.4087 0 10.8286 0C11.2485 0 12.0283 0.209961 12.5586 1.60986L14.3184 6.2998C14.3687 6.43018 14.4385 6.52002 14.5283 6.5498C14.6187 6.58008 14.7285 6.5498 14.8384 6.45996L18.4985 3.8501C19.8384 2.89014 20.6187 3.08008 21.0483 3.39014C21.4688 3.70996 21.8584 4.41992 21.3086 5.97021L17.2686 17.2798C17.0186 17.9702 16.2686 18.5 15.5283 18.5ZM1.50879 4.58008C1.52832 4.72021 1.56836 4.91992 1.66846 5.18018L5.80859 16.77C5.84863 16.8701 6.02832 17 6.12842 17L15.5283 17C15.6387 17 15.8184 16.8701 15.8486 16.77L19.8887 5.47021C20.0283 5.08984 20.0684 4.83008 20.0786 4.68018C19.9287 4.72998 19.6987 4.83984 19.3687 5.08008L15.7085 7.68994C15.2085 8.04004 14.6187 8.1499 14.0884 7.99023C13.5586 7.83008 13.1284 7.41016 12.9087 6.83984L11.1484 2.1499C11.0186 1.7998 10.8984 1.62988 10.8286 1.5498C10.7588 1.62988 10.6387 1.7998 10.5088 2.14014L8.74854 6.83008C8.53857 7.3999 8.1084 7.81982 7.56836 7.97998C7.03857 8.14014 6.43848 8.02979 5.94873 7.68018L2.04834 4.89014C1.81836 4.72998 1.63867 4.62988 1.50879 4.58008Z"
                        fill="#EBB44A"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </svg>
                  </span>
                  {"Abdullayev Sənan"}
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>25 bal</Table.Cell>
                <Table.Cell>10/02/2023</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-2">
                  <span>
                    <svg
                      width="21.579590"
                      height="18.500000"
                      viewBox="0 0 21.5796 18.5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <desc>Created with Pixso.</desc>
                      <defs />
                      <path
                        id="Vector"
                        d="M15.5283 18.5L6.12842 18.5C5.38867 18.5 4.63867 17.9702 4.38867 17.2798L0.248535 5.68994C-0.26123 4.22998 0.108398 3.56006 0.508789 3.25977C0.908691 2.95996 1.65869 2.77979 2.91846 3.68018L6.81836 6.47021C6.93848 6.54004 7.04834 6.56982 7.12842 6.5498C7.21875 6.52002 7.28857 6.43994 7.33838 6.2998L9.09863 1.60986C9.62842 0.209961 10.4087 0 10.8286 0C11.2485 0 12.0283 0.209961 12.5586 1.60986L14.3184 6.2998C14.3687 6.43018 14.4385 6.52002 14.5283 6.5498C14.6187 6.58008 14.7285 6.5498 14.8384 6.45996L18.4985 3.8501C19.8384 2.89014 20.6187 3.08008 21.0483 3.39014C21.4688 3.70996 21.8584 4.41992 21.3086 5.97021L17.2686 17.2798C17.0186 17.9702 16.2686 18.5 15.5283 18.5ZM1.50879 4.58008C1.52832 4.72021 1.56836 4.91992 1.66846 5.18018L5.80859 16.77C5.84863 16.8701 6.02832 17 6.12842 17L15.5283 17C15.6387 17 15.8184 16.8701 15.8486 16.77L19.8887 5.47021C20.0283 5.08984 20.0684 4.83008 20.0786 4.68018C19.9287 4.72998 19.6987 4.83984 19.3687 5.08008L15.7085 7.68994C15.2085 8.04004 14.6187 8.1499 14.0884 7.99023C13.5586 7.83008 13.1284 7.41016 12.9087 6.83984L11.1484 2.1499C11.0186 1.7998 10.8984 1.62988 10.8286 1.5498C10.7588 1.62988 10.6387 1.7998 10.5088 2.14014L8.74854 6.83008C8.53857 7.3999 8.1084 7.81982 7.56836 7.97998C7.03857 8.14014 6.43848 8.02979 5.94873 7.68018L2.04834 4.89014C1.81836 4.72998 1.63867 4.62988 1.50879 4.58008Z"
                        fill="#EBB44A"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </svg>
                  </span>
                  {"Abdullayev Sənan"}
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>25 bal</Table.Cell>
                <Table.Cell>10/02/2023</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-2">
                  <span>
                    <svg
                      width="21.579590"
                      height="18.500000"
                      viewBox="0 0 21.5796 18.5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <desc>Created with Pixso.</desc>
                      <defs />
                      <path
                        id="Vector"
                        d="M15.5283 18.5L6.12842 18.5C5.38867 18.5 4.63867 17.9702 4.38867 17.2798L0.248535 5.68994C-0.26123 4.22998 0.108398 3.56006 0.508789 3.25977C0.908691 2.95996 1.65869 2.77979 2.91846 3.68018L6.81836 6.47021C6.93848 6.54004 7.04834 6.56982 7.12842 6.5498C7.21875 6.52002 7.28857 6.43994 7.33838 6.2998L9.09863 1.60986C9.62842 0.209961 10.4087 0 10.8286 0C11.2485 0 12.0283 0.209961 12.5586 1.60986L14.3184 6.2998C14.3687 6.43018 14.4385 6.52002 14.5283 6.5498C14.6187 6.58008 14.7285 6.5498 14.8384 6.45996L18.4985 3.8501C19.8384 2.89014 20.6187 3.08008 21.0483 3.39014C21.4688 3.70996 21.8584 4.41992 21.3086 5.97021L17.2686 17.2798C17.0186 17.9702 16.2686 18.5 15.5283 18.5ZM1.50879 4.58008C1.52832 4.72021 1.56836 4.91992 1.66846 5.18018L5.80859 16.77C5.84863 16.8701 6.02832 17 6.12842 17L15.5283 17C15.6387 17 15.8184 16.8701 15.8486 16.77L19.8887 5.47021C20.0283 5.08984 20.0684 4.83008 20.0786 4.68018C19.9287 4.72998 19.6987 4.83984 19.3687 5.08008L15.7085 7.68994C15.2085 8.04004 14.6187 8.1499 14.0884 7.99023C13.5586 7.83008 13.1284 7.41016 12.9087 6.83984L11.1484 2.1499C11.0186 1.7998 10.8984 1.62988 10.8286 1.5498C10.7588 1.62988 10.6387 1.7998 10.5088 2.14014L8.74854 6.83008C8.53857 7.3999 8.1084 7.81982 7.56836 7.97998C7.03857 8.14014 6.43848 8.02979 5.94873 7.68018L2.04834 4.89014C1.81836 4.72998 1.63867 4.62988 1.50879 4.58008Z"
                        fill="#EBB44A"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </svg>
                  </span>
                  {"Abdullayev Sənan"}
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>25 bal</Table.Cell>
                <Table.Cell>10/02/2023</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};
