TodosController = BaseController .extend({
    template: "todosList",
    waitOn: function(){
        return App.subs.todos;
    },
    data: {
        todos: function(){
            if(Session.get('todos_filter')){
                return Todos.find({ userId: Meteor.userId() });
            }else{
                return Todos.find();
            }
        },
        users: Meteor.users.find()
    },
    unload: function () {
        Session.set('todos_filter',false)
    }
})