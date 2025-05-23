import { useState } from 'react';
import './App.css';
import useTime from './hooks/useTime';

const App = () => {
  const [update, setUpdate] = useState<number>(0)
  
  const day = useTime('day', update);
  const hour = useTime('hour', update);
  const minutes = useTime('minutes', update)
  const seconds = useTime('seconds', update)

  return (
    <div>
      <h2>Day: {day}</h2>
      <h2>Hour: {hour}</h2>
      <h2>Minutes: {minutes}</h2>
      <h2>Seconds: {seconds}</h2>
      <button onClick={() => setUpdate(num => num + 1)}>Update</button>
    </div>
  )
}

export default App;