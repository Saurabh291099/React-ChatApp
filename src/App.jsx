
import './App.css'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'
import './index.css'

function App() {

  return (
    <>

      <div class="grid grid-cols-12 gap-4 ">
        <div class="col-span-12 md:col-span-3">
          <Sidebar />
        </div>
        <div class="col-span-12 md:col-span-9">
          <Chat />
        </div>

      </div>
    </>
  )
}

export default App
