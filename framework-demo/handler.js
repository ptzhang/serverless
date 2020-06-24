'use strict';

module.exports.hello = async event => {
  console.log('hello world');
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
      },
      null,
      2
    ),
  };
};
