

import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./pharmacy.css";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const Madicines = props => (
    <tr>
        <td>{props.madicines.cname}</td>
    <td>{props.madicines.cemail}</td>
    <td>{props.madicines.caddress}</td>
    <td>{props.madicines.nic.substring(0,12)}</td>
    <td>{props.madicines.gender}</td>
    <td>{props.madicines.mobileno.substring(0,15)}</td>

        <td>
            <Link to={"/editcustomer/" + props.madicines._id}>edit</Link> | <a href="customer-list" onClick={() => { props.deleteMadicines(props.madicines._id) }}>delete</a>
        </td>
    </tr>
)


export default class ViewMadicines extends Component {
    constructor(props) {
        super(props);

        this.deleteMadicines = this.deleteMadicines.bind(this);

        this.state = { madicines: [] };
    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
    
        const marginLeft = 40;
        const doc = new jsPDF("landscape", unit, size);
    
        doc.setFontSize(15);
    
        const title = "customer Details";
        const headers = [
          [
            "Customer ID",
            "Customer Name",
            "Customer Email",
            "NIC",
            "Gender",
            "Contact No",
          ],
        ];
    
        const madicines = this.state.madicines.map((elt) => [
          elt._id,
          elt.cname,
          elt.cemail,
          elt.nic,
          elt.gender,
          elt.mobileno,
          
        ]);
    
        let content = {
          startY: 50,
          head: headers,
          body: madicines,
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("customer.pdf");
      };


    componentDidMount() {
        axios.get('http://localhost:4990/madicines/')
            .then(response => {
                this.setState({ madicines: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteMadicines(id) {
        axios.delete('http://localhost:4990/madicines/' + id)
            .then(res => console.log(res.data));

        this.setState({
            madicines: this.state.madicines.filter(sml => sml._id !== id)
        })
        alert("Delete Customer Details?")
    }

    madicinesList() {
        return this.state.madicines.map(currentmadicines => {
            return <Madicines madicines={currentmadicines} deleteMadicines={this.deleteMadicines} key={currentmadicines._id} />;
        })
    }



    render() {
        return (
            <div className='viewMedicinePage'>
                <br />
                
                <div className='container' id="viewMedicineForm">

                        <div className='row'>
                        <div className='col-2 buttons'>
                            <Link to="/searchCustomer" type="button" className="btn btn-secondary">
                            Search Customer
                            </Link>
                            <br />
                        </div>
                        

                        <div className='col-4 buttons'>
                            <Link to="/create" type="button" className="btn btn-primary">
                            Add Customer
                            </Link>
                            <br />
                        </div></div>

                        <br/>
 

                        <div className="col-3 buttons2">
            <Link onClick={() => this.exportPDF()} className="btn btn-warning">
              &nbsp;&nbsp;Genarate Report
            </Link>
            <br />
            <br />
          </div>




                    <h3 className="viewMedicineTitle">CUSTOMERS LIST</h3>
                    <br />
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                            <th>Customer Name</th> 
                        <th>Email</th> 
                        <th>Address</th> 
                        <th>NIC</th> 
                        <th>Gender</th> 
                        <th>MobileNo</th> 
                        <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.madicinesList()}
                        </tbody>
                    </table>
             
                    
                </div>
            </div>
        )
    }
}