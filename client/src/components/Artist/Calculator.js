import React, { Component } from "react";

const styles = {
  calc: {
    boxShadow: "3px 4px 8px 0px rgba(50, 50, 50, 0.20)"
  }
}

class Calculator extends Component {

  state = {
		goal: "",
		percent: 0,
		price: 0,
		spend: 0,
		own: 0
  };
  
  handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
  };
  
  render() {
    return (
      <div className="card mt-3 sticky-top rounded-0" style={styles.calc}>
        <div className="card-header text-info my-0">
          <span>Calculate Your Ownership %</span>
        </div>
        <div className="card-body bg-light">
          <form >
            <div className="form-group">
              <div>
                <label className="text-secondary mb-0"><small>Available %</small></label>
                <input
                  className="mb-2 form-control rounded-0"
                  type="number"
                  name="percent"
                  value={this.state.percent}
                  onChange={this.handleInputChange}
                  />
              </div>
              <div>
                <label className="text-secondary mb-0"><small>Total Asking Price</small></label>
                <input
                  className="form-control rounded-0 mb-2"
                  type="number"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <label className="text-secondary mb-0"><small>Amount You Wish To Invest</small></label>
                <input
                  className="mb-2 form-control rounded-0"
                  type="number"
                  name="spend"
                  value={this.state.spend}
                  onChange={this.handleInputChange}
                />
              </div>
              <hr />
              <label className=" h5 text-info"><strong><small>Your Ownership</small></strong></label>
              <h3 className="text-success">{(((100 * this.state.spend) / this.state.price) * (this.state.percent / 100)).toFixed(3)} %</h3>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Calculator