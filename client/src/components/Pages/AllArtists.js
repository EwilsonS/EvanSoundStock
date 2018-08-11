import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Nav from "../Navbar/Nav";
import API from "../../utils/API";
import MiniCard from "../Artist/MiniCard"

const styles = {
	cardHeader: {
		// backgroundColor: "#02183a",
		borderTop: "8px solid #13a2b8",
		color: "#02183a"
	},
	cardFooter: {
		backgroundColor: "#02183a",
		borderTop: "5px solid #13a2b8",
		color: "#237c9a"
	},
	input: {
		borderColor: "#237c9a",
		boxShadow: "0 0 0 3px rgba(35,124,154, .25)",
		color: "white"
	},
	wrapDiv: {
		width: "600px",
		margin: "15px auto",
		position: "relative"
	},
	sidebar: {
		// width: "190px",
		position: "fixed",
		marginLeft: "2%",
		marginTop: "2%"
	}
}

export class AllArtists extends Component {

	state = {
		artists: [],
		email: "",
		name: "",
		imageLink: "",
		songLink: "",
		bio: "",
		goal: ""
	};

	componentDidMount() {
		this.loadArtists();
	}

	loadArtists = () => {
		API.getArtists()
			.then(res =>
				this.setState({
					artists: res.data
				}))
			.catch(err => console.log(err));
	};

	render() {
		return (


			<div>
				<Nav />
				<Container fluid>
					<Row>
						<Col size="md-3" style={styles.wrapDiv}>
						{/* create own component for reuse */}
							<div className="card " style={styles.sidebar}>
								<div className="card-header text-info">
									<h4>Calculate Your Ownership %</h4>
								</div>
								<div className="card-body bg-light">
									<form >
										<div className="form-group ">
											<div>
												<label className="text-secondary">Available %</label>
												<input className="form-control" type="number" />
											</div>
											<div>
												<label className="text-secondary">Total Asking Price</label>
												<input className="form-control" type="number" />
											</div>
											<div>
												<label className="text-secondary">Amount You Wish To Invest</label>
												<input className="form-control" type="number" sh to />
											</div>
											<hr />
											<label className="text-secondary">Your Ownership</label>
											<input className="form-control" type="number" />
										</div>
									</form>
								</div>
							</div>
						</Col>
						<Col size="md-6">
							<div className="card-columns">
								{/* <MiniCard /> */}
								{this.state.artists.map(artist => (
									<div className="card mt-2 rounded">
										<div className="card-header bg-secondary" style={styles.cardHeader}>
											<h3>
												{artist.name}
												<button className="btn btn-sm btn-danger right p-2 bd-highlight  float-right">Invest</button>
											</h3>
										</div>
										<div className="card-body">
											<img className="text-center rounded-circle" height="150px" width="150px" src={artist.imageLink} />
											<h5>About me: {artist.bio}</h5>
											<p>Investment Opprtunity: {artist.goal}</p>
											<p>Media Links: <a href={artist.songLink}>{artist.songLink}</a></p>
										</div>
										<div className="card-footer" style={styles.cardFooter}>
										</div>
									</div>
								))}
							</div>
						</Col>
						<Col size="md-3" />
					</Row>
				</Container>

			</div>
		)
	}
}