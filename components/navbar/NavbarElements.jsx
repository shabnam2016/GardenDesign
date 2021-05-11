import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav `
  height: 80px;
  display: flex;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  justify-content: flex-end; 
`

export const NavLink = styled(Link) `
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`

export const NavMenu = styled.div `
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav `
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link) `
  border-radius: 4px;
  padding: 10px 22px;
  color: black;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
