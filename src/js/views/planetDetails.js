import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Jumbotron, Media, Table, Image, Row, Col, Button } from "react-bootstrap";

const PlanetDetails = () => {
	const { id } = useParams();
	const history = useHistory();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchDPlanets(id);
	}, []);

	const goBack = () => {
		history.goBack();
	};

	return (
		<Container>
			<Jumbotron className="mt-5">
				{store.dplanets && (
					<>
						<Media>
							<Row>
								<Col>
									<Image
										width={500}
										height={300}
										className="mr-3"
										src="https://i.pinimg.com/originals/b9/bc/ba/b9bcba104d09193da79ffc90c1fa2dc7.jpg"
										alt="Generic placeholder"
									/>
								</Col>
								<Col>
									<Media.Body>
										<h5>{store.dplanets && store.dplanets.name}</h5>
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
									<th>Rotation Period</th>
									<th>Orbital Period</th>
									<th>Surface Water</th>
									<th>Name</th>
									<th>Diameter</th>
									<th>Climate</th>
									<th>gravity</th>
									<th>Terrain</th>
									<th>Population</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{store.dplanets ? store.dplanets.rotation_period : ""}</td>
									<td>{store.dplanets ? store.dplanets.orbital_period : ""}</td>
									<td>{store.dplanets ? store.dplanets.surface_water : ""}</td>
									<td>{store.dplanets ? store.dplanets.name : ""}</td>
									<td>{store.dplanets ? store.dplanets.diameter : ""}</td>
									<td>{store.dplanets ? store.dplanets.climate : ""}</td>
									<td>{store.dplanets ? store.dplanets.gravity : ""}</td>
									<td>{store.dplanets ? store.dplanets.terrain : ""}</td>
									<td>{store.dplanets ? store.dplanets.population : ""}</td>
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
export default PlanetDetails;
