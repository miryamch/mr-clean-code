app.controller("FeedCtrl", function FeedCtrl($scope, $log){
    $scope.codeList = [
        {title: "Hello World", author:"Bob Martin", summary: "a hello world application in Java", date:"01/01/2018", nSolutions: 16}, 
        {title: "Goodbye World", author:"Martin Roberts", summary: "a application which commits suicide in JavaScript", date:"01/01/2000", nSolutions: 0}
    ]
}); 