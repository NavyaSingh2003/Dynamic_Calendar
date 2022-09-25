
var dt = new Date();

function RenderDate(){

  dt.setDate(1); //every month's date will start from 1
  var day = dt.getDay(); //will give the day(integer val) of 1 date of every month
  var endDate = new Date( dt.getFullYear(), dt.getMonth() + 1, 0).getDate();   //to know whether last date is 30 or 31


  var prevDate = new Date(dt.getFullYear() ,dt.getMonth(), 0).getDate(); // not used +1 coz that will give present month last date and not of previous
  var today = new Date(); //give today's date

  var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

  document.getElementById("date_str").innerHTML = dt.toDateString();
  document.getElementById("month").innerHTML = months[dt.getMonth()];

  var cells = "";

  for(x = day; x > 0; x--){
   cells+= "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
  }
  for(i=1; i<= endDate; i++){
     if(i == today.getDate() && dt.getMonth() == today.getMonth()){
       cells+= "<div class='today'>" + i + "</div>";
     }
     else{
       cells+= "<div>" + i +"</div>";
    }
  }

  document.getElementsByClassName("days")[0].innerHTML = cells; //big brackets return the sequence of elements having same class
}

function moveDate(para){
   if(para == 'prev'){
     dt.setMonth(dt.getMonth() - 1); //getMonth() will give current month
    }
   else if(para == 'next'){
     dt.setMonth(dt.getMonth() + 1);
   }
   RenderDate();
}













































