import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Transaction from './Transaction';

class Block extends Component {
    state = { dispalyTransaction: false };

    toggleTransaction = () => {
        this.setState({ displayTransaction: !this.state.displayTransaction });
    }

    get displayTransaction() {
        const { data } = this.props.block;

        const stringifiedData = JSON.stringify(data);

        const dataDisplay = stringifiedData.length > 15 ?
            `${stringifiedData.substring(0, 30)}...` :
            stringifiedData;

        if (this.state.displayTransaction) {
            return (
                <div>
                <Button
                bsStyle="danger"
                bsSize="small"
                onClick={this.toggleTransaction}
                >
                        Show less
                    </Button>
                    <br />
                    {
                        data.map(transaction => {
                            return(
                            <div key={transaction.id}>
                                <hr />
                                <Transaction transaction={transaction} />
                            </div>
                            );
                        })
                    }
                </div>
            );
        }

        return (
            <div>
                Nb Transactions: {data.length}
                <Button
                    bsStyle="danger"
                    bsSize="small"
                    onClick={this.toggleTransaction}
                >
                    Show more
                </Button>
            </div>
        );


    }

    render() {

        const { timestamp, hash } = this.props.block;

        const hashDisplay = `${hash.substring(0, 15)}...`;

        return (
            <div className='Block'>
                <div>Hash: {hashDisplay}</div>
                <div>Timestamp: {new Date(timestamp).toLocaleString()}</div>
                {this.displayTransaction}
            </div>
        );
    }
}

export default Block;