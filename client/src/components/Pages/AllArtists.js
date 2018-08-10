import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Nav from "../Navbar/Nav";
import API from "../../utils/API";
import MiniCard from "../Artist/MiniCard"

export const AllArtists = () => (
	<div>
		<Nav />
		<Container>
			<Row>
				<Col size="md-12">
					<div className="card-columns">
						<MiniCard />
					</div>
				</Col>
			</Row>
		</Container>

	</div>

)