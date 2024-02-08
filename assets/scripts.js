
const filmAdi=document.querySelector('input')
const button=document.querySelector('button')


button.addEventListener('click', function(){
    const text=filmAdi.value

    if (text===""){
        alert("Filmin adini daxil edin")
    }else{
        searcFilm(text)
        document.body.style.backgroundColor="deepskyblue"
        document.body.style.color="white"
        
    }
})
var a= pro


function searcFilm(filminAdi){
    var film1 = fetch("https://www.omdbapi.com/?apikey=trilogy&t="+filminAdi)
    const basliq=document.querySelector('h1')
    const img=document.querySelector('#image')
    const about=document.querySelector('#about')
    const janr=document.querySelector('#janr')
    film1.then(function(netice){
        return netice.json()
    }).then(function(filmNeticesi){
        basliq.innerHTML=filmNeticesi.Title
        img.src=filmNeticesi.Poster
        about.innerHTML=filmNeticesi.Plot
        janr.innerHTML=filmNeticesi.Genre
    })
}
