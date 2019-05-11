import * as React from 'react'

export default class ModelDetails extends React.Component{
  
  render(){
    return(
    <div>
      <ul>
       <li>Name: {this.props.data.name}</li>
       <li>Manufacturer: {this.props.data.manufacturer}</li>
       <li>Year: {this.props.data.year}</li>
       <li>Origin: {this.props.data.origin}</li>
     </ul>
   </div>
    ) 
  }
}