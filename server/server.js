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
    console.log(limit);
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


Todos.allow({
    insert: function (userId, todo) {
        if(userId ===  todo.userId )
            return true;
        return false;
    },
    update: function (userid, todo){
        old_userId = Todos.findOne({_id: todo._id}).userId;
        if(userid === Meteor.userId() &&  todo.userId === old_userId  )
            return true;
        return false;
    },
    remove: function (userId, todo){
        if(userId ===  todo.userId )
            return true;
        return false;
    }
});
