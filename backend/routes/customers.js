const router = require('express').Router();
let Addcustomers = require('../models/Customer.models');

//retrieve all
router.route('/').get((_req, res) => {
    Addcustomers.find()
        .then(customers => res.json(customers))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create
router.route('/add').post((req, res) => {  
    const cname = req.body.cname;
    const cemail = req.body.cemail;
    const caddress = req.body.caddress;
    const nic = req.body.nic;
    const gender = req.body.gender;
    const mobileno = req.body.mobileno;

    const newAddcustomers = new Addcustomers({ 
        cname,
        cemail,
        caddress,
        nic,
        gender,
        mobileno
    });
    newAddcustomers.save()
        .then(() => res.json('New Customers Added Successfully...'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    Addcustomers.findById(req.params.id)
        .then(customers => res.json(customers))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    Addcustomers.findByIdAndDelete(req.params.id)
        .then(() => res.json('Customers Details Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    Addcustomers.findById(req.params.id)
        .then(customers => {
            customers.cname = req.body.cname;
            customers.cemail = req.body.cemail;
            customers.caddress = req.body.caddress;
            customers.nic = req.body.nic;
            customers.gender = req.body.gender;
            customers.mobileno = req.body.mobileno;
            customers.save()
                .then(() => res.json('Customers Details Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;