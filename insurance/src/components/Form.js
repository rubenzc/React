import React from 'react';

class Form extends React.Component{

    //refs are used to read value from field
    brandRef = React.createRef();
    yearRef = React.createRef();
    basicPlanRef = React.createRef();
    fullPlanRef = React.createRef();

    //Read data from form fields
    quoteInsurance = (e) => {
        //Avoid insert parameters in url when submit
        e.preventDefault();
        //GET DATA

        //Read the plan
        const plan = this.basicPlanRef.current.checked ? 'basic' : 'full';

        //Create object
        const infoCar = {
            brand: this.brandRef.current.value,
            year: this.yearRef.current.value,
            plan: plan
        }
        
        //Send data to father component
        this.props.quoteInsurance(infoCar);

        //Reset the form
        e.currentTarget.reset();

    }

    render() {
        return (
            <form className="cotizar-auto" onSubmit={this.quoteInsurance}>
                <div className="campo">
                    <label>Brand:</label>
                    <select name="brand" ref={this.brandRef}>
                        <option value="american">American</option>
                        <option value="european">European</option>
                        <option value="asian">Asian</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Year:</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" name="plan" value="basic" ref={this.basicPlanRef}/> Basic
                    <input type="radio" name="plan" value="full" ref={this.fullPlanRef}/> Full
                </div>

                <button type="submit" className="boton">Quote</button>
            </form>
        );
    }

}

export default Form;