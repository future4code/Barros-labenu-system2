import app from "./app";
import { createStudent } from "./endpoints/createStudent";
import { searchStudents } from "./endpoints/searchStudents";
import { createClass } from "./endpoints/createClass";
import { searchClass } from "./endpoints/searchClass";
import { createInstructor } from "./endpoints/createInstructor";
import { getAllInstructors } from "./endpoints/getAllInstructors";


app.post("/students", createStudent)
app.get("/students", searchStudents)

//Create instructor
app.post("/instructors", createInstructor)

app.post("/class/create", createClass)

app.get("/class", searchClass)
app.post("/instructors", createInstructor)

//Get All Instructors
app.get("/instructors", getAllInstructors)
