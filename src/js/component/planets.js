import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Container, CardDeck, Button, Col, ButtonToolbar, Row, Image } from "react-bootstrap";

const Planets = () => {
	const { actions, store } = useContext(Context);

	useEffect(() => {
		actions.fetchPlanets();
	}, []);

	return (
		<Container>
			<Row>
				{store.planetList.map((item, index) => {
					console.log("This is item", item);
					return (
						<Col key={index}>
							<br />
							<Card style={{ width: "18rem" }}>
								<Image
									src="https://www.lacasadeel.net/wp-content/uploads/2014/12/Star-Wars-Logo.jpg"
									rounded
									className="card-img-top"
								/>
								<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<Link to={`/planetDetails/${item.uid}`}>
										<Button variant="primary">Go to details</Button>
									</Link>
									<Link onClick={() => actions.addFavorite(item.name, "planets")}>
										<Button variant="outline-dark">
											<i className="far fa-heart" />
										</Button>
									</Link>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default Planets;
