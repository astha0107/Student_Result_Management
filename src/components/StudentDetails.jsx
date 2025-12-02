export default function StudentDetails({ student, setView }) {
  if (!student) {
    return <p>No student selected.</p>;
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white">
      <h2 className="text-2xl font-bold mb-6">Student Details</h2>

      <div className="space-y-3 text-lg">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Section:</strong> {student.section}</p>
        <p><strong>Marks:</strong> {student.marks}</p>
        <p><strong>Grade:</strong> {student.grade}</p>
      </div>

      <button
        onClick={() => setView("list")}
        className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-md"
      >
        Back to List
      </button>
    </div>
  );
}
