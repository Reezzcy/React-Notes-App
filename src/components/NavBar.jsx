import React from 'react';

function NavBar({search, onSearch}){
    return (
        <nav className='nav-bar'>
            <h1 className='note-app_header'>Aplikasi Catatan</h1>
            <input className='nav-input-search' type="text" placeholder='Search' value={search} onChange={(o) => onSearch(o)}/>
        </nav>
    );
}

export default NavBar;