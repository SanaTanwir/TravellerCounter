//  in js camelCasing is important

let count = 0 

let countEl = document.getElementById ("count-el")
let saveEl= document.getElementById ("save-el")

function increment () {
    count = count + 1 
    countEl.innerText = count

}

function save() {
    let saved = "  " + count + " - "
    // can use also .textContent instead of innerText to get spaces 
    saveEl.innerText += saved  
    console.log (count)
    //  to set back the counter to 0 after saving set countEl to 0  and to start from 0 again set count to 0 as well
    countEl.innerText = 0
    count = 0 
}