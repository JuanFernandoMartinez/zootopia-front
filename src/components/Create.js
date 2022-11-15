import React from "react";
import {postPrayer} from '../util/communicator'
import './css/create.css'

export default class create extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            form: {
                name:"",
                age:"",
                sex:"F",
                weight:"",
                height:"",
                arrivalDate:"",
                
            }
        }
    }

    handleSubmit = async e =>{
        e.preventDefault();
        
        let response = await postPrayer("http://localhost:8081/animals",this.state.form);
        console.log(response)
    }

    handleChange = e=>{
        
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        
    }

    handleDateChange = e=>{
        
        this.setState({
            form: {
                ...this.state.form,
                arrivalDate: e.target.value+" 09:30:16"
            }
        })

        
    }

    

    render(){
        return (
            <div>
                <form className="form w-25 m-auto card p-3 shadow" onSubmit={this.handleSubmit}>

                    <h1 className ="text-center">Create Animal</h1>

                    <div className ="mb-3 ">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type ="text"  name ="name" 
                    id="name" className="form-control w-75" 
                    onChange = {this.handleChange} 
                    value = {this.state.form.name}></input>
                    </div>


                    <div className ="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type ="number"  name ="age"
                    id="age" className="form-control w-25 text-center" 
                    onChange = {this.handleChange} 
                    value = {this.state.form.age}>    
                    </input>
                    </div>


                    <div className ="mb-3">
                    <label htmlFor="sex" className="form-label">Sex</label>
                    <select id = "sex" name = "sex" onChange={this.handleChange} 
                    className = "form-control w-25 text-center" 
                    selected="F">
                        <option>F</option>
                        <option>M</option>
                    </select>
                    </div>


                    <div className ="mb-3">
                    <label htmlFor="weight" className="form-label">weight</label>
                    <input type ="number"  name ="weight" 
                    id="weight" className="form-control w-25 text-center" 
                    onChange = {this.handleChange} 
                    value = {this.state.form.weight}>
                    </input>
                    </div>

                    <div className ="mb-3">
                    <label htmlFor="height" className="form-label">height</label>
                    <input type ="number"  name ="height" 
                    id="height" className="form-control w-25 text-center" 
                    onChange = {this.handleChange} 
                    value = {this.state.form.height}>
                    </input>
                    </div>

                    <div className ="mb-3">
                    <label htmlFor="arrivalDate" className="form-label">Arrival date</label>
                    <br/>
                    <input type ="date"  name ="arrivalDate" 
                    id="arrivalDate" 
                    onChange = {this.handleDateChange} 
                    value = {this.state.form.arrivalDate}>
                        
                    </input>
                    <input id="arrivalLabel" value = {this.state.form.arrivalDate} disabled>
                        
                        </input>
                    </div>

                    

                    

                    <div className = "w-25 m-auto">
                        <button type = "submit" className="btn btn-danger p-2 w-100">Save</button>
                    </div>
                    
                </form>
            </div>)
    }
}