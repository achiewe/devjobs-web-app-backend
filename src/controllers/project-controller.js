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
