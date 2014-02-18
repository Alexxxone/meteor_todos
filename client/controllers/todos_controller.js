TodosController = BaseController .extend({
    template: "todosList",
    waitOn: function(){
        return App.subs.todos;
    },
    data: {
        todos: function(){
            if( Session.get('todos_filter')){
                return Todos.find({ userId: Meteor.userId() },{sort: {created_at: -1},limit: Session.get('todosLimit') });
            }else{
                return Todos.find({},{sort: {created_at: -1},limit: Session.get('todosLimit') });
            }
        },
        users: Meteor.users.find()
    },
    unload: function () {
        Session.set('todos_filter',false)
    }
})