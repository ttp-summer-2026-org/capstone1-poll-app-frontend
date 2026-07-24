import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PollCard from "../components/PollCard.jsx";

function Home() {
    const [polls, setPolls] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // TODO: Replace backend with API call
        setLoading(false); // remove once real fetch
    }, []);

    if (loading) return <p>Loading...</p>;

    // No Polls
    if (polls.length === 0) {
        return (
            <div>
                <h1 className="page-title">All Polls</h1>
                <p>
                    No Polls<Link to="/create">Create Polls</Link>
                </p>
            </div>
        );
    }

    return (
        <div>
            <h1 className="page-title">All Polls</h1>
            <div className="poll-list">
                {polls.map((poll) => (
                    <PollCard key={poll.id} poll={poll}></PollCard>
                ))}
            </div>
        </div>
    );
}

export default Home;
