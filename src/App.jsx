
import './App.css'
import Incomplete from './columns/TaskConditions/Incomplete'
import Doing from './columns/TaskConditions/Doing'
import ToDo from './columns/TaskConditions/ToDo'
import UnderReview from './columns/TaskConditions/UnderReview'
import Completed from './columns/TaskConditions/Completed'



function App() {


  return (
    <div className="overflow-x-auto mt-0">
      <div className="grid grid-cols-5 gap-96 overflow-x-auto mt-0">
        <div className="w-96 p-3 overflow-x-auto ">
          <Incomplete />
        </div>
        <div className="w-96 p-3 overflow-x-auto ">
          <ToDo />
        </div>
        <div className="w-96 p-3 overflow-x-auto ">
          <Doing />
        </div>
        <div className="w-96 p-3 overflow-x-auto ">
          <UnderReview />
        </div>
        <div className="w-96 p-3 overflow-x-auto ">
          <Completed />
        </div>
      </div>
    </div>

  )
}

export default App
