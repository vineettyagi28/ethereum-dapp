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
        phaseName: ''
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

        this.setState({message1: 'Waiting on transaction success..'});
        try {
            await contract.methods.participate().send(
                {
                    from: accounts[0],
                    gas: '1000000',
                    value: web3.utils.toWei(this.state.phaseName)
                }
            );

            this.setState({message1: 'Successs'});
        } catch (err) {
            this.setState({message1: 'Error in participating'});
        }
        this.setState({
            //clear state
        });

    };

    makeLuckyDraw = async (event) => {
        event.preventDefault();

        const accounts = await web3.eth.getAccounts();

        this.setState({message1: 'Waiting on result declaration..'});
        try {
            await contract.methods.declare_winner().send(
                {
                    from: accounts[0],
                    gas: '1000000'
                }
            );

            this.setState({message1: 'Successs'});
        } catch (err) {
            this.setState({message1: 'Error in result'});
        }
        this.setState({
            //clear state
        });

    };

    getOwnerAddress = async (event) => {
        event.preventDefault();

        this.setState({message1: 'Getting current auction address...'});

        let currentOwnerAddress = '0x';

        try {
            currentOwnerAddress = await contract.methods.manager().call();
        } catch (err) {
            console.log(err);
        }

        this.setState({message1: 'Current owner address fetched successfully : ' + currentOwnerAddress});
    };

    getWinnerAddress = async (event) => {
        event.preventDefault();

        this.setState({message1: 'Getting current winner address...'});

        let currentOwnerAddress = '0x';

        try {
            currentOwnerAddress = await contract.methods.winner().call();
        } catch (err) {
            console.log(err);
        }

        this.setState({message1: 'Current winner address fetched successfully : ' + currentOwnerAddress});
    };

    withdrawAmount = async (event) => {
        event.preventDefault();

        const accounts = await web3.eth.getAccounts();

        this.setState({message1: 'Waiting for confirmation..'});
        try {
            await contract.methods.withdrawFunds().send(
                {
                    from: accounts[0],
                    gas: '1000000'
                }
            );
            this.setState({message1: 'Successs'});
        } catch (err) {
            this.setState({message1: 'Error in result'});
        }
        this.setState({
            //clear state
        });
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
                                <br/><br/>
                            <FormGroup>
                                <Button bsSize="large" bsStyle="warning" type="submit">
                                    Send Method
                                </Button>
                            </FormGroup>
                        </Form>

                        <br/>
                        <hr width="100"/>

                        <Button bsSize="large" bsStyle="info" onClick={this.getOwnerAddress}>Get Owner Address Method</Button>

                        <br/><br/>

                        <hr width="100"/>

                        <br/>
                        <hr width="100"/>

                        <Button bsSize="large" bsStyle="info" onClick={this.getWinnerAddress}>Check Winner</Button>

                        <br/><br/>

                        <hr width="100"/>

                        <hr width="100"/>

                        <br/>
                        <hr width="100"/>

                        <Button bsSize="large" bsStyle="info" onClick={this.makeLuckyDraw}>Declare Lucky Draw</Button>

                        <br/><br/>

                        <hr width="100"/>

                        <br/>
                        <hr width="100"/>

                        <Button bsSize="large" bsStyle="warning" onClick={this.withdrawAmount}>Claim Money</Button>

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
