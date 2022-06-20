const asyncHandler = require('express-async-handler')

// @desc Get goals
// @route  GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res, next) => {
   return next()
});

// @desc Set goals
// @route  POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res, next) => {
    if (!req.body.text) {
        return next({message: 'shiiiit', log: 'log hereee'})
    }
    return next()
})

// @desc Update goal
// @route  Put /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res, next) => {
    // console.log('paramms', typeof req.params.id)
    if (typeof req.params.id === 'number') {
        return next({message: 'faack', log: 'log hereee'})
    }
    return next()
})

// @desc Delete goal
// @route  Delete /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res, next) => {
    return next()
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}