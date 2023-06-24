import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://leetcode.com/graphql/',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {
    query: '\n    query recentAcSubmissions($username: String!, $limit: Int!) {\n  recentAcSubmissionList(username: $username, limit: $limit) {\n    id\n    title\n    titleSlug\n    timestamp\n  }\n}\n    ',
    variables: {username: 'IvanRomero03', limit: 20},
    operationName: 'recentAcSubmissions'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});