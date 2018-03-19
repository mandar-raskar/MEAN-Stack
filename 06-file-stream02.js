// node.js file stream examples.
// this gives the current working directory (cwd)  -->
// by default it is same.
console.log('Current working directory is : - ', process.cwd());


try{
  process.chdir("/Users/Sandeep/desktop");         // change directory
}catch(exception){
  console.error("chdir error :- ", exception.message);
}
console.log('Current working directory is : - ', process.cwd());
