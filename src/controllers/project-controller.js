import Devjobs from "../models/Devjobs.js";

export const getAllDevjobs = async (req, res) => {
  const data = await Devjobs.find();

  return res.status(200).json(data);
};
