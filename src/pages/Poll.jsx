import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VoteForm from "../components/VoteForm.jsx";

const FALLBACK_POLL = {
    title: 'Best pizza topping?',
    description: 'Vote for your favorite',
    options: [
    { id: 1, text: 'Pepperoni' },
    { id: 2, text: 'Mushroom' },
    { id: 3, text: 'Pineapple' },
    ],
}

function Poll() {
    const { id } = useParams()
    const navigate = useNavigate()
      // TODO: replace with real fetch to GET /polls/:id once backend is ready
    const [poll] = useState(() => {
        const storedPolls = JSON.parse(localStorage.getItem('polls') || '{}')
        const stored = storedPolls[id]
        return stored ? { id, ...stored } : { id, ...FALLBACK_POLL }
    })
    const handleVote = (optionId)=>{

        // TODO: POST /polls/:id/vote once backend is ready
        console.log('voted for option', optionId)
        navigate(`/poll/${poll.id}/results`)
    }
    return (
        <div className="page-shell">
            <span className="eyebrow">Cast Your Vote</span>
            <h1 className="page-title">{poll.title}</h1>
            {poll.description && <p style={{ marginBottom: 8 }}>{poll.description}</p>}
            <VoteForm
            options = {poll.options}
            onVote = {handleVote}/>
        </div>
    );
}

export default Poll;
