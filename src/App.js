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
        isMetaMask: false
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

    getAuctionAddress = async (event) => {
        event.preventDefault();

        //this.setState({message1: 'Getting current auction address...'});

        let currentAuctionAddress = '0x';

        try {
            //currentAuctionAddress = await icoManagerContract.methods.currentAuction().call();
        } catch (err) {
            console.log(err);
        }

        //this.setState({message1: 'Current auction address fetched successfully : ' + currentAuctionAddress});
    };

    render() {

        if (this.state.isMetaMask) {
            return (
                <div className="App">
                    <div className="Border">
                        <h2>Ethereum Dapp</h2>

                        <h2 className="display-1 text-muted">{this.state.message1}</h2>

                        <Form inline onSubmit={this.addICOPhase}>
                            <FormGroup>
                                <FormControl
                                    type="text"
                                    name="phaseName"
                                    placeholder="enter"
                                    value={this.state.phaseName}
                                    onChange={event => this.setState({phaseName: event.target.value})}/>
                                </FormGroup>
                            <FormGroup>
                                <Button bsSize="large" bsStyle="warning" type="submit">
                                    Send Method
                                </Button>
                            </FormGroup>
                        </Form>

                        <br/>
                        <hr width="100"/>

                        <Button bsSize="large" bsStyle="info" onClick={this.getAuctionAddress}>Call Method</Button>

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
