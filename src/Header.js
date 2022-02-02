import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
const NavSection = styled.section `
    padding: 0% 1%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px gray;
    background-color: white;
`
const Title = styled(Link)`
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 24px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    padding-left: 5%;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
`

const NavLinks = styled.div`
    color: black; 
    align-items: center;
    justify-content: center;
    display:flex;
    padding-right: 15%;
`
const NavLink = styled(Link)`
    text-decoration: none;
    margin: 5px;
    color: black;
    align-items: center;
    justify-content: center;
    font-size: 24px;
`

function Header(){
    return(
        <div>
            <NavSection>
                <Title to='/'>Song Encyclopedia</Title>
                <NavLinks>
                    <NavLink to='/songs'>Songs</NavLink>
                </NavLinks>
            </NavSection>
        </div>
    )
}
export default Header