const API_URL = "http://localhost:3000/students";

// GET all students
export async function getAllStudents() {
  const res = await fetch(API_URL);
  return res.json();
}

// POST → add student
export async function addStudent(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// PUT → edit student
export async function updateStudent(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// DELETE student
export async function deleteStudent(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}
