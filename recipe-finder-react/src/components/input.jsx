import { createContext, useEffect, useState } from "react"

export const InputRecipeManager = createContext()

function InputRecipe({children}){

    const [recipe,setUserRecipe] = useState("")
    const [recipeArr, setRecipeArr] = useState([])

    const fetchRecipes = async (query) => {
        const url = `https://food-recipes-with-images.p.rapidapi.com/?q=${query}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '13e4d0dc40mshe0d1dec347251d5p134e04jsn3e8189f3e93c',
                'x-rapidapi-host': 'food-recipes-with-images.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    const handleRecipeChange = (event) => {
        let rcp = event.target.value 
        rcp = rcp.trim()
        setUserRecipe(rcp)
    }

    const searchTransaction = (event) => {
        event.preventDefault()
        if(recipe){
            fetchRecipes(recipe)
        }else{
            alert("Please enter a recipe or ingredient!")
        }
    }

    return (
        <InputRecipeManager.Provider value={recipeArr}>
            <div className="flex justify-center">
                <form className="flex relative bg-white w-1/2 rounded-md shadow-xl" onSubmit={searchTransaction} action="">
                    <input 
                        className="p-2 w-4/5 focus:outline-none rounded-md "
                        type="text"
                        placeholder="Enter a recipe or an Ingredient"
                        value={recipe} 
                        onChange={handleRecipeChange}
                    />
                    <button 
                        className="absolute right-0 top-[50%] -translate-y-1/2 bg-purple-400 p-2 font-bold hover:bg-purple-600 hover:text-white duration-200 ease-in-out rounded-r-sm" type="submit">Search</button>
                </form>
            </div>
            {children}
        </InputRecipeManager.Provider>

        
    )
}

export default InputRecipe