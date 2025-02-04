import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() =>
      console.log("Job board database connection is sucessfully Done")
    )
    .catch((error) => console.log(error, "Error While Connecting Database"));
};

export default connectToDB;
