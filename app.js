if(Meteor.isClient){
  Session.set("todosLimit", 10)
  App ={
      subs: {
          todos: Meteor.subscribe("todos"),
          users: Meteor.subscribe("users"),
          myFiles: Meteor.subscribe("myFiles"),
          myChat: Meteor.subscribe("chat")
      }
  }
}

