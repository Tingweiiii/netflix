import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
width: 100%;
height: 4rem;
background-color: ${({show}) => show ? "#000" : "transparent"};
padding: 0 1rem;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
z-index: 999;
transition: all .5s ease;
`
export const NavbarLogo = styled(Link)`
width: 100px;
height: 30px;
background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png) center / contain no-repeat;
display: inline-block;
`
export const NavbarLeft = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 2rem;
`
export const NavbarRight = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: .5rem;

svg {
    font-size: 1.2rem;
    color: #fff;
    cursor: pointer;
}
`
export const NavbarMenu = styled.div`
display: flex;
align-items: center;
gap: 1.5rem;

@media screen and (max-width: 768px){
    display: none;
}
`
export const NavbarLink = styled(Link)`
font-weight: 700;
color: #fff;
letter-spacing: .1rem;
cursor: pointer;
`
export const NavbarSearch = styled.form`
padding: .5rem;
border: ${({searching}) => searching ? "1px solid #fff": "none"};

svg {
    color: #fff;
    vertical-align: middle;
}
`
export const NavbarInput = styled.input`
width: ${({searching}) => searching ? "200px": 0};
background-color: transparent;
color: #fff;
border: none;
outline: none;
opacity: ${({searching}) => searching ? 1 : 0};
transition: all .5s ease;

@media screen and (max-width: 768px){
    max-width: 120px;
}
`
export const NavbarUser = styled.img`
width: 30px;
height: 30px;
vertical-align: middle;
cursor: pointer;
`