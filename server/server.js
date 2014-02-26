//     DESTROY ALL USERS
//users = Meteor.users.find().fetch()
//users.map (a,b)->
//  if a._id isnt 'R6xqRT8jH66Kymk7z'
//    Meteor.users.remove({_id: a._id})
//    Todos.remove({userId: !"R6xqRT8jH66Kymk7z"})

//
//users = Meteor.users.find().fetch();
//
//Meteor.users.find().map(function(a, b) {
//
//        Meteor.users.remove({
//            _id: a._id
//        });
//        Todos.remove({
//            userId: !"g9hEcbuSFa4ASADmu"
//        });
//
//});


Meteor.publish("todos", function(limit) {
    return Todos.find({},{order: {created_at: 1},limit: limit});
});
Meteor.publish("users", function() {
    return Meteor.users.find({});
});
Meteor.publish("user", function(id) {
    return Meteor.users.find({_id: id});
});
Meteor.publish("user_todos", function(id) {
    return Todos.find({userId: id});
});
Meteor.publish("myFiles", function() {
    return ImagesFS.find({ owner: this.userId });
});
Meteor.publish("myChat", function(id) {
    return Chat.find({ $and:[{ senderId: {$in: [this.userId,id]}, receiverId: {$in: [this.userId,id]}}]});
});


var handler = {
    "imageUrl": function (options) {
        return {
            blob: options.blob,
            fileRecord: options.fileRecord
        };
    }
}
ImagesFS.fileHandlers(handler);
