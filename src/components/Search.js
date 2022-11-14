import React from "react";

export default class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            animalData : {},
            idField : ""
        }
    }

    handleChange = e=>{
        this.setState({
            idField: e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        console.log("aqui se hace la petición")
    }
    render(){
        return ( 
            <div>
                <h1>Search</h1>
                <form onSubmit={this.handleSubmit}>
                <input type = "text" 
                placeholder = "Animal ID" 
                value = {this.idField} 
                onChange ={this.handleChange}/>
                </form>
            </div>
        )
    }
}