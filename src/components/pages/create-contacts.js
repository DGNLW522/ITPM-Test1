import React, { Component } from 'react';
import axios from 'axios'; 
import "react-datepicker/dist/react-datepicker.css";
import './pharmacy.css';
import swl from "sweetalert";

export default class AddContact extends Component {
  constructor(props) {
    super(props);

    this.onChangeCname = this.onChangeCname.bind(this);
    this.onChangeCemail = this.onChangeCemail.bind(this);
    this.onChangeCaddress = this.onChangeCaddress.bind(this);
    this.onChangeNic = this.onChangeNic.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeMobileno = this.onChangeMobileno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      cname: '',
      cemail:'',
      caddress:'',
      nic:"",
      gender:'',
      mobileno:'',
      users: []
    }
  }



  onChangeCname(e) {
    this.setState({
      cname: e.target.value
    })
  }
  onChangeCemail(e) {
    this.setState({
      cemail: e.target.value
    })
  }
  onChangeCaddress(e) {
    this.setState({
      caddress: e.target.value
    })
  }
  onChangeNic(e) {
    this.setState({
      nic: e.target.value
    })
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    })
  }
  onChangeMobileno(e) {
    this.setState({
      mobileno: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      cname: this.state.cname,
      cemail: this.state.cemail,
      caddress: this.state.caddress,
      nic: this.state.nic,
      gender: this.state.gender,
      mobileno: this.state.mobileno,
    }

    console.log(exercise);

    axios.post('http://localhost:4990/madicines/add', exercise)
      .then(res => console.log(res.data));

      swl("Customer Added Succesfully.", {
        icon: "success",
    });

    window.location = '/customer-List';
  }

  render() {
    return (
      <div className='addMedicinePage'>
        <br />
        <div className='container' id="addMedicineForm">
          <h3 className="addMedicineTitle">Add New Customer</h3>
          <br />
          <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Customer Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.cname}
                onChange={this.onChangeCname}
                placeholder="eg: Kamal"
                />
          </div> 
          <div className="form-group"> 
            <label>Email: </label>
            <input  type="text"
                required 
                pattern="[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,3}"
                className="form-control"
                value={this.state.cemail}
                onChange={this.onChangeCemail}
                placeholder="eg: kamal@gmail.com"

                />
          </div>   
          <div className="form-group"> 
            <label>Address : </label>
            <input  type="text"
                required 
                className="form-control"
                value={this.state.caddress}
                onChange={this.onChangeCaddress}
                placeholder="eg: Colombo 07"
                />
          </div> 
          <div className="form-group"> 
            <label>NIC : </label>
            <input  type="text"
                required
                maxLength="10"
                minLength="10"
                className="form-control"
                value={this.state.nic}
                onChange={this.onChangeNic}
                placeholder="eg: 98323737V"
                />
          </div>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">Gender:</label>
            <select class="form-select" id="validationCustom04" 
                required 
                value={this.state.gender}  
                onChange={this.onChangeGender}>
                <option>Male</option>
                <option>Female</option> 
            </select>    
          </div>
          <div className="form-group"> 
            <label>Mobile Number : </label>
            <input  type="text"
                pattern="[0-9]*"
                maxLength="10"
                minLength="10"
                required
                className="form-control"
                value={this.state.mobileno}
                onChange={this.onChangeMobileno}
                placeholder="eg: 0773233289"
                />
          </div> 
          <br></br>
          <div className="form-group">
            
            <input type="Submit" value="Create customer" className="btn btn-primary" onClick={this.getTotal} />
          </div>
        </form>
        </div>
      </div>
    )
  }
}