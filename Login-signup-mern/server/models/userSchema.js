import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Keysecret = "vikashkumaryadavvikashkumaryadav"

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("not valid email")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minilength: 6
    },

    cpassword: {
        type: String,
        required: true,
        minilength: 6
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }

        }
    ]
})

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);

    }
    next();
})

// token genrate 
userSchema.methods.generateAuthtoken = async function () {
    try {
        let tokenGenrate = jwt.sign({ _id: this._id}, Keysecret ,{
            expiresIn: "1d"
        });
        this.tokens = this.tokens.concat({ token: tokenGenrate })
        await this.save();
        return tokenGenrate;
    } catch (error) {
        res.status(422).json(error)

    }
}


// creating a model

const userdb = new mongoose.model("authusers", userSchema)

export default userdb;