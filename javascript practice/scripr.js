let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("demo")
let count = 0
function jiji(){
  count += 1;
  countEl.innerText = count
}
function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}