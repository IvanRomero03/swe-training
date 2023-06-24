import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://leetcode.com/graphql/',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {
    query: '\n    query questionContent($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    content\n }\n}\n    ',
    variables: {titleSlug: 'path-with-maximum-gold'},
    operationName: 'questionContent'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});