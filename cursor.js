
 $(function () {
 $("body").mousemove(function (e) {
   $(".cursor").show().css({
     "left": e.pageX,
     "top": e.pageY
   });
 }).mouseout(function () {
   $(".cursor").hide();
 });
 });


 $(function () {
 $("body").mousedown(function (e) {
   $(".cursor").css({
     "width": "30px",
     "height": "30px"
   });
 }).mouseup(function () {
   $(".cursor").css({
     "width": "15px",
     "height": "15px"
   });
 });
 });

 $(function () {
 $("a").mouseover(function (e) {
   $(".cursor").css({
     "background-color": "white",
     "border-color": "black"
   });
 }).mouseout(function () {
   $(".cursor").css({
     "background-color":"black",
     "border-color":"white",   });
 });
 });
