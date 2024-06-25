import { useState } from "react";

function FeedbackItem({item}) {
  return (
    <div className="text-2xl rounded-md bg-slate-50 p-5 mt-6 inline-block">
      <div className="number">{item.rating}</div>
      <p className="text">Some text with feedback</p>
    </div>
  )
}

export default FeedbackItem