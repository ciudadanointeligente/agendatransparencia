var app = angular.module("atransparenciaApp", []);

app.config(function($httpProvider) {
	//Enable cross domain calls
	$httpProvider.defaults.useXDomain = true;
	//Remove the header used to identify ajax call  that would prevent CORS from working
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller("AddVotesCtrl", function($scope, $http){
	
	$scope.addVote = function(proposal_id) {
		$http.put(herokuapp+proposal_id+'/add_vote')
			.success(function(data){
				console.log('yey!');
			})
	}

})