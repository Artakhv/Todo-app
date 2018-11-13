// Color of lis.
$("ul").on("click","li",function(){
	// type 1, not rcomended
// 	if( $(this).css("color")==="rgb(128, 128, 128)")
// 	{
// 		$(this).css({
// 			color:"black",
// 			textDecoration:"none"
// 		});
// 	}
// 	else {
// 		$(this).css({
// 			color:"gray",
// 			textDecoration:"line-through"
// 		});
// 	}
// type 2
    $(this).toggleClass("complated")
    });

// Click X to remove
$("ul").on("click","span",function(evt){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	evt.stopPropagation();
});
//  Creation of new todos
$("input[type='text'").keypress(function(event){
	if (event.which===13) {
		// grabbing new todo-list from input
		var todoText=$(this).val()
		$(this).val("")
		// create a new li and add to li
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>")
	}


})

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
})






	

