import mongoose from "mongoose"


const connectDB = async () => {
    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/flow-ai`)
        
        console.log("MongoDB connection successful!!!")

    } catch (error) {
        console.error('MongoDB connection error:', error)
        console.log(error.message)
        process.exit(1)
    }
}

export default connectDB;