import React from "react";
import Head from "next/head";
import MainNavbar from "../components/MainNavBar";

import Footer from "../components/Footer";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button, CardImg } from "reactstrap";
import EventbriteCheckoutButton from "@/components/EventbriteCheckoutButton";

export default function EventCheckout() {
  return (
    <>
    <MainNavbar/>
    <EventbriteCheckoutButton/>

      <Footer />
    </>
  );
}
