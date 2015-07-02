var app = angular.module("atransparenciaApp", []);

app.config(function($httpProvider) {
  //enable cross domain calls
  $httpProvider.defaults.useXDomain = true;
  //remove the header used to identify ajax call  that would prevent CORS from working
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller("AddVotesCtrl", function($scope, $http){

  $scope.addVote = function(proposal_id) {
    $http.jsonp(herokuapp+'/'+proposal_id+'/add_vote?callback=vote')
  }

})

function counter_votes(v) {
  var x=0;
  votes = v.votes.toString().split('');
  ul = $('.citizen-support-'+v.id);
  ul.html('');
  while(x<votes.length){
    ul.append('<li>'+votes[x]+'</li>');
    x++;
  }
  if(votes.length<=3) {
    var v=votes.length;
    while(v<3){
      ul.prepend('<li>0</li>');
      v++;
    }
  }
}

function vote(data) {
  var votes = [], x=0;
  //set cookie for disallow voting button
  Cookies.set('card-'+data.id, 'vote-'+data.id, { expires: 1, path: '/' });
  $('#vote-'+data.id).attr('disabled','disabled');
  $('#vote-'+data.id).html('Gracias por tu apoyo');
  counter_votes(data);
}