import React, { useState } from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const MainNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navLinkStyle = {
    fontSize: '1.1rem', // Increased font size
    fontWeight: '500',  // Slightly bolder for better readability
  };

  return (
    <Navbar expand="md" light color="white" className="px-3 shadow-sm sticky-top">
      <NavbarBrand href="/" className="d-flex align-items-center gap-2">
      <img
          src="../images/pure-magic-logo.jpg"
          alt="Logo Placeholder"
          style={{ width: 225, height: 125, borderRadius: 8 }}
        />
        <span style={{ fontWeight: 'bold', color: '#0078A8', fontSize: '1.25rem' }}>
        
        </span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto align-items-center" navbar>
          <NavItem>
            <Link href="/" className="nav-link" style={navLinkStyle}>
           Home
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/" className="nav-link" style={navLinkStyle}>
            Body Butter Cologne
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/" className="nav-link" style={navLinkStyle}>
            Body Oil Cologne
            </Link>
          </NavItem>


          <NavItem>
            <Link href="/about" className="nav-link" style={navLinkStyle}>
              About Us
            </Link>
          </NavItem>

          <NavItem>
            <Link href="/contact" className="nav-link" style={navLinkStyle}>
              Contact
              
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MainNavBar;
