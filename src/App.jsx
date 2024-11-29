import { questions } from "./assets/data"
import Header from "./components/Header"
import { useState } from "react"

function App() {

  const [selected, setSelected] = useState(null)

  const handleSelected = (id) => {

    setSelected(prev => prev == id ? null : id)
  }

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="bg-white w-[90%] max-w-[500px] p-6 rounded-lg">
        <Header />
        <div>
          {questions.map((q)=>(
             <div key={q.id} className="p-2  border-b-2 last:border-b-0 border-gray-100">
                <div onClick={()=>handleSelected(q.id)} className="flex mb-2 justify-between items-cente">
                  <h4 className="font-bold text-sm">{q.quest}</h4>
                 {q.id == selected ?  <img src="/images/icon-minus.svg" alt="" /> :
                  <img src="/images/icon-plus.svg" alt="" /> }
                </div>

                 <p className={`text-sm transition-all overflow-hidden ease-in-out duration-500 ${q.id == selected ? 'max-h-40' : 'max-h-0'}`}>
                  {q.ans}
                </p> 
             </div>
          ))}
        </div>
      </div>
    
  </main>
  )
}

export default App
