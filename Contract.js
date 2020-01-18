import React, { Component } from "react";
import web3 from "./web3";
import lottery from "./car";

class Contract extends Component {
  state = {
    owner: "",
    balance: "",
    value: "",
    message: ""
  };

  async componentDidMount() {
    // assign the owner variable with the address of  the owner
    const owner = await lottery.methods.owner().call();
    // // get the players from the contract and put them in the players array
    // const players = await lottery.methods.getPlayers().call();
    // // get the balance of the lottery contract
    // const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({ owner });
  }
  // use arrow function to not worry about binding this
  onSubmit = async event => {
    // make sure that the form does not submit itself
    event.preventDefault();

    // let the user know that it will take some time to get ownership of the car
    this.setState({ message: "Waiting on transaction success..." });

    // to send transaction, specify account used to send transaction

    const accounts = await web3.eth.getAccounts();

    await lottery.methods.setOwner().send({
      from: accounts[0],
      // the value of this.state.value is in ether so convert it to wei
      value: web3.utils.toWei(this.state.value, "ether")
    });

    this.setState({ message: "You are the owner!" });
  };

  // onClick = async (event) => {
  //   const accounts  = await web3.eth.getAccounts();
  //   // tell the user to wait
  //   this.setState({message: 'Winner will be displayed in a few seconds... Drumroll!!'})
  //   await lottery.methods.pickWinner().send({
  //     from: accounts[0]
  //   });

  //   this.setState({message: 'A winner has been picked'});
  // };

  render() {
    return (
      <div>
        <h2>Car Contract</h2>
        <p>
          This contract is managed by {this.state.owner}. After sigining this
          contract you will temporarily become the owner of the contract and
          after the contract expires {this.state.owner} will remain as the owner
          of the car
        </p>

        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Want to Rent a Car?</h4>
          <div>
            <label> Amount of ether to enter </label>
            <input
              // set the value property to whatever the user types in for the input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </div>

          <button>Enter</button>
        </form>

        <hr />
        {/* <h4>Ready to pick a winner?</h4>
      <button onClick={this.onClick}>Pick a Winner</button> */}

        <hr />

        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default Contract;
