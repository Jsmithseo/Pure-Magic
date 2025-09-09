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
          src="../images/pathway_logo.jpg"
          alt="Logo Placeholder"
          style={{ width: 75, height: 75, borderRadius: 8 }}
        />
        <span style={{ fontWeight: 'bold', color: '#0078A8', fontSize: '1.25rem' }}>
          Pathway Humanity
        </span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto align-items-center" navbar>
          <NavItem>
            <Link href="/mission" passHref legacyBehavior>
              <a className="nav-link" style={navLinkStyle}>Mission</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/clinicians" passHref legacyBehavior>
              <a className="nav-link" style={navLinkStyle}>Schedule with Our Clinicians</a>
            </Link>
          </NavItem>

                    {/* Events Dropdown */}
                    <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret style={navLinkStyle}>
              Program
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <Link href="/workforce" passHref legacyBehavior>
                  <a className="dropdown-item">Workforce Development Initiatives</a>
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/social-purpose-initiatives" passHref legacyBehavior>
                  <a className="dropdown-item">Social Purpose Initiatives</a>
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <Link href="/applicants" passHref legacyBehavior>
              <a className="nav-link" style={navLinkStyle}>Applicants</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/employers" passHref legacyBehavior>
              <a className="nav-link" style={navLinkStyle}>Employers</a>
            </Link>
          </NavItem>

          {/* Events Dropdown */}
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret style={navLinkStyle}>
              Events
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <Link href="/mentorship" passHref legacyBehavior>
                  <a className="dropdown-item">Mentorship</a>
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/calendar" passHref legacyBehavior>
                  <a className="dropdown-item">Calendar Page</a>
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <NavItem>
            <Link href="/about" passHref legacyBehavior>
              <a className="nav-link" style={navLinkStyle}>About Us</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/blog" passHref legacyBehavior>
              <a className="nav-link" style={navLinkStyle}>Blog</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/contact" passHref legacyBehavior>
              <a className="nav-link" style={navLinkStyle}>Contact</a>
              
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MainNavBar;
