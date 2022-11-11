const mongoose = require('mongoose');

console.log("Attempting to connect to Database")

const connectDB = async () => {
    try {
        // mongodb connection string
        const con = await mongoose.connect("mongodb://localhost:27017/usermanagement", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected : ${con.connection.host}`);

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

console.log("Connection successful!")

module.exports = connectDB