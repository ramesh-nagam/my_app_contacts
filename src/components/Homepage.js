import React, { useState, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'

function sum(a, b) {
  for (let i = 0; i < 100000000; i++) {
    //console
  }
  return parseInt(a) + parseInt(b)
}
export default function Homepage() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [sumValue, setSum] = useState(0);
  const makeSum = useMemo(() => {
    return sum(a, b)
  }, [a, b])
  const makeSumFunction = useCallback((c) => {
    return parseInt(a) + parseInt(b) + parseInt(c)
  }, [a, b])
  return (
    <div className='text-center container mt-5 pt-5'>
      <img
        src={"https://icon-library.com/images/contact-app-icon/contact-app-icon-3.jpg"}
        className="contacts-logo"
        alt="contacts"
      />
      <h1>Contacts Application</h1>
      <Link to="/contacts" className='btn btn-primary'>Get Started</Link>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      <button>{sumValue}</button>
      <button onClick={() => setSum(makeSumFunction(10))}>Make Sum</button>
    </div>
  )
}
