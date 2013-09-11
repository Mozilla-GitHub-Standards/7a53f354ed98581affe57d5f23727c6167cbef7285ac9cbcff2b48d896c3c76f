App.ApplicationController = Ember.ArrayController.extend({
  needs: ["insight", "user"],
  user: function(){
    return this.get('controllers.user');
  }.property(),
  login: function(){
    this.get('user').login();
  },
  logout: function(){
    this.get('user').logout();
  },

  create: function(){
    alert('creating')
  }
});