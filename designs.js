// Select color input
// Select size input
var color, height, width;
// When size is submitted by the user, call makeGrid()

$ ('#sizePicker').submit(function (event){
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid (height, width);

   // console.log("Height: " + height + " and Width: " + width);
})

function makeGrid(x, y){
    //Revomes any tables before submitting new values
    $('tr').remove();

    //Create Grid
    for (var i = 1; i <= x; i++){
        $('#pixelCanvas').append('<tr id=row' + i + '></tr>');
        for (var j = 1; j <= y; j++){
            $('#row' + i).append('<td></td>');
        }
    }
    //Add Color to Grid cell
    $('td').click(function addColor(){
        color = $('#colorPicker').val();

        //Removes existing color attribute on 2nd click
        if ($(this).attr('style')) { 
            $(this).removeAttr('style')
        }else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}





