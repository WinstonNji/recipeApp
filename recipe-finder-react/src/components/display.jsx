import { useContext } from "react"
import { InputRecipeManager } from "./input"

const  DisplayRecipe = () =>{

    const {recipeArr} = useContext(InputRecipeManager)

    return (
        // Container
        <div className="grid grid-cols-2 gap-5 p-6 md:grid-cols-3"> 
            {/* Individual Card */}
            {recipeArr.map((recipe,index) => (
                <div key={index} 
                    className="bg-white p-4 rounded-md hover:shadow-sm hover:bg-purple-300 hover:shadow-white duration-200 ease-in-out flex flex-col hover:duration-200">
                    <img src={recipe.image} alt={recipe.title} />

                    <div className="min-h-16">
                        <h2 className="font-bold text-center">{recipe.title}</h2>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                        <div>
                            <p 
                            className="font-semibold text-center mb-3 underline ">Ingredients</p>
                            {/* Ingrediends */}
                            {displayIngredients(recipe.ingredients)}
                        </div>
                    
                        <div>
                            <p className="font-semibold text-center mb-3 underline decoration-dashed ">Instructions</p>
                            <p className="max-h-36 overflow-y-auto p-2 box-border 
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-orange-300
                            [&::-webkit-scrollbar-thumb]:rounded-full
                            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">{bold(recipe.instructions)}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DisplayRecipe

const displayIngredients = (ingredientArr) => {
    return (
        <ul className="text-center max-h-32 overflow-y-scroll p-3  
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-orange-300
        [&::-webkit-scrollbar-thumb]:rounded-full
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            {ingredientArr.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
        </ul>
    )
}

const bold = (ingredient) => {
    const words = ingredient.split(' ')

    return words.map((word) => {
        const isBold = isNaN(word) === false || ["cups", "tsp", "cup", "minutes", "minute"].includes(word)

        return (
            <span className={isBold ? 'font-semibold' : 'font-normal'}>{word}{' '}</span>
        )
    })
}


