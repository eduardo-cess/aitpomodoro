(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// routes.js                                                           //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Router.route('/', {                                                    // 1
  template: 'pomodoro',                                                // 2
  name: 'home'                                                         // 3
});                                                                    //
                                                                       //
Router.route('/cronometro', {                                          // 6
  template: 'cronometro'                                               // 7
});                                                                    //
                                                                       //
Router.route('/pomodoro', function () {                                // 10
  this.render('pomodoro');                                             // 11
});                                                                    //
                                                                       //
Router.configure({                                                     // 14
  layoutTemplate: 'layout'                                             // 15
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=routes.js.map
