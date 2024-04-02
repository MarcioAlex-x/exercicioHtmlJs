let form = document.getElementById('form')
let valorPrimario = document.getElementById('valorPrimario')
let valorSecundario = document.getElementById('valorSecundario')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    if(parseInt(valorPrimario.value) < parseInt(valorSecundario.value)){
        alert('Formulário validado. Parabéns')
    }else{
        alert('Formulário não validado. Sentimos muito!')
    }
})