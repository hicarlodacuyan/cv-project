/* eslint-disable no-useless-constructor */
import './Preview.css';
import React, { Component } from 'react';

class Preview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="preview-container">
                <h2 className='preview-title'>Preview</h2>
                <div className='output-preview'>
                    <h1>{this.props.state.contactDetails[0]}</h1>
                    <h1>{this.props.state.contactDetails[1]}</h1>
                    <p>{this.props.state.contactDetails[2]}</p>
                    <p>{this.props.state.contactDetails[3]}</p>
                    <p>{this.props.state.contactDetails[4]}</p>
                    <p>{this.props.state.contactDetails[5]}</p>
                </div>
                <button className='print-btn'>Print</button>
            </section>
        );
        
    }
}

export default Preview;