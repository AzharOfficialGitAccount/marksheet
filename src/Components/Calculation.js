import React, { useState } from "react";
import './Marksheet.css'
function Marksheet() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [state, setState] = useState("");
  const [marks, setMarks] = useState({
    subject1: "",
    subject2: "",
    subject3: "",
    subject4: "",
    subject5: "",
  });
  console.log(marks);
  console.log('Test');
  console.log('Tes2');
  console.log('Tes3');
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleMarksChange = (event) => {
    const { name, value } = event.target;
    setMarks({
      ...marks,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const totalMarks =
      parseInt(marks.subject1) +
      parseInt(marks.subject2) +
      parseInt(marks.subject3) +
      parseInt(marks.subject4) +
      parseInt(marks.subject5);
    const percentage = (totalMarks / 500) * 100;
  };

  return (
    <form>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} placeholder="Your fist name.."  />
        </label>
      </div>
      <div>
      <label for="age" value={age} onChange={handleAgeChange}>Age:</label>
          <input type="text" id="age" class="age" placeholder="your age.."/>
          <label for="gender">Gender:</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          </div>
      <div>
        <label>
          Roll Number:
          <input type="text" value={rollNumber} onChange={handleRollNumberChange} placeholder="Your roll number.." />
        </label>
      </div>
      <div> 
        <label for="state" value={state} onChange={handleStateChange} >State:</label>
           <select id="state" name="state">
            <option value="Andhra Pradesh">Andhra Pradesh</option>
             <option value="Bengaluru">Bengaluru</option>
             <option value="Chhattisgarh">Chhattisgarh</option>
             <option value="Gujrat">Gujrat</option>
             <option value="Delhi">Delhi</option>
             <option value="Rajasthan">Rajasthan</option>
             <option value="Uttar Pradesh">Uttar Pradesh</option>
           </select>
      </div>
      <div>
        <label>
          Subject 1:
          <input type="text" name="subject1" value={marks.subject1} onChange={handleMarksChange} />
        </label>
      </div>
      <div>
        <label>
          Subject 2:
          <input type="text" name="subject2" value={marks.subject2} onChange={handleMarksChange} />
        </label>
      </div>
      <div>
        <label>
          Subject 3:
          <input type="text" name="subject3" value={marks.subject3} onChange={handleMarksChange} />
        </label>
      </div>
      <div>
        <label>
          Subject 4:
          <input type="text" name="subject4" value={marks.subject4} onChange={handleMarksChange} />
        </label>
      </div>
      <div>
        <label>
          Subject 5:
          <input type="text" name="subject5" value={marks.subject5} onChange={handleMarksChange} />
        </label>
      </div>
      <button id="btn" onSubmit={handleSubmit}>Result</button>
      </form>
  )
}

export default Marksheet;