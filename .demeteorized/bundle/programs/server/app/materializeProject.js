(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// materializeProject.js                                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
                                                                       //
//CLIENT CODE                                                          //
//===================================================                  //
//===================================================                  //
if (Meteor.isClient) {                                                 // 7
  var count = 0;                                                       // 8
  var segundo = 0;                                                     // 9
  var minuto = 0;                                                      // 10
  var start = 0;                                                       // 11
  var running = 0;                                                     // 12
  var mycont;                                                          // 13
  var loop;                                                            // 14
                                                                       //
  function contaSegundo() {                                            // 16
    if (segundo >= 0) {                                                // 17
      if (segundo < 10) $("#contadorSegundo").html("0" + segundo);else $("#contadorSegundo").html(segundo);
    } else $("#contadorSegundo").html('00');                           //
  }                                                                    //
                                                                       //
  function contaMinuto() {                                             // 27
    if (minuto < 10) $("#contadorMinuto").html("0" + minuto);else $("#contadorMinuto").html(minuto);
  }                                                                    //
                                                                       //
  function zerar(minutos, segundos) {                                  // 34
    segundo = segundos;                                                // 35
    minuto = minutos;                                                  // 36
    contaSegundo();                                                    // 37
    contaMinuto();                                                     // 38
    changeColor('black');                                              // 39
    clearInterval(mycont);                                             // 40
  }                                                                    //
                                                                       //
  function cronometro() {                                              // 43
    if (segundo == 59) {                                               // 44
      segundo = 0;                                                     // 45
      minuto++;                                                        // 46
      contaMinuto();                                                   // 47
    }                                                                  //
    segundo++;                                                         // 49
    contaSegundo();                                                    // 50
  }                                                                    //
                                                                       //
  function timer() {                                                   // 53
    if (segundo == 0) {                                                // 54
      if (minuto != 0) {                                               // 55
        setTimeout(function () {                                       // 56
          segundo = 59;contaSegundo();minuto--;contaMinuto();          // 56
        }, 0);                                                         //
      } else {                                                         //
        loop = setInterval(repeatAudio, 500);                          // 58
        cont = 3;                                                      // 59
        changeColor('red');                                            // 60
        Materialize.toast("Acabou o Tempo!", 4000);                    // 61
        clearInterval(mycont);                                         // 62
        start = 0;                                                     // 63
        running = 0;                                                   // 64
        return true;                                                   // 65
      }                                                                //
    }                                                                  //
    segundo--;                                                         // 68
    contaSegundo();                                                    // 69
  }                                                                    //
                                                                       //
  function changeColor(color) {                                        // 72
    $("#h1tempo").css('color', color);                                 // 73
  }                                                                    //
                                                                       //
  function decreaseTime(minutos, segundos) {                           // 76
    zerar(minutos, segundos);                                          // 77
    $('#contadorMinuto').html(minuto);                                 // 78
    mycont = setInterval(timer, 1000);                                 // 79
    running = 1;                                                       // 80
    start = 1;                                                         // 81
  }                                                                    //
                                                                       //
  function repeatAudio() {                                             // 84
    cont--;                                                            // 85
    if (cont === 0) {                                                  // 86
      clearInterval(loop);                                             // 87
    }                                                                  //
    audioPlay();                                                       // 89
  }                                                                    //
                                                                       //
  function audioPlay() {                                               // 92
    $('#tocaAudio').html('<audio src="beep.mp3" autoplay ></audio>');  // 93
  }                                                                    //
  //HELPERS                                                            //
  //===================================================                //
  // Template.hello.helpers({                                          //
  //   counter: function() {                                           //
  //     counter++;                                                    //
  //     return counter;                                               //
  //   }                                                               //
  // });                                                               //
                                                                       //
  //TEMPLATES EVENTS                                                   //
  //===================================================                //
  Template.cronometro.events({                                         // 107
    'click #start': function () {                                      // 108
      zerar(0, 0);                                                     // 109
      mycont = setInterval(cronometro, 1000);                          // 110
      running = 1;                                                     // 111
      start = 1;                                                       // 112
      $("#pause").html("PAUSE");                                       // 113
    },                                                                 //
                                                                       //
    'click #pause': function () {                                      // 116
      if (start == 1) {                                                // 117
        if (running == 1) {                                            // 118
          clearInterval(mycont);                                       // 119
          $("#pause").html("RESUME");                                  // 120
          running = 0;                                                 // 121
        } else {                                                       //
          mycont = setInterval(cronometro, 1000);                      // 124
          $("#pause").html("PAUSE");                                   // 125
          running = 1;                                                 // 126
        }                                                              //
      }                                                                //
    },                                                                 //
                                                                       //
    'click #stop': function () {                                       // 131
      zerar(0, 0);                                                     // 132
      running = 0;                                                     // 133
      start = 0;                                                       // 134
      $("#pause").html("PAUSE");                                       // 135
    }                                                                  //
  });                                                                  //
                                                                       //
  Template.layout.events({                                             // 139
    'click .linkmenu': function () {                                   // 140
      zerar(0, 0);                                                     // 141
    }                                                                  //
  });                                                                  //
                                                                       //
  Template.pomodoro.events({                                           // 145
    'click #pomodoro': function () {                                   // 146
      decreaseTime(25, 0);                                             // 147
    },                                                                 //
                                                                       //
    'click #sbreak': function () {                                     // 150
      decreaseTime(5, 0);                                              // 151
    },                                                                 //
                                                                       //
    'click #lbreak': function () {                                     // 154
      decreaseTime(15, 0);                                             // 155
    },                                                                 //
                                                                       //
    'click #stop': function () {                                       // 158
      zerar(0, 0);                                                     // 159
      running = 0;                                                     // 160
      start = 0;                                                       // 161
      $("#pause").html("PAUSE");                                       // 162
    },                                                                 //
                                                                       //
    'click #pause': function () {                                      // 165
      if (start == 1) {                                                // 166
        if (running == 1) {                                            // 167
          clearInterval(mycont);                                       // 168
          $("#pause").html("RESUME");                                  // 169
          running = 0;                                                 // 170
        } else {                                                       //
          mycont = setInterval(timer, 1000);                           // 173
          $("#pause").html("PAUSE");                                   // 174
          running = 1;                                                 // 175
        }                                                              //
      }                                                                //
    }                                                                  //
  });                                                                  //
}                                                                      //
                                                                       //
//SERVER CODE                                                          //
//===================================================                  //
//===================================================                  //
if (Meteor.isServer) {                                                 // 186
  Meteor.startup(function () {                                         // 187
    // code to run on server at startup                                //
  });                                                                  //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=materializeProject.js.map
