import { useState } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage('')
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Please enter more than 10 symbols')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }
    }
  }

  return <Card>
    <form onSubmit={handleSubmit}>
      <h2>How would you rate service with us?</h2>
      <RatingSelect select={(rating) => setRating(rating)} />
      <div className="input-group">
        <input 
          onChange={handleTextChange} 
          type="text" 
          placeholder="Write a review"
          value={text} />
        <Button type="submit" isDisabled={btnDisabled}>Send</Button>
      </div>
      {
        message && <div className="message">{message}</div>
      }
    </form>
  </Card>
}

export default FeedbackForm