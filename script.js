var cardcontainer = document.getElementById("cardcontainer")
var cardname = document.getElementById('cardname')
var addtaskpopup = document.getElementById('addtaskpopup')
var parent = document.getElementById('parent')
var addItemPopup = document.getElementById('addItemPopup')
var notask = document.getElementById('notask')
var singleCard = document.getElementById('singleCard')
//show task button
function showAddTask(){
  addtaskpopup.classList.remove('hide')
  parent.classList.add('blur')

}
//hide task button
function hideAddTask(){
    addtaskpopup.classList.add('hide')
    parent.classList.remove('blur')
    
  }

  function addCard(){
    notask.classList.add('hide')
    hideAddTask()
    //create card elements
    let card = document.createElement('div')
    let cardHeading = document.createElement('h3')
    let line = document.createElement('hr')
    let itemList = document.createElement('div')
    let addItem = document.createElement('button')
    let deletebutton = document.createElement('button')

    //append elements
    cardcontainer.appendChild(card)
    card.appendChild(cardHeading)
    card.appendChild(line)
    card.appendChild(itemList)
    card.appendChild(addItem)
    card.appendChild(deletebutton)

    //give values to elements

    cardHeading.innerText = cardname.value
    cardname.value = "" //clearing the popup inpute
    card.classList.add('card')
    addItem.innerText="Add"
    deletebutton.innerText = "delete"
    
    //delete button logic
    deletebutton.addEventListener('click',()=>{
        card.remove()
        if(cardcontainer.innerText === '')
         notask.classList.remove('hide')
    })

    //add item 
    addItem.addEventListener('click',()=>{
        addItemPopup.classList.remove('hide')
        parent.classList.add('blur')
        //create items
        // let itemPopup = document.createElement('div')
        let itemPopupheading = document.createElement('h3')
        let itemName = document.createElement('input')
        let addbutton = document.createElement('button')
        let closebutton = document.createElement('button')
        
        //append elements

        addItemPopup.appendChild(itemPopupheading)
        addItemPopup.appendChild(itemName)
        addItemPopup.appendChild(addbutton)
        addItemPopup.appendChild(closebutton)

        //give element values

        itemPopupheading.innerText = "Add task"
        addbutton.innerText = "Add"
        closebutton.innerText = "Close"
         //56.42 mins

        addbutton.addEventListener('click',()=>{
          addItemPopup.classList.add('hide')
          parent.classList.remove('blur')

          //creating item elements
            let item = document.createElement('div')
            let itemtext = document.createElement('span')
            let markdone = document.createElement('button')

            //append
            item.appendChild(itemtext)
            item.appendChild(markdone)

            //values
            itemtext.innerText = itemName.value
            markdone.innerText = "Mark done"
            
            //appending the item to item list
            itemList.appendChild(item)
            // addItemPopup.classList.add('hide')

            addItemPopup.innerText = ""

        })
    })


  cardHeading.addEventListener('click', () => {
      singleCard.classList.remove('hide')
      cardcontainer.classList.add('hide')
      let copycard = card.cloneNode(true)
      singleCard.appendChild(copycard)    
      parent.firstElementChild.classList.remove('hide')

     })


  }

  function back(){
    parent.firstElementChild.classList.add('hide')
    singleCard.classList.add('hide')
    cardcontainer.classList.remove('hide')
    // cardcontainer.appendChild(singleCard.firstElementChild)
    singleCard.innerText = ''
  }