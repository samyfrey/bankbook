const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema(
	{
		description: {
			type: String,
			required: true
		},
		amount: {
			type: Number,
			required: true,
		},
		revenue: {
			type: Number,
			// required: true,
		},
        startDate: {
            type: Date,
            // required: true
        },
        maturityDate: {
            type: Date,
            // required: true
        },
        borrower: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Client',
		},
	},
	{
		timestamps: true,
	}
)

module.exports = loanSchema