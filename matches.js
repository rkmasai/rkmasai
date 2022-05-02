// write js code here corresponding to matches.html

var match= JSON.parse(localStorage.getItem("schedule"))

displaym(match)

var matarr=[];

function displaym(match)
{
    match.forEach(function(ele) {

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
        td6.innerText="favourite"
        td6.addEventListener("click", function(){
            matfun(ele)
        })
        tr.append(td1 ,td2 , td3, td4, td5, td6)
        document.querySelector("tbody").append(tr)
        
    });

    function matfun(ele){

        matarr.push(ele)
        console.log(matarr)
        localStorage.setItem("favourites", JSON.stringify(matarr))
    }


}
