import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Jumbotron, Media, Table, Image, Row, Col, Button } from "react-bootstrap";

const PeopleDetails = () => {
	const { id } = useParams();
	const history = useHistory();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchCharacter(id);
	}, []);
	console.log(store.people);
	const goBack = () => {
		history.goBack();
	};

	return (
		<Container>
			<Jumbotron className="mt-5">
				{store.people && (
					<>
						<Media>
							<Row>
								<Col>
									<Image
										width={500}
										height={300}
										className="mr-3"
										src="https://i.pinimg.com/originals/6a/2d/cf/6a2dcf8aef34b630422880dd46034a9a.jpg"
										alt="Generic placeholder"
									/>
								</Col>
								<Col>
									<Media.Body>
										<h5>{store.people && store.people.name}</h5>
										<p>
											Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
											ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
											tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
											Donec lacinia congue felis in faucibus.
										</p>
									</Media.Body>
								</Col>
							</Row>
						</Media>
						<Table responsive="sm">
							<thead>
								<tr>
									<th>Name</th>
									<th>Height</th>
									<th>Mass</th>
									<th>Hair color</th>
									<th>Skin Color</th>
									<th>Eye Color</th>
									<th>Birth Year</th>
									<th>Gender</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{store.people ? store.people.name : ""}</td>
									<td>{store.people ? store.people.height : ""}</td>
									<td>{store.people ? store.people.mass : ""}</td>
									<td>{store.people ? store.people.hair_color : ""}</td>
									<td>{store.people ? store.people.skin_color : ""}</td>
									<td>{store.people ? store.people.eye_color : ""}</td>
									<td>{store.people ? store.people.birth_year : ""}</td>
									<td>{store.people ? store.people.gender : ""}</td>
								</tr>
							</tbody>
						</Table>
					</>
				)}

				<Link to="/">
					<Button variant="primary">Back to home</Button>
				</Link>
			</Jumbotron>
		</Container>
	);
};

export default PeopleDetails;
