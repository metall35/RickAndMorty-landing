const apiLocation = 'https://rickandmortyapi.com/api/location/1,2,3,4,5,6,7,8'
const imgLocations = [
    'src/assets/img/C-137.webp',
    'https://external-preview.redd.it/lEBKN94zObZdTbwDJPXGMLGup6iqmO7hPpji-BTuyG0.jpg?auto=webp&s=df160712a5a3ef66d26f92781e9cfeaef828910b',
    'https://www.gamespot.com/a/uploads/scale_medium/171/1712892/3286205-screen%20shot%202017-09-12%20at%2011.40.25%20am.png',
    'https://qph.cf2.quoracdn.net/main-qimg-f442aa2652011f657234c40b9b1ac3b7-lq',
    'https://m.media-amazon.com/images/M/MV5BM2I0Nzg0YTktYTc2Zi00NTk4LWI5ZDQtMmVhYjBjZmRmNGM0XkEyXkFqcGdeQXVyNjg4ODczODM@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BZGFlNTlkYjctYTYxNS00YWE4LTk1ZTYtNTcyNWY0ZTQ1MzhhXkEyXkFqcGdeQXVyNjgyOTUyNDc@._V1_.jpg',
    'src/assets/img/fieldResort.webp',
    'src/assets/img/Post-Apocalyptic.webp'
]
const containerLocation = document.querySelector('#container-locations')
async function fetchData(urlAPI) {
    const response = await fetch(urlAPI)
    const data = await response.json()
    return data
}
(async () => {
    try {
        const location = await fetchData(apiLocation)
        console.log(location);
        let renderLocation = `
        ${location.map(location =>
            `
        <div
        class="relative flex w-76 flex-col rounded-xl bg-clip-border text-gray-700 shadow-lg shadow-black/60">
            <div
                class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-cover bg-center text-white shadow-lg shadow-blue-gray-500/40" style="background-image:url('${imgLocations[location.id - 1]}')">
            </div>
            <div class="p-6">
                <h5
                    class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    ${location.name}
                </h5>   
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    <span class"text-neutral-400 text-base font-light mr-[5px]">Type:</span>
                    ${location.type}
                </p>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    <span class"text-neutral-400 text-base font-light mr-[5px]">Dimension:</span>
                    ${location.dimension}
                </p>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    <span class"text-neutral-400 text-base font-light mr-[5px]">Residents:</span>
                    ${location.residents.length}
                </p>
            </div>
        </div>
        `
        ).join('')}
        `
        containerLocation.innerHTML = renderLocation
    } catch (error) {
        console.log(error);
        containerLocation.innerHTML = error
    }
})()