import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck'
import axios from 'axios';

//CarItem
export class CarItem extends React.Component {
    
    //Delete constructor
    constructor() {
        super();
        this.DeleteCar = this.DeleteCar.bind(this);
    }//End of delete constructor

    //Delete the car
    DeleteCar(e) {
        e.preventDefault();
        console.log("Car Deleted!:" +this.props.car._id);

        axios.delete("http://localhost:4000/api/cars/" + this.props.car._id)
            .then(()=>{
                this.props.ReloadDataMethod();
            })
            .catch();
    }//End of delete car

    render() {
        return (
            <div>               
                <Card>
                    <Card.Header as="h5">{this.props.car.title}</Card.Header>
                    <Card.Body >
                        <blockquote className="blockquote">
                            <img src={this.props.car.poster} width="300 " height="300"></img>
                            <footer className="blockquote-footer">
                                {this.props.car.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <br/>
                </Card>
                <br/>
                <Link to={"/edit/" + this.props.car._id} className="btn btn-dark btn-sm mb-2" >Edit</Link><br/>
                <Button variant="danger" size="sm mb-2" onClick={this.DeleteCar}>Delete</Button><br />
            </div>
        );
    }//end of Render
}//End of CarItem