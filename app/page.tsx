"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Character {
  id: number
  name: string
  imagePath?: string
  iconPath?: string
  largeImagePath?: string
  nameImagePath?: string
  emoji?: string
  color: string
}

const characters: Character[] = [
  { id: 1, name: "Marion", iconPath: "/characters/marion-icon.png", largeImagePath: "/characters/marion-large.png", nameImagePath: "/characters/marion-name.png", emoji: "🌟", color: "bg-red-500" },
  { id: 2, name: "Thunder Cat", imagePath: "/characters/thunder-cat.png", emoji: "⚡", color: "bg-yellow-500" },
  { id: 3, name: "Ice Bear", imagePath: "/characters/ice-bear.png", emoji: "🐻‍❄️", color: "bg-blue-500" },
  { id: 4, name: "Forest Wolf", imagePath: "/characters/forest-wolf.png", emoji: "🐺", color: "bg-green-500" },
  { id: 5, name: "Space Alien", imagePath: "/characters/space-alien.png", emoji: "👽", color: "bg-purple-500" },
  { id: 6, name: "Ninja Warrior", imagePath: "/characters/ninja-warrior.png", emoji: "🥷", color: "bg-gray-800" },
  { id: 7, name: "Magic Wizard", imagePath: "/characters/magic-wizard.png", emoji: "🧙‍♂️", color: "bg-indigo-500" },
  { id: 8, name: "Robot Fighter", imagePath: "/characters/robot-fighter.png", emoji: "🤖", color: "bg-cyan-500" },
  { id: 9, name: "Phoenix Bird", imagePath: "/characters/phoenix-bird.png", emoji: "🔥", color: "bg-orange-500" },
  { id: 10, name: "Ocean Shark", imagePath: "/characters/ocean-shark.png", emoji: "🦈", color: "bg-blue-600" },
  { id: 11, name: "Ghost Spirit", imagePath: "/characters/ghost-spirit.png", emoji: "👻", color: "bg-gray-300" },
  { id: 12, name: "Lightning Bolt", imagePath: "/characters/lightning-bolt.png", emoji: "⚡", color: "bg-yellow-400" },
  { id: 13, name: "Crystal Gem", imagePath: "/characters/crystal-gem.png", emoji: "💎", color: "bg-pink-500" },
  { id: 14, name: "Steel Knight", imagePath: "/characters/steel-knight.png", emoji: "⚔️", color: "bg-gray-600" },
  { id: 15, name: "Flame Demon", imagePath: "/characters/flame-demon.png", emoji: "😈", color: "bg-red-600" },
  { id: 16, name: "Star Guardian", imagePath: "/characters/star-guardian.png", emoji: "⭐", color: "bg-yellow-300" },
  { id: 17, name: "Shadow Bat", imagePath: "/characters/shadow-bat.png", emoji: "🦇", color: "bg-purple-800" },
  { id: 18, name: "Earth Turtle", imagePath: "/characters/earth-turtle.png", emoji: "🐢", color: "bg-green-600" },
  { id: 19, name: "Wind Eagle", imagePath: "/characters/wind-eagle.png", emoji: "🦅", color: "bg-amber-600" },
  { id: 20, name: "Moon Owl", imagePath: "/characters/moon-owl.png", emoji: "🦉", color: "bg-slate-600" },
  { id: 21, name: "Dragon King", imagePath: "/characters/dragon-king.png", emoji: "🐉", color: "bg-emerald-600" },
  { id: 22, name: "Ice Queen", imagePath: "/characters/ice-queen.png", emoji: "❄️", color: "bg-cyan-400" },
  { id: 23, name: "Thunder God", imagePath: "/characters/thunder-god.png", emoji: "⛈️", color: "bg-zinc-700" },
  { id: 24, name: "Forest Fairy", imagePath: "/characters/forest-fairy.png", emoji: "🧚", color: "bg-lime-500" },
]

export default function CharacterSelect() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/20 to-black flex flex-col relative overflow-hidden">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className="absolute bottom-32 left-32 right-32 py-4 z-50">
        <div className="w-full">
          <div className="grid grid-cols-12 gap-1">
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
                onClick={() => {
                  if (selectedCharacter?.id === character.id) {
                    setSelectedCharacter(null)
                  } else {
                    setSelectedCharacter(character)
                  }
                }}
              >
                <div className="flex items-center justify-center h-full w-full relative overflow-hidden rounded-md">
                  {(character.iconPath || character.imagePath) ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={character.iconPath || character.imagePath || ''}
                        alt={character.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="text-3xl absolute inset-0 flex items-center justify-center hidden">
                        {character.emoji}
                      </div>
                    </div>
                  ) : (
                    <div className="text-3xl">{character.emoji}</div>
                  )}
                </div>
                {selectedCharacter?.id === character.id && (
                  <div className="absolute inset-0 border-2 border-yellow-400 rounded-lg animate-pulse bg-yellow-400/10"></div>
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex relative">
        {!selectedCharacter && (
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="mt-48">
              <Image
                src="/banpic_01.png"
                alt="Select Character"
                width={1800}
                height={1300}
                className="object-contain"
              />
            </div>
          </div>
        )}
        
        <div className="w-1/2 flex flex-col items-center justify-center relative">
          {selectedCharacter && (
            <div className="absolute inset-0 flex items-start justify-center pl-20">
              {(selectedCharacter.largeImagePath || selectedCharacter.imagePath) ? (
                <div className="relative w-full h-full">
                  <Image
                    src={selectedCharacter.largeImagePath || selectedCharacter.imagePath || ''}
                    alt={selectedCharacter.name}
                    fill
                    className="object-contain drop-shadow-2xl object-left"
                    sizes="100vw"
                    priority
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="text-[50rem] mb-4 drop-shadow-2xl hidden absolute inset-0 flex items-center justify-center">
                    {selectedCharacter.emoji}
                  </div>
                </div>
              ) : (
                <div className="text-[50rem] mb-4 drop-shadow-2xl">{selectedCharacter.emoji}</div>
              )}
            </div>
          )}
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center relative">
          {selectedCharacter && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="mt-64 relative">
                {/* banpic_02.pngを上部に表示 */}
                <div className="absolute -top-48 left-1/2 transform -translate-x-1/2 z-20">
                  <Image
                    src="/banpic_02.png"
                    alt="Banner"
                    width={1200}
                    height={300}
                    className="object-contain"
                  />
                </div>
                {selectedCharacter.nameImagePath ? (
                  <div className="relative inline-block">
                    <Image
                      src={selectedCharacter.nameImagePath}
                      alt={selectedCharacter.name}
                      width={800}
                      height={350}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="text-8xl font-black text-white tracking-wider">
                    {selectedCharacter.name.toUpperCase()}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {selectedCharacter && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="relative mt-64">
              <Image
                src="/ng_icon.png"
                alt="NG"
                width={400}
                height={400}
                className="object-contain opacity-90"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
