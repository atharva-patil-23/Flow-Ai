import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true,
        trim:true,
        maxlength:[50, 'Name cannot exceed 50 characters']
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
    preferences:{
        aiSuggestion:{
            type:Boolean,
            default:false
        },
        notifications:{
            type:Boolean,
            default:true
        }
    }


},{timestamps:true})

userSchema.pre('save',async (next) =>{
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12)
    next();
})


const User = mongoose.model("User", userSchema)

export default User;
