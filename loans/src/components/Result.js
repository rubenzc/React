import React from 'react';

const Result = ({ quantity, term, total }) => (
    <div className="u-full-width result">
        <h2>Resume</h2>
        <p>The quantity requested is: $ {quantity}</p>
        <p>The term requested is: {term} months</p>
        <p>Your monthly payment is: $ { (total / term).toFixed(2) }</p>
        <p>The total quantity to pay is: $ {(total).toFixed(2)}</p>
    </div>
)
 
export default Result;