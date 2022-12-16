import app from "./app";
import { createStudent } from "./endpoints/createStudent";
import { searchStudents } from "./endpoints/searchStudents";
import { createClass } from "./endpoints/createClass";
import { searchClass } from "./endpoints/searchClass";
import { createInstructor } from "./endpoints/createInstructor";
import { getAllInstructors } from "./endpoints/getAllInstructors";
import { updateInstructorClass } from "./endpoints/updateInstructorClass";
import { updateClassModule } from "./endpoints/updateClassModule";

app.post("/students", createStudent)
app.get("/students", searchStudents)

//Create Instructor
app.post("/instructors", createInstructor)

//Get All Instructors
app.get("/instructors", getAllInstructors)

//Update Instructor Class Id
app.patch("/instructors/:instructor_id", updateInstructorClass)

//Create Class
app.post("/class/create", createClass)

//Search Active Classes
app.get("/class", searchClass)

//Update Class Module
app.patch("/class/update/:id_class", updateClassModule)




