const mongoose = require('mongoose');
const validator = require('validator');
const jobSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Please enter job title.'],
        trim : true,
        maxLength : [100, 'Job title can not exceed 100 characters.']
    },
    slug : String,
    description : {
        type : String,
        required : [true, 'Please provide job description.'],
        maxLength : [1000, 'Job description should not exceed 1000 characters.']
    },
    email: {
        type: String,
        validate : [validator.isEmail, 'Please add a valid email.']
    },
    address : {
        type : String,
        required : [true, 'Please add an address']
    },
    company : {
        type : String,
        required : [true, 'Please add a company,']
    },
    industry : {
        type : [String],
        required: true,
        enum : {
            values : [
                'Business',
                'Information technology',
                'Banking',
                'Education/Training',
                'Telecommunications',
                'Others'
            ],
            message: 'Please select correct option for industry'
        }
    },
    jobType : {
        type: String,
        required : true,
        enum : [
            'Permanent',
            'Temporary',
            'Internship'
        ],
        message : 'Please select correct option for jobType'
    },
    minEducation : {
        type : String,
        required : true,
        enum : {
            values : [
                'Bachelors',
                'Masters',
                'Phd'
            ],
            message : 'Please select correct option for minEducation'
        }
    },
    positions : {
        type : Number,
        default : 1
    },
    experience : {
        type : String,
        required : true,
        enum : {
            values : [
                'No Experience',
                '1 Year - 2 Years',
                '2 Years - 5 Years',
                '5 Years +'
            ],
            message : 'Please select correct option for experience'
        }
    },
    salary : {
        type: Number,
        required : [true, 'Please provide the expected salary for this job.']
    },
    postingDate : {
        type : Date,
        default : Date.now
    },
    lastDate : {
        type : Date,
        default : new Date().setDate(new Date().getDate() + 7)
    },
    applicatntApplied : {
        type: [Object],
        select : false
    }
});

module.exports = mongoose.model('Job', jobSchema);