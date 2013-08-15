App.InsightController = Em.ObjectController.extend({
  needs: "query",
});

App.Insight = DS.Model.extend({
  content: DS.attr('string'),
  
  spec: function(){
    var spec;
    try{
      spec = JSON.parse(this.get('content'));
    }catch(e){
      spec = {}
    }

    return spec;
  }.property('content'),

  query: function(){
    var q = this.get('spec.query') || '';
    return q;
  }.property('spec'),

 
  name: function(){
    return this.get('spec.name');
  }.property('spec'),

  isTemp: function(){
    return this.get('id') == 'temp';
  }.property('id')

});

App.Insight.FIXTURES = [{
  id: 1,
  name: "Google Analytics"
},{
  id: 2,
  name: "Size Histogram"
}]