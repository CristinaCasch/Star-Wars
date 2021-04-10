import React from "react";
import { Link } from "react-router-dom";
import { Navbar, DropdownButton, Dropdown, Container } from "react-bootstrap";

export const NavbarMenu = () => {
	return (
		<>
			<Navbar className="navbar navbar-dark bg-dark mx-5 ">
				<Link to="/">
					<Navbar.Brand href="#home">
						<img
							alt=""
							src="https://i.pinimg.com/originals/0c/f7/e1/0cf7e1d82ef31810e99a733492310ca4.png"
							width="130"
							height="60"
							className="d-inline-block align-top"
						/>
					</Navbar.Brand>
				</Link>
				<Navbar.Collapse className="justify-content-end">
					<Link className="nav-link" to="/planets">
						<h5>Planets</h5>
					</Link>
					<Link className="nav-link" to="/characters">
						<h5>Characters</h5>
					</Link>

					<DropdownButton id="dropdown-basic-button" title="0 Favorites" variant="dark">
						<Dropdown.Item href="#/action-1">
							Add favorites <i className="fas fa-trash-alt float-right" />
						</Dropdown.Item>
					</DropdownButton>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
