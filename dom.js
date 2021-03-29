//creiamo le costanti
const form = document.querySelector('#task-form');
const ulLista = document.querySelector('#lista');
const input = document.querySelector('input#task');
const filter = document.querySelector('input#filter');



loadEvents();

//crearci la funzione di caricamento
function loadEvents(){
    form.addEventListener('submit',addEvent);
    ulLista.addEventListener('click',removeElement);
    filter.addEventListener('keyup',filterElement); 
}

function addEvent(e){
    if(input.value === '' ){
        alert('l\' input è vuota');
    }else{
        let li = document.createElement('li');
        li.className = 'item';
        let liValore = document.createTextNode(input.value);
        li.appendChild(liValore);

        let link = document.createElement('a');
        link.className = 'close delete';
        link.textContent = 'x';
        li.appendChild(link); // <li>  ........ </li>

        ulLista.appendChild(li);
        input.value = '';

    }
    e.preventDefault();
}

function removeElement(e){ 
    if(e.target.classList.contains('delete')){
        console.log(e.target.parentElement);
        e.target.parentElement.remove();
    }

    e.preventDefault();
}

function filterElement(e){
    const term = e.target.value.toLowerCase();
    const list = document.getElementById('lista') // la sistemate
    const tasks = list.getElementsByTagName('li');
    Array.from(tasks).forEach( task => {
        console.log(term);
        console.log(task);
        let title = task.firstChild.textContent;
        if(title.toLowerCase().indexOf(term) > -1){
            task.style.display = 'block';
        }else{
            task.style.display ='none';
        }
    })
}
//effetto bubbling
// document.querySelector('#task').addEventListener('click',(e)=>{
//     console.log('input - #task')
//     e.stopPropagation();
//     e.preventDefault();
// })
// document.querySelector('.input-field').addEventListener('click',(e)=>{
//     console.log('div - .input-field')
//     e.stopPropagation();
//     e.preventDefault();
// })
// document.querySelector('.form-group').addEventListener('click',(e)=>{
//     console.log('div - .form-group')
//     e.stopPropagation();
//     e.preventDefault();
// })
// document.querySelector('#main').addEventListener('click',(e)=>{
//     console.log('div - #main')
//     e.stopPropagation();
//     e.preventDefault();
// })