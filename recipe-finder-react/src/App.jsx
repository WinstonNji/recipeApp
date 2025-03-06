import InputRecipe from "./components/input"
import DisplayRecipe from "./components/display"


export default function App() {
  return (
    <div>
      <h2>Recipe Finder</h2>
      <InputRecipe>
        <DisplayRecipe />
      </InputRecipe>
    </div>
    
    
  )
}