// Adding a note

let ul = document.querySelector('#list')

document.getElementById('add-btn').addEventListener('click', function(e){
    e.preventDefault();

    let addInput = document.getElementById('add-input')

    if(addInput.value !== '') {
        // create elements
        var li = document.createElement('li'),
            firstP = document.createElement('p'),
            secondP = document.createElement('p'),
            firstIcon = document.createElement('i'),
            secondIcon = document.createElement('i'),
            input = document.createElement('input')

        // create attributes
        firstIcon.className = 'fa fa-pencil-square-o'
        secondIcon.className = 'fa fa-times'
        input.className = 'edit-note'
        input.setAttribute('type', 'text')

        // add text to first paragraph
        firstP.textContent = addInput.value

        // appending stage
        secondP.appendChild(firstIcon)
        secondP.appendChild(secondIcon)
        li.appendChild(firstP)
        li.appendChild(secondP)
        li.appendChild(input)
        ul.appendChild(li)

        addInput.value = ''
    }
})


// Editing and deleting

ul.addEventListener('click', function(e){
    if(e.target.classList[1] === 'fa-pencil-square-o') {
        let parentP = e.target.parentNode
        parentP.style.display = 'none'

        let note = parentP.previousElementSibling
        let input = parentP.nextElementSibling

        input.style.display = 'block'
        input.value = note.textContent

        input.addEventListener('keypress', function(e){
            if(e.keyCode === 13) {

                if(input.value !== ''){
                    note.textContent = input.value
                    parentP.style.display = 'block'
                    input.style.display = 'none'
                }
                //  else {
                //     let li = input.parentNode
                //     li.parentNode.removeChild(li)

                // }
            }
        })
    }

    if(e.target.classList[1] === 'fa-times'){
        let list = e.target.parentNode.parentNode
        list.parentNode.removeChild(list)
    }
})

// Hide list
const hideItem = document.getElementById('hide')
hideItem.addEventListener('click', function(e){
    const label = document.querySelector('label')

    if(this.checked){
        label.textContent = 'Unhide Notes'
        ul.style.display = 'none'
    } else {
        label.textContent = 'Hide Notes'
        ul.style.display = 'block'
    }
})

// Search filter

const searchInput = document.querySelector('#search-note input')
searchInput.addEventListener('keyup', function(e){

    const searchChar = e.target.value.toLowerCase()
    const notes = ul.getElementsByTagName('li')

    Array.from(notes).forEach(function(note){

        const parText = note.firstElementChild.textContent

        if(parText.toLocaleLowerCase().indexOf(searchChar) !== -1) {
            note.style.display = 'block'
        } else {
            note.style.display = 'none'
        }
    })



})
