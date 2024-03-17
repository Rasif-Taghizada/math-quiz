import { Dropdown, Table } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { TiDocumentAdd } from "react-icons/ti";
import { deleteExamFromFirestore } from "../../redux/exams/examSlice";

export const AdminExams = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const exams = useSelector((state) => state.exams.examsArray);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[30px] mb-8">
          <div>
            <p className="text-[#30333D] font-bold mb-2">Növ</p>
            <Dropdown
              label="Hamısı"
              outline
              color="light"
              style={{
                boxShadow:
                  "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              }}
            >
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
            </Dropdown>
          </div>
          <div>
            <p className="text-[#30333D] font-bold mb-2">Tarix</p>
            <input
              type="date"
              className="w-full text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 cursor-pointer shadow-lg"
            />
          </div>
          <div>
            <p className="text-[#30333D] font-bold mb-2">Qiymət</p>
            <input
              type="number"
              placeholder="0 AZN"
              className="w-full text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 shadow-lg"
            />
          </div>
        </div>
        <Link
          className="flex items-center gap-3 bg-[#675AF0] text-white p-2 rounded-lg"
          to={`/admin/exams/create`}
        >
          <TiDocumentAdd size={25} />
          Add exam
        </Link>
      </div>
      <div className="overflow-x-auto">
        <Table hoverable striped>
          <Table.Head>
            <Table.HeadCell colSpan={4}>İmtahan</Table.HeadCell>
            <Table.HeadCell>Tarix</Table.HeadCell>
            <Table.HeadCell>İmtahan vaxtı</Table.HeadCell>
            <Table.HeadCell>İmtahan kontrol</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {exams.map((exam) => (
              <Table.Row
                className="bg-[#EAE8FF] dark:border-gray-700 dark:bg-gray-800"
                key={exam.id}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {exam.title}
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>{exam.date}</Table.Cell>
                <Table.Cell>{exam.time} dəqiqə</Table.Cell>
                <Table.Cell className="flex items-center gap-4">
                  <button
                    className="block rounded-full bg-[#675AF0] text-white p-2 flex justify-center item-center"
                    onClick={() => {
                      navigate(`/admin/exams/${exam.id}/edit`, { state: exam });
                    }}
                  >
                    <svg
                      width="20.000000"
                      height="20.000000"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <desc>Created with Pixso.</desc>
                      <defs />
                      <path
                        id="Vector"
                        d="M11.25 17.06L6.75 17.06C2.67 17.06 0.93 15.32 0.93 11.25L0.93 6.75C0.93 2.67 2.67 0.93 6.75 0.93L8.25 0.93C8.55 0.93 8.81 1.19 8.81 1.5C8.81 1.8 8.55 2.06 8.25 2.06L6.75 2.06C3.29 2.06 2.06 3.29 2.06 6.75L2.06 11.25C2.06 14.7 3.29 15.93 6.75 15.93L11.25 15.93C14.7 15.93 15.93 14.7 15.93 11.25L15.93 9.75C15.93 9.44 16.19 9.18 16.5 9.18C16.8 9.18 17.06 9.44 17.06 9.75L17.06 11.25C17.06 15.32 15.32 17.06 11.25 17.06Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M6.37 13.26C5.91 13.26 5.49 13.1 5.19 12.8C4.82 12.43 4.66 11.9 4.74 11.33L5.07 9.08C5.13 8.64 5.41 8.08 5.72 7.77L11.63 1.86C13.12 0.37 14.64 0.37 16.13 1.86C16.95 2.68 17.31 3.51 17.24 4.34C17.17 5.02 16.81 5.68 16.13 6.35L10.22 12.27C9.91 12.57 9.35 12.86 8.91 12.92L6.65 13.24C6.56 13.26 6.46 13.26 6.37 13.26ZM12.42 2.66L6.51 8.57C6.37 8.71 6.21 9.04 6.17 9.23L5.85 11.49C5.82 11.71 5.87 11.89 5.98 12C6.09 12.11 6.27 12.16 6.49 12.13L8.75 11.81C8.94 11.78 9.28 11.61 9.41 11.47L15.33 5.56C15.81 5.07 16.07 4.64 16.11 4.23C16.15 3.75 15.9 3.23 15.33 2.65C14.13 1.45 13.3 1.79 12.42 2.66Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M14.88 7.37C14.83 7.37 14.78 7.36 14.73 7.34C12.76 6.79 11.19 5.22 10.64 3.25C10.55 2.95 10.73 2.64 11.03 2.55C11.33 2.47 11.63 2.64 11.72 2.94C12.17 4.54 13.43 5.81 15.03 6.26C15.33 6.34 15.5 6.65 15.42 6.95C15.35 7.21 15.13 7.37 14.88 7.37Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <g opacity="0.000000" />
                    </svg>
                  </button>
                  <button
                    className="block rounded-full bg-[#675AF0] text-white p-2 flex justify-center item-center"
                    onClick={() => {
                      dispatch(deleteExamFromFirestore(exam.id));
                    }}
                  >
                    <svg
                      width="20.000000"
                      height="20.000000"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <desc>Created with Pixso.</desc>
                      <defs />
                      <path
                        id="Vector"
                        d="M15.75 5.04C15.73 5.04 15.71 5.04 15.69 5.04C11.72 4.64 7.76 4.49 3.84 4.89L2.31 5.04C1.99 5.07 1.71 4.85 1.68 4.53C1.65 4.22 1.88 3.95 2.19 3.92L3.71 3.77C7.71 3.36 11.75 3.52 15.8 3.92C16.11 3.95 16.33 4.22 16.3 4.53C16.28 4.82 16.03 5.04 15.75 5.04Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M6.37 4.29C6.34 4.29 6.31 4.29 6.27 4.28C5.97 4.22 5.76 3.93 5.82 3.63L5.98 2.65C6.1 1.93 6.27 0.93 8.01 0.93L9.98 0.93C11.73 0.93 11.9 1.97 12.01 2.66L12.18 3.63C12.23 3.94 12.02 4.23 11.72 4.28C11.41 4.33 11.12 4.12 11.07 3.82L10.91 2.85C10.8 2.19 10.78 2.07 9.99 2.07L8.02 2.07C7.23 2.07 7.21 2.17 7.1 2.84L6.93 3.81C6.88 4.09 6.64 4.29 6.37 4.29Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M11.4 17.06L6.59 17.06C3.97 17.06 3.87 15.61 3.78 14.44L3.3 6.89C3.27 6.58 3.51 6.31 3.82 6.29C4.14 6.27 4.4 6.51 4.42 6.81L4.91 14.36C4.99 15.51 5.02 15.93 6.59 15.93L11.4 15.93C12.98 15.93 13.01 15.51 13.08 14.36L13.57 6.81C13.59 6.51 13.86 6.27 14.17 6.29C14.48 6.31 14.72 6.57 14.7 6.89L14.21 14.44C14.13 15.61 14.02 17.06 11.4 17.06Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M10.24 12.93L7.74 12.93C7.44 12.93 7.18 12.68 7.18 12.37C7.18 12.06 7.44 11.81 7.74 11.81L10.24 11.81C10.55 11.81 10.8 12.06 10.8 12.37C10.8 12.68 10.55 12.93 10.24 12.93Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <path
                        id="Vector"
                        d="M10.87 9.93L7.12 9.93C6.81 9.93 6.56 9.68 6.56 9.37C6.56 9.06 6.81 8.81 7.12 8.81L10.87 8.81C11.18 8.81 11.43 9.06 11.43 9.37C11.43 9.68 11.18 9.93 10.87 9.93Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                      <g opacity="0.000000" />
                    </svg>
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};
