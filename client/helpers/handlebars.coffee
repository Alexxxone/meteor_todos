Handlebars.registerHelper 'owner', (userId) ->
  userId is Meteor.user()._id

Handlebars.registerHelper 'user_name',  ->
  Meteor.user().profile.name