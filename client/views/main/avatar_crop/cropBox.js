Template.cropBox.rendered= function(){
    $(this.find('#cropModal')).modal('show')
    $(this.find('#bigAvatar')).Jcrop({
        onSelect: showCoords,
        onChange: showCoords,
        aspectRatio: 1,
        minSize: [100,100]
    });
    function showCoords(c)
    {
        var canvas=document.getElementById("preview");
        var ctx=canvas.getContext("2d");
        var img = document.getElementById("bigAvatar");
        canvas.width = c.w;
        canvas.height = c.h;
        ctx.drawImage(img,  c.x,  c.y,   c.w,c.h,   0,   0,  c.w,c.h);
    };

}

Template.cropBox.events({
     'click .submitCrop': function(){
        var canvas = document.getElementById("preview");
         if (canvas.toBlob) {
             canvas.toBlob(
                 function (blob) {
                     ImagesFS.storeFile( blob );
                     $('#cropModal').modal('hide');
                     $('.asAvatar:first').click();
                 },
                 'image/jpeg'
             );
         }
    }


})

