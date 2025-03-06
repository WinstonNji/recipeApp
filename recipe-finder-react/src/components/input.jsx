import { createContext, useEffect, useState } from "react"

export const InputRecipeManager = createContext()

function InputRecipe({children}){

    const [recipe,setUserRecipe] = useState("")

    // useEffect(() => {
    //     const url = 'https://food-recipes-with-images.p.rapidapi.com/?q=chicken%20soup';
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'x-rapidapi-key': '13e4d0dc40mshe0d1dec347251d5p134e04jsn3e8189f3e93c',
    //             'x-rapidapi-host': 'food-recipes-with-images.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         const response = await fetch(url, options);
    //         const result = await response.text();
    //         console.log(result);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },[])


    const searchTransaction = (event) => {
        event.preventDefault()
        setUserRecipe(event.target.value)
    }

    return (
        <div>
            <form onSubmit={searchTransaction} action="">
                <input type="text"
                    placeholder="Enter a recipe or an Ingredient" value={recipe}
                />
                <button type="submit">Search</button>
            </form>
            {children}
        </div>

        
    )
}

export default InputRecipe