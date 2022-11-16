import React from "react";
import {getPrayer} from '../util/communicator'

export default class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            animalData : {
                id:'',
                name: '',
                age: '',
                sex: '',
                weight:'',
                height:'',
                arrivalDate: '',
                fatherId: '',
                motherId: ''
            },
            idField : ""
        }
    }

    handleChange = e=>{
        this.setState({
            idField: e.target.value
        })
    }

    handleSubmit = async e =>{
        e.preventDefault();
        let url = "http://localhost:8081/animals/?name="+this.state.idField
        //let response = await getPrayer(url)
        let response = await getPrayer(url)
        let res = []

        for (let x of response){
            if (x.name === this.state.idField) res.push(x)
        }

        this.setState({
            animalData: res[0]
        })
        
    }
    render(){
        return ( 
            <div className = "w-50 m-auto">
                <h1 className = "text-center">Search</h1>
                <form onSubmit={this.handleSubmit} className = "d-inline w-75 m-auto">
                <input type = "text" 
                placeholder = "Animal ID" 
                value = {this.idField} 
                onChange ={this.handleChange}
                className="w-75 m-auto form-control"
                
                />
                <div className = "w-75 m-auto mt-3">
                <button className = "btn btn-primary w-100" type = "submit">Search</button>
                </div>
                
                </form>

                <div className = "Card p-3 w-75  mt-3 shadow m-auto">
                    <div>
                        <b>ID:</b>&nbsp;&nbsp; {this.state.animalData.id} 
                    </div>
                    <div>
                        <b>Name:</b>&nbsp;&nbsp; {this.state.animalData.name} 
                    </div>
                    <div>
                        <b>Age:</b>&nbsp;&nbsp; {this.state.animalData.age} 
                    </div>
                    <div>
                        <b>Sex:</b>&nbsp;&nbsp; {this.state.animalData.sex}
                    </div>
                    <div>
                        <b>Weight:</b>&nbsp;&nbsp; {this.state.animalData.weight} 
                    </div>
                    <div>
                        <b>Height:</b>&nbsp;&nbsp; {this.state.animalData.height} 
                    </div>
                    <div>
                        <b>Arrival Date:</b>&nbsp;&nbsp; {this.state.animalData.arrivalDate} 
                    </div>
                    <div>
                        <b>Father Id:</b>&nbsp;&nbsp; {this.state.animalData.fatherId} 
                    </div>
                    <div>
                        <b>Mother Id:</b>&nbsp;&nbsp; {this.state.animalData.motherId}
                    </div>
                </div>
            </div>
        )
    }
}