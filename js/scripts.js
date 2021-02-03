console.log("hello world");

var $q1 = $("#q1");
var $a1 = $("#a1");
var $q2 = $("#q2");
var $a2 = $("#a2");
var $q3 = $("#q3");
var $a3 = $("#a3");

$q1.on("click", function() {
    $(this).hide();
    $a1.show();
    $("body").css("background-color", "#C69180");
})

$a1.on("click", function() {
    $(this).hide();
    $q2.show();
    $("body").css("background-color", "#6A8D92");
})

$q2.on("click", function() {
    $(this).hide();
    $a2.show();
    $("body").css("background-color", "#FFF1E6");
})

$a2.on("click", function() {
    $(this).hide();
    $q3.show();
    $("body").css("background-color", "#C69180");
})

$q3.on("click", function() {
    $(this).hide();
    $a3.show();
    $("body").css("background-color", "#7F95D1");
})

$a3.on("click", function() {
    $(this).hide();
    $q1.show();
    $("body").css("background-color", "#769FB6");
})