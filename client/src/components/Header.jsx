import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Navbar.Brand as={Link} href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          DASHBOARD MANAGEMENT
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Project</Navbar.Link>
        <Navbar.Link href="#">Login</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
