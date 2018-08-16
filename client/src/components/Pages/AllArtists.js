import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Nav from "../Navbar/Nav";
import API from "../../utils/API";
// import MiniCard from "../Artist/MiniCard"

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
		goal: "",
		percent: null,
		price: 0,
		spend: 0,
		own: 0
	};

	
	componentDidMount() {
		this.loadArtists();
	}
	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});

	};
	loadArtists = () => {
		API.getUsers()
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
						<Col size="md-3">
							{/* create own component for reuse */}
							<div className="card mt-3 sticky-top">
								<div className="card-header text-info">
									<h4>Calculate Your Ownership %</h4>
								</div>
								<div className="card-body bg-light">
									<form >
										<div className="form-group ">
											<div>
												<label className="text-secondary">Available %</label>
												<input
													className="form-control"
													type="number"
													name="percent"
													value={this.state.percent}
													onChange={this.handleInputChange} />
											</div>
											<div>
												<label className="text-secondary">Total Asking Price</label>
												<input 
												className="form-control" 
												type="number"
												name="price"
												value={this.state.price}
												onChange={this.handleInputChange}
												/>
											</div>
											<div>
												<label className="text-secondary">Amount You Wish To Invest</label>
												<input 
												className="form-control" 
												type="number"
												name="spend"
												value={this.state.spend}
												onChange={this.handleInputChange}
												 />
											</div>
											<hr />
											<label className=" h4 text-info">Your Ownership</label>
											{/* fix math-To calculate a percentage of a percentage, 
											convert both percentages to fractions of 100, or to decimals,
											 and multiply them. 
											 For example, 50% of 40% is: ​50⁄100 × ​40⁄100 = 0.50 × 0.40 = 0.20 = ​20⁄100 = 20%.
											  It is not correct to divide by 100 and use the percent sign at the same time. */}
											<h1 className="text-success">{(((100*this.state.spend)/this.state.price)*(this.state.percent/100)).toFixed(3)} %</h1>
										</div>
									</form>
								</div>
							</div>
						</Col>
						<Col size="md-6">
							<div className="card-columns">
								{/* <MiniCard /> */}
								{this.state.artists.map(artist => artist.imageLink ? (
									<div className="card mt-2 rounded">
										<div className="card-header bg-secondary" style={styles.cardHeader}>
											<h3>
												{artist.name}
												<button className="btn btn-sm btn-danger right p-0 d-inline bd-highlight  float-right"><small>Add to portfolio</small></button>
											</h3>
										</div>
										<div className="card-body">
											<img className="text-center rounded-circle" alt="null" height="150px" width="150px" src={artist.imageLink} />
											<h5>About me: {artist.bio}</h5>
											<p>Investment Opprtunity: {artist.goal}</p>
											<p>Media Links: <a href={artist.songLink}>{artist.songLink}</a></p>
										</div>
										<div className="card-footer" style={styles.cardFooter}>
										</div>
									</div>
								) : (null))}
							</div>
						</Col>
						<Col size="md-3" />
					</Row>
				</Container>

			</div>
		)
	}
}