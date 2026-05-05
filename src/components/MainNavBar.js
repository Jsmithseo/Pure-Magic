import React, { useState } from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
} from 'reactstrap';

const MainNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookModalOpen, setBookModalOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleBookModal = () => setBookModalOpen(!bookModalOpen);

  const navLinkStyle = {
    fontSize: '1.4rem',
    fontWeight: '500',
    color: 'white',
    cursor: 'pointer',
  };

  const modalBtnStyle = {
    backgroundColor: '#0078A8',
    border: 'none',
    borderRadius: '999px',
    padding: '12px 26px',
    fontWeight: '600',
    fontSize: '1rem',
  };

  const booksyLink =
    'https://booksy.com/en-us/62767_magic2u-barbershop-supplies_barber-shop_134730_oakland?do=invite&_branch_match_id=1191497502955395994&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs/VzzIuTg3PyzZMyk0CABTJuv4&utm_source=ig&utm_content=link_in_bio';

  // Replace this with your real video URL
  // Example options:
  // - YouTube embed: https://www.youtube.com/embed/VIDEO_ID
  // - Vimeo embed: https://player.vimeo.com/video/VIDEO_ID
  // - Hosted mp4: /videos/your-video.mp4
  const videoUrl = '../../../../video/pure-magic-booking-video.mp4';

  return (
    <>
      <Navbar expand="md" light color="black" className="px-3 shadow-sm sticky-top">
        <NavbarBrand href="/" className="d-flex align-items-center gap-2">
          <img
            className="logo"
            src="../images/pure-magic-logo.jpg"
            alt="Pure Magic Logo"
            style={{ width: 225, height: 125, borderRadius: 8 }}
          />
          <span
            style={{
              fontWeight: 'bold',
              color: '#0078A8',
              fontSize: '1.25rem',
            }}
          ></span>
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
              <Link href="/apparel" className="nav-link" style={navLinkStyle}>
                Apparel
              </Link>
            </NavItem>

            <NavItem>
              <span
                className="nav-link"
                style={navLinkStyle}
                onClick={toggleBookModal}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleBookModal();
                  }
                }}
              >
                Book Haircut
              </span>
            </NavItem>

            <NavItem>
              <Link href="/smp" className="nav-link" style={navLinkStyle}>
                SMP
              </Link>
            </NavItem>

            <NavItem>
              <Link href="/units" className="nav-link" style={navLinkStyle}>
                Units
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

      <Modal
        isOpen={bookModalOpen}
        toggle={toggleBookModal}
        centered
        size="lg"
      >
        <ModalHeader toggle={toggleBookModal} style={{ borderBottom: 'none' }}>
          Book Your Appointment
        </ModalHeader>

        <ModalBody style={{ padding: '0 1.5rem 1.5rem' }}>
          <div
            style={{
              borderRadius: '14px',
              overflow: 'hidden',
              backgroundColor: '#000',
              marginBottom: '1.5rem',
            }}
          >
            {videoUrl.endsWith('.mp4') ? (
      <video
      autoPlay
      muted
      loop
      playsInline
      style={{ width: '100%', display: 'block' }}
    >
      <source src={videoUrl} type="video/mp4" />
    </video>
            ) : (
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe
                  src={videoUrl}
                  title="Book Haircut Video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                />
              </div>
            )}
          </div>

          <div style={{ textAlign: 'center' }}>
            <h4
              style={{
                fontWeight: '700',
                marginBottom: '0.75rem',
                color: '#111',
              }}
            >
              Ready for your next look?
            </h4>

            <p
              style={{
                fontSize: '1rem',
                color: '#555',
                maxWidth: '600px',
                margin: '0 auto 1.25rem',
              }}
            >
              Watch the vibe, see the work, and lock in your next haircut with
              Pure Magic.
            </p>

            <a
              href={booksyLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button style={modalBtnStyle}>Book Now</Button>
            </a>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default MainNavBar;