Template.contact.events({

    'click .sendContact': function(e,tmpl){
        text = tmpl.find('#textArea').value;
        name = tmpl.find('#contactFrom').value;
        if(name.length >2 && text.length >10){
            Meteor.call('sendEmail',
                'Aleksandr.Vladimirovich.Khomenko@gmail.com',
                'bulletone@mail.ru',
                'Sender: '+name,
                text
            );
            tmpl.find('#textArea').value = '';
            tmpl.find('#contactFrom').value = '';
            notify('Your message was send!',"success");
            $('#contactModal').modal('hide');
        }else{
            $('#contactModal').modal('hide');
            Meteor.setTimeout(function(){
                $('#contactModal').modal('show');
            }, 1500)
            notify('Name or Text Error',"warning");
        }

    }
})
Template.contact.rendered = function(){
    $('#contactModal').modal('show');

}

function notify(message,status){
    $.UIkit.notify({
        message:message,
        status: status,
        timeout: 1000,
        pos: "top-center"
    })
}