const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    paidBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    splitMethod: { type: String, required: true, enum: ['equal', 'exact', 'percentage'] },
    participants: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        amount: { type: Number, required: function() { return this.splitMethod === 'exact'; } },
        percentage: { type: Number, required: function() { return this.splitMethod === 'percentage'; } },
    }],
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
