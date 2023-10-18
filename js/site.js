// get Star Wars facts
async function getFacts() {
    try {
        let response = await fetch('https://swapi.dev/api/planets/3');
        let data = await response.text();

        document.getElementById('swapiList').textContent = data;
    } catch {

    }
}