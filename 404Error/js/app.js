


document.getElementById("comeback").addEventListener("click",function(){
    
    document.getElementById("warningBox").style.display = "block";
    document.getElementById("messaege").style.color = "blue";
    document.getElementById("messaege").style.fontSize ="21px";


    setTimeout(function(){
        document.getElementById("warningBox".style.display = "none"
        )
    },3000);
});

function error404(){
    alert("Oops 404 Error Page Problem");
}