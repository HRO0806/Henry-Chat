const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// const FriendSchema = new Schema({
//     friendId: {
//         type: Schema.Types.ObjectId,
//             default: () => new Types.objectId()
//     },
//     addedAt:{
//         type: Date,
//             default: Date.now,
//             get: createdAtVal => dateFormat(createdAtVal)
//     },
// },
// {
//     toJSON: {
//         getters: true
//     }
// }
// );

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    thoughts: [
        { 
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
}
);

const User = model('User', UserSchema);

module.exports = User;