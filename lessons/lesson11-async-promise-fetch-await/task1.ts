// За допомогою StarWars Api https://swapi.dev/ та fetch API зробити наступне:

//  1. Використовуючи методи классу Promise отримати масив назв планет перших 10 id

function getPlanetNames() {
  const endpoint = 'https://swapi.dev/api';
  const firstTenObjects = [];

  for (let i = 1; i <= 10; i++) {
    firstTenObjects.push(fetch(`${endpoint}/planets/${i}/`).then(response => response.json()));
  }

  return Promise.all(firstTenObjects)
    .then(planets => planets.map(planet => planet.name))
    .catch(error => console.error('Error fetching planet data:', error));
}

getPlanetNames().then(planetNames => console.log(planetNames));

// const firstTenObjects = [];

// for (let i = 1; i <= 10; i++) {
//     fetch(`https://swapi.dev/api/planets/${i}`)
//         .then(response => response.json())
//         .then(json => {
//             firstTenObjects.push(json.name);
//             if (firstTenObjects.length === 10) {
//                 console.log(firstTenObjects);
//             }
//         })
//         .catch(error => console.log(error));
// }
