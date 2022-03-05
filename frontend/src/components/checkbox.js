import React,{useState} from 'react'

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

const handleOnChange = () => {
  setIsChecked(!isChecked);
};
   
            

return (
  <div className="App">
    Select your pizza topping:
    <div className="topping">
      <input
        type="checkbox"
        id="topping"
        name="topping"
        value="Paneer"
        checked={isChecked}
        onChange={handleOnChange}
      />
      Paneer
    </div>
    <div className="result">
      Above checkbox is {isChecked ? "checked" : "un-checked"}.
    </div>
  </div>
);
}
export default Checkbox
