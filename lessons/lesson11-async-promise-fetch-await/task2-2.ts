//  Вивести в консоль назви всіх "starships" котрими володів Han Solo (id = 14):
//     2.2 Використовуючи async/await

async function getAllStarshipAsync(userID) {
    const endpoint = 'https://swapi.dev/api';
    const starshipsName = {
        name: [],
    };

    try {
        const response = await fetch(`${endpoint}/people/${userID}`);
        const result = await response.json();
        const foundedUsersStarships = result.starships;

        for (const everyLink of foundedUsersStarships) {
            const response = await fetch(everyLink);
            const starship = await response.json();
            starshipsName.name.push(starship.name);
        }

        return starshipsName;
    } catch (error) {
        throw error;
    }
}

getAllStarshipAsync(14).then(data => console.log(data));
