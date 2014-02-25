Handlebars.registerHelper 'owner', (userId) ->
  userId is Meteor.user()._id
Handlebars.registerHelper 'user_name',  ->
  Meteor.user().profile.name
Handlebars.registerHelper "prettifyDate", (timestamp) ->
  moment(new Date(timestamp)).fromNow()

Handlebars.registerHelper "avatar",  ->
  url = Meteor.user().profile.avatar
  if url
    "<img src='"+url+"' class='avatar' id='user_avatar' alt='Avatar' />"
  else
    "<img src='/images/defAvatar.jpg' class='avatar' alt='Avatar' />"
Handlebars.registerHelper "avatar_url",  ->
    Meteor.user().profile.avatar

Handlebars.registerHelper "anyComments", (comments) ->
    if comments isnt undefined then true else false
