export default class SpaService {

  _apiBase = 'http://localhost:3000/orderInfo';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}`);
    
    if(!res.ok) {
      throw new Error(`could not fetch ${url}  receved ${res.status}`)
    }
    return await res.json();
  }

  postResource = async (data) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    return await fetch(`${this._apiBase}`, options)
      .then((response) => response.json)
  }

  updateResource = async () => {
    const options1 = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
    }
    return await fetch(`${this._apiBase}`, options1)
      .then((response) => response.json)
  }

}


const service = new SpaService();



// service.postResource({ customer: "check", typeOrder: "Msd" })

service.getResource().then((orderInfo)=>{
    // console.log(orderInfo);
});
