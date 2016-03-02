Router.route('/', {
  template: 'pomodoro',
  name: 'home'
});

Router.route('/cronometro', {
    template: 'cronometro'
});

Router.route('/pomodoro', function () {
  this.render('pomodoro');
});

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/google86f6b1dc2a9f95bb.html',{template: "google86f6b1dc2a9f95bb.html"})