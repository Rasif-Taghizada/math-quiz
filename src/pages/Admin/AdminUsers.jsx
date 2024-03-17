import { Table } from "flowbite-react";
import { useSelector } from "react-redux";

export const AdminUsers = () => {
  const students = useSelector((state) => state.students.studentsArray);
  console.log(students);
  return (
    <div>
      <h1>Admin Users</h1>
      <div className="overflow-x-auto mt-6">
        <Table hoverable striped>
          <Table.Head>
            <Table.HeadCell>Student Photo</Table.HeadCell>
            <Table.HeadCell>Student Name</Table.HeadCell>
            <Table.HeadCell>Phone number</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {students.map((student) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={student.id}
              >
                <Table.Cell>
                  <img
                    src={student.photoURL || "/blank_profile.jpeg"}
                    alt={student.displayName || student.email}
                    loading="lazy"
                    className="w-8 h-8 rounded-full"
                  />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-">
                  {student.displayName || student.email}
                </Table.Cell>
                <Table.Cell>
                  {student.phoneNumber ? student.phoneNumber : "Not available"}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};
