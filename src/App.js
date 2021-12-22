import './App.css';

var recipes = []; 

<p id="demo"></p>

function hideForm() {
  document.getElementById("recipe_form").style.visibility = "hidden";
  document.getElementById("div_rec_name").style.visibility = "hidden";
  document.getElementById("rec_name").style.visibility = "hidden";
  document.getElementById("div_rec_instrns").style.visibility = "hidden";
  document.getElementById("rec_instrns").style.visibility = "hidden";
  document.getElementById("submit").style.visibility = "hidden";
}

function showForm() {
  document.getElementById("recipe_form").style.visibility = "visible";
  document.getElementById("div_rec_name").style.visibility = "visible";
  document.getElementById("rec_name").style.visibility = "visible";
  document.getElementById("div_rec_instrns").style.visibility = "visible";
  document.getElementById("rec_instrns").style.visibility = "visible";
  document.getElementById("submit").style.visibility = "visible";
}

function showRecipes() {
  if (recipes.length === 0) {
	  var out_text = "<h3 role='heading'> There are no recipes to list </h3>";
	 document.getElementById("recipe_list").innerHTML = out_text;
  } else {
	 var out_text = "<ul>";
	 for (let i = 0; i < recipes.length; i++) {
	   out_text += "<li role='listitem'>" + recipes[i] + "</li>";
	  }
	  out_text += "<ul>";
      document.getElementById("recipe_list").innerHTML = out_text;
  }
}

function SubmitClicked() {
  var rec_name = document.getElementById("rec_name").value;
 // var rec_instrns = document.getElementById("rec_instrns").value;
  recipes.push(rec_name);
  showRecipes();
//  document.getElementById("message").innerHTML = rec_name;
//  alert(rec_name);
//  alert(recipes);
}

function AddRecipeClicked() {
//  document.getElementById("message").innerHTML = "Button Clicked";
  document.getElementById("add_recipe").style.visibility = "hidden";
  showForm();
  
  document.getElementById("submit").onclick = function(){SubmitClicked()};
}

function App() {
  showRecipes();
  hideForm();
  document.getElementById("add_recipe").onclick = function(){AddRecipeClicked()};
 
  return (
    <div>
	<h1 className="doNotRemoveMe">Hello world.</h1>
     {/* ^ Do not remove this element ^ */}
	</div>
   );
}

export default App;
