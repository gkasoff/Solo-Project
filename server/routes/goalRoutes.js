const express = require('express')
const router = express.Router()
const { getGoals,
    setGoal,
    updateGoal,
    deleteGoal } = require('../controllers/goalController')

router.get('/', getGoals, (req, res) => {
    return res.status(200).json({ message: 'GET goals' })
})

router.post('/', setGoal, (req, res) => {
    return res.status(201).json({ message: 'POST goal' })
})

router.put('/:id', updateGoal, (req, res) => {
    return res.status(200).json({ message: `Update goal ${req.params.id}` })
})

router.delete('/:id', deleteGoal, (req, res) => {
    return res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = router