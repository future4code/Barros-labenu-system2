import app from "./app";
import { createStudent } from "./endpoints/createStudent";
import { searchStudents } from "./endpoints/searchStudents";

app.get("/teste", () => console.log('Olá'))
app.post("/students", createStudent)
app.get("/students", searchStudents)