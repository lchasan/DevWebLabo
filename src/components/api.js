//Fichier de Correction du Lab4

// Le fichier api.js comprend les méthodes CRUD pour communiquer avec l'API de taches fournies

// On conserve l'id utilisateur dans une variable séparée pour facilement le changer
const userId = '11bb6e3c-a370-4819-b77c-1e15ee02db22'
/*let userId;

function userIDfct() {
    let myRequest = new Request('https://glo3102lab4.herokuapp.com/users',
        {method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        })
    fetch(myRequest)
        .then(function(response) {
            return response.json();
        })

        .then(function(data) {
            //userId = data.id;
            //console.log(userId);
            //return userId;
            console.log(data.id);
            return data.id;
        });
}*/
/*
    return fetch(`https://glo3102lab4.herokuapp.com/users`, {
        method: 'POST',
    })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            userId = data.id;
            console.log(userId);

        });*/


//userId = userIDfct();
//console.log(userIDfct());
//console.log(userId);

// L'URL de base de l'api est stocké dans baseUrl
const baseUrl = `https://glo3102lab4.herokuapp.com/${userId}`;


// Implémentation de la méthode GET avec `fetch`
// Permet de lister les tâches
export const getTasks = () => {
  return fetch(`${baseUrl}/tasks`)
    .then((response) => response.json())
    .then((json) => {
      return json.tasks
    })
    .catch(() => {
      console.error('unable to fetch tasks')
    })
}

// Implémentation de la méthode POST avec `fetch`
// Permet de créer une nouvelle tache et retourne la tache crée avec son id.
export const createTask = (name) => {
  return fetch(`${baseUrl}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name
    })
  })
    .then((response) => response.json())
    .then((task) => {
      // Il est important de retourner task ici car c'est le serveur qui fourni l'id de la tâche
      // On devra utiliser cet id pour les update ou les delete
      return task
    })
    .catch(() => {
      console.error('unable to create tasks')
    })
}

// Implémentation de la méthode PUT avec `fetch`
// Permet d'écraser une tache existante
export const updateTask = (id, name) => {
  return fetch(`${baseUrl}/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name
    })
  })
    .then((response) => response.json())
    .then((task) => {
      return task
    })
    .catch(() => {
      console.error('unable to update tasks')
    })
}

// Implémentation de la méthode DELETE avec `fetch`
// Permet de suprimmer une tache existante
export const deleteTask = (id) => {
  return fetch(`${baseUrl}/tasks/${id}`, {
    method: 'DELETE',
  })
    .catch(() => {
      console.error('unable to delete tasks')
    })
}
