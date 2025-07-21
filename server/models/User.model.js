import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    _id:{
        type:mongoose.Schema.Types.ObjectId,
        auto:true
    },
    username:{
        type: String,
        required:true,
        trim:true,
        maxlength:[50, 'Name cannot exceed 50 characters']
    },
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    avatar:{
        type:String,
        default:null
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    password: {
        type:String,
        required:true,
        minlength:[6,'Password must be atleast 6 characters']
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    preferences:{
        aiSuggestion:{
            type:Boolean,
            default:false
        },
        notifications:{
            type:Boolean,
            default:true
        }
    },
    lastActive:{
        type:Date,
        default:Date.now
    }


},{timestamps:true})

userSchema.pre('save',async (next) =>{
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12)
    next();
})


const User = mongoose.model("User", userSchema)

export default User;
