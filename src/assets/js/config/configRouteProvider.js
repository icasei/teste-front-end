app.config(function($routeProvider, $locationProvider) {
	
	$routeProvider

		.when("/", {
	        templateUrl : "/src/view/busca-filmes.html"
	    })

	    .when("/search/", {
	        templateUrl : "/src/view/busca-filmes.html"
	    })
	   	
	   	.when("/detalhes/:imdbID", {
	        templateUrl : "/src/view/detalhe-filme.html"
	    })

	    .when("/error", {
	        templateUrl : "/src/view/error.html"
	    })

	    .otherwise({
        	templateUrl: '/src/view/error.html'
		});
});