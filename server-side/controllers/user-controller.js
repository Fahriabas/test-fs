const { checkPassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const { User, Category, Product } = require("../models")

class UserController {
    static async register(req, res, next){
        try {
            const { email, username, password } = req.body
            
            const newUser = await User.create({ email, password, username })

            res.status(201).json({
                statusCode: 201,
                message: "success register new user",
                newUser
            })

        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next){
        try {
            const { email, password } = req.body

            const userLogin = await User.findOne({
                where: {
                    email: email
                }
            })

            if(!userLogin){
                throw {name: "LoginError"}
            }

            if(!checkPassword(password, userLogin.password)){
                throw {name : 'LoginError'}
            }

            const access_token = generateToken({
                id: userLogin.id,
                email: userLogin.email,
                role: userLogin.role
            })

            res.status(200).json({
                statusCode: 200,
                userLogin,
                access_token
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController