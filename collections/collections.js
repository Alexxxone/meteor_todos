Todos = new Meteor.Collection('todos');
Chat = new Meteor.Collection('chat');

var imageStore = new FS.Store.FileSystem("images", {
    path: "/", //optional, default '~/cfs/files/name'
    beforeSave: myBeforeSaveFunction, //optional
    maxTries: 5 //optional, default 5
});
ImagesFS = new CollectionFS("images", {
    stores: [imageStore]
});
function myBeforeSaveFunction(){
    console.log(this);
}