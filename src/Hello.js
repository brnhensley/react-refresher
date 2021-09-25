import React, { Component } from 'react';

export default class Hello extends Component {
    render() {
        const p = this.props;
        return <p>Hi {p.to} from {p.from}{"!".repeat(p.num)}</p>;
    }
}
