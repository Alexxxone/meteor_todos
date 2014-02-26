Template.help.events({
    'click .close': function(){
        $('.help_box .helpClass').animate({
            left: "+=100",
            opacity: 0

        },300);
        $('#helpBox').animate({
            opacity: 0
        },500,function(){
            $('#helpBox').remove();
        });
    }
});
Template.help.rendered = function(){
    $('#helpBox').animate({
        opacity: 1
    },300, function(){
        $('.help_box .helpClass').animate({
            left: "-=100",
            opacity: 1

        },300);
    });


}



Template.help.helpers({
    contact_help: contact_help,
    avatar_help: avatar_help,
    menu_help: menu_help
});

function contact_help(){
    parent = $('.show_contact');
    parentPos= parent.offset();
    parentWidh = parent.width()/2;
    parentHeight = parent.outerHeight();
    position= {
        top: parentPos.top+parentHeight+20,
        left: parentPos.left+100-parentWidh-105
    };
    return '<div style="color:white;background-color:transparent; position: absolute; z-index:1055;top:'+(position.top-20)+'px;left:'+(position.left+70)+'px;" class="helpClass"><i class="fa fa-arrow-up fa-2"></i></div>'+
        '<p class="helpClass" style="top:'+position.top+'px;left:'+position.left+'px;position: absolute;">Write message to Us!<p>';

}
function avatar_help(){
    parent = $('.avatar');
    parentPos= parent.offset();
    parentHeight = parent.height()/2;
    parentWidth = parent.width();
    position= {
        top: parentPos.top+parentHeight-30,
        left: parentPos.left+parentWidth+120
    };
    a = '<div style="color:white;background-color:transparent; position: absolute; z-index:1055;top:'+(position.top+10)+'px;left:'+(position.left-20)+'px;" class="helpClass"><i class="fa fa-arrow-left fa-4"></i></div>'+
        '<p class="helpClass" style="top:'+position.top+'px;left:'+position.left+'px; position: absolute;">Click to crop avatar(it will save cropped image to your images)!<p>';
    return a;
}
function menu_help(){
    parent = $('.only_mine').parent();
    parentPos= parent.offset();
    parentHeight = parent.height();
    parentWidth = parent.outerWidth();
    position= {
        top: parentPos.top,
        left: parentPos.left+parentWidth+120
    };
    a = '<div style="color:white;background-color:transparent; position: absolute; z-index:1055;top:'+(position.top+40)+'px;left:'+(position.left-20)+'px;" class="helpClass"><i class="fa fa-arrow-left fa-2"></i></div>'+
        '<div style="position: absolute; z-index:1051;top:'+position.top+'px;left:'+position.left+'px;" class="helpClass">'+
        '<p  class="helpClass">Show Only Mine Todos</p>'+
        '<p  class="helpClass">Show All Todos</p></div>'

    return a;
}