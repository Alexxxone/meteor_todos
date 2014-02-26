Template.chat.events({
    'click .save_message': function(){
        Chat.insert({senderId: Meteor.userId(),receiverId:Router._currentController.params._id,text: $('.message_text').val(), created_at: new Date });
    }

})