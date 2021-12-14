const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById('city_name');
const temp_r = document.getElementById('temp_r');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getinfo = async (event) => {
    event.preventDefault();
    let cityval = cityName.value;
    if (cityval === "") {
        city_name.innerText = `Plz write the name befor the search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=7ef77d9c2c4ee106afa86aa3b8094702`;
            const response = await fetch(url).then((res) => {
                const data = res.json().then(r => {
                    // console.log(r)
                    const arrydata = [r];
                    let t = Math.floor(arrydata[0].main.temp - 273.15);
                    temp_r.innerText = t;
                    datahide.classList.remove('data_hide');
                });
            });

        } catch (error) {
            city_name.innerText = `Plz write the name befor the search`;
            datahide.classList.add('data_hide');
        }

    }
}

submitBtn.addEventListener("click", getinfo);



