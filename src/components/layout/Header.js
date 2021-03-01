import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function Header() {
	return (
		<Navbar bg="dark" variant="dark" expand fixed="top">
			<Navbar.Brand>
				<Link to="/">Home</Link> | <Link to="/about">About</Link>
			</Navbar.Brand>
		</Navbar>
	);
}

export default Header;
