console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

let node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById('node1') method to access this";



// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

let node2 = document.getElementsByClassName("node2");

for (let node of node2) {
    node.textContent = "I used the getElementByClassName('node2') method to access this";
}



// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

let h3 = document.getElementsByTagName("h3");
for (let element of h3) {
    element.textContent = "I used the getElementByTagName('h3') method to access all of these"
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

let p = document.createElement("p");
p.textContent = "This node was created using the createElement() method"

// TODO: Append the created node to the parent node using the element.appendChild() method

let parent = document.getElementById("parent");
parent.appendChild(p);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

// BONUS: Add a link href to the <a>

let a = document.createElement("a");
a.textContent = "I am a <a> tag";




// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

parent.insertBefore(a,p);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

let childNode = document.getElementById("N1");
let newChildNode = document.createElement("p");
newChildNode.textContent = "New Child Node"
let parent3 = document.getElementById("exercise-container3");
parent3.replaceChild(newChildNode,childNode);

// TODO: Remove the "New Child Node"

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element

let ul = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each

list.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
})


// TODO: Append the new list items to the unordered list element




// TODO: Append the unordered list to the `div#container` under exercise 4 

let parent4 = document.getElementById("container");
parent4.appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message

function show() {
    let modalContainer = document.createElement("div");
    let modalCard = document.createElement("div");
    modalCard.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"

    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let closeButton = document.createElement("button");
    h2.textContent = "Modal Header";
    p.textContent = "modal content blah blah blah";
    closeButton.textContent = "x";
    closeButton.addEventListener("click",() => {
        document.body.removeChild(modalContainer);
    });

    document.body.appendChild(modalContainer);
    modalContainer.appendChild(modalCard);
    modalCard.append(h2,p,closeButton);

    modalContainer.id="modal";
    modalCard.classList.add("modal-card");
}


// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"

let button = document.getElementById("btn");
button.addEventListener("click", show);

// This div should be a 'modal' that covers the main content on the screen


// BONUS: The modal popup should be able to be closed. Refactor for this functionality
