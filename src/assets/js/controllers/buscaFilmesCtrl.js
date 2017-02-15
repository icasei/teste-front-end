app.controller('buscaFilmesCtrl',function ($rootScope,$scope, $routeParams,$http, omdbApi, $location, $cookieStore){
		
	$scope.buscaInvalid = false;// boolean para validar campo de busca	
	$scope.msgAlert =""; // mensagem exibida para usuario
		
	$scope.buscaFilme = function(){	
		if($scope.filmePesquisa === ""){
			$scope.buscaInvalid = true;
		}else{
			$scope.buscaInvalid = false;
			getBuscaFilmes();
		}			
 	};//valida campos de busca, somente consulta filmes quando estiver preenchido.

 	var getBuscaFilmes = function () {		
 		$scope.exibeLista = true; // exibi div com informações da busca
		omdbApi.getBuscaFilmes($scope.filmePesquisa).success(function (data) {
			if(data.Response === 'True'){
				$scope.filmesEncontrados = data.Search; //popula array com filmes				
			}else{				
				$scope.msgAlert ="Nenhum Filme foi encontrado em sua busca :(";
			}			
		}).error(function (data, status) {	

			$cookieStore.remove('dadosBusca'); //remove dados da busca da sessão

			$scope.filmesEncontrados = [];
			if(status === 503){
				$scope.msgAlert ="Erro 503: Algo deu errado tente novamente.";				
			}
			if(status === 404){
				$scope.msgAlert ="Erro 404: Algo deu errado tente novamente.";				
			}

			if(status == '-1'){
				$location.path("/error");			
			}							
		});
	};// consulta API de filmes para retorno de busca por nome.

	$scope.init = function(){		
		if($routeParams.search == undefined){
			$scope.filmesEncontrados = [];
			$scope.filmePesquisa = "";
			$scope.exibeLista = false;
		}else{
			var dadosBusca = $cookieStore.get('dadosBusca');
			$scope.filmePesquisa = dadosBusca.busca
			$scope.filmesEncontrados = dadosBusca.dadosBuscaResult;
			$scope.exibeLista = true;
		}
		
	}//funcao inicial verifica se existe dados de busca na sessao e exibe, caso não é iniciada uma nova busca.

	var getDetalhesFilme = function (imdbID) {	
		omdbApi.getDetalhesFilme(imdbID).success(function (data) {	
			if(data.Response === 'True'){
				$rootScope.filmeDetalhes = data;
				$location.path("/detalhes/" + imdbID); // redireciona para tela de detalhes			
			}else{
				$location.path("/error");
			}
				
		}).error(function (data, status) {			
			$cookieStore.remove('dadosBusca');
			$location.path("/error");					
		});
		
	};// consulta API de filmes para retorno dos detalhes por id, se existir exibe tela de detalhes.

	$scope.onClick = function(imdbID){
		var dadosBusca = [];
		dadosBusca = {"busca": $scope.filmePesquisa , "dadosBuscaResult" : $scope.filmesEncontrados}
		$cookieStore.put('dadosBusca',dadosBusca);
		getDetalhesFilme(imdbID);
	}//funcao de click quando usuario clicar no detalhes, salva na sessao os dados de busca e consulta API.

	$scope.init();
});