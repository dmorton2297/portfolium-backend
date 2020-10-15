import mongoose from 'mongoose';
import userSchema from './schemas/userSchema.js';
import dotenv from 'dotenv';
dotenv.config();

export default class User {

    constructor() {
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    }

    async getUserByEmail(email) {
        const User = mongoose.model('user', userSchema);
        const u = await User.find({ authEmail: email });
        return u[0];
    }

    async createUser(user) {
        const User = mongoose.model('user', userSchema);
        const newUser = new User(user);
        newUser.save((err, u) => {
            if (err) {
                console.error(error);
                return false;
            }
            return true;
        })
    }

    async updateUser(user, id) {
        const User = mongoose.model('user', userSchema);
        await User.findOneAndUpdate({ _id: id  }, user)
        const u = await User.find({ _id: id  });
        console.log(u);
        return u;
    }
};