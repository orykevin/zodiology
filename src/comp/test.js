document.getElementById("submit").addEventListener("click", Start);
var month;
var month1;
var day;
var radios;
var year00;
var year;
var year1;
var CZ;
var myAnswer1 = 0;
var OldZ = 0;
var NewZ = 0;

function Start() {
   Assign();
   Month();
   Year();
   NewZodiac();
   OldZodiac();
   Output();
}
function Assign() {
   day = document.getElementById("day").value;
   month1 = document.getElementById("month").value;
   year = document.getElementById("year").value;
   radios = document.getElementsByName("radyear");
   //alert(month1)
   //alert(day)
   //alert(year.length)
   /*if (year.length != 4) {
      year = "Make year 4 Digets and Positive";
   }*/
   day = Number(day);
   year = Number(year);
}
function Year() {
   //alert(radios.length);
   for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
         year00 = radios[i].value;
         //alert(year00);
         if (year00 === "16") {
            year = 1600 + year;
         }
         if (year00 === "17") {
            year = 1700 + year;
         }
         if (year00 === "18") {
            year = 1800 + year;
         }
         if (year00 === "19") {
            year = 1900 + year;
         }
         if (year00 === "20") {
            year = 2000 + year;
         }
         if (year00 === "30") {
            year = 3000 + year;
         }
      }
   }
   year1 = year % 12;
   if (year1 === 0) {
      CZ = "Monkey";
   } else if (year1 === 1) {
      CZ = "Rooster";
   } else if (year1 === 2) {
      CZ = "Dog";
   } else if (year1 === 3) {
      CZ = "Pig";
   } else if (year1 === 4) {
      CZ = "Rat";
   } else if (year1 === 5) {
      CZ = "Ox";
   } else if (year1 === 6) {
      CZ = "Tiger";
   } else if (year1 === 7) {
      CZ = "Rabbit";
   } else if (year1 === 8) {
      CZ = "Dragon";
   } else if (year1 === 9) {
      CZ = "Snake";
   } else if (year1 === 10) {
      CZ = "Horse";
   } else if (year1 === 11) {
      CZ = "Sheep";
   } else {
      document.getElementById("year").value =
         "Make year 4 Digets and Positive!";
   }
}
function Month() {
   if (month1 === "1") {
      month = 0;
   } else if (month1 === "2") {
      month = 31;
      month1.value
   } else if (month1 === "3") {
      month = 60;
   } else if (month1 === "4") {
      month = 91;
   } else if (month1 === "5") {
      month = 121;
   } else if (month1 === "6") {
      month = 152;
   } else if (month1 === "7") {
      month = 182;
   } else if (month1 === "8") {
      month = 213;
   } else if (month1 === "9") {
      month = 244;
   } else if (month1 === "10") {
      month = 274;
   } else if (month1 === "11") {
      month = 305;
   } else if (month1 === "12") {
      month = 335;
   } else {
      OldZ = "Fix Month and or Day";
      NewZ = "Fix Month and or Day";
   }
   //alert(month)
   myAnswer1 = month + day;
}
function NewZodiac() {
   if ((myAnswer1 > 108) & (myAnswer1 < 135)) {
      NewZ = "Aries";
   } else if ((myAnswer1 > 133) & (myAnswer1 < 174)) {
      NewZ = "Taurus";
   } else if ((myAnswer1 > 172) & (myAnswer1 < 203)) {
      NewZ = "Gemini";
   } else if ((myAnswer1 > 201) & (myAnswer1 < 224)) {
      NewZ = "Cancer";
   } else if ((myAnswer1 > 222) & (myAnswer1 < 261)) {
      NewZ = "Leo";
   } else if ((myAnswer1 > 259) & (myAnswer1 < 305)) {
      NewZ = "Virgo";
   } else if ((myAnswer1 > 303) & (myAnswer1 < 329)) {
      NewZ = "Libra";
   } else if ((myAnswer1 > 327) & (myAnswer1 < 335)) {
      NewZ = "Scorpio";
   } else if ((myAnswer1 > 333) & (myAnswer1 < 353)) {
      NewZ = "Ophiuchs";
   } else if ((myAnswer1 > 351) & (myAnswer1 < 367)) {
      NewZ = "Sagittarius";
   } else if ((myAnswer1 < 21) & (myAnswer1 > 0)) {
      NewZ = "Sagittarius";
   } else if ((myAnswer1 > 19) & (myAnswer1 < 48)) {
      NewZ = "Capricorn";
   } else if ((myAnswer1 > 46) & (myAnswer1 < 72)) {
      NewZ = "Aquarius";
   } else if ((myAnswer1 > 70) & (myAnswer1 < 110)) {
      NewZ = "Pisces";
   } else {
      document.getElementById("day").value = "See if Month and Day are real";
   }
}
function OldZodiac() {
   if ((myAnswer1 > 80) & (myAnswer1 < 112)) {
      OldZ = "Aries";
   } else if ((myAnswer1 > 111) & (myAnswer1 < 143)) {
      OldZ = "Taurus";
   } else if ((myAnswer1 > 142) & (myAnswer1 < 174)) {
      OldZ = "Gemini";
   } else if ((myAnswer1 > 173) & (myAnswer1 < 205)) {
      OldZ = "Cancer";
   } else if ((myAnswer1 > 204) & (myAnswer1 < 236)) {
      OldZ = "Leo";
   } else if ((myAnswer1 > 235) & (myAnswer1 < 267)) {
      OldZ = "Virgo";
   } else if ((myAnswer1 > 266) & (myAnswer1 < 297)) {
      OldZ = "Libra";
   } else if ((myAnswer1 > 296) & (myAnswer1 < 328)) {
      OldZ = "Scorpio";
   } else if ((myAnswer1 > 327) & (myAnswer1 < 357)) {
      OldZ = "Sagittarius";
   } else if ((myAnswer1 > 356) & (myAnswer1 < 367)) {
      OldZ = "Capricorn";
   } else if ((myAnswer1 > 0) & (myAnswer1 < 20)) {
      OldZ = "Capricorn";
   } else if ((myAnswer1 > 19) & (myAnswer1 < 51)) {
      OldZ = "Aquarius";
   } else if ((myAnswer1 > 50) & (myAnswer1 < 81)) {
      OldZ = "Pisces";
   } else {
      document.getElementById("day").value = "See if Month and Day are real";
   }
}
function Output() {
   if (
      document.getElementById("year").value ===
      "Make year 4 Digets and Positive!"
   ) {
      CZ = "Fix Year";
   }
   document.getElementById("result").innerHTML = OldZ;
   document.getElementById("result2").innerHTML = NewZ;
   document.getElementById("result3").innerHTML = CZ;
}