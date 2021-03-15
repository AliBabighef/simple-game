
let button = document.querySelector(".strat-game button"),
    YoureName = document.querySelector(".name span");

// start function asking you're name
function asking() {

    "use strcit";

    button.parentElement.classList.add("active")

    let ask = prompt("what you're name");

    if (ask === "") {

        YoureName.innerHTML = "unknow"

    }
    else if (ask === null) {

        YoureName.innerHTML = "unknow"

    }
    else {

        YoureName.innerHTML = ask

    }

}


button.addEventListener("click", function () {

    asking()

})
// end function asking you're name
// start loop for all img 
let allNavImg = document.querySelectorAll(".content_body");

let arr = Array.from(document.querySelector(".body").children);

let w = 0;
let y = [];

allNavImg.forEach((ell, i) => {

    for (let i = 0; i < allNavImg.length; i++) {


        let randamNum = Math.floor(Math.random() * allNavImg.length);

        ell.style.order = randamNum;

    }

    ell.addEventListener("click", function () {


        ell.classList.add("active");

        if (ell.classList.contains("active")) {

            ell.style.pointerEvents = "auto";

        }

        y.push(ell)

        sellecting(y)

        checkingTwo()
    })

})

function sellecting(isSlect) {

    let showTwo = arr.filter(ell => ell.classList.contains("active"));


    if (showTwo.length === 2) {

        document.querySelector(".body").classList.add("stopClicking");

        matching(y[0].dataset.dt, y[1].dataset.dt)
        y[0].style.pointerEvents = "auto";
        y[1].style.pointerEvents = "auto";

    }

}
// start if y greater than 2 will remove first ellemnt arry 

function checkingTwo() {


    if (y.length > 2) {

        for (let r = 0; r < y.length; r++) {


            y.splice(0, 1)


        }

    }

}

// end if y greater than 2 will remove first ellemnt arry 
//start if data set is true
function matching(fst, snd) {

    if (fst === snd) {

        checkingTwo()

        document.querySelector(".body").classList.remove("stopClicking");

        y[0].classList.remove("active")
        y[1].classList.remove("active")

        y[0].classList.add("isMatch")
        y[1].classList.add("isMatch")


    }
    //end if data set is true
    //star if data set is false
    else {

        for (let i = 0; i < y.length; i++) {

            checkingTwo();

            setTimeout(function () {
                document.querySelector(".body").classList.remove("stopClicking");
                y[i].classList.remove("active");

            }, 2000)

        }


        document.querySelector(".wrong span").innerHTML = w + 1;

        w++

    }
}

function stopClicking(element) {



}