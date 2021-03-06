import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddDate extends Component {

    petNameRef = React.createRef();
    animalOwnerRef = React.createRef();
    dateRef = React.createRef();
    timeRef = React.createRef();
    symptomsRef = React.createRef();

    state = { 
        error: false
     }

    createNewDate = e => {
        e.preventDefault();

        const petName = this.petNameRef.current.value,
            animalOwner = this.animalOwnerRef.current.value,
            date = this.dateRef.current.value,
            time = this.timeRef.current.value,
            symptoms = this.symptomsRef.current.value

        if (petName === '' || animalOwner === '' || date === '' || time === '' || symptoms === ''){
            this.setState({
                error: true
            })
        } else {
            const newDate = {
                id : uuid(),
                petName : petName,
                animalOwner : animalOwner,
                date : date,
                time : time,
                symptoms : symptoms
    
            }
            //Send the object to parent to update the state
            this.props.createDate(newDate);

            //Reset
            e.currentTarget.reset();

            this.setState({
                error: false
            })
        }
 
        
    }

    render() { 
        const existError = this.state.error;
        return ( 
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Add your dates here</h2>
                    <form onSubmit={this.createNewDate}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Pet name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input ref={this.petNameRef} type="text" className="form-control" placeholder="Pet name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Animal owner</label>
                        <div className="col-sm-8 col-lg-10">
                            <input ref={this.animalOwnerRef} type="text" className="form-control"  placeholder="Animal owner" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input ref={this.dateRef} type="date" className="form-control" />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
                        <div className="col-sm-8 col-lg-4">
                            <input ref={this.timeRef} type="time" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Symptoms</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea ref={this.symptomsRef} className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Add</button>
                        </div>
                    </div>
                </form>
                { existError ? <div className="alert alert-danger text-center">Todos los campos son obligatorios</div> : ''}
                </div>
            </div>
         );
    }
}

AddDate.propTypes = {
    createDate : PropTypes.func.isRequired
}
 
export default AddDate;