$(function(){
	var duration = 600;

	$('.hd_wrap').each(function(){
		var $hdWRap = $(this),
		    $aside = $hdWRap.find('aside');

		$hdWRap.find('button').on('click', function(){
			$aside.toggleClass('open');
			if($aside.hasClass('open')){
				$aside.stop(true).animate({
					left:'-0%'
				}, duration);
				$(this).stop(true).animate({
					left:'80%'
				}, duration);
			}
			else{
				$aside.stop(true).animate({
					left:'-90%'
				}, duration);
				$(this).stop(true).animate({
					left:'20px'
				}, 540);
			}
		})
	});		
})