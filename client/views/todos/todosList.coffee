@Template.todosList.events
  'click .clicked': ()->
    text = $('.new_todo')
    time = $('.new_todo_time')
    if text.val().length >= 3 and time.val().length isnt 0
      Todos.insert({ task: $('.new_todo').val(), time: $('.new_todo_time').val(), userId: Meteor.user().profile.name })
      text.val('')
      time.val('')
      $.UIkit.notify
        message: "Successfuly created!"
        status: "success"
        timeout: 2000
        pos: "top-center"
    else
      $.UIkit.notify
        message: "Fill all Fields!<br/> Time right? - #{time.val().length is not 0},<br/> Text status - #{text.val().length >= 3}"
        status: "warning"
        timeout: 2000
        pos: "top-center"
  'keypress .new_todo' : (e) ->
    if(e.keyCode == 13)
      $('.clicked').click()
  'click .show_create_modal':  ->
    animate_modal(1,'+')
  'click .close_create_modal': ->
    animate_modal(0,'-')
animate_modal=(op,top)->
  $( ".create_modal" ).animate
    opacity: op,
    top: "#{top}=400"
  , 500, () ->
    $('.show_create_modal').fadeToggle('fast')






