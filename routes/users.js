const express = require('express');
const router = express.Router();

/**
 * @route GET api/contact
 * @desc  Get all user contacts
 * @access Private
 */
router.get('/',(req, res) => {
    res.send('Get all contacts');
});

/**
 * @route POST api/auth
 * @desc  Add new Contact
 * @access Private
 */
router.post('/',(req, res) => {
    res.send('Add Contact');
});

/**
 * @route PUT api/auth
 * @desc  Update contact
 * @access Private
 */
router.put('/:id',(req, res) => {
    res.send('UpdateContact');
});

/**
 * @route DELETE api/auth
 * @desc  Add new Contact
 * @access Private
 */
router.delete('/:id',(req, res) => {
    res.send('Delete Contact');
});


module.exports = router;