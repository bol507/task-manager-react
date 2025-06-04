import { useState } from "react"
import { AuthLayout } from "../../../shared/layouts/auth-layout"
import { useNavigate } from "react-router"


const SignUpPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          username
        }),
      })
      if (!response.ok) {
        const error = await response.json()
        setError(error.message)
      } else {
        navigate('/dashboard')
      }
    } catch  {
      setError('Something went wrong')
    }
  }
  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-black">Welcome back</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">Please enter your details to log in</p>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <input 
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-lg p-2 border border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg p-2 border border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg p-2 border border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:outline-none"
          >
            Sign in
          </button>
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </form>
      </div>
    </AuthLayout>
  )
}

export default SignUpPage