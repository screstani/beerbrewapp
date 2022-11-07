//Query Selectors
const recipeForm = document.querySelector('#recipe-form');
const recipeContainer = document.querySelector('#recipe-container');
let listItems = [];

//FUNCTIONS
function handleFormSubmit(e) {
    e.preventDefault();
    const name = recipeForm.querySelector('#name').value;
    const method = recipeForm.querySelector('#method').value;
    const roast = recipeForm.querySelector('#roast').value;
    const grind = recipeForm.querySelector('#grind').value;
    const ratio = recipeForm.querySelector('#ratio').value;
    const note = recipeForm.querySelector('#note').value;
    const newRecipe = {
        name,
        method,
        roast,
        grind,
        ratio,
        note,
        id: Date.now(),
    }
    listItems.push(newRecipe);
    e.target.reset();
    displayRecipes();
}

function displayRecipes() {
    const tempString = listItems.map(item => `
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div class="card-header py-3 text-white bg-primary border-primary">
                    <h4 class="my-0">${item.name}</h4>
                </div>
                <div class="card-body">
                    <ul class="text-start">
                        <li><strong>Method: </strong>${item.method}</li>
                        <li><strong>Method: </strong>${item.roast}</li>
                        <li><strong>Method: </strong>${item.grind}</li>
                        <li><strong>Method: </strong>${item.ratio}</li>
                        ${!item.note.length ? "" : `<li><strong>Method: </strong>${item.note}</li>`}
                    </ul>
                </div>
            </div>
        </div>
    `)
}

//EVENT LISTENERS
recipeForm.addEventListener('submit', handleFormSubmit);