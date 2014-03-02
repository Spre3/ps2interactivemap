$(function () {
    $(".drag-item").draggable({
        helper: getHelper,
        cursor: 'move',
        revert: revert,
        cursorAt: { top: 10, left: 10 }
    })    
    ;
   
    $("#mapContainer").droppable({
        tolerance:"pointer",
        drop: function (event, ui) {            
            var $canvas = $(this);
            if (!ui.draggable.hasClass('canvas-element')) {
                var $canvasElement = $(ui.draggable).find('span').clone();
                $canvasElement.addClass('canvas-element');
                $canvasElement.draggable({
                    containment: '#mapContainer'
                });
                $canvas.append($canvasElement);
                $canvasElement.css({
                    left: (ui.offset.left - $canvas.offset().left),
                    top: ui.offset.top - $canvas.offset().top,
                    position: 'absolute',
                    marginRight: 0
                });
            }
        }
    });


});
function revert(dropped){
    if (!dropped)
        return true;
    return false;
};
function getHelper(event) {
    return $(event.currentTarget).find('span').clone();
  
   
}