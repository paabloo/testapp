var app = angular.module('app', ['ngRoute']);


app.controller('mainCtrl', ['$scope', 'dinners', function ($scope, dinners) {
    $scope.dinners = dinners;
    $scope.dinnerPicken = false;
    $scope.confirmed = false;

    $scope.pickDinner = function (i) {
        $scope.dinnerPicken = i+1;
    };

    $scope.cancelPick = function () {
        $scope.dinnerPicken = false;
    };

    $scope.confirmPick = function () {
        $scope.confirmed = true;
    };

    $scope.checkIfCanComfirm = function () {
        if ($scope.dinnerPicken && !$scope.confirmed) {
            return true;
        } else {
            return false;
        }
    };

    $scope.checkDate = function () {
        var date = new Date();
        return date;
    };

}]);

app.controller('loginCtrl', ['$scope', function ($scope) {
    $scope.loginSubmit = function () {
        console.log('cool story bro');
    };
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {templateUrl: 'partials/main.html', controller: 'mainCtrl'}).
        when('/login', {templateUrl: 'partials/login.html',   controller: 'loginCtrl'}).
        otherwise({redirectTo: '/'});
}]);


app.factory('dinners', function () {
    return [
        {
            'number': 1, 'name': 'Podlaska Babka ziemniaczana', 'description': 'W zestawie Podlaska babka ziemniaczana podawana z surówką i sosem pieczarkowym oraz Zupa Szefowej z buraczkami'
        },
        {
            'number': 2, 'name': 'Shoarma wieprzowa', 'description': 'W zestawie Shoarma wieprzowa podawana z ryżem i surówką oraz Zupa Szefowej z buraczkami'
        },
        {
            'number': 3, 'name': 'Naleśniki na słodko', 'description': 'W zestawie Naleśniki na słodko oraz Zupa Szefowej z buraczkami'
        },
        {
            'number': 4, 'name': 'Tarta z łososiem', 'description': 'W zestawie Tarta z łososiem oraz Zupa Szefowej z buraczkami'
        }
    ];
});
