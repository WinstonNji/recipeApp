import InputRecipe from "./components/input"
import DisplayRecipe from "./components/display"


export default function App() {
  return (
    <div className="bg-orange-500 min-h-[100vh] flex flex-col justify-center content-center gap-5 overflow-y-auto">
      <h1 className="text-3xl font-semibold text-center">Recipe Finder</h1>

      
        <InputRecipe>
          <div className=" ">
            <DisplayRecipe />
          </div>
          
        </InputRecipe>
      
      
    </div>
    
    
  )
}