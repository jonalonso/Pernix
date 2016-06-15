app.controller("MyController",function($scope)
{
$scope.title="We are playing TicTacToe, choose your symbol";
$scope.TicTacToe=
[
'Empty','Empty','Empty','Empty','Empty','Empty','Empty','Empty','Empty'
];
$scope.EmptySlots=9;
$scope.checked=true;
$scope.UserSymbol='X';
$scope.ComputerSymbol='O';
$scope.ChangeSymbol=function(letter)
{
	if($scope.symbolChangeDuringGame()){
		if(letter == 'X'){
			$scope.UserSymbol=letter;
			$scope.ComputerSymbol='O';
		}
		else{
			$scope.UserSymbol=letter
			$scope.ComputerSymbol='X';
		}
	}
	else{
		window.alert("You can't change a symbol during a Game");
	}

};

$scope.symbolChangeDuringGame=function(){
	for (var i = 0; i < 9; i++) {
		if($scope.TicTacToe[i]!='Empty')
		{
			return false;
		}
	return true;
		
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
	for (var i = 0; i < 9; i++) {
		$scope.TicTacToe[i]='Empty'
	}
};
});