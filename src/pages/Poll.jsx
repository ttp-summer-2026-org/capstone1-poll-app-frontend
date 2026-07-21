import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VoteForm from "../components/VoteForm";
function Poll() {
    const {id} = param.id
    const navigate = useNavigate()
      // TODO: replace with real fetch to GET /polls/:id once backend is ready
    const [poll] = useState({
        id,
        title: 'Best pizza topping?',
        description: 'Vote for your favorite',
        options: [
        { id: 1, text: 'Pepperoni' },
        { id: 2, text: 'Mushroom' },
        { id: 3, text: 'Pineapple' },
        ],
    })
    const handleVote = (optionId)=>{

        // TODO: POST /polls/:id/vote once backend is ready
        console.log('voted for option', optionId)
        navigate(`/polls/${poll.id}/results`)
    }
    return (
        <div>
            <h1>Poll</h1>
            <VoteForm 
            options = {Poll.options}
            onVote = {handleVote}/>
        </div>
    );
}

export default Poll;
