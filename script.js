const search = document.getElementById("searfch-btn");
const city = document.getElementById("city");
const temp = document.getElementById("temp")
const country = document.getElementById("country");
const input = document.getElementById("input");
const des = document.getElementById("des");

search.addEventListener('click', function(){
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&APPID=266013641f03c4585c49c6ae03cb40b9')
        .then(res => res.json())
        .then(data => {
            let nameValue = data['name'];
            let tempValue = data['main']['temp'];
            let descValue = data['weather'][0]['description'];
           

            const current = tempValue -273;
            city.innerHTML = nameValue;
            temp.innerHTML = current.toFixed(2);
            des.innerHTML = descValue;
            
           
        })

        .catch(err => alert("Wrong City"))
})
