import React, { useState } from "react";
import "./Header.css";
import Logo from "../components/Logo.png";
//import {Autocomplete} from '@mui/material';
import {TextField} from '@mui/material';
//import { BellIcon } from '@heroicons/react/outline'; // Import notification and search icons

function Header() {
const [searchValue, setSearchValue] = useState("");
const [booksList, setBooksList ] = useState([])

const handleSearchChange = (e) => {
  setSearchValue(e.target.value);
};
const items = [""]; // Example list of items for auto-completion

const handleKeyDown = async(e) => {
  if (e.key === 'Enter') {
    const data = await fetch(`http://localhost:5001/livre/byWord/${searchValue}`).then(res => res.json())
    console.log(data)
  }
}

return (
<header>
  <div className="header--logo">
    <img src={Logo} alt="logo" />
  </div>
  <div>
    <div className="header--search-icon"></div>
      <TextField label="Search for a book..." variant="filled" fullWidth color="error" 
        value={searchValue}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
    </div>
    <div className="header--user">
    <div className="header--notification-icon">
    </div>
    <a href="/">
    <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="profil"
          />
    </a>
  </div>
</header>
);
}

export default Header;