use strict';

module.exports.say = async event => {

  if(event.queryStringParameters && event.queryStringParameters.keyword){
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Abhinav Gupta says ' + event.queryStringParameters.keyword 
          
        },
        null,
        2
      ),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  
};

