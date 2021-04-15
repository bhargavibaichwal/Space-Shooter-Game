$( document ).ready(function () {
  gamestart()
})

function gamestart(){
  $(".game").hide()
  $(".gamespace").hide()
  $('.gamewin').hide()
  $(".gamelose").hide()

  $(".quit").css("cursor","pointer")

  $(".back").click(function(){
    $('.gamewin').hide()
    $(".gamelose").hide()
    $(".intro").show();
    location.reload();
    gamestart()
  })

  $(".quit").click(function(){
    
    $(".gamespace").hide()
    $(".intro").show()
    location.reload()
    gamestart()
  })
  
  setInterval(function(){
    size=$(".startgame").css("font-size")
    size=parseInt(size)
    if (size==20){

      $('.startgame').css("font-size",25);
      size=$(".startgame").css("font-size");

    }
    else{
      $('.startgame').css("font-size",20);
  
    }    
  
},500);

$('.startgame').click(function(){
  $('.intro').hide(); // hiding the start page
  $(".description").hide()
  $(".game").show();// showing the images
  $(".gamespace").show();// showing the layout
  timer();// starting the timer
  images = ["images/alien4.png","images/human.png"];  
  randomimage();
  count=0;
  whatsclicked();
})

function whatsclicked(){
  images = ["images/alien4.png","images/human.png"]
  
  $("#gameicon").click(function(){
    if ($("#gameicon").attr('src')=="images/alien4.png"){
      count++
      $(".score").text(count+"/20");
      if (count>=20){
        window.clearInterval(x);
        window.clearInterval(y);
        $(".yourscore").text(count+"/20")
        $(".gamespace").hide()
        $("#gameicon").hide()
        $(".gamewin").show()
        
      }
    }
    else if ($("#gameicon").attr('src')=="images/human.png"){
      $("hr").css("width","-=40px");
      if (($("hr").css("width"))<'40px'){
        $("hr").css("background-color","red")
        if($("hr").css("width")<='0px'){
          window.clearInterval(x);
          window.clearInterval(y);
          $(".yourscore").text(count+"/20")
          $(".gamespace").hide();
          $("#gameicon").hide();
          $(".gamelose").show();

        }
      }
      
    }
  })
}

//// randomizing image and location of the image////
function randomimage(){
  y=setInterval(myFunction,1500)
}


function myFunction() {
  x = Math.floor((Math.random() * images.length)); 
  $('#gameicon').attr('src', images[x]);
  moveImage();
  }


  

function moveImage(){
  if ((screen.width>=950)&&(screen.width<=1200)){
    var top=[150,200,300,400];
    var left=[300,600,700,500];
  }
  else if ((screen.width>=1200)){
    var top=[150,200,300,400];
    var left=[300,600,900,500];
  }
  else if ((screen.width>=700)&&(screen.width<=950)){
    var top=[150,200,300,400];
    var left=[200,500,400,450];
  }
  
    
  var top_px = top[Math.floor(Math.random() * top.length)];

  var left_px= left[Math.floor(Math.random() * left.length)];
  
  $('#gameicon').css('top',top_px + "px");
  $('#gameicon').css('left',left_px + "px");  
  
  }

///// for timer////////

function timer(){
  let minutes = 01; // starting number of minutes
  let seconds = 60; // starting number of seconds
  x = setInterval(function() {
    seconds=seconds-1;
    if(seconds!=0){
      $("#minutes").text(minutes)
      $("#seconds").text(seconds);
    }
    else if (seconds==0){
      if(minutes>=0){
        seconds=59
        seconds=seconds-1
        minutes=minutes-1;
        if (minutes<0){
          window.clearInterval(x);
          window.clearInterval(y);
          if(count>=20){
            $(".gamespace").hide();
            $("#gameicon").hide()
            $(".gamewin").show();
          }
          else {
            $(".gamespace").hide();
            $("#gameicon").hide()
            $(".gamelose").show();
          }
        }
        else{
          $("#minutes").text(minutes);
          $("#seconds").text(seconds)
        }}
    }
},1000)
}
}
