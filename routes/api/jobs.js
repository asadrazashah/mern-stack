const express = require("express");
const router = express.Router();
//Adding json checking middleware
const withAuth = require("../../middleware/middleware");
//Bring model for job
const Job = require("../../models/Job");

//get request for getting jobs from db
//find method works on moongoose

router.get("/", (req, res) => {
  Job.find()
    .sort({ date: -1 })
    .then(jobs => res.json(jobs));
});

router.get("/:search", (req, res) => {
  Job.find({ $text: { $search: req.params.search } })
    .sort({ date: -1 })
    .then(jobs => res.json(jobs));
});

//@route POST api/job

router.post("/", withAuth, (req, res) => {
  const job = new Job({
    companyName: req.body.companyName,
    title: req.body.title,
    experience: req.body.experience,
    description: req.body.description,
    location: req.body.location,
    salary: req.body.salary
  });

  job.save().then(job => res.json(job));
});

module.exports = router;
