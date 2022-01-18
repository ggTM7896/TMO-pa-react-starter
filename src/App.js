import React from 'react';
import './App.css';

var recipes = [

];

function DisplayList(props) {
  if (props.my_recipe_list.length === 0){
    return (
      <div>
        <p></p>
        <h1>My Recipes</h1>
        <p class="tm-p"> No recipes to list</p>
      </div>
    )

  } else {
    return (
      <div>
      <p></p>
       <h1>My Recipes</h1>
        <ul>
          {
            props.my_recipe_list
              .map(recipe =>
                <li> {recipe.name} </li>
              )
          }
        </ul>
      </div>
    )
  }
}

function App() {
 
  const [list, setList] = React.useState(recipes);
  const [name, setName] = React.useState("");

  function handleAdd() {
    const newList = list.concat({ name });
    setList(newList);
  }

  function handleInput(event) {
    setName(event.target.value);
  }

  return (
    <div class="tm-div">
      <div>
        <p></p>
        <DisplayList my_recipe_list={list}/>
      </div>
      <div>
        <p></p>
        <form>
          <fieldset>
            <label class="tm-label" name="recipe-name"> recipe-name
            <input type="text" class="tm-textbox" name="recipe-name"
                   onChange={handleInput} />
            </label>
            <p></p>
            <label class="tm-label" name="recipe-instructions"> recipe-instructions
            <input type="text" class="tm-textbox" name="recipe-instructions" />
            </label>
          </fieldset>
        <button class="tm-button" type="button" onClick={handleAdd}>
          Add
        </button>
        <p></p>
        </form>
      </div>
	  </div>
   );
}

export default App;
