
function helloWorld(name){
 
    if( name === "" || name === undefined){
        return "Hello, World,";
    }
        return "Hello, " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + ",";
}
console.log(helloWorld(""));
