app.controller('connectCtrl', connectCtrl);

function connectCtrl($scope, User, mobile, users) {
  $scope.mobile = mobile;
  $scope.users = users;

  console.log($scope.users);

  (function userCounts() {
    let counts = {
      total: users.length,
      topic: {}
    };
    $scope.users.forEach(user => {
      if(user.type === 'Guide') {
        counts.guide ? counts.guide++ : counts.guide = 1;
      } else {
        counts.user ? counts.user++ : counts.user = 1;
      }

      user.interests.forEach(topic => {
        counts.topic[topic] ? counts.topic[topic]++ : counts.topic[topic] = 1;
      })

    });
    $scope.counts = counts;
    $scope.topics = Object.keys(counts.topic);
  })();

  $scope.all = () => {
    User.getAll({query: {}, page: 0})
      .then(user => {
        $scope.users = users;
      });
  }

  $scope.interestSelect = (topic) => {
    User.getAll({ query: { interests: topic }})
      .then(users => {
        $scope.users = users;
      });
  }

  $scope.typeSelect = (type) => {
    User.getAll({ query: { type }})
      .then(users => {
        $scope.users = users;
      });
  }
}
