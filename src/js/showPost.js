const containerPost = document.querySelector('#container-post')
const data = JSON.parse(localStorage.getItem('post'))
console.log(data);

(() => {
    let viewComments = `
    ${data.map(data => `
    <div class="card-comments">
        <div class="bg">
            <h4 class='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>${data.name}</h4>
            <p class='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>${data.post}</p>
        </div>
        <div class="blob">
        </div>
    </div> 
    `).join('')}
    `
    containerPost.innerHTML = viewComments
})()