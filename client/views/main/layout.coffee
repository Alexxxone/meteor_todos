@Template.layout.events
  'click .sign_out': ->
    Meteor.logout Router.go('login')
  'click .settings':->
    Router.go('settings')


