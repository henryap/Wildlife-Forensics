var doc = document.body;
var userAgent = navigator.userAgent;
doc.setAttribute("data-useragent", userAgent);

$(document).ready(function() {

	//Modal form for footer 'send info' cta
	$('#send_info').click(function(){
		$('.overlay').show(0, 'linear',function(){
			$('.modal_form').show();
		})
	});

	$('.overlay').click(function(){
		$('.modal_form').hide(0, 'linear', function(){
			$('.overlay').hide();
		});

	});

	$('#close_modal').click(function(){
		$('.modal_form').hide(0, 'linear', function(){
			$('.overlay').hide();
		});

	});

    // Disable css file icons from images linked to docs (e.g. doc, pdf, xls, etc)
    $("a:has(img)").addClass('no-icon');

    // PrettyPhoto
    function ufandshands_lightbox() {

      //$("a[rel^='prettyPhoto'],.gallery a").prettyPhoto({
      $("a[href$='.jpg'], a[href$='.jpeg'], a[href$='.gif'], a[href$='.png'], a[rel^='prettyvideo']").prettyPhoto({
        animationSpeed:'fast',
        slideshow:5000,
        theme:'pp_default',
        show_title:false,
        social_tools:false,
        overlay_gallery: true,
        markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<a class="pp_close" href="#">Close</a> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details"> \
											<div class="pp_nav"> \
												<a href="#" class="pp_arrow_previous">Previous</a> \
												<p class="currentTextHolder">0/0</p> \
												<a href="#" class="pp_arrow_next">Next</a> \
											</div> \
											<p class="pp_description"></p> \
											{pp_social} \
                                            <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>'
      });

    }

    if(jQuery().prettyPhoto) {

      ufandshands_lightbox();

    }

	function responsive_menu_child_toggle() {
		$(this).parent().find('ul').slideToggle();

	} // end responsive_menu_child_toggle


	//apollo tab system
	$("#tab-one").show();
	$(".content-tabs li a").click(function (e){
		e.preventDefault();
		var parent = $(this).parent("li");
		var tab_data_id = $(this).attr("href");

		if(parent.hasClass("active")){
			//do nothing
		} else {
			$(".content-tabs li").removeClass("active");
			$(".apollo-tabs").hide( 0, '', function(){
				parent.addClass("active");
				$("#"+tab_data_id).show(0, '');
			});

		}

	});

	//Open tabs via URL hash
	$(function(){

   if (window.location.hash){
      var hash = window.location.hash.substring(1);
      switch(hash){
      	case 'tabone':
      	showOne();
      	break;
      	case 'tabtwo':
      	showTwo();
      	break;
      	case 'tabthree':
      	showThree();
      	break;
      	case 'tabfour':
      	showFour();
      	break;

      }


   }

});

function showOne(){

				$(".content-tabs li").removeClass("active");
   				$(".apollo-tabs").hide( 0, '', function(){
   				$("#tab-one").show(0, '');
   				$(".content-tabs ul li:nth-child(1)").addClass("active");

			});
}

function showTwo(){

				$(".content-tabs li").removeClass("active");
   				$(".apollo-tabs").hide( 0, '', function(){
   				$("#tab-two").show(0, '');
   				$(".content-tabs ul li:nth-child(2)").addClass("active");

			});
}

function showThree(){
 				$(".content-tabs li").removeClass("active");
   				$(".apollo-tabs").hide( 0, '', function(){
   				$("#tab-three").show(0, '');
   				$(".content-tabs ul li:nth-child(3)").addClass("active");

			});
}

function showFour(){

				$(".content-tabs li").removeClass("active");
   				$(".apollo-tabs").hide( 0, '', function(){
   				$("#tab-four").show(0, '');
   				$(".content-tabs ul li:nth-child(4)").addClass("active");

			});
}

//Pull RMI form information and populate MDAP form
 var prog_cookie = Cookies.get('program');
 console.log(prog_cookie);

 switch(prog_cookie){
 	case "Master's Degree":
 	$('#ms_info').show();
 	$('#ms_tysb').show();
 	break;

 	case "Certificate":
 	$('#cert_info').show();
 	$('#cert_tysb').show();
 	break;

 	case "Non-degree":
 	$('#nd_info').show();
 	$('#nd_tysb').show();
 	break;

 	default:
 	$('#ud_info').show();
 	$('#tysb').show();
 	break;
 }

if(Cookies.get('first_name')){
	$('#mandatory_form input[name="first_name"]').val(Cookies.get('first_name'));
}

if(Cookies.get('last_name')){
	$('#mandatory_form input[name="last_name"]').val(Cookies.get('last_name'));
}


if(Cookies.get('email')){
	$('#mandatory_form input[name="email"]').val(Cookies.get('email'));
}

if(Cookies.get('phone')){
	$('#mandatory_form input[name="phone"]').val(Cookies.get('phone'));
}


});
