// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit", myfunction)
var arr=[];
function myfunction()
{
    event.preventDefault()
     var obj= {
         matchn:masaiForm.matchNum.value,
         ateam:masaiForm.teamA.value,
         bteam:masaiForm.teamB.value,
         edate:masaiForm.date.value,
         evenue:masaiForm.venue.value
     }
     arr.push(obj)
     console.log(arr)
     localStorage.setItem("schedule", JSON.stringify(arr))
}
