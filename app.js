$(function(){
	$('div').hide();//Cache tous les div
	$('h2').css('cursor','pointer');//Change le curseur sur un h2
	$('h2').click(function(){//Lors d'un click sur le h2
		$('div').hide();//Cache tous les div
		$(this).next().slideToggle();//SlideToggle l'element courant
	});
});