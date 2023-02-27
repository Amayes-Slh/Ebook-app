import React, { useState } from "react";
import "./Header.css";
import Logo from "../components/Logo.png";
//import {Autocomplete} from '@mui/material';
import { TextField, Switch } from '@mui/material';
//import { BellIcon } from '@heroicons/react/outline'; // Import notification and search icons

function Header(props) {
const [searchValue, setSearchValue] = useState("");
const [regexMode, setRegexMode] = useState(false)
const [regexValue, setRegexValue] = useState("")

const handleSearchChange = (e) => {
  setSearchValue(e.target.value);
};

const handleKeyDown = async(e) => {
  if (e.key === 'Enter') {
    const data = await fetch(`http://localhost:5001/livre/byWord/${searchValue}`).then(res => res.json())
    props.onKeyDown(data)
    setSearchValue("")
  }
};

const handleRegexMode = () => {
  setRegexMode(!regexMode)
};

const handleRegexValueChange = (e) => {
  setRegexValue(e.target.value)
};

const handleRegexKeyDown = async(e) => {
  if (e.key === 'Enter'){
    const toSend = {
      "reg": regexValue
    }
    console.log(JSON.stringify(toSend))
    const data = await fetch("http://localhost:5001/livre/regex", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(toSend)
    }).then(res => res.json())
    props.onKeyDown(data)
    setRegexValue("")
  }
}

return (
<header>
  <div className="header--logo">
    <img src={Logo} alt="logo" />
  </div>
  <div style={{ 
    width: "100%",
    display: "flex",
    justifyContent: "center"
    }}>
      { regexMode ? (
        <TextField label="Search book with regex" variant="filled" fullWidth color="error" 
          style={{
            width: "50%"
          }}
          value={regexValue}
          onChange={handleRegexValueChange}
          onKeyDown={handleRegexKeyDown}
          InputProps={{
            style: { color: "white"}
        }}
        />
      ) : (
        <TextField label="Search for a book..." variant="filled" fullWidth color="error" 
          style={{
            width: "50%"
          }}
          value={searchValue}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          InputProps={{
            style: { color: "white"}
        }}
        />
      )}

      <Switch value={regexMode} color="error" onClick={handleRegexMode}/>
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