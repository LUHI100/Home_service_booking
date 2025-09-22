"use client"

import { Button } from "@/components/ui/button"

interface ServiceFilterProps {
  categories: string[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export function ServiceFilter({ categories, selectedCategory, onCategoryChange }: ServiceFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        onClick={() => onCategoryChange(null)}
        className={
          selectedCategory === null ? "bg-blue-500 text-white" : "border-gray-300 text-gray-700 hover:bg-gray-50"
        }
      >
        All Services
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={
            selectedCategory === category ? "bg-blue-500 text-white" : "border-gray-300 text-gray-700 hover:bg-gray-50"
          }
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
