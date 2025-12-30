import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userName, setUserName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userDescription, setUserDescription] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(userName, imageUrl, userRole, userDescription);

    // 2nd method
    setAllUsers([
      ...allUsers,
      { userName, imageUrl, userRole, userDescription },
    ]);

    setUserName("");
    setImageUrl("");
    setUserRole("");
    setUserDescription("");
  };

  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers];
    copyUsers.splice(idx, 1);
    // console.log(copyUsers);

    setAllUsers(copyUsers);
  };

  return (
    <div className="min-h-screen w-full bg-black text-gray-100 ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex justify-center flex-wrap"
      >
        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="text-xl font-semibold border-2 px-4 py-2 m-4 rounded w-[45%]"
          type="text"
          placeholder="Enter your name"
        />

        <input
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
          className="text-xl font-semibold border-2 px-4 py-2 m-4 rounded w-[45%]"
          type="text"
          placeholder="Image URL"
        />

        <input
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
          className="text-xl font-semibold border-2 px-4 py-2 m-4 rounded w-[45%]"
          type="text"
          placeholder="Enter Role"
        />

        <input
          value={userDescription}
          onChange={(e) => {
            setUserDescription(e.target.value);
          }}
          className="text-xl font-semibold border-2 px-4 py-2 m-4 rounded w-[45%]"
          type="text"
          placeholder="Enter Description"
        />

        <button className="text-xl font-semibold border-none px-10 py-2 bg-emerald-500 active:scale-97 transition-all cursor-pointer mt-4 rounded">
          Create User
        </button>
      </form>

      {/* Card Component Use */}
      <div>
        <Card elem={allUsers} deleteHandler={deleteHandler} />
      </div>
    </div>
  );
};

export default App;
