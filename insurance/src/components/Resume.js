import React from 'react';
import {primeraMayuscula} from '../helper';

class Resume extends React.Component {
    
    showResume = () => {
        const {brand, plan, year} = this.props.dataCar;

        if(!brand || !year || !plan) return null;
        
        return (
            <div className="resumen">
                <h2>Quote resume</h2>
                <li>Brand: { primeraMayuscula (brand) }</li>
                <li>Year: { primeraMayuscula (year) }</li>
                <li>Plan: { primeraMayuscula (plan) }</li>
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