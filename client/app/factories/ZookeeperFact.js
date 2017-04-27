app.factory('ZookeeperFact', function($http){
  console.log("here's the zookeeper factory")

    return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`http://localhost:3000/api/v1/zookeepers`)
            .then((data) => {
              resolve(data.data)
            })
        })
      },
    add: function(newZookeeper) {
      return new Promise((resolve, reject) =>{
        $http.post(`http://localhost:3000/api/v1/zookeeper/new`, newZookeeper)
          .then((data) => {
            resolve(data.zookeepers)
          })
        })
    },
    delete: function(id) {
      return new Promise((resolve, reject) => {
        $http.delete(`http://localhost:3000/api/v1/zoo/animalAndKeeper/delete?id=${id}`)
          .then((data) => {
            resolve(data.zookeepers)
          })
      })
    }
  }
})