import { getAllStudents, deleteStudent } from "../services/studentService";

export default function StudentList({
  students,
  setStudents,
  setView,
  setSelectedStudent,
}) {
  async function handleLoad() {
    const data = await getAllStudents();
    setStudents(data);
  }

  async function handleDelete(id) {
    await deleteStudent(id);
    alert("Student deleted! Click Load Students again.");
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>

      <div className="flex gap-4">
        <button
          onClick={handleLoad}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Load Students
        </button>

        <button
          onClick={() => setView("add")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add Student
        </button>
      </div>

      <table className="w-full border border-gray-300 mt-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Section</th>
            <th className="border border-gray-300 p-2">Marks</th>
            <th className="border border-gray-300 p-2">Grade</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="border-b border-gray-300">
              <td className="p-2">{s.name}</td>
              <td className="p-2">{s.section}</td>
              <td className="p-2">{s.marks}</td>
              <td className="p-2">{s.grade}</td>
              <td className="p-2 flex gap-2">

                <button
                  onClick={() => {
                    setSelectedStudent(s);
                    setView("edit");
                  }}
                  className="bg-blue-600 text-white px-3 py-1 rounded-md"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(s.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded-md"
                >
                  Delete
                </button>

                <button
                  onClick={() => {
                    setSelectedStudent(s);
                    setView("details");
                  }}
                  className="bg-gray-700 text-white px-3 py-1 rounded-md"
                >
                  View
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
