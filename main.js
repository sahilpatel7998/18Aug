//axios globals
axios.defaults.headers.common['X-Auth-Token']= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

// get request parameters
function getTodos () {
  //     axios ({
  //         method : "get",
  //         url : "https://jsonplaceholder.typicode.com/todos",
  //         params : {
  //             _limit : 5
  //         }
  //     })
  //     .then( res =>showOutput(res))
  //     .catch( err => console.log(err));

  axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5', { timeout : 5000}) //, {params : {_limit: 5}}
    .then(res => showOutput(res))
    .catch(err => console.log(err))
}

// for post request
function addTodo () {
  axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title: 'New one added',
      available: true
    })
    .then(res => showOutput(res))
    .catch(err => console.log(err))
}

// for put/ patch request

function updateTodo () {
  axios
    .patch('https://jsonplaceholder.typicode.com/todos/1', {
      title: 'Updated Todo added',
      available: true
    })
    .then(res => showOutput(res))
    .catch(err => console.log(err))
}

//for delete request
function removeTodo () {
  axios
    .delete('https://jsonplaceholder.typicode.com/todos/1', {
      title: 'Updated Todo added',
      available: true
    })
    .then(res => showOutput(res))
    .catch(err => console.log(err))
}

//simultaneous data updates

function getData () {
  axios
    .all([
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
    // .then(res => {
    //     console.log(res[0]);
    //     console.log(res[1]);
    //     showOutput(res[1]);;
    // })

    //or

    .then(axios.spread((todos, posts) => showOutput(posts)))
    .catch(err => console.log(err))
}

//Custom Headers

function customHeaders () {
  const config = {
    headers: {
      'content-type': 'application/json',
      Authorization: 'sometoken'
    }
  }

  axios
    .post(
      'https://jsonplaceholder.typicode.com/todos',
      {
        title: 'New one added',
        available: true
      },
      config
    )
    .then(res => showOutput(res))
    .catch(err => console.log(err))
}

//transforming request and responses

function transformResponse () {
  const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Hello World'
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase()
      return data
    })
  }

  axios(options).then(res => showOutput(res))
}

// Error handling for

function errorHandling(){
    axios
  .get('https://jsonplaceholder.typicode.com/todoss', { 
    //   validateStatus: function (status){
    //       return status < 500;  
    //   }
    }) 
  .then(res => showOutput(res))
  .catch(err => {
      if(err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);

          if(err.response.status === 404) {
              alert("Page is not found");
          }
      }else if (err.request){
          console.log(err.request);
      }else{
          console.log(err.message);
      }
  });

}

//Cancel Token

function cancelToken () {
  const source = axios.CancelToken.source()

  axios
    .get('https://jsonplaceholder.typicode.com/todos', {
      cancelToken: source.token
    })
    .then(res => showOutput(res))
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message)
      }
    })

  if (true) {
    source.cancel('Request canceled!')
  }
}



// Intercepting request and responses

axios.interceptors.request.use(config => {
  console.log(
    `${config.method.toUpperCase()} request has been sent to ${
      config.url
    } at ${new Date().getTime()}`
  )

  return config
}),
  error => {
    return Promise.reject(error)
  }

  // axios instance methods
const axiosInstance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
});

axiosInstance.get('/comments').then(res => console.log(res));

// Show output in browser
function showOutput (res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos)
document.getElementById('post').addEventListener('click', addTodo)
document.getElementById('update').addEventListener('click', updateTodo)
document.getElementById('delete').addEventListener('click', removeTodo)
document.getElementById('sim').addEventListener('click', getData)
document.getElementById('headers').addEventListener('click', customHeaders)
document
  .getElementById('transform')
  .addEventListener('click', transformResponse)
document.getElementById('error').addEventListener('click', errorHandling)
document.getElementById('cancel').addEventListener('click', cancelToken)
