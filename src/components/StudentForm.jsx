import { useState } from "react";
import { addStudent, updateStudent } from "../services/studentService";

export default function StudentForm({ mode, student, setView }) {
  const [name, setName] = useState(student ? student.name : "");
  const [section, setSection] = useState(student ? student.section : "");
  const [marks, setMarks] = useState(student ? student.marks : "");
  const [grade, setGrade] = useState(student ? student.grade : "");

  async function handleSubmit(e) {
    e.preventDefault();

    const data = { name, section, marks, grade };

    if (mode === "add") {
      await addStudent(data);
      alert("Student added!");
    } else {
      await updateStudent(student.id, data);
      alert("Student updated!");
    }

    setView("list");
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white border border-gray-300 rounded-md">
      <h2 className="text-2xl font-bold mb-6">
        {mode === "add" ? "Add Student" : "Edit Student"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name:</label>
          <input
            className="w-full border border-gray-300 p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Section */}
        <div>
          <label className="block font-medium mb-1">Section:</label>
          <input
            className="w-full border border-gray-300 p-2 rounded-md"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          />
        </div>

        {/* Marks */}
        <div>
          <label className="block font-medium mb-1">Marks:</label>
          <input
            type="number"
            className="w-full border border-gray-300 p-2 rounded-md"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        </div>

        {/* Grade */}
        <div>
          <label className="block font-medium mb-1">Grade:</label>
          <input
            className="w-full border border-gray-300 p-2 rounded-md"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-md"
          >
            {mode === "add" ? "Save" : "Update"}
          </button>

          <button
            type="button"
            onClick={() => setView("list")}
            className="bg-gray-400 text-white px-5 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
