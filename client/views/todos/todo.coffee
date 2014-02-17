@Template.todo.events
  'click .delete': ()->
    Todos.remove({_id: @_id})

