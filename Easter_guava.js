let kartochki = document.querySelector(".kartochki");
let picture = ['','0.jpg']
let tropar = ['','Христос Воскресе из мертвых, смертию смерть поправ и сущим во гробех живот даровав']

for(let i = 0; i < picture.length; i++){
    let img = document.createElement('img');
    img.src = picture[i]

    let text = document.createElement('p');
    text.className = 'text'
    text.innerHTML = tropar[i]

    let card = document.createElement("div");
    card.className = 'card'

    card.appendChild(img)
    card.appendChild(text)

    kartochki.appendChild(card)
}