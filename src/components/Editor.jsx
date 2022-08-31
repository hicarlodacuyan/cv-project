/* eslint-disable no-useless-constructor */
import './Editor.css';
import React, { Component } from 'react';

class Editor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="editor-container">
                <div className='heading-container'>
                    <h2 className='editor-title'>Editor</h2>
                    <p className='editor-para'>Completely fill-out the fields for best results</p>
                </div>
                <form className='contact-details' onSubmit={this.props.submitHandler}>
                    <h3 className='contact-title'>Contact details</h3>
                    <div className='contact-inputs'>
                        <input 
                            type="text"  
                            name="firstName" 
                            placeholder='First name' 
                            value={this.props.state.firstName} 
                            onChange={this.props.changeHandler}
                            required />
                        <input 
                            type="text"  
                            name="lastName" 
                            placeholder='Last name'
                            value={this.props.state.lastName} 
                            onChange={this.props.changeHandler}
                            required />
                        <input 
                            type="text"  
                            name="title" 
                            value={this.props.state.title} 
                            onChange={this.props.changeHandler} 
                            placeholder='Title' 
                            required />
                        <input 
                            type="text"  
                            name='address' 
                            value={this.props.state.address} 
                            onChange={this.props.changeHandler} 
                            placeholder='Address' 
                            required />
                        <input 
                            type="number" 
                            name='phoneNumber' 
                            value={this.props.state.phoneNumber} 
                            onChange={this.props.changeHandler} 
                            placeholder='Phone number' 
                            required />
                        <input 
                            type="email" 
                            name='email' 
                            value={this.props.state.email} 
                            onChange={this.props.changeHandler} 
                            placeholder='Email' 
                            required />
                    </div>
                    <input className='add-btn' type="submit" value="Add" />
                </form>

                <form className='experience'>
                    <h3 className='experience-title'>Experience</h3>
                    <div className='experience-inputs'>
                        <input className='position' type="text" placeholder='Position' />
                        <input className='company' type="text" placeholder='Company' />
                        <input className='experience-location' type="text" placeholder='Location' />
                        <input className='experience-from' type="date" placeholder='From' />
                        <input className='experience-to' type="date" placeholder='To' />
                    </div>
                    <input className='add-btn' type="submit" value="Add" />
                </form>

                <form className='education'>
                    <h3 className='education-title'>Education</h3>
                    <div className='education-inputs'>
                        <input className='institution' type="text" placeholder='Institution' />
                        <input className='field-of-study' type="text" placeholder='Field of Study' />
                        <input className='education-location' type="text" placeholder='Location' />
                        <input className='education-from' type="date" placeholder='From' />
                        <input className='education-to' type="date" placeholder='To' />
                    </div>
                    <input className='add-btn' type="submit" value="Add" />
                </form>
            </section>
        );
    }
}

export default Editor;