import React from 'react';
import { CarItem } from './carItem';

//Cars
export class Cars extends React.Component {
    render() {
        return this.props.cars.map((car)=>
        {
        // console.log({car})
        return <CarItem car={car} ReloadDataMethod = {this.props.ReloadDataMethod}></CarItem>
        });
        
    }//end of Render
}//End of Cars