'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { useState } from 'react'
import { commonContext } from './commonContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [account, setAccount] = useState<any>()
  const [roboBankContract, setRoboBankContract] = useState<any>()
  const [roboNFTContract, setRoboNFTContract] = useState<any>()
  const [roboMarketContract, setRoboMarketContract] = useState<any>()
  const [commanderDna, setCommanderDna] = useState<any>()
  return (
    <commonContext.Provider value={{
      account, setAccount, roboBankContract, setRoboBankContract,
      roboNFTContract, setRoboNFTContract, roboMarketContract, 
      setRoboMarketContract, commanderDna, setCommanderDna
    }}>
      <html lang="en">
        <head>
          <title>HashCat</title>
          <link rel='icon' href='https://robohash.org/114.235.181.234.png?set=set4'></link>
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </commonContext.Provider>
  )
}
