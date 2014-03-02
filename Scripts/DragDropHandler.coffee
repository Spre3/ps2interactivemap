jQuery ($) ->
    initDragAndDropEvents()
    true
    
revert = (dropped) ->
    true if !dropped
    false
    
getHelper = (event) ->
    $(event.currentTarget).find('span').clone()

dropped = (event, ui) ->
    $canvas = $(this)
    if !ui.draggable.hasClass('canvas-element')
        $canvasElement = $(ui.draggable).find('span').clone()
        $canvas.append($canvasElement)
        $canvasElement
            .addClass('canvas-element')       
            .draggable(containment: '#mapContainer')
            .css
                left: ui.offset.left - $canvas.offset().left
                top: ui.offset.top - $canvas.offset().top
                position: 'absolute'
                marginRight: 0
    true
    
initDragAndDropEvents = ->
    $('.drag-item').draggable
        helper: getHelper
        cursor: 'move'
        revert: revert
        cursorAt:
            top:10
            left:10
            
    $("#mapContainer").droppable
         tolerance:'pointer'
         drop: dropped    
    true