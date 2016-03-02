Meteor.methods({
  contaSegundo: function(){
    if (segundo < 10)
      $("#contadorSegundo").html("0"+segundo);
    else  
      $("#contadorSegundo").html(segundo);
  },

  contaMinuto: function(){
    if (minuto < 10)
      $("#contadorMinuto").html("0"+minuto);
    else  
      $("#contadorMinuto").html(minuto);
  },

  zerar: function(){
    segundo = 0;
    minuto = 0;
    Meteor.call('contaSegundo');
    Meteor.call('contaMinuto');
  },

  cronometro: function(){
    if (segundo == 59) {
      segundo = 0;
      minuto++;
      Meteor.call('contaMinuto');
    }
    segundo++;
    Meteor.call('contaSegundo');
  }
});




// function contaSegundo(){
// 	if (segundo < 10)
// 	  $("#contadorSegundo").html("0"+segundo);
//   else  
//   	$("#contadorSegundo").html(segundo);
// }

// function contaMinuto(){
// 	if (minuto < 10)
// 	$("#contadorMinuto").html("0"+minuto);
//   else  
//   	$("#contadorMinuto").html(minuto);
// }

// function zerar(){
// 	segundo = 0;
// 	minuto = 0;
// 	contaSegundo();
// 	contaMinuto();
// }   

// function cronometro(){
// 	if (segundo == 59) {
// 		segundo = 0;
// 		minuto++;
// 		contaMinuto();
// 	}
// 	segundo++;
// 	contaSegundo();
// }