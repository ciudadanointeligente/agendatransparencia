var app = angular.module("atransparenciaApp", [], function(){});

app.controller("AddVotesCtrl", function($scope, $http){
	
	$scope.addVote = function(proposal_id) {
		$http.put(herokuapp+proposal_id+'/add_vote')
			.success(function(data){
				console.log('yey!');
			})
	}

})