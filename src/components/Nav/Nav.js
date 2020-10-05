import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.div`
    background-color: lightgray;
    display: flex;
    justify-content: space-evenly;
    padding: .5rem 0;
`;

const Nav = () => (
    <Navbar>
        <Link to="/links">Linki</Link>
        <Link to="/notes">Notatki</Link>
        <Link to="/add">Dodaj</Link>
    </Navbar>
)

export default Nav;