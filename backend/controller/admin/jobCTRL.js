const Jobs = require("../../model/jobModel");

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 6;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

const jobCTRL = {
  createJob: async (req, res) => {
    try {
      const {
        title,
        designation,
        company,
        salaryFrom,
        salaryTo,
        dateFrom,
        dateTo,
      } = req.body;
      if (
        !title ||
        !designation ||
        !company ||
        !salaryFrom ||
        !dateFrom ||
        !dateTo
      ) {
        return res.status(400).json({ msg: "Inavild Job Details" });
      }
      const newJob = new Jobs({
        title,
        designation,
        company,
        salaryFrom,
        salaryTo,
        dateFrom,
        dateTo,
      });
      await newJob.save();
      res.json({ msg: "Created a Job" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getJobs: async (req, res) => {
    try {
      const features = new APIfeatures(Jobs.find(), req.query).paginating();

      const jobs = await features.query;

      res.json({
        status: "success",
        result: jobs.length,
        jobs: jobs,
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getSingleJobs: async (req, res) => {
    try {
      const job_id = req.params.job_id;
      const jobDetails = await Jobs.findOne({ _id: job_id });
      res.json({ jobDetails });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateJobs: async (req, res) => {
    try {
      const {
        title,
        designation,
        company,
        salaryFrom,
        salaryTo,
        dateFrom,
        dateTo,
      } = req.body;
      if (!title || !designation || !company || !salaryFrom || !dateFrom) {
        return res.status(400).json({ msg: "Inavild Job Details" });
      }
      await Jobs.findOneAndUpdate(
        { _id: req.params.job_id },
        { title, designation, company, salaryFrom, salaryTo, dateFrom, dateTo }
      );
      res.json({ msg: "Job is Updated" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteBlogs: async (req, res) => {
    try {
      await Jobs.findByIdAndDelete(req.params.job_id);
      res.json({ msg: "Job is Deleted" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = jobCTRL;
