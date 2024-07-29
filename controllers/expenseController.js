const Expense = require('../models/expense');
const User = require('../models/user');
const { validatePercentages } = require('../utils/validators');

exports.addExpense = async (req, res) => {
    try {
        const { splitMethod, participants } = req.body;

        if (splitMethod === 'percentage') {
            if (!validatePercentages(participants)) {
                return res.status(400).send({ error: 'Percentages do not add up to 100%' });
            }
        }

        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).send(expense);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getUserExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ 'participants.user': req.params.userId });
        res.send(expenses);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.send(expenses);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.downloadBalanceSheet = async (req, res) => {
    // Implementation for generating and downloading balance sheet
};
