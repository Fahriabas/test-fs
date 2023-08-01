
const { verivyToken } = require("../helpers/jwt")
const  { User } = require("../models")

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers

        if(!access_token){
            throw {name: "unauthenticated"}
        }

        const payload = verivyToken(access_token)

        let user = {}
        user = await User.findOne({where : {id: payload.id}})

        if(!user){
            throw {name: "unauthenticated"}
        }

        if(user.role !== 'Admin'){
            throw { name: "unauthenticated"}
        }

        req.additionalData = {
            userId: user.id,
            userName: user.username,
            role: user.role
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authentication