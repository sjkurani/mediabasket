$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    );

      var cnt = 0;
    $(window).scroll(function(){
      //alert($(this).scrollTop());
      if($(this).scrollTop() >= 1200 && cnt == 0)
      { 
        cnt = 1;
        $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });

      }
    });

    //Date format
    var date = new Date();
    date.setDate(date.getDate());
    $(".form_datetime").datetimepicker({
        format: 'yyyy-mm-dd hh:ii',
        autoclose: true,
        todayBtn: true,
        startDate: date,
        minuteStep: 10
    });
    $("#media_close").click(function(){
    	$("#howmedia").slideUp(500);
    	$("#howmedia").hide();
    	$(".closable_div").hide();
    });

    $("#events_close").click(function(){
    	$("#howevents").slideUp(500);
    	$("#howevents").hide();
    	$(".closable_div").hide();
    });
    $("#advertising_close").click(function(){
    	$("#howadvertising").slideUp(500);
    	$("#howadvertising").hide();
    	$(".closable_div").hide();
    });


    $("#howmediabtn").click(function(){
    	$(".closable_div").hide();
    	$("#howmedia").slideDown(500);
    	$("#howmedia").show(100);
    });
    $("#howeventsbtn").click(function(){
    	$(".closable_div").hide();
    	$("#howevents").slideDown(500);
    	$("#howevents").show(100);
    });
    $("#howadvertisingbtn").click(function(){
    	$(".closable_div").hide();
    	$("#howadvertising").slideDown(500);
    	$("#howadvertising").show(100);
    });
    
    //Show back to top after height of 400.
    $(window).scroll(function(){
      //alert($(this).scrollTop());
      if($(this).scrollTop() >= 400)
      {
        $("#backtop").show();
      }
      else  {
      $("#backtop").hide(200);  
      }
    });
    $("#navID li").click(function(){

		if($(this).attr('id') == "media"){
			$("#media-section").show();
			$("#advertising-section").hide();
			$("#event-section").hide();

		}
		else if($(this).attr('id') == "events"){
			$("#event-section").show();
			$("#media-section").hide();
			$("#advertising-section").hide();
			
		}
		else if($(this).attr('id') == "advertising"){
			$("#advertising-section").show();
			$("#media-section").hide();
			$("#event-section").hide();
			
		}
    })
    jQuery('#backtop').click(function(){
        jQuery("html, body").animate({ scrollTop: 1 }, 'slow');
            return false;
    });

});