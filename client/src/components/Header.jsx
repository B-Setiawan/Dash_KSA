import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Navbar.Brand as={Link} href="#">
        <span className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
          DASHBOARD
        </span>
      </Navbar.Brand>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-9" color="gray" pill>
          <FaMoon />
        </Button>
        <Button gradientDuoTone="purpleToBlue" className="text-sm">
          <CgLogIn className="mr-2 size-4 self-center" />
          Login
        </Button>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active={path === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/Hrga" active={path === "/Hrga"}>
          HRGA
        </Navbar.Link>
        <Navbar.Link href="/Finance" active={path === "/Finance"}>
          Finance
        </Navbar.Link>
        <Navbar.Link href="/Sales" active={path === "/Sales"}>
          Sales
        </Navbar.Link>
        <Navbar.Link href="/Project" active={path === "/Project"}>
          Project
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
