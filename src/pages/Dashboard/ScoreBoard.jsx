import { Dropdown } from "flowbite-react";
import { Table } from "flowbite-react";

export const ScoreBoard = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Nəticələr</h1>
        <Dropdown label="Növ" color="indigo">
          <Dropdown.Item>Excellent</Dropdown.Item>
          <Dropdown.Item>Very good</Dropdown.Item>
          <Dropdown.Item>Good</Dropdown.Item>
          <Dropdown.Item>Bad</Dropdown.Item>
        </Dropdown>
      </div>
      <div className="mt-5">
        <div className="overflow-x-auto cursor-pointer">
          <Table hoverable>
            <Table.Head className="text-gray text-md font-medium">
              <Table.HeadCell colSpan={5}>Name</Table.HeadCell>
              <Table.HeadCell>Points</Table.HeadCell>
              <Table.HeadCell>Grade</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-black font-bold">
                <Table.Cell className="flex items-center">
                  <img
                    src="/blank_profile.jpeg"
                    alt=""
                    className="w-[40px] h-[40px] rounded-full mr-2"
                  />
                  <span>Abdullayev Sənan</span>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>25</Table.Cell>
                <Table.Cell>Excellent</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-black font-bold">
                <Table.Cell className="flex items-center">
                  <img
                    src="/blank_profile.jpeg"
                    alt=""
                    className="w-[40px] h-[40px] rounded-full mr-2"
                  />
                  <span>Abdullayev Sənan</span>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>23</Table.Cell>
                <Table.Cell>Very Good</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-black font-bold">
                <Table.Cell className="flex items-center">
                  <img
                    src="/blank_profile.jpeg"
                    alt=""
                    className="w-[40px] h-[40px] rounded-full mr-2"
                  />
                  <span>Abdullayev Sənan</span>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>20</Table.Cell>
                <Table.Cell>Good</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-black font-bold">
                <Table.Cell className="flex items-center">
                  <img
                    src="/blank_profile.jpeg"
                    alt=""
                    className="w-[40px] h-[40px] rounded-full mr-2"
                  />
                  <span>Abdullayev Sənan</span>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>25</Table.Cell>
                <Table.Cell>Excellent</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-black font-bold">
                <Table.Cell className="flex items-center">
                  <img
                    src="/blank_profile.jpeg"
                    alt=""
                    className="w-[40px] h-[40px] rounded-full mr-2"
                  />
                  <span>Abdullayev Sənan</span>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>23</Table.Cell>
                <Table.Cell>Very Good</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-black font-bold">
                <Table.Cell className="flex items-center">
                  <img
                    src="/blank_profile.jpeg"
                    alt=""
                    className="w-[40px] h-[40px] rounded-full mr-2"
                  />
                  <span>Abdullayev Sənan</span>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>20</Table.Cell>
                <Table.Cell>Good</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </>
  );
};
