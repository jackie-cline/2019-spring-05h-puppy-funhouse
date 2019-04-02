$(document).ready(function(){ 
/* CHALLENGE #1:
    - when a user clicks on the happy button, make the background of the page yellow
    - when a user clicks on the sad button, make the background of the page blue */

    $("#happyButton").click(function(){
    	$("body").css("background-color","yellow");
   	});
   	 $("#sadButtons").click(function(){
    	$("body").css("background-color","blue");
   	});

/* CHALLENGE #2:
    - when a user clicks on any of the circles, change the h1 text and the border of the image to the color of the circle*/
    
    /***** LONGER VERSION OF THE SAME THING:
    $("#blue.circle").click(function(){
    	$("h1").css("color","blue")
    });
     $("#red.circle").click(function(){
    	$("h1").css("color","red")
    });
    $("#green.circle").click(function(){
    	$("h1").css("color","green")
    });

    $("#blue.circle").click(function(){
    	$("#puppy").css("border-color","blue")
    });
     $("#red.circle").click(function(){
    	$("#puppy").css("border-color","red")
    });
    $("#green.circle").click(function(){
    	$("#puppy").css("border-color","green")
    });
	*/
    
    $('.circle').on('click',function(){
        $('h1').css('color',$(this).prop('id'));
        $('#puppy').css('border-color',$(this).prop('id'));
    });

/* CHALLENGE #3:
    - when a user hovers on the dog image, change it to an image of your dog.
    - when a user is no longer hovering, change it back to tonks   */

	/***************  Below comments are my multiple attempts at getting this to work properly
    $("#puppy").hover(function(over){
    	$("#puppy").hide(this);
    	$("#zoey").show(this);
    });
     $("#puppy").hover(function(out){
    	$("#puppy").show(this);
    	$("#zoey").hide(this);
    });

    $('#puppy').hover(
				
    	function () {
            $(this).hide({});
        }, 
				
        function () {
            $("#zoey").show({});
        }
   	);
   	$('#zoey').hover(
				
    	function () {
            $(this).hide({});
        }, 
				
        function () {
            $("#puppy").show({});
        }
   	);
 	************/
	$('#puppy').hover(
	    function () { //mouse enter function
	        $('#puppy').prop('src','https://i.imgur.com/IG7qmpN.jpg');
	    }, 
	    function () { //mouse leave function
	        $('#puppy').prop('src','http://www.placedoggo.com/400/300'); 
	    }
	    
	);

/* CHALLENGE #4:
    - when a user double clicks on CHANGE ME, change the text to "I changed"!*/
	$( ".change" )
		.dblclick(function () {
			$(".change").each(function(){
				$(this).html("I changed!");
			});
	});
    
/* CHALLENGE #5:
    - when a user scrolls, add a new image of a dog of your choice to the bottom of the page.*/

	$(window).scroll(function(){
    	$('#zoey').show();
	});

});
