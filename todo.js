
/*TodoList*/

const ul = document.getElementById("todoLists");
const inuputText = document.getElementById("textBox");
const addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", () =>{
    const text = inuputText.value;
    console.log(text);
    const li = document.createElement("li");
    const p = document.createElement("p");
    const button = document.createElement("button");
    button.textContent = "-";
    li.classList.add("item");
    p.classList.add("itemName");
    p.textContent = text;
    button.classList.add("removeBtn");
    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(button);
    button.addEventListener("click", (e) =>{
        ul.removeChild(e.target.closest("li"));

    }); 
});