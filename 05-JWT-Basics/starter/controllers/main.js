const {BadRequest} = require('../errors')
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequest('Please enter a username and password')
  }

  // just for demo, normally provided by the database
  const id = new Date().getDate();

  const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});



  
  res.status(200).json({msg: 'user created', token: token})
};


const dashboard = async (req, res) => {
  
  const luckyNumber = Math.floor(Math.random() *100)
  res.status(200).json({
    msg: `Hello ${req.user.username} `,
    secret: `here is your authorized data, your name is ${luckyNumber}`
});




};



module.exports = {login, dashboard}