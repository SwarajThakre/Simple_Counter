const counter = document.querySelector("#counter");
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const reset = document.querySelector("#reset");

let count = 0;

function hideMinus(){
    if (count <= 0){
        decrement.style.display = "none";
    }    else {
        decrement.style.display = "block";
    }
}

function incrementCount(){
    count++;
    counter.innerText = count;
    hideMinus();
}

function decrementCount(){
    count--;
    counter.innerText = count;
    hideMinus();
}

increment.addEventListener("click", incrementCount);
decrement.addEventListener("click", decrementCount);
reset.addEventListener("click", () => {
    count = 0;
    counter.innerText = count;
    hideMinus();
})

hideMinus   ();