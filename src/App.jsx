import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData.js"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header />
      <div className='text-5xl'>App</div>
      <FeedbackList feedback={feedback} />
    </>
  )
}

export default App
