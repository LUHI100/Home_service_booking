"use client"

import { Button } from "@/components/ui/button"

interface HeaderProps {
  onLogin: () => void
  onSignUp: () => void
  isAuthenticated?: boolean
  onLogout?: () => void
}

export function Header({ onLogin, onSignUp, isAuthenticated = false, onLogout }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-500">HomeService</h1>
        <div className="flex gap-3">
          {isAuthenticated ? (
            <Button
              variant="outline"
              onClick={onLogout}
              className="border-red-500 text-red-500 hover:bg-red-50 bg-transparent"
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                variant="outline"
                onClick={onLogin}
                className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
              >
                Login
              </Button>
              <Button onClick={onSignUp} className="bg-blue-500 hover:bg-blue-600 text-white">
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
