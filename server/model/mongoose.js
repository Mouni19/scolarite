const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Amina:Bitatmaamar25$@cluster0.ckezl.mongodb.net/pharmacie?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true},

    (err) => {
        if (!err) {
            console.log('Successfully Established Connection with MongoDB')
        } else {
            console.log('Failed to Establish Connection with MongoDB with Error: ' + err)
        }
    });
module.exports = mongoose


