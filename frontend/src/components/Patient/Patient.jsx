import React from "react";
import { Evaluation_questions, PersonalQuestions } from "./questions";
export default function Patient() {
  const handleclick=()=>{
    alert("ok")
  }
  return (
    <div>
      <h1>Patient</h1>

      <div className=" p-2 ">
        <h2 className=" text-lg text-sky-800 font-bold underline p-4  ">
          personal questions :
        </h2>
        {Object.keys(PersonalQuestions).map((category) => (
          <div
            key={category}
            className=" shadow-sm   shadow-gray-500 rounded-lg p-4 m-2"
          >
            <h2 className="text-lg text-indigo-600 ">{category} : </h2>
            <ul>
              {Object.entries(PersonalQuestions[category]).map(
                ([key, value]) => (
                  <div>
                    <li className=" inline-block mr-4" key={key}>
                      {value} :
                    </li>
                    <input
                      className=" border bg-green-500"
                      type="radio"
                      name={category}
                      id={value}
                      required
                    />
                  </div>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className=" p-2 ">
        <h2 className=" text-lg text-sky-800 font-bold underline p-4  ">
          Evaluation questions :
        </h2>
        {Object.keys(Evaluation_questions).map((category) => (
          <div
            key={category}
            className=" shadow-sm   shadow-gray-500 rounded-lg p-4 m-2"
          >
            <h2 className="text-lg text-indigo-600 ">{category} : </h2>
            <ul>
              {Object.entries(Evaluation_questions[category]).map(
                ([key, value]) => (
                  <div>
                    <li className=" inline-block mr-4" key={key}>
                      {value} :
                    </li>
                    <input
                      className=" border bg-green-500"
                      type="radio"
                      name={category}
                      id={value}
                      required
                    />
                  </div>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      <button type="button" onClick={handleclick} className=" text-xl text-white p-2 m-4 rounded-lg  bg-sky-600">submit </button>
    </div>
  );
}
