import { Route, Routes } from "react-router-dom";
import Login  from "./Components/Login";
import Student from "./Components/Student";
import Class from "./Components/Class";
import Classes from "./Components/Classes";
import AddActivity from "./Components/AddActivity";
import Activities from "./Components/Activities";
import Schools from "./Components/Schools";
import LinkActivity from "./Components/LinkActivity";
import SignUp from "./Components/SignUp";
/*

admin see dashboard school, class and student wise, add schools teachers
teacher -> add activity for the , add students, see the set question, mark the attendance of students facial recognition,
students -> give tests and see the activity for the day, [chat feature of the class group add in the class grp and chat with the teachers, attendance ]
*/
export default function App() {

  return (
    <>
      <Routes>
        {/* <Route path = "/" /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/schools/:SchoolId/classes" element={<Classes />} />
        <Route path="/schools/:SchoolId/classes/:id" element={<Class />} />
        <Route path="/dashboard/students/:id" element={<Student />} />
        <Route path="/add-activity" element={<AddActivity />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/linkactivity" element={<LinkActivity/>} />
      </Routes>
    </>
  );
}
