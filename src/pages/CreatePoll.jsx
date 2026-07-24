import { useNavigate } from "react-router-dom";
import PollForm from "../components/PollForm.jsx"
import { createPoll } from "../api/polls.js"
function CreatePoll() {
    const navigate = useNavigate()
    const handleCreatePoll = async (pollData) => {
    try {
      const newPoll = await createPoll(pollData)
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
