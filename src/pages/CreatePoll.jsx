import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PollForm from "./components/PollForm.jsx"
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
      const newPoll = { id: Date.now(), ...pollData }

      navigate(`/polls/${newPoll.id}`)
    } catch (err) {
      console.error('Failed to create poll:', err)
      alert('Something went wrong creating the poll.')
    }
  }
    return (
        <div>
            <h1 className="page-title">Create a Poll</h1>
            <PollForm onSubmit={handleCreatePoll}/>
        </div>
    );
}

export default CreatePoll;
