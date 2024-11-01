import React, {useState} from 'react'

const App = () => {
  let [counter, setCounter] = useState(5);
  const update = () => {
    setCounter(counter+1);
  } 

  const decrease = () => {
    setCounter(counter-1);
  }
  return (
    <div>
      <p>ลูกชิ้นย่าง</p>
      <p>ราคาไม้ละ {counter*2} บาท</p>
      <button onClick={update}>+</button>
      <button onClick={decrease}>-</button>
      <p>5ไม้ {counter*5}บาท</p>
      <p>10ไม้ {counter*10}บาท</p>
      <p>20ไม้ {counter*20}บาท</p>
      <p>30ไม้ {counter*30}บาท</p>
    </div>
  )
}

export default App