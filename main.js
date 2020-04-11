import axios from 'axios';

class Wheater {
    static async getWheater(city) {
        const response = new ClimaCidade((await axios.get(`https://api.hgbrasil.com/weather?key=87f24bb4&city_name=${city},RS`)).data.results);
        // console.log('response',response);
        return response;
    }
}

class ClimaCidade {
    constructor({temp,date,time,currently,city}){
        this.temperatura = temp;
        this.data = date;
        this.hora = time;
        this.periodo = currently;
        this.cidade = city;
    }
}

Wheater.getWheater('Pelotas').then(v => {console.log(v)});