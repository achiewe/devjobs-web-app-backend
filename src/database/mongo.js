import mongoose from "mongoose";

const connect = () => {
  const url =
    "mongodb+srv://mamukashviliachi706:Raka20011@cluster0.kwxn09f.mongodb.net/devjobs";
  try {
    mongoose.connect(url);
  } catch (error) {
    console.log(error);
  }
};

export default connect;
