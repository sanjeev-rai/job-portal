const Job = require('../models/job');


// Get all jobs  =>  /api/v1/jobs
exports.getJobs = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "This is jobs route"
    });
}

// Create a new job  =>  /api/v1/jobs/new
exports.newJob = async (req, res, next) => {
    console.log(req.body);

    const job = await Job.create(req.body);

    res.status(200).json({
        status : 'success',
        message : 'Job created successfully.',
        data : job
    });
}