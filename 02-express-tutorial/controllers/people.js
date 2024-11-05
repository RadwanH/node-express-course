let { people } = require('../data');


const getPeople =  (req, res) => {
    res.status(200).json({ success: true, data: people });

};

const getPerson = (req, res) => {
    const id = req.params.id;
    const person = people.filter(person => person.id === Number(id));
    
    console.log(person);

    if (person.length === 0){
        return res.status(404).json({success: false, msg: `person with id: ${id} not found`});
    }

    return res.status(200).json({success: true, data: person});
};

const createPerson = (req, res) => {
    const {name} = req.body;
     
    if(!name){
       return res.status(400).json({ success: false, msg:'Please enter a name'});
    }
    res.status(201).json({ success: true, person: name });
};


const createPersonPostman =  (req, res) => {
    const {name} = req.body;
     
    if(!name){
       return res.status(400).json({ success: false, msg:'Please enter a name'});
    }
    res.status(201).json({ success: true, data: [...people, {name: name}] });

};

const updatePerson = (req, res)=>{
    const personId = req.params.id;
    const {name} = req.body;

    if(!name){
        return res.status(400).json({ success: false, msg:'Please enter a name'});
     }

    people.map(person => {
        if (person.id == personId){
            person.name = name;
        }
        
    });

    res.status(201).json({ success: true, data: [...people] });


}

const deletePerson = (req,res) =>{
    const {id} = req.params;
    const person = people.find(person => person.id == Number(id));

    console.log(person);

    if (!person){
        return res
        .status(404)
        .json({success: false, msg: `no person with ${id}`});
    }

    const newPeople = people.filter((person) => person.id !== Number(id));

    console.log(newPeople);
    
    return res
    .status(200)
    .json({success: true, msg: `deleted person with id: ${id}`, data : newPeople});



};

module.exports = {
    getPeople,
    getPerson,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson

}
