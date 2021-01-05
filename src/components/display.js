import React from 'react';
import { Cars } from './cars';
import axios from 'axios';

//Display
export class Display extends React.Component {

    //Reload data constructor
    constructor() {
        super();
        this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
    }
    state = {
        cars: []//cars array
    };//end of state

    //Axios 
    //copmponent life cycle hook, setting it to cars array
    componentDidMount() {
        axios.get('http://localhost:4000/api/cars')//json link to display data
            .then((response) => {
                this.setState({ cars: response.data });
            })
            .catch((error) =>{
                console.log(error)
            });
    }//end of didMoumnt

    //Reload the data 
    ReloadDataMethod(){
        axios.get('http://localhost:4000/api/cars')
        .then((response)=>{
        this.setState({cars: response.data})
        })
        .catch((error)=>{
        console.log(error)
        });
        }
        
    render() {
        return (
            <div>
                <Cars cars={this.state.cars} ReloadDataMethod = {this.ReloadDataMethod}></Cars>
            </div>
        );
    }//end of Render
}//End of display