import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar, DropdownButton, Dropdown, Container } from "react-bootstrap";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);
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

					<DropdownButton id="dropdown-basic-button" title={`Favoritos ${store.favorites.length}`}>
						{store.favorites.map((item, index) => {
							return (
								<Dropdown.Item id="item-favorites" key={index} href="#/action-1">
									{item}
									<span onClick={() => actions.deleteFavorites(index)}>
										<i className="fas fa-trash-alt float-right" />
									</span>
								</Dropdown.Item>
							);
						})}
					</DropdownButton>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
