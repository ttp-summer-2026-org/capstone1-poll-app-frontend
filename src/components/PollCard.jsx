import { Link } from "react-router-dom";

function PollCard({ poll }) {
    return (
        <div className="poll-card">
            <h2>{poll.title}</h2>
            {poll.description && <p>{poll.description}</p>}
            <Link to={`/poll/${poll.id}`} className="btn">
                View Poll
            </Link>
        </div>
    );
}

export default PollCard;
