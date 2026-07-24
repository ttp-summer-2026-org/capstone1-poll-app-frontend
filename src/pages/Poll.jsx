import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VoteForm from "../components/VoteForm.jsx";
import { getPoll, submitVote } from "../api/polls.js";

function Poll() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [poll, setPoll] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        let cancelled = false
        getPoll(id)
            .then((data) => {
                if (!cancelled) setPoll(data)
            })
            .catch((err) => {
                console.error('Failed to load poll:', err)
                if (!cancelled) setError('Could not load this poll.')
            })
        return () => { cancelled = true }
    }, [id])

    const handleVote = async (optionId) => {
        try {
            await submitVote(id, optionId)
            navigate(`/poll/${id}/results`)
        } catch (err) {
            console.error('Failed to submit vote:', err)
            alert('Something went wrong submitting your vote.')
        }
    }

    if (error) {
        return (
            <div className="page-shell">
                <p>{error}</p>
            </div>
        )
    }

    if (!poll) {
        return (
            <div className="page-shell">
                <p>Loading poll...</p>
            </div>
        )
    }

    return (
        <div className="page-shell">
            <span className="eyebrow">Cast Your Vote</span>
            <h1 className="page-title">{poll.title}</h1>
            {poll.description && <p style={{ marginBottom: 8 }}>{poll.description}</p>}
            <VoteForm
            options = {poll.Options}
            onVote = {handleVote}/>
        </div>
    );
}

export default Poll;
