app.factory('AnimalFact', function($http) { 

  return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`http://localhost:3000/api/v1/animals`)
            .then((data) => {
              console.log(data)
              resolve(data.data)
            })
        })
      },
      getAnimalKeeper: function(id) {
        return new Promise((resolve, reject) => {
          $http.get(`http://localhost:3000/api/v1/animal/zookeepers?animalId=${id}`)
          .then((info) => {
            resolve(info)
          })
        })
      },
    add: function(newAnimal) {
      return new Promise((resolve, reject) =>{
        $http.post(`http://localhost:3000/api/v1/animals/new`, newAnimal)
          .then((data) => {
            resolve(data)
          })
        })
    },

    remove: function(id) {
      return new Promise((resolve,reject) => {
        $http.delete(`http://localhost:3000/api/v1/zoo/animalAndKeeper/delete?id=${id}`)
          .then((data) => {
            console.log(data)
            resolve(data)
          })
      })
    },

    update: (id, updateInfo) => {
      return new Promise((resolve, reject) => {
        $http.patch(`http://localhost:3000/api/v1/animals/edit/${id}`, updateInfo)
        .then((data) => {
          resolve()
        })
        .catch((err) => console.log("err:", err))
      })
    } 
  }
});