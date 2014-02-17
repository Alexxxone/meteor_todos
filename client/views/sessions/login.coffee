@Template.login.events
  'submit #login-form' : (e, t) ->
    e.preventDefault();
    email = t.find('#login-email').value
    password = t.find('#login-password').value
    Meteor.loginWithPassword email, password, (err) ->
      if (err)
        $.UIkit.notify
          message: err
          status: "warning"
          timeout: 2000
          pos: "top-center"
      else
        $.UIkit.notify
          message: 'Successfuly signed in!'
          status: "success"
          timeout: 2000
          pos: "top-center"
        Router.go('/')
    false
  'click .sign_in_fill': ->
    $('#login-form').find('#login-email').val('b@mail.ru')
    $('#login-form').find('#login-password').val('12345678')




