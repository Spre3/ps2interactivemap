(function() {
  var dropped, getHelper, initDragAndDropEvents, revert;

  jQuery(function($) {
    initDragAndDropEvents();
    return true;
  });

  revert = function(dropped) {
    if (!dropped) {
      true;
    }
    return false;
  };

  getHelper = function(event) {
    return $(event.currentTarget).find('span').clone();
  };

  dropped = function(event, ui) {
    var $canvas, $canvasElement;

    $canvas = $(this);
    if (!ui.draggable.hasClass('canvas-element')) {
      $canvasElement = $(ui.draggable).find('span').clone();
      $canvas.append($canvasElement);
      $canvasElement.addClass('canvas-element').draggable({
        containment: '#mapContainer'
      }).css({
        left: ui.offset.left - $canvas.offset().left,
        top: ui.offset.top - $canvas.offset().top
      });
    }
    return true;
  };

  initDragAndDropEvents = function() {
    $('.drag-item').draggable({
      helper: getHelper,
      cursor: 'move',
      revert: revert,
      cursorAt: {
        top: 10,
        left: 10
      }
    });
    $("#mapContainer").droppable({
      tolerance: 'pointer',
      drop: dropped
    });
    return true;
  };

}).call(this);
