import React, { useState, Fragment } from 'react';
import {calculateTotal} from '../helpers';

const Form = (props) => {

    const {quantity, saveQuantity, term, saveTerm, total, saveTotal, saveLoading} = props;

    //Define state
    const [error, saveError] = useState(false);

    //When user submit
    const calculateLoan = e => {
        e.preventDefault();

        //Validate
        if ( quantity === 0 || term === '') {
            saveError(true);
            return;
        }

        //Delete previous error
        saveError(false);

        //Enable spinner
        saveLoading(true);

        setTimeout(() => {
            //Quote
            const total = calculateTotal(quantity, term);
            //When quote calculated, save the total
            saveTotal(total);

            //Unable spinner
            saveLoading(false);
        }, 2000);

    }

    return ( 
        <Fragment>
            <form onSubmit={ calculateLoan }>
            <div className="row">
                <div>
                    <label>Loan quantity</label>
                    <input 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Example: 3000"
                        onChange={ e => saveQuantity( parseInt(e.target.value)) }
                    />
                </div>
                <div>
                    <label>Term to pay</label>
                    <select 
                        className="u-full-width"
                        onChange={ e => saveTerm( parseInt(e.target.value)) }
                    >
                        <option value="">Select</option>
                        <option value="3">3 months</option>
                        <option value="6">6 months</option>
                        <option value="12">12 months</option>
                        <option value="24">24 months</option>
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Calculate" 
                        className="button-primary u-full-width" 
                    />
                </div>
            </div>
            </form>

            { (error) ?  <p className="error">All fields are obligatory</p> : null}

        </Fragment>

    )
}
 
export default Form;