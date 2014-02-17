BaseController = RouteController.extend({
    yieldTemplates: {
        'usersList': { to: 'right_side' },
        'menu': { to: 'left_menu' },
        'header': { to: 'header' }
    }
});

RegisterController = RouteController.extend({
    yieldTemplates: {
        'header': { to: 'header' }
    }
});
LoginController = RouteController.extend({
    yieldTemplates: {
        'header': { to: 'header' }
    }
});