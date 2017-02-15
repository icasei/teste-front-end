app.controller('detalheFilmeCtrl',function ($rootScope ,$scope, $http, omdbApi, $routeParams,$location,$cookieStore){

	$scope.filmeDetalhes;

	$scope.init = function() {
		$scope.filmeDetalhes = $rootScope.filmeDetalhes;
	}// funcao inicial recupera detalhes do filme selecionado.

	$scope.init();	
});