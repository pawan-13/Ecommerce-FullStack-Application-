'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Login() {
  const [login, setLogin] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [error, setError] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [isSignup, setIsSignup] = useState(false)

  const newError = {
    username: "",
    email: "",
    password: ""
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLogin({
      ...login,
      [name]: value
    })
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { username, email, password } = login
    let flag = true

    if (isSignup && (!username || username.trim() === "")) {
      newError.username = "Username is required"
      flag = false
    }

    if (!email || email.trim() === "") {
      newError.email = "Email is required"
      flag = false
    }
    
    if (!password || password.trim() === "") {
      newError.password = "Password is required"
      flag = false
    } else if (password.length < 8) {
      newError.password = "Password must be at least 8 characters long"
      flag = false
    }

    setError(newError)

    if (flag) {
      if(isSignup) {
        alert("Signup successful")
        setLogin({
        username: "",
        email: "",
        password: ""
      })
      }
      else{
        alert("Login successful")
        setLogin({
        username: "",
        email: "",
        password: ""
      })
      }
    }
  }
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{isSignup ? "Sign up to your account" : "Login to your account"}</CardTitle>
        <CardDescription>
          {isSignup ? "Enter your email below to sign up to your account" : "Enter your email below to login to your account"}
        </CardDescription>
        <CardAction>
          <Button variant="link" onClick={() => {setIsSignup(!isSignup); setError({username: "", email: "", password: ""})}}>{isSignup ? "Login" : "Sign Up"}</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            {
              isSignup && (
                <div className="grid gap-2">
                  <Label htmlFor="username">User name</Label>
                  <Input
                    id="username"
                    type="text"
                    name="username"
                    value={login.username}
                    placeholder="Enter your username"
                    onChange={handleChange}
                  />
                  {error.username && <span className="text-red-500 text-base">{error.username}</span>}
                </div>
              )
            }
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={login.email}
                placeholder="m@example.com"
                onChange={handleChange}
              />
              {error.email && <span className="text-red-500 text-base">{error.email}</span>}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input type="password" id="password" name="password" value={login.password} onChange={handleChange} />
              {error.password && <span className="text-red-500 text-base">{error.password}</span>}
            </div>
          </div>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              {isSignup ? "Sign Up" : "Login"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}
