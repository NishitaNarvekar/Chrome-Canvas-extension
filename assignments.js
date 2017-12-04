var d = document.getElementById('demo');
d.style.position = "absolute";
d.style.left = 850+'px';
d.style.top = 400+'px';
var accesstoken = "12~2ctSXKXs3Ye70uhc7MllKuO9t6RmO8iq02mSlwRxmnR95rLk5QSrFsHwxtqyDpab"
var images = [
       "https://i.pinimg.com/originals/db/ff/6a/dbff6a0e91161f910236c8b9e57e6c47.jpg",
       "https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAyMC8wMjIvb3JpZ2luYWwvNC1hdXR1bW4tY2l0eS1wYXJrLmpwZw==",
       "https://pbs.twimg.com/media/DKUtmfLXkAQFc6Q.jpg",
       "http://littlefriendsphoto.zenfolio.com/img/s/v-3/p242390931-4.jpg",
       "https://i.pinimg.com/originals/e9/30/b0/e930b082efc0eafb19de4ac3e63c3278.jpg"
       ];

var imgCount = images.length;

var randNumber=Math.floor((Math.random() * imgCount) + 1);

imgURL = images[randNumber-1];
var urlString = 'url(' + imgURL + ')';

document.body.style.backgroundImage=urlString
document.body.style.backgroundSize = screen.width + "px " + screen.height + "px";
document.getElementById("demo").style.backgroundColor = "black";

var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", "https://canvas.instructure.com//api/v1/courses?access_token=" + accesstoken, false ); // false for synchronous request
  xmlHttp.send()

  console.log(xmlHttp.responseText);
  var json = JSON.parse(xmlHttp.responseText);
  console.log(json.course_code);
  json.forEach(function (course) {
    console.log(course.name);
    if(course.name)
    {
    document.getElementById("demo").innerHTML = course.name;
    }

});

xmlHttp.open( "GET", "https://canvas.instructure.com/api/v1/courses/120000001240739/assignments?per_page=100&access_token=" + accesstoken + "&bucket=future", false ); // false for synchronous request
xmlHttp.send()

console.log(xmlHttp.responseText);
var json = JSON.parse(xmlHttp.responseText);
console.log(json);
var txt = "";
txt += "<h2 align='center' style='color:white;'> Canvas Assignments </h2>"
txt += "<font color='white'><table border='1'>"
        json.forEach(function (assignment) {
          console.log(assignment.name);
          if(assignment.name)
          {
            var date = new Date(assignment.due_at);
            var time = date.toString().replace("GMT-0800 (PST)", "");
            txt += "<tr><td nowrap><a href=" + assignment.html_url+ "> " + assignment.name + "</a></td><td nowrap>" + time + "</td></tr>";
          }
        });
        txt += "</table></font>"
        document.getElementById("demo").innerHTML = txt;

xmlHttp.open( "GET", "http://api.openweathermap.org/data/2.5/weather?zip=95110,us&appid=67f7b1bb891d526b0578a6049c406ffd", false ); // false for synchronous request
xmlHttp.send()

console.log(xmlHttp.responseText);
var json = JSON.parse(xmlHttp.responseText);
console.log(json);
console.log(json.main.temp);
console.log(json.name);
var kelvin = json.main.temp
var celci = Math.round((kelvin - 273),2)
var name = json.name

var weathermsg = "<h3 style='color:white;'>" + name.toString() + "</h3>"
weathermsg +="<h1 style='color:white;'>" + celci.toString() +" <sup>o</sup>"+"</h1>"


document.getElementById("weather").innerHTML = weathermsg;
