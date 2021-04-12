import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, useHistory } from "react-router-dom";
import { Container, Jumbotron, Media, Table, Image, Row, Col } from "react-bootstrap";

const PeopleDetails = () => {
	const { id } = useParams();
	const history = useHistory();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);

	const goBack = () => {
		history.goBack();
	};

	return (
		<Container>
			<Jumbotron className="mt-5">
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
								<h5>Heading</h5>
								<p>
									Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
									sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
									turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
									felis in faucibus.
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
							<td>1</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td />
						</tr>
					</tbody>
				</Table>
			</Jumbotron>
		</Container>
	);
};

export default PeopleDetails;
