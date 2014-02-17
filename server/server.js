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


Meteor.publish("todos", function() {
    return Todos.find({});
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
