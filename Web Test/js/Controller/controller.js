app.controller("MyController",function($scope)
{
$scope.title="We are playing TicTacToe, choose your symbol";
$scope.TicTacToe=
[
'Empty','Empty','Empty','Empty','Empty','Empty','Empty','Empty','Empty'
];
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
		$scope.TicTacToe[index]=$UserSymbol;
		ComputerPlaying();
	}
	else
	{
		window.alert("Click On over an empty spot");
	}

	ComputerPlaying();
};

$scope.ComputerPlaying= function()
{
	var index = Math.floor(Math.random() * 9);
	if($scope.TicTacToe[index]=='Empty')
	{
		$scope.TicTacToe[index]=$ComputerSymbol;
	}
	else
	{
		ComputerPlaying();
	}
};
});