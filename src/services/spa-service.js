export default class SpaService {

  _apiBase = 'http://localhost:3000/orderInfo';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}`);
    
    if(!res.ok) {
      throw new Error(`could not fetch ${url}  receved ${res.status}`)
    }
    return await res.json();
  }


  // getAllPeople = async () => {
  //   const res = await this.getResource(`/people/`);
  //   return res.results.map(this._transformPerson);
  // }

  // _transformPlanet = (planet) => {
  //   return {
  //       id: this._extractId(planet),
  //       name:planet.name,
  //       population:planet.population,
  //       rotationPeriod:planet.rotation_period,
  //       diameter:planet.diameter,
  //       climate:planet.climate,
  //   }
  // };

}


const service = new SpaService();

service.getResource().then((orderInfo)=>{
    // console.log(orderInfo);
});
