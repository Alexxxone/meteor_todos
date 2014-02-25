Package.describe({
    summary: "Giving the package system a spin"
});

// Tell Meteor what to do with our package at bundle time
Package.on_use(function (api) {

    // The api.use method allows us to depend on other
    // packages that ship with meteor or are in our project's
    // package directory
    api.use(["underscore", "templating","handlebars"], "client");

    // we can add files to the client, server, or both
    // in this case load both.js on the client AND the server
    api.add_files("both.js", ["client", "server"]);


    // Add templates.html and client.js files ONLY on
    // the client
    api.add_files(["templates.html", "client.js"], "client");
});