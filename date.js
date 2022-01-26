exports.getDate = function(){
  const date = new Date();
  // Rule of thumb : If condition statements are more than 5 use "switch" statement, else use if-else statement.
  let options = {
    weekday : "long" ,
    day : "numeric" ,
    month : "long"
  };
  return date.toLocaleDateString("en-US", options);
}

exports.getDay = function (){
  const date = new Date();
  // Rule of thumb : If condition statements are more than 5 use "switch" statement, else use if-else statement.
  let options = {
    weekday : "long"
  };
  return date.toLocaleDateString("en-US", options);
}
//console.log(exports);
