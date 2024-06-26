import { FaTimes } from 'react-icons/fa'
import Card from "./shared/Card"

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card reverse={true}>
      <div className="number">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)}>
        <FaTimes />
      </button>
      <p className="text">{item.text}</p>
    </Card>
  )
}

export default FeedbackItem