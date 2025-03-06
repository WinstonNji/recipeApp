import { useContext } from "react"

const  DisplayRecipe = () =>{

    return (
        // Container
        <div className="grid grid-cols-2 gap-5 p-6 md:grid-cols-3"> 
            {/* Individual Card */}
            <div className="bg-white p-4 rounded-md hover:shadow-md hover:shadow-purple-300 duration-100 ease-in-out">
                <img src="" alt="" />
                <h2 className="font-bold text-center">Shrimp Creole</h2>
                <p className="font-semibold text-center">Ingredients</p>
                    {/* Ingrediends */}
                    <ul className="text-center">
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                <p className="font-semibold text-center">Instructions</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non fuga consectetur voluptas dolorem deserunt. Architecto autem recusandae atque voluptatem laborum?</p>
            </div>

            <div className="bg-white p-4 rounded-md">
                <img src="" alt="" />
                <h2 className="font-bold text-center">Shrimp Creole</h2>
                <p className="font-semibold text-center">Ingredients</p>
                    {/* Ingrediends */}
                    <ul className="text-center">
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                <p className="font-semibold text-center">Instructions</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non fuga consectetur voluptas dolorem deserunt. Architecto autem recusandae atque voluptatem laborum?</p>
            </div>

            <div className="bg-white p-4 rounded-md">
                <img src="" alt="" />
                <h2 className="font-bold text-center">Shrimp Creole</h2>
                <p className="font-semibold text-center">Ingredients</p>
                    {/* Ingrediends */}
                    <ul className="text-center">
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                <p className="font-semibold text-center">Instructions</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non fuga consectetur voluptas dolorem deserunt. Architecto autem recusandae atque voluptatem laborum?</p>
            </div>
        </div>
    )
}

export default DisplayRecipe