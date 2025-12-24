import { useState } from "react"
import { signUp } from "../services/authApi"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await signUp(email, password)
    navigate("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-8 rounded-xl w-80 space-y-4"
      >
        <h1 className="text-xl font-bold text-white">Register</h1>

        <input
          className="w-full p-2 rounded bg-slate-700 text-white"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-2 rounded bg-slate-700 text-white"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="w-full bg-indigo-600 py-2 rounded text-white">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
