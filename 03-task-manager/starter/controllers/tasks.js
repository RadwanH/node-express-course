const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../errors/custom-error');



const getTasks = asyncWrapper( async (req, res) => {

        const tasks = await Task.find({});
        res.status(200).json({ tasks });

 

});

const createTask = asyncWrapper(async (req, res) => {
 
        const task = await Task.create(req.body);

        res.status(201).json({ task });



});

const getTask = asyncWrapper(async (req, res,next) => {
  
        const task = await Task.findById(req.params.id);
        if (!task) {  
           return next(createCustomError(`No Task with id ${req.params.id} found`, 404));
        }
        res.status(200).json({ task });


});

const updateTask = asyncWrapper(async (req, res) => {

        // This code returns a more complex object but it still works 

        // const task = await Task.updateOne({ _id: req.params.id }, req.body, 
        //     {
        //         new: true,
        //         runValidators: true,
        //     });


        
        const task = await Task.findByIdAndUpdate({ _id: req.params.id }, req.body, 
            {
                new: true,
                runValidators: true,
            }); 





        if (!task) {
            return next(createCustomError(`No Task with id ${req.params.id} found`, 404));
        }
        res.status(200).json({ task });
  
});

const deleteTask = asyncWrapper(async (req, res) => {

        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return next(createCustomError(`No Task with id ${req.params.id} found`, 404));
        }
        res.status(200).json({ success: true, task });
  
});



module.exports = {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}