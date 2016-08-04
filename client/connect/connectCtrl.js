app.controller('connectCtrl', connectCtrl);

function connectCtrl($scope, User, mobile, users) {
  $scope.mobile = mobile;
  $scope.users = users;

  console.log($scope.users);

  function userCounts() {
    let counts = {
      topic: {}
    };
    $scope.users.forEach(user => {
      if(user.type === 'Guide') {
        counts.guide ? counts.guide++ : counts.guide = 1;
      } else {
        counts.user ? counts.user++ : counts.user = 1;
      }
      if(user.trip.length) {
        user.interests.forEach(topic => {
          counts.topic[topic] ? counts.topic[topic]++ : counts.topic[topic] = 1;
        })
      }
    });
    $scope.counts = counts;
    $scope.topics = Object.keys(counts.topic);
  }

  userCounts();
}
