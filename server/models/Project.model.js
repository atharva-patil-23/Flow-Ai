import mongoose, { mongo } from "mongoose"
import User from "./User.model.js"
import Task from "./task.model.js"

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    members:[{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        role:{
            type:String,
            enum:['admin','member','observer'],
            default:'member'
        }
    }],
    visiblity:{
        type:String,
        enum:['public','private'],
        default:'private'
    },
    task:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Task'
        }
    ]
},{timestamps:true})