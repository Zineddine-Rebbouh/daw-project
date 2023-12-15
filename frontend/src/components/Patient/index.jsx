import React from "react";
import { Link } from "react-router-dom";
import Messages from "./Messages";
import Score from "./Score";

export default function Main() {
  return (
    <div className="pt-20">
      <div className=" fixed top-0 w-full rounded-b-2xl bg-blue-600 p-2 text-xl text-white items-center flex justify-between">
        Patient
        <Link to={"profile"}>
          <svg
            className="h-12 w-12 text-gray-300"
            viewBox="0 0 24 24"
            fill="black"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <div className=" flex flex-wrap p-2  gap-2 ">

      <Messages/>
      <Score/>
      </div>

    </div>
  );
}
