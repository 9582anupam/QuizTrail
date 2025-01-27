import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

userSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {
            this.password = await bcrypt.hash(this.password, 10);
        }
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.isPasswordCorrect = async function (candidatePassword) {
    try {
        // return await bcrypt.compare(candidatePassword, this.password);
        return this.password === candidatePassword;
    } catch (error) {
        throw error;
    }
};



const User = mongoose.model('User', userSchema);

export default User;
