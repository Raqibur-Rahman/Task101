
import './App.css'
import Incomplete from './columns/TaskConditions/Incomplete'
import Doing from './columns/TaskConditions/Doing'
import ToDo from './columns/TaskConditions/ToDo'
import UnderReview from './columns/TaskConditions/UnderReview'
import Completed from './columns/TaskConditions/Completed'



function App() {


  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-5 gap-96 overflow-x-auto">
        <div className="w-96 p-3 overflow-x-auto m-3">
          <Incomplete />
        </div>
        <div className="w-96 p-3 overflow-x-auto m-3">
          <ToDo />
        </div>
        <div className="w-96 p-3 overflow-x-auto m-3">
          <Doing />
        </div>
        <div className="w-96 p-3 overflow-x-auto m-3">
          <UnderReview />
        </div>
        <div className="w-96 p-3 overflow-x-auto m-3">
          <Completed />
        </div>
      </div>
    </div>

  )
}

export default App
