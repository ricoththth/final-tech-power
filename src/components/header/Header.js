import './Header.css';
import ButtonSearch from '../../components/buttonSearch/ButtonSearch';
import { Link } from "react-router-dom";
import { ReactComponent as BellIcon } from '../../assets/bell.svg';
import { ReactComponent as MessengerIcon } from '../../assets/messenger.svg';
import { ReactComponent as CaretIcon } from '../../assets/caret.svg';
import { ReactComponent as PlusIcon } from '../../assets/plus.svg';
import { ReactComponent as CogIcon } from '../../assets/cog.svg';
import { ReactComponent as ChevronIcon } from '../../assets/chevron.svg';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';


function Header() {
  return (

<Navbar>

    <ButtonSearch className="" />

    <NavItem icon={<PlusIcon />} />
    <NavItem icon={<BellIcon />} />
    <NavItem icon={<MessengerIcon />} />

    <NavItem icon={<CaretIcon />}>
    <DropdownMenu></DropdownMenu>
    </NavItem>
    </Navbar>
);
}

function Navbar(props) {
return (
<nav className="navbar">
<ul className="navbar-nav">{props.children}</ul>
</nav>
);
}

function NavItem(props) {
const [open, setOpen] = useState(false);

return (
<li className="nav-item">
<Link to="#" className="icon-button" onClick={() => setOpen(!open)}>
  {props.icon}
</Link>

{open && props.children}
</li>
);
}

function DropdownMenu() {
const [activeMenu, setActiveMenu] = useState('main');
const [menuHeight, setMenuHeight] = useState(null);
const dropdownRef = useRef(null);

useEffect(() => {
setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
}, [])

function calcHeight(el) {
const height = el.offsetHeight;
setMenuHeight(height);
}

function DropdownItem(props) {
return (
<Link to="/#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
  <span className="icon-button">{props.leftIcon}</span>
  {props.children}
  <span className="icon-right">{props.rightIcon}</span>
</Link>
);
}

return (
<div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

<CSSTransition
  in={activeMenu === 'main'}
  timeout={500}
  classNames="menu-primary"
  unmountOnExit
  onEnter={calcHeight}>
  <div className="menu">
    <DropdownItem>My Profile</DropdownItem>
    <DropdownItem
      leftIcon={<CogIcon />}
      rightIcon={<ChevronIcon />}
      goToMenu="settings">
      Settings
    </DropdownItem>
  </div>
</CSSTransition>
</div>
  );
}

export default Header;