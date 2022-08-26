const smthObj = {
    name: 'Artem',
    age: 20,
    city: 'Gomel'
};

const smthObjNew = {
    name: 'Artem',
    age: 20,
    city: 'Gomel',
    country: 'Belarus'
};

//fetch

function requestFetch(URL, method, body = null){
    if (method === 'GET' || method === 'DELETE'){
        return fetch(URL, {method: method}).then(response => response.json());
    } else {
        return fetch(URL, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(response => response.json());
    }
}

//creating
requestFetch('https://jsonplaceholder.typicode.com/posts/', 'POST', smthObj)
    .then(json => console.log('Creating:', json));

//reading
requestFetch('https://jsonplaceholder.typicode.com/posts/1', 'GET')
    .then(json => console.log('Reading:', json));

//updating
requestFetch('https://jsonplaceholder.typicode.com/posts/1', 'PUT', smthObjNew)
    .then(json => console.log('Updating:', json));

//deleting
requestFetch('https://jsonplaceholder.typicode.com/posts/1', 'DELETE')
    .then(json => console.log('Deleting:', json));


//axios 

//creating
axios.post('https://jsonplaceholder.typicode.com/posts', smthObj)
    .then(response => console.log('Creating:', response.data));

//reading
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log('Reading:', response.data));

//updating
axios.put('https://jsonplaceholder.typicode.com/posts/1', smthObjNew)
    .then(response => console.log('Updating:', response.data));

//deleting
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log('Deleting:', response.data));

    
