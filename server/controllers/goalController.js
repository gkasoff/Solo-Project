const asyncHandler = require('express-async-handler')
const Goal = require('../models/model.js')

// @desc Get goals
// @route  GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res, next) => {
    try {
        const goals = await Goal.find()
        res.locals.goals = goals
        // console.log(res.locals.goals)
        return next();
    } catch (err) {
        return next({ message: 'unable to GET goals', log: 'unable to GET goals' })
    }

});

const getOneGoal = async (req, res, next) => {
    let goal;
    try {
     const goal = await Goal.findById(req.params.id)
     if (goal === null) {
         return res.status(404).json({message: 'Cannot find goal'})
     } else {
        res.locals.goal = goal
        return next()
     }
    } catch (err) {
     return next({message: 'Goal ID not found', log: 'Goal ID not found'})
    }
}

// @desc Set goals
// @route  POST /api/goals
// @access  Private
const setGoal = async (req, res, next) => {
    const goal = new Goal({
        name: req.body.name,
        description: req.body.description
    })
    try {
        const newGoal = await goal.save()
        res.locals.newGoal = newGoal
        return next()
    } catch (err) {
        return next({ message: 'unable to POST goal', log: 'unable to POST goal' })
    }
}

// @desc Update goal
// @route  Put /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res, next) => {
    console.log(req.body)
    console.log(res.locals.goal.name)
    if (req.body.name) {
        res.locals.goal.name = req.body.name
    }
    if (req.body.description) {
        res.locals.goal.description = req.body.description
    }
    try {
        await res.locals.goal.save();
        return next();
    } catch (err) {
        return next({message: 'unable to UPDATE goal', log: 'unable to UPDATE goal' })
    }
})

// @desc Delete goal
// @route  Delete /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res, next) => {
   try {
    await res.locals.goal.remove()
    return next()
   } catch (err) {
    return next({message: 'unable to delete'})
   }
})

module.exports = {
    getGoals,
    getOneGoal,
    setGoal,
    updateGoal,
    deleteGoal
}