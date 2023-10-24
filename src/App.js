import './App.css';
import React, { useState, useEffect} from "react"
import axios from "axios"
import DateTimePicker from "react-datetime-picker"

function App() {

  const [reminderMsg, setReminderMsg] = useState("");
  const [reminAt, setReminAt] = useState();

  const addReminder = () =>{

  }

  return (
    <div className="App">
      <div className ="homepage">
        <div className ="homepage_header">
          <h1>Remine Me 🤷‍♀️</h1>

          <input type='text' placeholder='Reminder notes here...' value={reminderMsg} onChange={e => setReminderMsg} />

          <DateTimePicker 
            value={reminAt}
            onChange={setReminAt}
            minDate={new Date()}
            minutePlaceholder='mm'
            hourPlaceholder='hh'
            dayPlaceholder='DD'
            monthPlaceholder='MM'
            yearPlaceholder='YYYY'
          />

          <div className='button' onClick={addReminder}>Add Reminder</div>
        </div>
        <div className='homepage_body'>
          <div className='reminder_card'>
            <h2>Reminder Note </h2>
            <h3>Remind me at: </h3>
            <p>26/05/2023 @ 02:30</p>
            <div className='button'>Delete</div>
          </div>

          <div className='reminder_card'>
            <h2>Reminder Note </h2>
            <h3>Remind me at: </h3>
            <p>26/05/2023 @ 02:30</p>
            <div className='button'>Delete</div>
          </div>

          <div className='reminder_card'>
            <h2>Reminder Note </h2>
            <h3>Remind me at: </h3>
            <p>26/05/2023 @ 02:30</p>
            <div className='button'>Delete</div>
          </div>

          <div className='reminder_card'>
            <h2>Reminder Note </h2>
            <h3>Remind me at: </h3>
            <p>26/05/2023 @ 02:30</p>
            <div className='button'>Delete</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
