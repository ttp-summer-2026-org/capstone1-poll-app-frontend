import { useState } from "react";
function VoteForm({options, onVote}){
    const [selectedOptionId , setSelectedOptionId] = useState(null)
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (selectedOptionId === null){
            alert('Please select an option before voting')
            return
        }
        onVote(selectedOptionId)
    }
    return  (
        <form className="card" onSubmit={handleSubmit}>
            <div className="options-panel">
                {options.map((opt)=>(
                    <label
                    key = {opt.id}
                    className={`option-row${selectedOptionId === opt.id ? " is-selected" : ""}`}>
                        <input type="radio"
                        name = "poll-option"
                        value ={opt.id}
                        checked = {selectedOptionId === opt.id}
                        onChange={()=>setSelectedOptionId(opt.id)}
                        />
                        <span className="option-radio" />
                        <span>{opt.text}</span>
                    </label>

                ))}
            </div>
            <button type="submit" className="btn btn-primary">Submit Vote</button>
        </form>
    )

}
export default VoteForm
