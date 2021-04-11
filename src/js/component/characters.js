import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Container, Button, Col, Row, Image } from "react-bootstrap";

const Characters = () => {
	const { actions, store } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);

	return (
		<Container>
			<Row>
				{store.peopleList.map((item, index) => {
					return (
						<Col key={index}>
							<br />
							<Card style={{ width: "18rem" }}>
								<Image
									src="https://www.3dnatives.com/es/wp-content/uploads/sites/4/article_starwars.jpg"
									rounded
									className="card-img-top"
								/>
								<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<Link to="/peopleDetails/:id">
										<Button variant="primary">Go to details</Button>
									</Link>
									<Link onClick={() => actions.addFavorite(item.name, "people")}>
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

export default Characters;
