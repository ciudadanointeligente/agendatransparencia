var app = angular.module("atransparenciaApp", []);

app.config(function($httpProvider) {
	//Enable cross domain calls
	$httpProvider.defaults.useXDomain = true;
	//Remove the header used to identify ajax call  that would prevent CORS from working
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller("AddVotesCtrl", function($scope, $http){
	
	$scope.addVote = function(proposal_id) {
		Cookies.set('card-'+proposal_id, 'vote-'+proposal_id, { expires: 7, path: '/' });
		$('#vote-'+proposal_id).attr('disabled','disabled');
		$http.jsonp(herokuapp+proposal_id+'/add_vote?callback=vote', {})
			.success(function(data){
				console.log('yey!');
			})
	}

})