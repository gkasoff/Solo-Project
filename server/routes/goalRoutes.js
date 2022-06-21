const express = require('express')
const Goal = require('../models/model.js')
const router = express.Router()
const { getGoals,
    getOneGoal,
    setGoal,
    updateGoal,
    deleteGoal } = require('../controllers/goalController')

// getting all
router.get('/', getGoals, (req, res) => {
    return res.status(200).json(res.locals.goals)
})

//getting one
router.get('/:id', getOneGoal, (req, res) => {
    return res.status(200).json(res.locals.goal)
})

// creating
router.post('/', setGoal, (req, res) => {
    return res.status(201).json(res.locals.newGoal)
})

router.patch('/:id', getOneGoal, updateGoal, (req, res) => {
    return res.status(200).json(`${res.locals.goal.name} has been updated!`)
})

router.delete('/:id', getOneGoal, deleteGoal, (req, res) => {
    return res.status(200).json({ message: `Deleted goal ${req.params.id}` })
})

module.exports = router