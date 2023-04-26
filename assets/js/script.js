$(document).ready(function () {
    
$("#enviarCorreo").click(function(){
    alert("El correo fue enviado correctamente...")
})

$("h6").on("dblclick", function(){
    $(this).css("color", "#DC3545");
})
 
$(".card-title").on("click",function(){
    $(".card-text").toggle("slow")
})
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))