import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Container, CardDeck, Button, Col, ButtonToolbar, Row, Image } from "react-bootstrap";

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
									src="https://www.lacasadeel.net/wp-content/uploads/2014/12/Star-Wars-Logo.jpg"
									rounded
									className="card-img-top"
								/>
								<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<Link>
										<Button variant="primary">Go to details</Button>
									</Link>
									<Button>
										<i className="fa fa-heart" />
									</Button>
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
