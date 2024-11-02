import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true );
    if (initialized) {
        console.log('mongo join');
        return;
    }

 
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'next-social-app',
            useNewUrlParser : true,
            useUnifiedToplogy: true,
        });
        console.log('Connect to MongoDB');
        initialized = true
    } catch (error) {
        console.log('mongo error', error);
    }
 

}