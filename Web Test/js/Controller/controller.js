app.controller("MyController",function($scope)
{
$scope.title="We are playing TicTacToe, choose your symbol";
$scope.TicTacToe=
[
' ',' ',' ',' ',' ',' ',' ',' ',' '
];
$scope.uncheck = function (event) {
    if ($scope.checked == event.target.value)
        $scope.checked = false
};
});