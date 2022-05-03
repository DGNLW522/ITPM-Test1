const router = require('express').Router();
let Addcontacts = require('../models/Contact.models');

//retrieve all
router.route('/').get((_req, res) => {
    Addcontacts.find()
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create
router.route('/add').post((req, res) => {  
    const nate = req.body.nate;
    const natn = req.body.natn;
    const prte = req.body.prte;
    const prtn = req.body.prtn;
    const rvote = req.body.rvote;
    const rvotn = req.body.rvotn;
    const bde = req.body.bde;
    const bdn = req.body.bdn;

    const newAddcontacts = new Addcontacts({ 
        nate,
        natn,
        prte,
        prtn,
        rvote,
        rvotn,
        bde,
        bdn
    });
    newAddcontacts.save()
        .then(() => res.json('New Contacts Added Successfully...'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    Addcontacts.findById(req.params.id)
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    Addcontacts.findByIdAndDelete(req.params.id)
        .then(() => res.json('Contacts Details Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    Addcontacts.findById(req.params.id)
        .then(contacts => {
            contacts.nate = req.body.nate;
            contacts.natn = req.body.natn;
            contacts.prte = req.body.prte;
            contacts.prtn = req.body.prtn;
            contacts.rvote = req.body.rvote;
            contacts.rvotn = req.body.rvotn;
            contacts.bde = req.body.bde;
            contacts.bdn = req.body.bdn;
            contacts.save()
                .then(() => res.json('Contacts Details Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;