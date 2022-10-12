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
        const { email } = request.body;
        if( await IndividualModel.findOne({ email })) {
            return res.status(400).send({error: 'User already exists'});
        }

        const Individual = await IndividualModel.create(request.body);

        return response.send({
            Individual,
            token: generateToken({ id: Individual.id }),
        });

    } catch(error) {
        return console.log(error);
    }
};
