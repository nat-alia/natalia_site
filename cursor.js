
 $(function () {
 $(".grid").mousemove(function (e) {
   $(".cursor").show().css({
     "left": e.pageX,
     "top": e.pageY
   });
 }).mouseout(function () {
   $(".cursor").hide();
 });
 });


 $(function () {
 $(".grid").mousedown(function (e) {
   $(".cursor").css({
     "width": "50px",
     "height": "50px"
   });
 }).mouseup(function () {
   $(".cursor").css({
     "width": "30px",
     "height": "30px"
   });
 });
 });
