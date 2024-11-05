const express = require('express');
const app = express();
let { people } = require('./data');

// static assets 
app.use(express.static('./methods-public'));
//parse from data 
app.use(express.urlencoded({ extended: false }));
// parse json 
app.use(express.json());



app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people });

});


app.post('/api/people', (req, res) => {
    const {name} = req.body;
     
    if(!name){
       return res.status(400).json({ success: false, msg:'Please enter a name'});
    }
    res.status(201).json({ success: true, person: name });
});


app.post('/api/postman/people', (req, res) => {
    const {name} = req.body;
     
    if(!name){
       return res.status(400).json({ success: false, msg:'Please enter a name'});
    }
    res.status(201).json({ success: true, data: [...people, {name: name}] });

});

app.put('/api/people/:personId', (req, res)=>{
    const {personId} = req.params;
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
    


})


app.post('/login', (req, res) => {
    // console.log(req.body);

    const { name } = req.body;
    if (name) {
        res.status(200).send(`Welcome ${name}`);
    } else {
        res.status(401).send(`Please enter a name`);
    }
});


app.delete('/api/people/:personId', (req,res) =>{
    const {personId} = req.params;
    const person = people.find(person => person.id == Number(personId));

    console.log(person);

    if (!person){
        return res
        .status(404)
        .json({success: false, msg: `no person with ${personId}`});
    }

    const newPeople = people.filter((person) => person.id !== Number(personId));

    console.log(newPeople);
    
    return res
    .status(200)
    .json({success: true, msg: `deleted person with id: ${personId}`, data : newPeople});



})

app.listen(5000, () => {
    console.log('listening on port 5000...');
});