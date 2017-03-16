function generateSuccessHTMLOutput(response) {
  return  '<h4>Result</h4>' +
          '<h5>Status:</h5> ' +
          '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
          '<h5>Headers:</h5>' +
          '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
          '<h5>Data:</h5>' +
          '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
}

function generateErrorHTMLOutput(error) {
  return  '<h4>Result</h4>' +
          '<h5>Message:</h5> ' +
          '<pre>' + error.message + '</pre>' +
          '<h5>Status:</h5> ' +
          '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
          '<h5>Headers:</h5>' +
          '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
          '<h5>Data:</h5>' +
          '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
}

function cleanResult(e) {
  // e.nextElementSibling it's the result container
  e.nextElementSibling.innerHTML = '';
}

function getRequest() {
  var resultEl = document.getElementById("getResult");
  resultEl.innerHTML = "";
  // We use Axios to perform a GET request
  axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
      console.log(response);
      resultEl.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function(error) {
      resultEl.innerHTML = generateErrorHTMLOutput(error);
    })
}

function getRequestWithParams() {
  var resulEl = document.getElementById('getResultWithParams');
  var postId = document.getElementById('postId').value;
  resulEl.innerHTML = '';
  // We use Axios to perform a GET request with params
  axios.get('http://jsonplaceholder.typicode.com/posts', {
      params: {
        id: postId
      }
    })
    .then(function(response) {
      console.log(response);
      resulEl.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function(error) {
      resulEl.innerHTML = generateErrorHTMLOutput(error);
    });
  document.getElementById('postId').value = '';
}

function getPostRequest(e) {
  e.preventDefault();
  var resultEl = document.getElementById('postResult');
  var postTitle = document.getElementById('postTitle').value;
  resultEl.innerHTML = "";
  // We use Axios to perform a POST request.
  axios.post('http://jsonplaceholder.typicode.com/posts', {
      userId: '1',
      title: postTitle,
      completed: true
    })
    .then(function(response) {
      console.log(response);
      resultEl.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function(error) {
      resultEl.innerHTML = generateErrorHTMLOutput(error);
    });
  document.getElementById('postTitle').value = '';
}
document.getElementById('postInputForm').addEventListener('submit', getPostRequest);
