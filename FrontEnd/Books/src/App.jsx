import React from 'react'
import Home from './Home/Home'
import {Navigate,Route,Routes} from 'react-router-dom';
import Courses from './courses/Courses.jsx';
import Signup from './components/Signup.jsx';
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
     <div className="min-h-screen bg-white dark:bg-slate-900 dark:text-white">
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
         <Route path="/signup" element={<Signup/>}/>
       </Routes>
     </div>
    </>
  )
}

export default App