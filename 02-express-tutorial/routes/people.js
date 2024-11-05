const express = require('express');
const router = express.Router();

const { 
    getPeople,
    getPerson,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people');


// First way of routing
// router.get('/',getPeople);
// router.get('/:id', getPerson);
// router.post('/', createPerson);
// router.post('/postman', createPersonPostman);
// router.put('/:id', updatePerson);
// router.delete('/:id', deletePerson);

//second way of routing
router.route('/').get(getPeople).post(createPerson);
router.route('/:id').get(getPerson).delete(deletePerson).put(updatePerson);
router.route('/:postman').post(createPersonPostman);








module.exports = router; 