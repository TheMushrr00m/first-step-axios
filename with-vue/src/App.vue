<template>
  <div id="app">
    <div class="container">
      <div class="jumbotron">
        <h1>Getting started with Axios and Vuejs</h1>
        <h4>This application uses Axios.</h4>
      </div>
      <h2>Axios Demo by <small>LaEsporaDelHongo.com</small></h2>
      <div class="panel panel-primary">
        <div class="panel-heading">GET Request</div>
        <div class="panel-body">
          <button class="btn btn-primary" @click="getRequest">Get Posts</button>
          <button class="btn btn-warning" @click="cleanResult">Clear</button>
          <div class="panel-body" id="getResult"></div>
        </div>
      </div>
      <div class="panel panel-primary">
        <div class="panel-heading">GET Request with Parameters</div>
        <div class="panel-body">
          <input type="text" class="form-control" id="postId" v-model="postId" placeholder="Post ID..." /><br>
          <button class="btn btn-primary" @click="getRequestWithParams">Get Post</button>
          <button class="btn btn-warning" @click="cleanResult">Clear</button>
          <div class="panel-body" id="getResultWithParams"></div>
        </div>
      </div>
      <div class="panel panel-primary">
        <div class="panel-heading">POST Request</div>
        <div class="panel-body">
          <form class="form-inline" id="postInputForm" @submit.prevent="postRequest">
            <div class="form-group">
              <input type="text" class="form-control" id="postTitle" v-model="postTitle" placeholder="Post Title..." />
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
          </form><br>
          <button class="btn btn-warning" @click="cleanResult">Clear</button>
          <div class="panel-body" id="postResult"></div>
        </div>
      </div>
      <div class="fotter">
        <p>&copy; <a href="http://laesporadelhongo.com" target="_blank">LaEsporaDelHongo.com</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      postId: '',
      postTitle: ''
    }
  },
  methods: {
    generateSuccessHTMLOutput(response) {
      return  '<h4>Result</h4>' +
              '<h5>Status:</h5> ' +
              '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
              '<h5>Headers:</h5>' +
              '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
              '<h5>Data:</h5>' +
              '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
    },
    generateErrorHTMLOutput(error) {
      return  '<h4>Result</h4>' +
              '<h5>Message:</h5> ' +
              '<pre>' + error.message + '</pre>' +
              '<h5>Status:</h5> ' +
              '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
              '<h5>Headers:</h5>' +
              '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
              '<h5>Data:</h5>' +
              '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
    },
    cleanResult(e) {
      // e.target.nextElementSibling it's the result container
      e.target.nextElementSibling.innerHTML = '';
    },
    getRequest() {
      let resultEl = document.getElementById("getResult")
      resultEl.innerHTML = ""
      // We use Axios to perform a GET request
      this.$http.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
          console.log(response)
          resultEl.innerHTML = this.generateSuccessHTMLOutput(response)
        })
        .catch(error => {
          resultEl.innerHTML = this.generateErrorHTMLOutput(error)
        })
    },
    getRequestWithParams() {
      let resulEl = document.getElementById('getResultWithParams')
      resulEl.innerHTML = ''
      // We use Axios to perform a GET request with params
      this.$http.get('http://jsonplaceholder.typicode.com/posts', {
          params: {
            id: this.postId
          }
        })
        .then(response => {
          console.log(response)
          resulEl.innerHTML = this.generateSuccessHTMLOutput(response)
        })
        .catch(error => {
          resulEl.innerHTML = this.generateErrorHTMLOutput(error)
        })
      this.postId = ''
    },
    postRequest() {
      let resultEl = document.getElementById('postResult')
      resultEl.innerHTML = ""
      // We use Axios to perform a POST request.
      this.$http.post('http://jsonplaceholder.typicode.com/posts', {
          userId: '1',
          title: this.postTitle,
          completed: true
        })
        .then(response => {
          console.log(response)
          resultEl.innerHTML = this.generateSuccessHTMLOutput(response)
        })
        .catch(error => {
          resultEl.innerHTML = this.generateErrorHTMLOutput(error)
        })
      this.postTitle = ''
    }
  }
}
</script>

<style>
</style>
