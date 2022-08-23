document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    workList(e.target.newTask.value)
  })
});
function workList(eachItem) {
  let p = document.createElement('p')
  let btn = document.createElement('button') 
btn.addEventListener('click', forDelete)
btn.textContent = 'x'
p.textContent = `${eachItem}`
p.appendChild(btn)
console.log(p)
document.querySelector('#list').appendChild(p)

}
function forDelete(e){
  e.target.parentNode.remove()
}