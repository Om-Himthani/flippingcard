const data = [
    {
        "name": "CSS",
        "img": "css.png"

    },
    {
        "name": "HTML",
        "img": "html.png"

    },
    {
        "name": "Javascript",
        "img": "javascript.png"

    },
    {
        "name": "Python",
        "img": "python.png"

    },
    {
        "name": "PHP",
        "img": "php.png"

    },
    {
        "name": "MYSQL",
        "img": "mysql.png"

    }
]


const parent_div = document.getElementById("card-section")
const data2 = data.concat(data)
const func = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
}

const data3 = func(data2)
let clickcount = 0
let firstcard = ""
let secondcard = ""
const card_matches = () => {
    const card_selec = document.querySelectorAll(".card_selected")
    card_selec.forEach(element => {
        element.classList.add("card_matches")
    });
}
const resetgame = () => {
    clickcount = 0
    firstcard = ""
    secondcard = ""
    const card_selected = document.querySelectorAll(".card_selected")
    card_selected.forEach(curelement => {
        curelement.classList.remove("card_selected")
    });
}


parent_div.addEventListener('click', (event) => {
    curcard = event.target;
    if (curcard.id === "card-section") {
        return false
    }

    clickcount++

    if (clickcount < 3) {

        if(clickcount === 1){
            firstcard = curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add('card_selected');
        }else{
            secondcard = curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add('card_selected');
        }
        if (firstcard !== "" && secondcard !== "") {
            if (firstcard === secondcard) {
                setTimeout(() => {


                    card_matches()
                    resetgame()
                }, 1000)
            }
            else {
                setTimeout(() => {
                    resetgame()
                }, 1000)
            }
        }


    }




})

for (let i = 0; i < data3.length; i++) {
    const childdiv = document.createElement('div')
    childdiv.classList.add('card')

    childdiv.dataset.name = data3[i].name;
    const newdiv1 = document.createElement('div')
    newdiv1.classList.add("front")
    const newdiv2 = document.createElement('div')
    newdiv2.classList.add("back")
    newdiv2.style.background = `url(${data3[i].img})`
    newdiv2.style.backgroundSize="contain"
    newdiv2.style.backgroundPosition="center center"
    newdiv2.style.backgroundRepeat="no-repeat"
    childdiv.append(newdiv1)
    childdiv.append(newdiv2)
    parent_div.appendChild(childdiv)

}
