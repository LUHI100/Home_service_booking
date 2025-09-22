"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"

interface AuthModalProps {
  type: "login" | "signup"
  onClose: () => void
  onSwitchMode: (mode: "login" | "signup") => void
  onSuccess?: () => void
}

export function AuthModal({ type, onClose, onSwitchMode, onSuccess }: AuthModalProps) {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "you@example.com",
    password: "••••••••",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle authentication logic here
    console.log("Auth submitted:", { type, formData })
    if (onSuccess) {
      onSuccess()
    }
    onClose()
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md bg-white">
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h1 className="text-2xl font-bold text-blue-500">HomeService</h1>
            <div className="flex gap-3 mt-4">
              <Button
                variant={type === "login" ? "default" : "outline"}
                onClick={() => onSwitchMode("login")}
                className={type === "login" ? "bg-blue-500 text-white" : "border-blue-500 text-blue-500"}
              >
                Login
              </Button>
              <Button
                variant={type === "signup" ? "default" : "outline"}
                onClick={() => onSwitchMode("signup")}
                className={type === "signup" ? "bg-blue-500 text-white" : "border-blue-500 text-blue-500"}
              >
                Sign Up
              </Button>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          {type === "signup" ? (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Create your account</h2>
              <p className="text-gray-600 mb-6">It only takes a minute.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700">
                      First name
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700">
                      Last name
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="text-gray-700">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-6">
                  Create Account
                </Button>
              </form>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h2>
              <p className="text-gray-600 mb-6">Sign in to your account</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="loginEmail" className="text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="loginEmail"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="loginPassword" className="text-gray-700">
                    Password
                  </Label>
                  <Input
                    id="loginPassword"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-6">
                  Sign In
                </Button>
              </form>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
