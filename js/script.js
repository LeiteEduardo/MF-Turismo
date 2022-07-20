//Função para abrir ou fechar a modal, com a opção de limpar ou não o formulario da modal
function abreFechaModalPorId(idModal, idForm, operacao)
{
    // Limpando form caso exista
    if(idForm != "")
    {
      limpaFormularioPorId(idForm);
  }
    // Abrindo modal
    if(operacao === "abrir")
    {
        $("#"+idModal).modal("show");
        $("#"+idModal).modal("handleUpdate");
    }
    // Fechando modal
    else if(operacao === "fechar")
    {
        $("#"+idModal).modal("hide");
    } 
}

$('.nav-link').click(function(e){
    //console.log($(this).text());

    $('html, body').animate({
        scrollTop: $('#' + $(this).text()).offset().top - 63
    }, 200);    
    
    
});

$(document).ready(function()
{ 
    year = new Date().getFullYear()
    $('#text-footer').text('Copyright © MF Turismo ' + year);
});


/*$('.nav-list li a').click(() ->
  $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 40
  }, 200
  //return false
  );*/
