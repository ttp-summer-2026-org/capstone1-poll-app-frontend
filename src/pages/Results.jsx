import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPoll } from "../api/polls";

function Results() {
    const { id } = useParams();
    const [poll, setPoll] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getPoll(id)
            .then(setPoll)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Loading results...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!poll) return <p>Poll not found.</p>;

    const totalVotes = poll.options.reduce((sum, opt) => sum + opt.votes, 0);
    const maxVotes = Math.max(...poll.options.map((opt) => opt.votes));

    return (
        <div>
            <h1 className="page-title">{poll.title} - Results</h1>
            <ul className="results-list">
                {poll.options.map((opt) => (
                    <li
                        key={opt.id}
                        className={opt.votes === maxVotes ? "winner" : ""}
                    >
                        <span>{opt.text}</span>;<span>{opt.votes}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Results;
