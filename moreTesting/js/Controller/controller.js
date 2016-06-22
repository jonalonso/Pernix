app.controller("MyController",function($scope)
{
$scope.user="Jonathan"
$scope.newAction="";
$scope.todo=[
];
$scope.addElementToDo=function()
{
	if($scope.newAction!=""){
		var newElement={action: $scope.newAction,done:false};
		$scope.todo.push(newElement);
		$scope.newAction="";
	}
	else
	{
		window.alert("Blank tasks are not allowed");
	}
};

$scope.deleteTask=function($index)
{

	$scope.todo.splice($index,1);

}

});