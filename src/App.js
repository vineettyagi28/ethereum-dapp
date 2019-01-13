import React, {Component} from 'react';
import './App.css';
import web3 from './web3';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import {abi, address} from './contract';

let contract;
class App extends Component {

    state = {
        message1 : '',
        isMetaMask: false,
        value: 0
    };

    async componentDidMount() {

        if (typeof window.web3 !== 'undefined') {
            console.log('web3 is enabled');
            if (web3.currentProvider.isMetaMask === true) {
                await this.setState({isMetaMask: true});
                console.log('MetaMask is active');
            } else {
                console.log('MetaMask is not available')
            }
        } else {
            console.log('web3 is not found')
        }

        if (this.state.isMetaMask) {
            contract = new web3.eth.Contract(abi, address);
        }
    }

    addICOPhase = async (event) => {
        event.preventDefault();

        const accounts = await web3.eth.getAccounts();

        //this.setState({message1: 'Waiting on transaction success..'});
        try {
            // await icoManagerContract.methods.addICOPhase(phaseName, startPrice, reservePrice,
            //     minimumBidInWei, claimPeriod, walletAddress, intervalDuration, offerings).send(
            //     {
            //         from: accounts[0],
            //         gas: '1000000'
            //     }
            // );

            //this.setState({message1: 'New ICO phase has been successfully started'});
        } catch (err) {
            this.setState({message1: 'Error in adding new ICO phase'});
        }
        this.setState({
            //clear state
        });

    };

    getOwnerAddress = async (event) => {
        event.preventDefault();

        let ownerAddress = '0x';

        try {
            ownerAddress = await contract.methods.owner().call();
            alert(ownerAddress);
        } catch (err) {
            console.log(err);
        }

        //this.setState({message1: 'Current auction address fetched successfully : ' + currentAuctionAddress});
    };

    async submitParticipate(event){
        event.preventDefault();

        const value = "0.005";

        const accounts = await web3.eth.getAccounts();

        try {
            const response = await contract.methods.participate().send({
                "from": accounts[0],
                "value": web3.utils.toWei(value)
            });

            console.log(response);
        }catch(err){
            console.log(err);
        }

    }

    render() {

        if (this.state.isMetaMask) {
            return (
                <div className="App">
                    <div className="Border">
                        <h2>Ethereum Dapp</h2>

                        <h2 className="display-1 text-muted">{this.state.message1}</h2>

                        <Form inline onSubmit={this.submitParticipate}>
                            <FormGroup>
                                <FormControl
                                    type="text"
                                    name="value"
                                    placeholder="enter the value"
                                    value={this.state.value}
                                    onChange={event => this.setState({value: event.target.value})}/>
                                </FormGroup>
                            <FormGroup>
                                <Button bsSize="large" bsStyle="warning" type="submit">
                                    Participate
                                </Button>
                            </FormGroup>
                        </Form>

                        <br/>
                        <hr width="100"/>

                        <Button bsSize="large" bsStyle="info" onClick={this.getOwnerAddress}>Get Owner Address</Button>

                        <br/><br/>

                        <hr width="100"/>


                    </div>

                    <br/><br/>

                </div>
            );
        } else {
            return (
                <div className="App">
                    <h2>You are using a decentralized application, for which you need metamask</h2>
                    <br/><br/><br/><br/><br/>
                    <a href="https://metamask.io">
                        <img src="download-metamask-dark.png"></img>
                    </a>
                </div>
            );
        }
    }
}

export default App;
