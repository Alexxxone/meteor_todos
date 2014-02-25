@Template.menu.events
  'click .only_mine': ->
    Session.set('todos_filter', true )
    if Router.current().route.name isnt 'todosList' then Router.go('todosList')
  'click .show_all': ->
    Session.set('todos_filter', false)
    if Router.current().route.name isnt 'todosList' then Router.go('todosList')

