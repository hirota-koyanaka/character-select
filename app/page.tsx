"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface Character {
  id: number
  name: string
  emoji: string
  color: string
}

const characters: Character[] = [
  { id: 1, name: "Fire Dragon", emoji: "🐉", color: "bg-red-500" },
  { id: 2, name: "Thunder Cat", emoji: "⚡", color: "bg-yellow-500" },
  { id: 3, name: "Ice Bear", emoji: "🐻‍❄️", color: "bg-blue-500" },
  { id: 4, name: "Forest Wolf", emoji: "🐺", color: "bg-green-500" },
  { id: 5, name: "Space Alien", emoji: "👽", color: "bg-purple-500" },
  { id: 6, name: "Ninja Warrior", emoji: "🥷", color: "bg-gray-800" },
  { id: 7, name: "Magic Wizard", emoji: "🧙‍♂️", color: "bg-indigo-500" },
  { id: 8, name: "Robot Fighter", emoji: "🤖", color: "bg-cyan-500" },
  { id: 9, name: "Phoenix Bird", emoji: "🔥", color: "bg-orange-500" },
  { id: 10, name: "Ocean Shark", emoji: "🦈", color: "bg-blue-600" },
  { id: 11, name: "Ghost Spirit", emoji: "👻", color: "bg-gray-300" },
  { id: 12, name: "Lightning Bolt", emoji: "⚡", color: "bg-yellow-400" },
  { id: 13, name: "Crystal Gem", emoji: "💎", color: "bg-pink-500" },
  { id: 14, name: "Steel Knight", emoji: "⚔️", color: "bg-gray-600" },
  { id: 15, name: "Flame Demon", emoji: "😈", color: "bg-red-600" },
  { id: 16, name: "Star Guardian", emoji: "⭐", color: "bg-yellow-300" },
  { id: 17, name: "Shadow Bat", emoji: "🦇", color: "bg-purple-800" },
  { id: 18, name: "Earth Turtle", emoji: "🐢", color: "bg-green-600" },
  { id: 19, name: "Wind Eagle", emoji: "🦅", color: "bg-amber-600" },
  { id: 20, name: "Moon Owl", emoji: "🦉", color: "bg-slate-600" },
]

export default function CharacterSelect() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/20 to-black flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.02) 10px,
            rgba(255,255,255,0.02) 20px
          )`,
          }}
        ></div>
      </div>

      <div className="absolute bottom-80 left-0 right-0 p-6 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-10 gap-2">
            {characters.map((character) => (
              <Button
                key={character.id}
                variant="ghost"
                className={`
                  relative h-20 w-full p-0 rounded-lg border-2 transition-all duration-200
                  ${
                    selectedCharacter?.id === character.id
                      ? "border-yellow-400 bg-yellow-400/20 scale-105 shadow-lg shadow-yellow-400/50"
                      : "border-gray-700 hover:border-orange-400 hover:scale-105"
                  }
                  ${character.color} bg-opacity-60 hover:bg-opacity-80
                `}
                onClick={() => setSelectedCharacter(character)}
              >
                <div className="flex items-center justify-center h-full w-full">
                  <div className="text-3xl">{character.emoji}</div>
                </div>
                {selectedCharacter?.id === character.id && (
                  <div className="absolute inset-0 border-2 border-yellow-400 rounded-lg animate-pulse bg-yellow-400/10"></div>
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-48 left-0 right-0 z-10 p-6">
        <div className="text-center">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 tracking-wider drop-shadow-lg">
            BAN/PIC CHARACTER SELECT
          </h1>
          <div className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mt-2"></div>
        </div>
      </div>

      <div className="flex-1 flex pt-6">
        <div className="w-1/2 flex flex-col items-center justify-center p-8 pl-24">
          {selectedCharacter ? (
            <div className="text-center">
              <div className="text-[50rem] mb-4 drop-shadow-2xl">{selectedCharacter.emoji}</div>
            </div>
          ) : (
            <div className="w-80 h-80 border-4 border-dashed border-gray-600 rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">❓</div>
                <div className="text-xl">キャラクターを選択</div>
              </div>
            </div>
          )}
        </div>

        <div className="w-1/2 flex flex-col justify-center p-8">
          <div className="text-center space-y-6 -mt-32">
            {selectedCharacter && (
              <div className="text-8xl font-black text-white tracking-wider mb-8">
                {selectedCharacter.name.toUpperCase()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
