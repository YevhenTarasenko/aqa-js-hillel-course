//  Вивести в консоль назви всіх "starship" котрими володів Han Solo (id = 14):
//     2.1 Використовуючи методи классу Promise
// Варіант 1
function getAllStarship(userID) {
    const endpoint = 'https://swapi.dev/api';
    const starshipLinks = {
        starships: [],
    };
    const starshipsName = {
        name: [],
    };

    return new Promise((resolve, reject) => {
        fetch(`${endpoint}/people/${userID}`)
            .then(response => response.json())
            .then(result => {
                const foundedUsersStarships = result.starships;
                starshipLinks.starships = foundedUsersStarships;

                const promises = [];
                for (const everyLink of foundedUsersStarships) {
                    promises.push(
                        fetch(everyLink)
                            .then(response => response.json())
                            .then(starshipName => starshipName.name)
                            .catch(error => reject(error)),
                    );
                }

                Promise.all(promises)
                    .then(names => {
                        starshipsName.name = names;
                        resolve(starshipsName);
                    })
                    .catch(error => reject(error));
            })
            .catch(error => reject(error));
    });
}

getAllStarship(14).then(data => console.log(data));
