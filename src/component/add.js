import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import '../App.css';

class Add extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name : '',
            nameerror:false,
        }
        this.add=this.add.bind(this);
    }
    
    add(){
        const name  = this.state.name;
        
        if(name){
            axios.post('https://04ec10c43d39.ngrok.io/api/v1/name/addName',{name:name})
            .then(res => {
                if(res.data.status===0){
                    
                    swal("Oops!", "Already exists", "warning");
                }
                else{
                    swal("Good job!", "Data added succesfully", "success");
                }
               
            })
            this.setState({nameerror:false});
           
        }else{
            this.setState({nameerror:true});
        }
    }
    onChangeValue(event){
        const name      =  event.target.name;
        const value     =  event.target.value;
        if(name==="name"){
            if(value){
                this.setState({name:value,nameerror:false});
            }
            else{
                this.setState({name:value,nameerror:true});
            }
        }
    }
  
    render(){
        return(
            <div>
                <center>
                     <h2>Jayavel---Demo</h2>
                <div>
                    <input type="text" name="name" class="form__field" id="name" placeholder="Enter the text" value={this.name} onChange={(e)=>this.onChangeValue(e)} style ={{marginTop:"3%"}}/>
                   <div>
                    {this.state.nameerror?<label style={{color:"red"}}>Name is required*</label>:""}
                    </div>
                </div>
                <div>
                       <button type="button" className="button" style ={{width:"10%",marginTop:"3%"}} onClick={this.add}>ADD</button>
               </div>
               </center>
             </div>
        )
        
    }
   
}
export default Add;
