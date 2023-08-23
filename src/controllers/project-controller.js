import Devjobs from "../models/Devjobs.js";

export const getAllDevjobs = async (req, res) => {
  const data = await Devjobs.find();

  return res.status(200).json(data);
};

export const jobPost = async (req, res) => {
  try {
    const data = req.body;

    const outcome = await Devjobs.insertMany(data);
    res.json(outcome);
  } catch (error) {
    console.log("dont post");
    res.status(400).json({ error: "error" });
  }
};

export const SizePageJob = async (req, res) => {
  try {
    const size = parseInt(req.params.size);
    const page = parseInt(req.params.page);

    const deadline = size * page;

    const job = await Devjobs.find().limit(deadline);

    res.status(200).json(job);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "happend error" });
  }
};
