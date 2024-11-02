import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        clerkId: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
        },
        lastName: {
           type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: true,
        },
        followers: {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
            default: [],
         },
        following: {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
            default: [],
         },
    }, { timestamps: true }
);

 const User = mongoose.models.User || mongoose.model('User' , userSchema)

 export default User;