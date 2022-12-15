import app from "./app";
import { createStudent } from "./endpoints/createStudent";
import { searchStudents } from "./endpoints/searchStudents";
import { CreateInstructor } from "./endpoints/CreateInstructor";


app.post("/students", createStudent)
app.get("/students", searchStudents)

//Create instructor
app.post("/instructors", CreateInstructor)
