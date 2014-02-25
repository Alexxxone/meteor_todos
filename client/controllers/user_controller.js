UserController = BaseController.extend({
    before: function(){
        var _id = this.params._id;
        if(App.subs.user){
            App.subs.user.stop();
        }
        App.subs.user = Meteor.subscribe('user',_id);
        App.subs.user_todos = Meteor.subscribe('user_todos',_id);
    },
    waitOn: function(){
        return Meteor.subscribe('user',this.params._id),Meteor.subscribe('user_todos',this.params._id);
    },
    data: function(){
           return {user_todos: Todos.find({userId: this.params._id}),user: Meteor.users.findOne({_id: this.params._id}),users: Meteor.users.find()};
    }
});
