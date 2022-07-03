$(document).ready(function(){
	$('#gnb').mouseenter(function(){
		$('.sub_box').stop(true).slideDown(300);
	});
	$('#gnb').mouseleave(function(){
		$('.sub_box').stop(true).slideUp(300);
	})
});