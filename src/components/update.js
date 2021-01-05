import React from 'react';
import axios from 'axios';

//Update
export class Update extends React.Component {

    //Update information
    constructor() {
        super();

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }//End of super
    }//End of constructor

    //Cahange car name 
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }//End of change car name 

    //Change car year
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        })
    }//End of change car year

    //Change car poster
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        })
    }//End of change car poster

    //Submit button
    onSubmit(e) {
        e.preventDefault();
        alert("Car: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);

        //Add new car
        const newCar = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        };

        //Post it to server
        axios.post('http://localhost:4000/api/cars', newCar)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });


    }//End of submit

    render() {
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Car Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeTitle} />
                    </div>

                    <div className="form-group">
                        <label>Add Release Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeYear} />
                    </div>

                    <div className="form-group">
                        <label>Add Poster Url: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangePoster} />
                    </div>
                    
                    <div className="form-group"><br/>
                        <input type="submit" value="Add Car" className="btn btn-dark" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </form>

            </div>
        );
    }//end of Render
}//End of Update