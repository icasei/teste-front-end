const IndividualModel = require('../models/IndividualModel');
const jwt = require('jsonwebtoken');
const authSecret = process.env.SECRET

function generateToken(params = {}) {
    return jwt.sign(params, authSecret, {
        expiresIn: 86400,
    });
}

module.exports = async (request, response) => {
    try{
        const { email} = request.body;
        const individual = await IndividualModel.findOne({ email }).select('+name');

        if(!individual) return response.status(400).send({ error: 'User not found!'})

        const token = jwt.sign({ id: individual.id }, authSecret, {
            expiresIn: 86400,
        });

        response.send({ 
            individual, 
            token: generateToken({ id: individual.id }),
        });

    }catch (error) {
        return console.log(error);
    }
}