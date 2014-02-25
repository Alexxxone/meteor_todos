@Template.todo.events
  'click .close': ()->
    Session.set('selected_todo',false)
    $('.todo_comments'+@_id).toggleClass('hide')
  'click .delete': ()->
    Todos.remove({_id: @_id})
  'click .save_comment': ->
    Todos.update({ _id: @_id },{ $push:{ comments: {
      senderId: Meteor.userId(),
      sender: Meteor.user().profile.name,
      text:  $('.todo_comments'+@._id).find('.comment_text').val(),
      created_at: new Date }}
    })
  'click .show_comments':->
    Session.set('selected_todo',@_id)
    $('.todo_comments'+@_id).toggleClass('hide')


@Template.todo.rendered = ->
  selected_todo = Session.get('selected_todo')
  if selected_todo
    $('.todo_comments'+selected_todo).removeClass('hide')
