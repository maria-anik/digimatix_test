$(window).ready(function() {
	$(".news-slider").slick({
		slidesToShow: 4,
  		slidesToScroll: 1,
  		infinite: true,
  		dots: true,
  		responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 350,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]

	})

	$(".news-tab__link-item").click(function(){
		if (!$(this).hasClass("news-tab__link-item--active")) {
			var id = $(this).data("id");
			if ($(".news-tab__block-item[data-id='"+id+"']").length) {
				$(".news-tab__link-item--active").removeClass("news-tab__link-item--active");
				$(this).addClass("news-tab__link-item--active")

				$(".news-tab__block-item").removeClass("news-tab__block-item--active");
				$(".news-tab__block-item[data-id='"+id+"']").addClass("news-tab__block-item--active");
			}
		}
	})

	$(".sec-form__item-tel").inputmask("+7(999)999-99-99")

	
	$(".sec-form__item span").each(function(){
		$(this).width($(this).width());
	})

	$(".sec-form__item").each(function(){
		var label = $(this).find("span")
		$(label).width($(label).width());

		if ($(this).find("input").val()!="") {
			$(this).addClass("active");
			var text_l = $(label).width() + 40;
			$(this).find(".sec-form__item-line").css("width", "calc(100% - "+ text_l+"px)");
		}
	})


	$(".sec-form__item input").focus(function(){
		$(this).closest(".sec-form__item").addClass("active");
		var text_l = $(this).closest(".sec-form__item").find("span").width() + 40;
		$(this).siblings(".sec-form__item-line").css("width", "calc(100% - "+ text_l+"px)");
	})
	$(".sec-form__item input").blur(function(){
		if ($(this).val()=="") {
			$(this).closest(".sec-form__item").removeClass("active")
			$(this).siblings(".sec-form__item-line").css("width", "calc(100% - 12px)");
		} 
	})
})