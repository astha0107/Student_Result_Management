import { useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";

export default function App() {
  const [students, setStudents] = useState([]); // all students
  const [view, setView] = useState("list"); // which screen to show
  const [selectedStudent, setSelectedStudent] = useState(null); // for edit + details

  return (
    <div>
      {view === "list" && (
        <StudentList
          students={students}
          setStudents={setStudents}
          setView={setView}
          setSelectedStudent={setSelectedStudent}
        />
      )}

      {view === "add" && (
        <StudentForm
          mode="add"
          setView={setView}
        />
      )}

      {view === "edit" && (
        <StudentForm
          mode="edit"
          student={selectedStudent}
          setView={setView}
        />
      )}

      {view === "details" && (
        <StudentDetails
          student={selectedStudent}
          setView={setView}
        />
      )}
    </div>
  );
}
