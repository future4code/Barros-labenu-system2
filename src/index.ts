import app from "./app";
import { createStudent } from "./endpoints/createStudent";
import { searchStudents } from "./endpoints/searchStudents";
import { CreateInstructor } from "./endpoints/CreateInstructor";
import { createClass } from "./endpoints/createClass";
import { searchClass } from "./endpoints/searchClass";


app.post("/students", createStudent)
app.get("/students", searchStudents)

//Create instructor
app.post("/instructors", CreateInstructor)

app.post("/class/create", createClass)

app.get("/class", searchClass)
