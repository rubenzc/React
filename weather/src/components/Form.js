import React, { Component } from 'react';

class Form extends Component {
    
    render() { 
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input id="city" type="text" />
                                <label htmlFor="city">City:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select>
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
 
export default Form;