import { useState } from 'react'
import './App.css'
import { EvenLists } from './evenLists';
import Modal from './Modal';

function App() {
  const [showModal, setShowModal] = useState(true)
  const [name, setName] = useState('qurbonboyev');
  const [showContent, SetShowContent] = useState(true)
  const [events, setEvents] = useState([
    { title: "sardor bitrhday party", id: 1 },
    { title: "sardor bitrhday", id: 2 },
    { title: "sardor qurbonboyev", id: 4 }
  ])
  const handleCLick = () => {
    setName('Sardor')
  }
  
  // delete items
  const deleteClick = (id) => {
    const filteredData = events.filter((event) => {
      return event.id !== id
    })
    setEvents(filteredData)
  }

  //hide modal
  const closeModal = () =>{
    setShowModal(false)
  }

  const addshowModal = () =>{
    setShowModal(true)
  }

  return (
    <div>
      <h1>my name is {name}</h1>
      <button onClick={handleCLick}>change name</button>
      <br />
      <hr />
      {showContent && <button onClick={() => SetShowContent(false)}>hide content</button>}
      {!showContent && <button onClick={() => SetShowContent(true)}>show content</button>}
      {showContent && <EvenLists events={events} deleteClick={deleteClick}/>}
   {showModal && <Modal closeModal={closeModal}>
      <h2 style={{textTransform: 'capitalize',fontSize: '30px', font: 'bold'}}>sardor qurbonboyev</h2>
            <p style={{ lineHeight: "30px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nos hic nostrum nisi aperiam inventore fuga accusantium itaque architecto consequuntur a.</p>
      </Modal>} 
      <br />
      <br />
      <button onClick={addshowModal}>show modal</button>
    </div>
  )
}

export default App
