import React, { useState } from "react";
import "./Header.css";
import Logo from "../components/Logo.png";
import {Autocomplete} from '@mui/material';
import {TextField} from '@mui/material';
import { BellIcon } from '@heroicons/react/outline'; // Import notification and search icons

function Header() {
const [searchValue, setSearchValue] = useState("");

const handleSearchChange = (e, value) => {
setSearchValue(value);
};

const items = [""]; // Example list of items for auto-completion

return (
<header>
<div className="header--logo">
<img src={Logo} alt="logo" />
</div>
<div className="header--search">
<div className="header--search-icon">
</div>
<Autocomplete
freeSolo
options={items}
value={searchValue}
onChange={handleSearchChange}
renderInput={(params) => (
<TextField {...params} label="Search for a book..." variant="outlined" />
)}
/>
</div>
<div className="header--user">
<div className="header--notification-icon">
<BellIcon />
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