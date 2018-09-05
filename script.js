var weather = document.getElementById("weather");
window.onload = function() {
    document.getElementById("submit").addEventListener("click", findTemp);

}

function findTemp() {
    var city = document.getElementById("city").value;
    if (city) {
        document.getElementById("message").innerHTML = "";
 		document.getElementById("tempreture").innerHTML = "";
 		document.getElementById("humidity").innerHTML = "";
 		document.getElementById("city-name").innerHTML = "";
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&units=metric&APPID=2c25c4a7abe5573e3c68ec9706005d92`;

        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var jsnObj = JSON.parse(this.responseText);
                console.log(jsnObj);
                var text = document.createTextNode("search is successfull");
                document.getElementById("message").append(text);
                document.getElementById("tempreture").append(jsnObj.main.temp);
                document.getElementById("humidity").append(jsnObj.main.humidity);
                document.getElementById("city-name").append(jsnObj.name);

            } else
            if (this.readyState == 4 && this.status == 404) {
                console.log("error");
                var para = document.createElement("P");
                var text = document.createTextNode("Sorry city not found!!");
                para.append(text);
                document.getElementById("message").append(para);
            }


        };

        request.open('GET', url);
        request.send();
    } else {
    	document.getElementById("message").innerHTML = "";
        document.getElementById("tempreture").innerHTML = "";
        document.getElementById("humidity").innerHTML = "";
        document.getElementById("city-name").innerHTML = "";
        var para = document.createElement("P");
        var text = document.createTextNode("sorry unable to get input!!");
        para.append(text);
        document.getElementById("message").append(para);

    }
}