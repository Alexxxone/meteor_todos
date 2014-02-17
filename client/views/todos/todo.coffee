@Template.todo.events
  'click .delete': ()->
    Todos.remove({_id: @_id})
  'click .add_comment': ->
    $('.new_comment_box'+@._id).toggleClass('hide')
  'click .save_comment': ->
    Todos.update({ _id:@_id },{$push:{comments: {sender: Meteor.user().profile.name, text:  $('.new_comment_box'+@._id).find('.comment_text').val(), created_at: new Date }}})
  'click .show_comments':->
    $('.todo_comments'+@_id).toggleClass('hide')
