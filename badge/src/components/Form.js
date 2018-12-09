import React from 'react';

class FormExpenses extends React.Component {

    nameExpense = React.createRef();
    quantityExpense = React.createRef();

    addExpense = (e) => {

        //Prevent default
        e.preventDefault();
        //Create object with data
        const expense = {
            nameExpense: this.nameExpense.current.value,
            quantityExpense: this.quantityExpense.current.value
        }
        //Add & send with props
        this.props.addExpense(expense);
        //Reset the form
        e.currentTarget.reset();
    }

    render() {
        return (
            <form onSubmit={this.addExpense}>
                <h2>Add your expenses</h2>
                <div className="campo">
                    <label>Expense name</label>
                    <input ref={this.nameExpense} className="u-full-width" type="text" placeholder="Transport" />
                </div>

                <div className="campo">
                    <label>Quantity</label>
                    <input ref={this.quantityExpense} className="u-full-width" type="text" placeholder="300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Add" />
            </form>
        )
    }

}

export default FormExpenses;