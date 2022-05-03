import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './pharmacy.css';
export default class EditPatient extends Component {
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
      cemail: '',
      caddress: '',
      nic: '',
      gender: '',
      mobileno: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4990/madicines/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          cname:  response.data.cname,
          cemail:  response.data.cemail,
          caddress:  response.data.caddress,
          nic:  response.data.nic,
          gender: response.data.gender, 
          mobileno:  response.data.mobileno 

        })
      })
      .catch(function (error) {
        console.log(error);
      })

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
  onChangeGender(date) {
    this.setState({
      gender: date
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
      mobileno: this.state.mobileno
    }

    console.log(exercise);

    axios.post('http://localhost:4990/madicines/update/' + this.props.match.params.id, exercise)
      .then(res => console.log(res.data));

      alert("Customer Details Updated !")
      window.location = '/customer-list';
  }

  render() {
    return (
      <div className='editMedicinePage'>
        <br />
        <div className='container' id="editMedicineForm">
          <h3 className="addStaffTitle">EDIT CUSTOMERS DETAILS</h3>
          <br/>
          <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Customer Name : </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.cname}
              onChange={this.onChangeCname}
              />  
          </div>  
      <div className="form-group"> 
          <label>Customer Email : </label>
          <input  type="text" 
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,3}"
              className="form-control"
              value={this.state.cemail}
              onChange={this.onChangeCemail}
              /> 
       </div> 
       <div className="form-group"> 
          <label>Address : </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.caddress}
              onChange={this.onChangeCaddress}
              />
        </div>
        <div className="form-group">
          <label>NIC : </label>
          <input 
              type="text" 
              required
              maxLength="10"
              minLength="10"
              className="form-control"
              value={this.state.nic}
              onChange={this.onChangeNic}
              />
        </div>
        <div className="form-group">
          <label>Gender : </label>
          <select class="form-select" id="validationCustom04" 
                required 
                value={this.state.gender}  
                onChange={this.onChangeGender}>
                <option>Male</option>
                <option>Female</option> 
            </select>

          </div>
          <div className="form-group"> 
          <label>Mobileno : </label>
          <input  type="text"
              required
              pattern="[0-9]*"
              maxLength="10"
              minLength="10"
              className="form-control"
              value={this.state.mobileno}
              onChange={this.onChangeMobileno}
              />
        </div>
      <br />
        <div className="form-group">
          <input type="Submit" value="UPDATE" className="btn btn-success" />
        </div>
      </form>
        </div>
      </div>
    )
  }
}