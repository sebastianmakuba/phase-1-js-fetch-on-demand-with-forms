const init = () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
       //ACCESSING THE INPUT VALUE
       //e.target.children[1].value
       //OR
       const input = document.querySelector('input#searchByID')
       

       fetch(`http://localhost:3000/movies/${input.value}`)
       .then (response  => response.json())
       .then (data => {
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')
        title.textContent = data.title
        summary.textContent = data.summary
       })
    })
}

document.addEventListener('DOMContentLoaded', init);