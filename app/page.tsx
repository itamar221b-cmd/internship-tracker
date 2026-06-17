"use client"
import { useState, useEffect } from "react"

export default function Home() {
  const [email, setEmail] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem("email")
    if (saved) setEmail(saved)
  }, [])

  const handleStart = () => {
    if (!email) return
    localStorage.setItem("email", email)
    window.location.href = "/dashboard"
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>מעקב התמחות בפסיכולוגיה חינוכית</h1>
      <p>הזן מייל כדי להתחיל</p>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        style={{ padding: 10, width: "100%", marginTop: 10 }}
      />

      <button
        onClick={handleStart}
        style={{
          marginTop: 20,
          padding: 10,
          background: "black",
          color: "white",
          width: "100%"
        }}
      >
        התחל
      </button>
    </div>
  )
}
