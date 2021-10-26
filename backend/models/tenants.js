import { Decimal128, Double } from "bson";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tenantSchema = new Schema ({

    name: {
        type: [String],
        required: true
    },

    company: {
        type: String,
        required: true
    },

    contact: [
        {phone: [
            {business: {
                type: Number,
                required: true
            },
            cell: {
                type: Number,
                required: true
            }}
        ],

        email: {
            type: String,
            required: true
        }}
    ],

    location: [
        {address_1: {
            type: String,
            required: true
        },
        address_2: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip: {
            type: Number,
            required: true
        },
        property: [
            {building: {
                type: [Number],
                required: true
            }}, 
            {unit: {
                type: [Number],
                required: true
            }}
        ]
        }],

    comments: {
        type: String,
        required: false
    },

    lease_details: [
        {start_date: {
            type: String,
            required: true
        },
        end_date: {
            type: String,
            required: true
        },
        lease_length: {
            type: Number,
            required: true
        },
        signing: [
            {signing_date: {
                type: String,
                required: true
            },
            signing_payment: {
                type: Decimal128,
                required: true
            }}
        ],
        due_day: {
            type: Number,
            required: true
        }, 
        monthly_amt: {
            type: Decimal128,
            required: true
        },
        sales_tax: {
            type: Decimal128,
            required: true
        },
        subtotal: {
            type: Decimal128,
            required: true
        },
        total_paid: {
            type: Decimal128,
            required: false
        },
        security: [
            {security_received: {
                type: Boolean,
                required: true
            },
            security_amt: {
                type: Decimal128,
                required: true
            },
            security_date_received: {
                type: String,
                required: false
            }}
        ],
        last_month_security: {
            type: Boolean,
            required: true
        },
        certificate_liability: {
            type: Boolean,
            required: true
        }}
    ]
});

//parameter is singular of collections name
const Tenant = mongoose.model("Tenant", tenantSchema);

// module.exports = Tenant;
export default Tenant;