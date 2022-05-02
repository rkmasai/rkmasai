// write js code here corresponding to favourites.html


var favmatch= JSON.parse(localStorage.getItem("favourites"))

displaym(favmatch)

var favarr=[];

function displaym(favmatch)
{
    favmatch.forEach(function(ele, index) {

        var tr= document.createElement("tr")

        var td1= document.createElement("td")
        td1.innerText=ele.matchn

        var td2= document.createElement("td")
        td2.innerText=ele.ateam

        var td3= document.createElement("td")
        td3.innerText=ele.bteam

        var td4= document.createElement("td")
        td4.innerText=ele.edate

        var td5= document.createElement("td")
        td5.innerText=ele.evenue

        var td6= document.createElement("td")
        td6.innerText="Delete"
        td6.addEventListener("click", function(){
            delfun(ele, index)
        })
        tr.append(td1 ,td2 , td3, td4, td5, td6)
        document.querySelector("tbody").append(tr)
        
    });

    function delfun(ele, index){
        favmatch.splice(index,1)
        localStorage.setItem("favourites",JSON.stringify(favmatch))
        window.location.reload();
    }

  

}