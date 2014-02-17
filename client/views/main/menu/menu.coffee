@Template.menu.events
  'click .only_mine': ->
    Session.set('todos_filter', true )
  'click .show_all': ->
    Session.set('todos_filter', false)