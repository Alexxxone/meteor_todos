SettingsController = BaseController.extend({
    yieldTemplates: {
        'header': { to: 'header' }
    },waitOn: function(){
        return App.subs.myFiles;
    },
    data:{
        files: function(){
            return ImagesFS.find({},{limit: 30,sort:{uploadDate: -1}});
        }
    }
});