"use strict";

$(document).ready(function () {
  var $addButton = $('#addButton');
  var $inputTask = $('#inputTask');
  var $tasksTree = $('#tasksTree');
  var $exampleModal = $('#exampleModal');
  var $modaltext = $('.modal-body');
  $addButton.on('click', function () {
    var $newTask = $('<li></li>');
    var $newTaskText = $('<p></p>').text($inputTask.val()).on('click', function () {
      $modaltext.text($(this).text());
      $exampleModal.modal('show');
    });
    var $newTaskButton = $('<button></button>').attr('type', 'button').text('Видалити').on('click', function () {
      $(this).parent().remove();
    });
    $newTask.append($newTaskText).append($newTaskButton);
    $tasksTree.append($newTask);
  });
});