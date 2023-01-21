
/*
function up () {
    let clicar = document.querySelector('.card-big')
    clicar.style.width = '50%'
    clicar.style.height = '750px'
    clicar.style.position = 'absolute'
    clicar.style.display = 'flex'
    clicar.style.margin = '50px'
}

function up2 () {
    let clicar = document.querySelector('.card-big2')
    clicar.style.width = '50%'
    clicar.style.height = '750px'
    clicar.style.position = 'absolute'
    clicar.style.display = 'flex'
    clicar.style.margin = '50px'
}*/
/*
capturar.addEventListener('click', expandir)


function expandir () {
    let capturar = document.getElementById('conteiner-car-small-mobile')


}*/

function data () {
    let horas = new Date()
    let d = horas.getDate()
    let m = horas.getMonth()+1
    let a = horas.getFullYear()

    let h = horas.getHours()
    let mi = horas.getMinutes()
    let mil = horas.getSeconds()

    let mostrar = d + ':' + m + ':' + a + ' - ' + h + ':' + mi + ':' + mil
    console.log(mostrar)
    document.getElementById('horas').innerHTML = mostrar
  
}

let repetir = setInterval(data, 1000)











