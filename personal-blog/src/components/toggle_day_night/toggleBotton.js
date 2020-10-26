import React, {useState, useContext} from 'react';
import './toggleButton.css';
import { AppContext } from "../themeProvider-component/AppTheme";

function ToggleButton() {

  const [night, setNight] = useState(false);

  const { themeMode, setThemeMode } = useContext(AppContext);

  function handleClick(e) {
    setNight(() => {
      if(night===false) {
        return true;
      } else {
        return false;
      }
    });

    if(night){
      setThemeMode("")
    }else{
      setThemeMode("dark")
    }
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