


//CLIENT CODE
//===================================================
//===================================================
if (Meteor.isClient) {
    var count = 0;
    var segundo = 0;
    var minuto = 0;
    var start = 0;
    var running = 0;
    var mycont;
    var loop;

    function contaSegundo(){
      if (segundo >= 0) {
        if (segundo < 10)
          $("#contadorSegundo").html("0"+segundo);
        else  
          $("#contadorSegundo").html(segundo);
      }
      else
        $("#contadorSegundo").html('00');
    }

    function contaMinuto(){
      if (minuto < 10)
      $("#contadorMinuto").html("0"+minuto);
      else  
        $("#contadorMinuto").html(minuto);
    }

    function zerar(minutos, segundos){
      segundo = segundos;
      minuto = minutos;
      contaSegundo();
      contaMinuto();
      changeColor('black')
      clearInterval(mycont);
    }   

    function cronometro(){
      if (segundo == 59) {
        segundo = 0;
        minuto++;
        contaMinuto();
      }
      segundo++;
      contaSegundo();
    }

    function timer(){
      if (segundo == 0){
          if(minuto != 0){
            setTimeout(function(){segundo = 59;contaSegundo();minuto--;contaMinuto();},0);
          }else{
            loop = setInterval(repeatAudio, 500);
            cont = 3;
            changeColor('red');
            Materialize.toast("Acabou o Tempo!",4000);
            clearInterval(mycont);
            start = 0;
            running = 0;
            return true;
          }
      }
      segundo--;
      contaSegundo();
    }

    function changeColor(color){
      $("#h1tempo").css('color', color);
    }

    function decreaseTime(minutos, segundos){
      zerar(minutos,segundos);
      $('#contadorMinuto').html(minuto);
      mycont = setInterval(timer,1000);
      running = 1;
      start = 1;
    }

    function repeatAudio() {
        cont--;
        if (cont === 0) {
            clearInterval(loop);
        }
        audioPlay();
    }

    function audioPlay(){
      $('#tocaAudio').html('<audio src="beep.mp3" autoplay ></audio>');
    }
//HELPERS
//===================================================
  // Template.hello.helpers({
  //   counter: function() {
  //     counter++; 
  //     return counter;
  //   }
  // });


//TEMPLATES EVENTS
//===================================================
  Template.cronometro.events({
    'click #start': function () {
        zerar(0,0);
        mycont = setInterval(cronometro,1000);
        running = 1;
        start = 1;
        $("#pause").html("PAUSE");        
    },

    'click #pause': function(){
        if (start == 1) {
            if (running == 1) {
              clearInterval(mycont);
              $("#pause").html("RESUME");
              running = 0;
            }
            else{
              mycont = setInterval(cronometro,1000);
              $("#pause").html("PAUSE");
              running = 1;
            }
        }
    },

    'click #stop': function(){
        zerar(0,0);
        running = 0;
        start = 0;
        $("#pause").html("PAUSE");
    }
  });

  Template.layout.events({
    'click .linkmenu': function(){
        zerar(0,0);
    }
  });

  Template.pomodoro.events({
    'click #pomodoro': function(){
        decreaseTime(25,0);
    },

    'click #sbreak':function(){
        decreaseTime(5,0);
    },

    'click #lbreak':function(){
        decreaseTime(15,0);
    },

    'click #stop': function(){
        zerar(0,0);
        running = 0;
        start = 0;
        $("#pause").html("PAUSE");
    },

    'click #pause': function(){
        if (start == 1) {
            if (running == 1) {
              clearInterval(mycont);
              $("#pause").html("RESUME");
              running = 0;
            }
            else{
              mycont = setInterval(timer,1000);
              $("#pause").html("PAUSE");
              running = 1;
            }
        }
    }
  });
}


//SERVER CODE
//===================================================
//===================================================
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
