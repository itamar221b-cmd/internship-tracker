"use client"
import { useEffect, useState } from "react"

export default function Dashboard() {
  const [email, setEmail] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem("email")
    if (saved) setEmail(saved)
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>דשבורד התמחות</h1>
      <p>מחובר כ: {email}</p>

      <div style={{ marginTop: 30 }}>
        <a href="/hours" style={{ display: "block", marginBottom: 10 }}>
          ⏱ הזנת שעות הדרכה
        </a>

        <a href="/cases" style={{ display: "block", marginBottom: 10 }}>
          📁 הזנת מקרים טיפוליים
        </a>

        <a href="/diagnostics" style={{ display: "block", marginBottom: 10 }}>
          🧠 הזנת אבחונים
        </a>

        <a href="/courses" style={{ display: "block", marginBottom: 10 }}>
          🎓 הזנת השתלמויות
        </a>
      </div>
    </div>
  )
}
