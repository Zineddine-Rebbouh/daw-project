import React from "react";
import {BsThreeDots} from "react-icons/bs"
const UsersView = () => {
  const  LIST_OF_USERS = [
    {
      name: "user1",
      age: 12,
      gendre: "male",
      role:'patient'
    },
    {
      name: "user2",
      age: 12,
      gendre: "male",
      role:'patient'
    },
    {
      name: "user3",
      age: 12,
      gendre: "male",
      role:'patient'

    },
    {
      name: "user4",
      age: 12,
      gendre: "male",
      role:'patient'

    },
    {
      name: "user5",
      age: 12,
      gendre: "male",
      role:'patient'

    },
    {
      name: "user6",
      age: 12,
      gendre: "male",
      role:'patient'
    },
  ];
  return (
    <div className="flex flex-wrap  gap-4 justify-center">
      {LIST_OF_USERS.map((data , index) => (
        <UserCard props={{...data , index}} key={index} />
      ))}
      <button>fillter</button>
    </div>
  );
};
const UserCard = (data) => {
  const { name, age, gendre, role } = data.props;
  
  return (
    <div  className=" w-52  rounded-xl shadow-xl p-4  border-4 m-2 relative    ">
      <button className=" absolute top-1 right-3 hover:bg-gray-300 rounded-md z-10">
      <BsThreeDots size={25} />
      </button>
      <h1 className="text-2xl  font-black ">{name}</h1>
      <h2 className="text-xl  ">age : {age}</h2>
      <h2 className="text-xl  ">gendre : {gendre}</h2>
      <h3> role :{role}</h3>
    </div>
  );
};

export default UsersView;
