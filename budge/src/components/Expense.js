import React,  { Component  } from 'react';
    import PropTypes from 'prop-types';

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

Expense.propTypes = {
    expense: PropTypes.object.isRequired
}

export default Expense;