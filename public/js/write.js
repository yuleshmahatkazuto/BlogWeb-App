window.onload = function() {
    const alertDiv = $("#alertMessage");
    if(alertDiv){
        setTimeout(function(){alertDiv.remove()}, 5000);
    }
}