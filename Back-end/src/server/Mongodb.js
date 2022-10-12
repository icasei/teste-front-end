const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.oddb3.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true })
    .then(() => {
        console.log('Conected your MongoDB')
    })
    .catch(e => {
        const msg = 'MongoDB conection Error!'

        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m' + e)
        //connection <monitor> to 54.232.44.65:27017 closed - fix it updating your IP:Adress in network section on atlas, in your cluster.
    })

module.exports = mongoose;