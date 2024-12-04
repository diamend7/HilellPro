$(document).ready(function () {
    const $addButton = $('#addButton');
    const $inputTask = $('#inputTask');
    const $tasksTree = $('#tasksTree');

    const $exampleModal = $('#exampleModal');
    const $modaltext = $('.modal-body')

    $addButton.on('click', function () {
        const $newTask = $('<li></li>');
        const $newTaskText = $('<p></p>')
            .text($inputTask.val())
            .on('click', function () {
                $modaltext.text($(this).text());
                $exampleModal.modal('show');
            });
        const $newTaskButton = $('<button></button>')
            .attr('type', 'button')
            .text('Видалити')
            .on('click', function () {
                $(this).parent().remove(); 
            });

        $newTask.append($newTaskText).append($newTaskButton);
        $tasksTree.append($newTask);
    });
});
   
    



   