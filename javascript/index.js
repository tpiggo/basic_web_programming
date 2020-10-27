var projDes = JSON.parse(projects)
/**
 * 
 * @param {document.element} element
 *  
 */
function onLoad(element, elementDes, title){
    var data = projDes[elementDes];
    element.innerHTML = '<h4 class="project-title">'+ title +'</h4>'
    element.innerHTML += '<p class="project-desc">'+data[0]+'<p>';
    element.innerHTML += '<a class= "project-link" href="'+ data[1] +'"><button class="pl-btn">See More</button></a>'
} 

$(document).ready((e)=>{
    document.getElementById("pid1").addEventListener(
        "load",
        onLoad(document.getElementById("pid1"), "BasicBlog", "First Blog and Registration Page")
    );
    document.getElementById("pid2").addEventListener(
        "load",
        onLoad(document.getElementById("pid2"),
        "ServerInC",
        "Server and Concurrent Connections")
    );
    document.getElementById("pid3").addEventListener(
        "load",
        onLoad(document.getElementById("pid3"), "ThreadingInC", "Simple User Level Threading")
    );
});