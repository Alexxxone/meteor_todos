Todos = new Meteor.Collection('todos');

var imageStore = new FS.Store.FileSystem("images", {
    path: "~/WORK/faceit/js/meteor/files", //optional, default '~/cfs/files/name'
    beforeSave: myBeforeSaveFunction, //optional
    maxTries: 1 //optional, default 5
});
ImagesFS = new CollectionFS("images", {
    stores: [imageStore]
});
function myBeforeSaveFunction(){
    console.log(this);
}