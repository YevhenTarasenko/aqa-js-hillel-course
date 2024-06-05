// 3. Зібрати в масив назви всіх резидентів "residents", з усіх планет що були у фільмі "Return of the Jedi" (id = 3). Використовуйте async/await

async function getDataAboutPlanetAndResidentsFromFilm(filmId) {
  const url = `https://swapi.dev/api/films/${filmId}`;

  try {
    // Get planetsUrls
    const result = await fetch(url);
    const filmData = await result.json();
    const planetUrls = filmData.planets;

    const residentsData = [];
    // Get planet name and residents name
    for (const planetUrl of planetUrls) {
      const result = await fetch(planetUrl);
      const planetData = await result.json();
      const planetName = planetData.name;
      const residentsUrls = planetData.residents;

      const planetResidents = [];
      // Get residents name for planet
      for (const residentsUrl of residentsUrls) {
        const result = await fetch(residentsUrl);
        const residentData = await result.json();
        planetResidents.push(residentData.name);
      }
      residentsData.push({ planetName, residents: planetResidents });
    }

    console.log(residentsData);

    return residentsData;
  } catch (error) {
    return error;
  }
}
getDataAboutPlanetAndResidentsFromFilm(3);
