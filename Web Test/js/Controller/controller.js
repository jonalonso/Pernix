app.controller("MyController",function($scope)
{
$scope.title="We are playing TicTacToe, choose your symbol";
$scope.TicTacToe=
[
'Empty','Empty','Empty','Empty','Empty','Empty','Empty','Empty','Empty'
];
$scope.EmptySlots=9;
$scope.checked=true;
$scope.UserSymbol='';
$scope.ComputerSymbol='';
$scope.ChangeSymbol= function(letter)
{
	if(letter == 'X'){
		$scope.UserSymbol=letter;
		$scope.ComputerSymbol='O';
	}
	else{
		$scope.UserSymbol=letter
		$scope.ComputerSymbol='X';
	}

};
$scope.UserPlaying= function(index)
{

	if($scope.TicTacToe[index]=='Empty')
	{
		$scope.EmptySlots-=1;
		$scope.TicTacToe[index]=$scope.UserSymbol;

		$scope.ComputerPlaying();
	}
	else
	{
		window.alert("Click On over an empty spot");
	}
};

$scope.ComputerPlaying= function()
{
	if($scope.EmptySlots!=0){
		var index = Math.floor(Math.random() * 9);
		if($scope.TicTacToe[index]=='Empty')
		{
			$scope.EmptySlots-=1;
			$scope.TicTacToe[index]=$scope.ComputerSymbol;
		}
		else
		{
			$scope.ComputerPlaying();
		}
	}
};

$scope.ResetGame=function()
{
	for (var i = $scope.TicTacToe.length - 1; i >= 0; i--) {
		window.alert("is this working?")
		$scope.TicTacToe[i]='Empty'
	}
};
});