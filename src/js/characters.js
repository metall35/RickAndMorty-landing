const apiCharacters = 'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8'
const containerCharacters = document.querySelector('#container-characters')

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI)
    const data = await response.json()
    return data
}
const life = (status) => {
    let state = (status == 'Alive' ? 'text-lime-500' : 'text-red-600')
    return state
}

(async () => {
    try {
        const character = await fetchData(apiCharacters)
        let renderCharacter = `
        ${character.map(character =>
            `
        <div class="card-container">
            <div class="card">
                <div class="front-content bg-cover bg-center" style="background-image: url('${character.image}');">
                </div>
                <div class="content">
                    <h5 class="heading">${character.name}</h5>
                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    <span class"text-neutral-600 text-base font-light mr-[5px]">Gender:</span>
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
        </div>
        `
        ).join('')}
        `
        containerCharacters.innerHTML = renderCharacter
    } catch (error) {
        console.log(error);
        containerCharacters.innerHTML = error
    }
})()