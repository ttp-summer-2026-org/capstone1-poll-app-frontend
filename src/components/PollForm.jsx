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
        <form className="card" onSubmit={handleSubmit}>
            <h2>New Poll</h2>
            <div className = "form-group">
                <label htmlFor="title">Poll Title</label>
                <input
                className="input"
                id = "title"
                type = "text"
                value = {title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="eg. Easiest Programming Language?" />
            </div>

            <div className = "form-group">
                <label htmlFor="description">Description</label>
                <input
                className="input"
                type="text"
                id = "description"
                value = {description}
                onChange={(e)=>setDescription(e.target.value)}
                placeholder="Optional detail about your poll" />
            </div>
             <div className="form-group">
                <label>Options</label>
                <div className="options-editor">
                    {options.map((option,index)=>(
                        <input
                        className="input"
                        type="text"
                        key ={index}
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        placeholder={`Option ${index+1}`}   />
                    ))}
                </div>
                <button type="button" className="btn btn-secondary" onClick={addOption}>Add Option</button>
             </div>
             <button type="submit" className="btn btn-primary">Create Poll</button>
        </form>

    )

}
export default PollForm