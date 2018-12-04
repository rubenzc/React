import React, {Component} from 'react';

class Resume extends React.Component {
    
    showResume = () => {
        const {brand, plan, year} = this.props.dataCar;

        if(!brand || !year || !plan) return null;
        
        return (
            <div className="resumen">
                <h2>Quote resume</h2>
                <li>Brand: {brand}</li>
                <li>Year: {year}</li>
                <li>Plan: {plan}</li>
            </div>
        )
        
    }
    
    render(){


        return(
            <div>
                { this.showResume() }
            </div>
        )
    }
}

export default Resume;