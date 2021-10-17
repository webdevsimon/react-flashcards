import './ToggleSwitch.css';

const ToggleSwitch = ({value, handleChange}) => {
  return ( 
    <label className="switch">
      <input type="checkbox" checked={value} onChange={() => handleChange(!value)} />
      <span className="slider round"></span>
    </label>
  );
}
 
export default ToggleSwitch;