'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { createContext, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
export const commonContext = createContext<{
  account: any,
  setAccount: any,
  roboBankContract: any,
  setRoboBankContract: any,
  roboNFTContract: any,
  setRoboNFTContract: any,
  roboMarketContract: any,
  setRoboMarketContract: any,
  commanderDna: any,
  setCommanderDna: any,
}>({
  account: undefined,
  setAccount: undefined,
  roboBankContract: undefined,
  setRoboBankContract: undefined,
  roboNFTContract: undefined,
  setRoboNFTContract: undefined,
  roboMarketContract: undefined,
  setRoboMarketContract: undefined,
  commanderDna: undefined,
  setCommanderDna: undefined
})

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
          <title>RoboHash in Web3</title>
          <link rel='icon' href='https://robohash.org/4765789'></link>
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </commonContext.Provider>
  )
}
