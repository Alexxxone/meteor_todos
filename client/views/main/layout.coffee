@Template.layout.events
  'click .sign_out': ->
    Meteor.logout Router.go('login')


