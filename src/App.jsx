import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData.js"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    } 
  }
  return (
    <>
      <Header />
      <div className='text-5xl'>App</div>
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </>
  )
}

export default App
