@Template.register.events
    'submit #register-form' : (e, t) ->
      e.preventDefault();
      email = secureInput(t.find('#account-email').value)
      password = t.find('#account-password').value
      confirmation = t.find('#confirmation_account-password').value
      name = t.find('#account-name').value
      if confirmation is password and name isnt ''
        Accounts.createUser email : email, password : password, profile: name : name  , (err)->
          if err
            notify(err,'error')
          else
            notify()
            Router.go('/')
      else
        notify("Password fields not Match! Or Empty Name!","error")
      false

notify= (text='Successfully registred!',status="success")->
  $.UIkit.notify
    message: text
    status:  status
    timeout: 2000
    pos: "top-center"
secureInput = (val) ->
  $.trim(val)
  val.replace(/^\s*|\s*$/g, "")
  val.replace /<\/?[^>]+>/g, ""
isValidPassword = (val) ->
  val.length >= 6 ? true : false



