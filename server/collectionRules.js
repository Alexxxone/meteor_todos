
//   TODOS
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


//   Images
ImagesFS.allow({
    insert: function(userId, file) { return userId && file.owner === userId; },

    update: function(userId, file, fields, modifier) {
        return userId && file.owner === userId;
    },
    remove: function(userId, file) {return userId && file.owner === userId; }
});
