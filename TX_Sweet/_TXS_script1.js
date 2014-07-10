var closeUp = function (picId) {
    var pic = document.getElementById(picId).getAttribute('src');
    document.getElementById('modalPic').setAttribute('src', pic);

    $('#myModal').modal();
  
}
$('#myModal').modal('hide');