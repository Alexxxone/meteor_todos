@Template.layout.events
  'click .sign_out': ->
    Meteor.logout Router.go('login')
  'click .settings':->
    Router.go('settings')

@Template.header.events
  'click .show_contact': ->
    unless $('#contactModal').length
      frag = Meteor.render(Template.contact)
      document.body.appendChild(frag)
    else
      $('#contactModal').modal('show')
  'click .avatar': ->
    unless $('#cropModal').length
      cropBox = Meteor.render(Template.cropBox)
      document.body.appendChild(cropBox)
    else
      $('#cropModal').modal('show')


