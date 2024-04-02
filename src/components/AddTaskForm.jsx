import React, { useState } from "react";

function AddTaskForm({addTask}) {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim() !== '') {
            addTask(text);
            setText('');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Agregar nueva tarea"
            />
            <button type="submit">Agregar</button>

        </form>
    );
}
export default AddTaskForm;