const {readJSONfromFile, writeJSONtoFile} = require('./fs-utils')
const fs = require('fs')
const mongoose = require('mongoose');
main().catch(err => console.log(err))
main().then(() => {
    console.log('connected to MongoDB')
})

async function main() {
    const db = 'mongodb://_:<API-KEY>@us-east-1.aws.realm.mongodb.com:27020/?authMechanism=PLAIN&authSource=%24external&ssl=true&appName=application-0-zeapk:<SERVICE_NAME>:api-key'
    const dbCheck = mongoose
        .connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        .then(() => console.log(dbCheck, '---db check----'))
            .catch(err => console.log(err));
    // mongoose.connect(process.env.MONGODB_URI ||
    //     'mongodb://localhost:27017/kb')
    // await mongoose.connect('mongodb://localhost:27017/users');
    // try {
    //    await mongoose.connect( 'mongodb://_:<API-KEY>@us-east-1.aws.realm.mongodb.com:27020/?authMechanism=PLAIN&authSource=%24external&ssl=true&appName=application-0-zeapk:<SERVICE_NAME>:api-key', {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    //         console.log("connected"));
    // }catch (error) {
    //     console.log("could not connect");
    // }
    // await mongoose.connect('mongodb://_:<API-KEY>@us-east-1.aws.realm.mongodb.com:27020/?authMechanism=PLAIN&authSource=%24external&ssl=true&appName=application-0-zeapk:<SERVICE_NAME>:api-key');
    // await mongoose.connect('mongodb://<USERNAME>:<PASSWORD>@us-east-1.aws.realm.mongodb.com:27020/?authMechanism=PLAIN&authSource=%24external&ssl=true&appName=application-0-zeapk:mongodb-atlas:local-userpass');

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

fs.readFile("users.json", function(err, buf) {
    console.log(buf.toString());
});
let usersSchema = new mongoose.Schema({
    name: String
});
let MyUser = mongoose.model('Ignat', usersSchema);

const addUser = async (name) => {
    let user = new MyUser({name})
    user.save(function(err){
        if(err) console.log(err);
    })
}
const deleteUser = (id) => {
    return MyUser.deleteOne({_id: id})
}
const updateUser = (_id,name) => {
    return MyUser.update({_id},{name})
}

const getUsers = () => {
    // if (search){
    //     return MyUser.find({name: new RegExp(search)})
    // }
    return MyUser.find()
    }

exports.addUser = addUser
exports.getUsers = getUsers
exports.deleteUser = deleteUser
exports.updateUser = updateUser
