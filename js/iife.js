let result = (function(parameter){
  return parameter + parameter;
})("wat");

console.log(result);

result = ((parameter) => {
  return parameter + parameter;
})(77);

console.log(result);
