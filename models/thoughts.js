const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

ReplySchema = new Schema(
    {
        //set custom id to avoid confusion with parent comment _id
        replyId:{
            type: Schema.Types.ObjectId,
            default: () => new Types.objectId()
        },
        replyBody: {
            type: String
        },
        writtenBy: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const thoughtSchema = new Schema({
    thoughtBody: {
        type: String,
        required: true,
        maxlength: 300
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    //use ReplySchema to validate data for a reply
    replies: [ReplySchema]
},
{
    toJSON: {
       getters: true
    },
    id: false
}
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;


