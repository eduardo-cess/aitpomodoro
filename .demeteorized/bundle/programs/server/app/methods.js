(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// methods.js                                                          //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  contaSegundo: function () {                                          // 2
    if (segundo < 10) $("#contadorSegundo").html("0" + segundo);else $("#contadorSegundo").html(segundo);
  },                                                                   //
                                                                       //
  contaMinuto: function () {                                           // 9
    if (minuto < 10) $("#contadorMinuto").html("0" + minuto);else $("#contadorMinuto").html(minuto);
  },                                                                   //
                                                                       //
  zerar: function () {                                                 // 16
    segundo = 0;                                                       // 17
    minuto = 0;                                                        // 18
    Meteor.call('contaSegundo');                                       // 19
    Meteor.call('contaMinuto');                                        // 20
  },                                                                   //
                                                                       //
  cronometro: function () {                                            // 23
    if (segundo == 59) {                                               // 24
      segundo = 0;                                                     // 25
      minuto++;                                                        // 26
      Meteor.call('contaMinuto');                                      // 27
    }                                                                  //
    segundo++;                                                         // 29
    Meteor.call('contaSegundo');                                       // 30
  }                                                                    //
});                                                                    //
                                                                       //
// function contaSegundo(){                                            //
// 	if (segundo < 10)                                                  //
// 	  $("#contadorSegundo").html("0"+segundo);                         //
//   else                                                              //
//   	$("#contadorSegundo").html(segundo);                             //
// }                                                                   //
                                                                       //
// function contaMinuto(){                                             //
// 	if (minuto < 10)                                                   //
// 	$("#contadorMinuto").html("0"+minuto);                             //
//   else                                                              //
//   	$("#contadorMinuto").html(minuto);                               //
// }                                                                   //
                                                                       //
// function zerar(){                                                   //
// 	segundo = 0;                                                       //
// 	minuto = 0;                                                        //
// 	contaSegundo();                                                    //
// 	contaMinuto();                                                     //
// }                                                                   //
                                                                       //
// function cronometro(){                                              //
// 	if (segundo == 59) {                                               //
// 		segundo = 0;                                                      //
// 		minuto++;                                                         //
// 		contaMinuto();                                                    //
// 	}                                                                  //
// 	segundo++;                                                         //
// 	contaSegundo();                                                    //
// }                                                                   //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=methods.js.map
