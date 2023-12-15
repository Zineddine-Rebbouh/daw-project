import React from "react";
import { Route , Routes } from "react-router-dom";
import Profile from "./Profile"
import Main from './index'
import Questionaire from "./Questionaire";
export default function Patient() {
  return (
      <Routes>
        <Route path="/"  element={<Main/>}/>
        <Route path="profile"  element={<Profile/>}/>
        <Route path="Questionaire"  element={<Questionaire/>}/>
      </Routes>
  );
}
