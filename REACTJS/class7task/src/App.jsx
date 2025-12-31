import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [userDesc, setUserDesc] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setAllUsers([...allUsers, { userName, userRole, userDesc, imageURL }]);

    setUserName("");
    setUserRole("");
    setUserDesc("");
    setImageURL("");
  };

  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers];

    copyUsers.splice(idx, 1);

    setAllUsers(copyUsers);
  };

  return (
    <div className="h-full flex  w-full bg-black text-2xl text-white p-4">
      {/* Left Content */}
      <div className="left px-20 py-8 h-screen w-1/2">
        <h2 className="text-3xl font-bold px-4">Create User</h2>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="px-2 py-2 flex flex-wrap"
        >
          <input
            value={imageURL}
            onChange={(e) => {
              setImageURL(e.target.value);
            }}
            className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-full"
            type="text"
            placeholder="Image URL"
          />
          <input
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-full"
            type="text"
            placeholder="Enter your name"
          />

          <input
            value={userRole}
            onChange={(e) => {
              setUserRole(e.target.value);
            }}
            className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-full"
            type="text"
            placeholder="Enter Role"
          />

          <input
            value={userDesc}
            onChange={(e) => {
              setUserDesc(e.target.value);
            }}
            className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-full"
            type="text"
            placeholder="Enter Description"
          />

          <button className=" px-4 py-2 text-xl active:scale-95 cursor-pointer font-semibold bg-amber-400 hover:bg-amber-600 rounded m-2 w-full">
            Create User
          </button>
        </form>
      </div>

      {/* Right Content */}
      <div className="right h-screen w-1/2">
        <div className="px-4 py-10 gap-4 flex flex-wrap">
          {allUsers.map((user, idx) => {
            return (
              <Card
                key={idx}
                elem={user}
                idx={idx}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
