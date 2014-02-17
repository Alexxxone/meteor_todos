if(Meteor.isClient){
  App ={
      subs: {
          todos: Meteor.subscribe("todos"),
          users: Meteor.subscribe("users")
      }
  }
}