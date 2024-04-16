import React from 'react'
import  "./eventListModule.css"
export const EvenLists = ({ events, deleteClick }) => {
    return (
        <div>
                {events.length === 0 && <h3>not content yet</h3>}
                {events.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <h2>{item.title}</h2>
                            <button onClick={() => deleteClick(item.id)} className="card-btn">delete</button>
                        </div>
                    )
                })}
        </div>
    )
}


