
$("#show").on("click", function(){
    $("div > button").fadeIn("slow");
});


$("#hide").on("click", function(){
    $("div > button").fadeOut("slow");
});

// $("#button").on("click",function(){
//     $("#target").fadeIn("slow");  
// });


var count = 0;

$('#show').on("click", function(){
    count++;
    $("#test").html(count);
    $("test").css("border", + count + ."px");
})