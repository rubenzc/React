import React,  { Component  } from 'react';

class Expense extends Component {
    render(){
        const {nameExpense, quantityExpense} = this.props.expense;

        return(
            <li className="gastos">
                <p>
                    {nameExpense}
                    <span className="gasto"> $ {quantityExpense} </span>
                </p>
            </li>
        )

    }
}

export default Expense;