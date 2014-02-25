Router.configure({
    layoutTemplate: "layout",
    notFoundTemplate: "notFound",
    loadingTemplate: "loading",

    before: function() {
        Session.set('todosLimit',10);
        if (!Meteor.userId() && this.route.name != 'register') {
            this.render('login');
            this.render('header', {to: 'header'});
            return this.stop();
        }
    }
});

Router.map(function() {
    this.route("todosList", {
        path: '/',
        controller: 'TodosController'
    });
    this.route("login", {
        path: "/login"
    });
    this.route("register", {
        path: "/register"
    });
    this.route("user", {
        path: "/users/:_id",
        template: "user_todos"
    });
    this.route("settings", {
        path: "/settings",
        template: "settings"
    });
});



