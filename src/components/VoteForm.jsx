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
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                {options.map((opt)=>(
                    <label 
                    key = {opt.id}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <input type="radio"
                        name = "poll-option" 
                        value ={opt.id}
                        checked = {selectedOptionId === opt.id}
                        onChange={()=>setSelectedOptionId(opt.id)}
                        />
                        {opt.text}
                    </label>

                ))}
            </div>
            <button type="submit" className="btn">Submit Vote</button>
        </form>
    )

}
export default VoteForm 
