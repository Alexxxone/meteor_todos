BaseController = RouteController.extend({
    yieldTemplates: {
        'usersList': { to: 'right_side' },
        'menu': { to: 'left_menu' },
        'header': { to: 'header' }
    }
});

RegisterController = BaseController.extend({
    yieldTemplates: {
        'header': { to: 'header' }
    }
});
LoginController = BaseController.extend({
    yieldTemplates: {
        'header': { to: 'header' }
    }
});
SettingsController = BaseController.extend({
    yieldTemplates: {
        'header': { to: 'header' }
    }
});