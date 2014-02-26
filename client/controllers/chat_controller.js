ChatController = BaseController.extend({
    before: function(){
        var _id = this.params._id;
        if(App.subs.myChat){
            App.subs.myChat.stop();
        }
        App.subs.myChat = Meteor.subscribe('myChat',_id);
        App.subs.user = Meteor.subscribe('user',_id);
    },
    waitOn: function(){
        return Meteor.subscribe('myChat',this.params._id),Meteor.subscribe('user',this.params._id);
    },
    data: function(){
        return { messages: Chat.find({},{sort: {created_at: 1} })};
    }
});