import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    
    //Create refs
    cityRef = React.createRef();
    countryRef = React.createRef();

    answerSearch = (e) => {
        e.preventDefault();

        //Read refs and create the object
        const answer = {
            city: this.cityRef.current.value,
            country: this.countryRef.current.value
        }
    //Send the props
        this.props.dataSearch(answer);

    //Reset
    e.currentTarget.reset();
    }

    render() { 
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.answerSearch}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.cityRef} id="city" type="text" />
                                <label htmlFor="city">City:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.countryRef}>
                                    <option value="" defaultValue>Choose a country:</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES">España</option>
                                    <option value="US">Estado Unidos</option>
                                    <option value="MX">México</option>
                                    <option value="PE">Perú</option>
                                </select>
                                <label htmlFor="country">Country:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-2">
                                <input type="submit" className="waves-effect waves-light btn-large yellow-accent-4" value="Search..." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Form.propTypes = {
    dataSearch: PropTypes.func.isRequired
}
 
export default Form;