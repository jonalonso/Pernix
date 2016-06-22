app.controller("MyController",function($scope)
{
$scope.ActualUser=""
$scope.newAction="";
$scope.todo=[];
$scope.todoList=[{user:"Jonathan", todo:[]}
];
$scope.addElementToDo=function()
{
	if($scope.newAction!=""){
		for (var i = $scope.todoList.length - 1; i >= 0; i--) {
		 if($scope.todoList[i].user==$scope.ActualUser)
		 {
			var newElement={action: $scope.newAction,done:false};
			$scope.todoList[i].todo.push(newElement);
			$scope.newAction="";		
			$scope.todo= $scope.todoList[i].todo;	 
		 }
		}

	}
	else
	{
		window.alert("Blank tasks are not allowed");
	}
};

$scope.deleteTask=function($index)
{
		for (var i = $scope.todoList.length - 1; i >= 0; i--) {
		 if($scope.todoList[i].user==$scope.ActualUser)
		 {
			$scope.todoList[i].todo.splice($index,1);
			$scope.todo= $scope.todoList[i].todo;
		 }
		}
	
}

$scope.longIn=function()
{

	var existe=false;
	for (var i = $scope.todoList.length - 1; i >= 0; i--) {
		if($scope.todoList[i].user==$scope.ActualUser)
		{
			existe=true;
			break;
		}
	}
	if(!existe)
	{
		$scope.todoList.push({user:$scope.ActualUser, todo:[]});
	}
};

$scope.SighOut=function(){
	$scope.ActualUser="";
	window.location.href='log in.html';
};
});