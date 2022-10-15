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
        const { email, name} = request.body;
        console.log(email, request.body)
        if( await IndividualModel.findOne({ email })) {
            return response.status(400).send({error: 'User already exists'});
        }
        if(!name) return response.status(422).send('nome é obrigatório')
        const Individual = await IndividualModel.create(request.body);

        return response.send({
            Individual,
            token: generateToken({ id: Individual.id }),
        });

    } catch(error) {
        return console.log(error);
    }
};
