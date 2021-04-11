import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, useHistory } from "react-router-dom";
import { Container, Jumbotron, Media } from "react-bootstrap";

const PlanetDetails = () => {
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
			<Jumbotron>
				<Media>
					<img
						width={300}
						height={200}
						className="mr-3"
						src="https://i.pinimg.com/originals/6a/2d/cf/6a2dcf8aef34b630422880dd46034a9a.jpg"
						alt="Generic placeholder"
					/>
					<Media.Body>
						<h5>Media Heading</h5>
						<p>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
							commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
							condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</p>
					</Media.Body>
				</Media>
			</Jumbotron>
		</Container>
	);
};

export default PlanetDetails;
