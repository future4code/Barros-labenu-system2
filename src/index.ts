import app from "./app";
import { CreateInstructor } from "./endpoints/CreateInstructor";



//Create instructor
app.post("/instructors", CreateInstructor)