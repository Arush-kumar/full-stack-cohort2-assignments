import { useState } from "react";

const Navbar = ({changeTheme}) => {
  
  // console.log(changeTheme);
  
  const [newTheme, setNewTheme] = useState('');

  return (
    <div className="nav">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          changeTheme(newTheme);
          setNewTheme('')
        }}
      >
        <input
          value={newTheme}
          onChange={(e) => {
            setNewTheme(e.target.value);
          }}
          type="text"
          placeholder="Enter Theme"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Navbar;
