import React, {useState} from 'react';
import './toggleButton.css';

function ToggleButton() {

  const [night, setNight] = useState(false);

  function handleClick(e) {
    setNight(!night);
    console.log(night);
  }

  return(
    <div className="toggle-wrapper">
      <div className="toggle normal">
        <input value={night} id="normal" type="checkbox" onClick={handleClick} />
        <label className="toggle-item" htmlFor="normal" />
      </div>
    </div>);
}

export default ToggleButton;