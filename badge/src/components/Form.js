import React, {Component} from 'react';

class FormExpenses extends React.Component {

    render() {
        return (
            <form>
                <h2>Add your expenses</h2>
                <div className="campo">
                    <label>Expense name</label>
                    <input className="u-full-width" type="text" placeholder="Ej. Transport" />
                </div>

                <div className="campo">
                    <label>Quantity</label>
                    <input className="u-full-width" type="text" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        )
    }

}

export default FormExpenses;