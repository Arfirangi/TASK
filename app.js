
var app = angular.module("myApp" , []);
app.controller("cricketCtr", function($scope , $http){
    $scope.removePlayers = function(player){
        
        var removePlayers =  $scope.players.indexOf(player);
        $scope.players.splice(removePlayers , 1);
    };
    $scope.addPlayers = function(){
        $scope.players.push({
            name:$scope.newName,
            id:$scope.newId,
            runs:$scope.newRuns
        });
    
    };


$http.get("data.json").then(function(item){
    $scope.players = item.data;
})

});
 
    

