import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import NavSmall from "../Navbar/NavSmall";
import Calculator from "../Artist/Calculator"
import MiniCard from "../Artist/MiniCard"
import { LoginDashboard } from "../Artist/LoginDashboard";
// import "./allArtists.css"

export class AllArtists extends Component {

	render() {
		return (
			<div>
				<NavSmall />
				<Container fluid>
					<Row>
						<Col size="md-1"/>
						<Col size="md-2">
							<Calculator />
						</Col>
						<Col size="md-6">
							<MiniCard />
						</Col>
						<Col size="md-2">
						<LoginDashboard/>
						</Col>
						<Col size="md-1"/>
					</Row>
				</Container>
			</div>
		)
	}
}