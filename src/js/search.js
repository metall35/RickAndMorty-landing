const apiCharacters = 'https://rickandmortyapi.com/api/character/'
const containerCharactersSearch = document.querySelector('#container-characters-search')
let searchCharacters = document.querySelector('#searchCharacter')
const searchButton = document.getElementById('searchButton');

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI)
    const data = await response.json()
    return data
}
const life = (status) => {
    let state = (status == 'Alive' ? 'text-lime-500' : 'text-red-600')
    return state
}
const searchResults = async (characterText) => {
    const character = await fetchData(apiCharacters)
    const filterCharacter = character.results.filter(character =>
        character.name.toLowerCase().includes(characterText.toLowerCase()) ||
        character.gender.toLowerCase().includes(characterText.toLowerCase()) ||
        character.origin.name.toLowerCase().includes(characterText.toLowerCase()) ||
        character.species.toLowerCase().includes(characterText.toLowerCase()) ||
        character.status.toLowerCase().includes(characterText.toLowerCase())
        )
    return filterCharacter
}

const displayResults = (filterCharacter) => {
    containerCharactersSearch.innerHTML = ''
    let viewSearch = `
    ${filterCharacter.map(character => `
        <div
        class="relative flex w-76 flex-col rounded-xl bg-clip-border text-gray-700 shadow-lg shadow-black/60">
            <div
                class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-cover bg-center text-white shadow-lg shadow-blue-gray-500/40" style="background-image:url('${character.image}')">
            </div>
            <div class="p-6">
                <h5
                    class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    ${character.name}
                </h5>   
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    <span class"text-neutral-400 text-base font-light mr-[5px]">Gender:</span>
                    ${character.gender}
                </p>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                <span class"text-neutral-600 text-base font-light mr-[5px]">Origin:</span>
                ${character.origin.name}
                </p>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                <span class"text-neutral-600 text-base font-light mr-[5px]">Specie:</span>
                ${character.species}
                </p>
                <p class="block font-sans text-base font-light ${life(character.status)} leading-relaxed text-inherit antialiased">
                <span class"text-neutral-600 text-base font-light mr-[5px]">Status:</span>
                ${character.status}
                </p>
            </div>
        </div>
        `
    ).join('')}
    `
    containerCharactersSearch.innerHTML = viewSearch
}
searchButton.addEventListener('click', async () => {
    const characterText = searchCharacters.value.trim();
    if (characterText.length > 0) {
        const filterCharacter = await searchResults(characterText);
        displayResults(filterCharacter);
    } else {
        containerCharactersSearch.innerHTML = '<p>Please enter a character name</p>';
    }
})
containerCharactersSearch.innerHTML = '<p>Please enter a character name</p>'