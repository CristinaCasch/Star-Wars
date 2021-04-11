import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Carousel, Container, Button } from "react-bootstrap";

export const Home = () => {
	return (
		<Container>
			<Carousel className="mt-5">
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://img3.s3wfg.com/web/img/images_uploaded/c/e/starwarswallpaper12.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<Link to={`/characters`}>
							<Button variant="primary">GO to Characters</Button>
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://p4.wallpaperbetter.com/wallpaper/500/794/495/nebula-hd-wallpaper-wallpaper-preview.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<Link to={`/planets`}>
							<Button variant="primary">GO to Planets</Button>
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};
