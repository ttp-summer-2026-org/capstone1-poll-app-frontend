import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PollForm from "../components/PollForm.jsx"
function CreatePoll() {
    const navigate = useNavigate()
    const handleCreatePoll = async (pollData) => {
    try {
      // TODO: swap for real API call once backend route is ready
      // const res = await fetch('/api/polls', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(pollData),
      // })
      // const newPoll = await res.json()

      // mock response for now
      const newPoll = {
        id: Date.now(),
        title: pollData.title,
        description: pollData.description,
        options: pollData.options
          .map((text) => text.trim())
          .filter((text) => text !== '')
          .map((text, index) => ({ id: index + 1, text })),
      }

      const storedPolls = JSON.parse(localStorage.getItem('polls') || '{}')
      storedPolls[newPoll.id] = newPoll
      localStorage.setItem('polls', JSON.stringify(storedPolls))

      navigate(`/poll/${newPoll.id}`)
    } catch (err) {
      console.error('Failed to create poll:', err)
      alert('Something went wrong creating the poll.')
    }
  }
    return (
        <div className="page-shell">
            <span className="eyebrow">New Poll</span>
            <h1 className="page-title">Create a Poll</h1>
            <PollForm onSubmit={handleCreatePoll}/>
        </div>
    );
}

export default CreatePoll;
