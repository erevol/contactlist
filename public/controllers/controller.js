function AppCtrl($http, $scope) {
	console.log("Hello from controller!");

$http.get('/contactlist').success(function (response) {
	console.log("I got the data I requested");
	$scope.contactlist = response;
});

$scope.addContact = function () {
	console.log("Add");
	$http.post('/contactlist', $scope.contact);
};
}
