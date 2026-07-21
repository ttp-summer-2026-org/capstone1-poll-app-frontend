import { useState } from "react";
function PollForm({onSubmit}){
    const [title, setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [options , setOptions] = useState(['', ''])
    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit({title, description, options})
    }
    const handleOptionChange = (index,value) => 
    {
        const updatedOptions = [...options]
        updatedOptions[index] = value;
        setOptions(updatedOptions)
    }
    const addOption  = () => {
        setOptions([...options,""])
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className = "form-group">
                <label htmlFor="title">Poll Title</label>
                <input 
                id = "title"
                type = "text"
                value = {title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="eg. Easiest Programming Language?" />
            </div>

            <div className = "form-group">
                <label htmlFor="description"></label>
                <input type="text"
                id = "description"
                value = {description}
                onChange={(e)=>setDescription(e.target.value)}
                placeholder="Optional detail about your poll" />
            </div>
             <div className="form-group">
                <label>Options</label>
                {options.map((option,index)=>{
                    <input 
                    type="text"
                    key ={index} 
                    value={option} 
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Option ${index+1}`}   />
                })}
                <button type="button" className="btn" onClick={addOption}>Add Option</button>
             </div>
             <button type="submit" className="btn">Create Poll</button>
        </form>
        
    )

}
export default PollForm