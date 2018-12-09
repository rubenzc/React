import React, {Component } from 'react';

class List extends Component{

    render(){
        return(
            <div className="expenses-spent">
                <h2>Expenses list</h2>
                {console.log(this.props.expenses)}
            </div>
        )
    }

}

export default List;