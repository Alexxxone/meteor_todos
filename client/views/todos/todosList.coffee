@Template.todosList.events
  'click .next': ->
    Session.set('todosLimit', parseInt(Session.get('todosLimit'))+2)

  'click .clicked': ()->
    text = $('.new_todo')
    if text.val().length >= 3
      Todos.insert({
        task: $('.new_todo').val(),
        time: new Date,
        sender: Meteor.user().profile.name,
        userId: Meteor.userId()
      })
      text.val('')
      notify()
    else
      notify("Fill all Fields!<br/> Text status - #{text.val().length >= 3}","warning")
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
notify= (text='Successfully Created!',status="success")->
  $.UIkit.notify
    message: text
    status:  status
    timeout: 2000
    pos: "top-center"
@Template.todosList.rendered=->
  $(document).scroll ()->
    h = $(window).scrollTop() + $(window).height()
    if h > $(document).height() - 200
      console.log 'NEED TO LOAD'
      Session.set('todosLimit', parseInt(Session.get('todosLimit'))+2)






