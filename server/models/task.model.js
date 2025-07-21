import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    priority:{
        type:String,
        enum:['High','Medium','Low'],
        default:'Medium'
    },
    status:{
        type:String,
        enum:['Todo','Inprogress','Completed'],
        default:'Todo'
    }
},{timestamps:true})

const Task =  mongoose.model('Task',taskSchema)

export default Task;