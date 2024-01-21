'use client'

import { Button } from "./materialTailwind"
import { useRouter } from 'next/navigation'
import roboBankJson from './lib/contracts/RoboBank.sol/RoboBank.json'
import roboNFTJson from './lib/contracts/RoboNFT.sol/RoboNFT.json'
import roboMarketJson from './lib/contracts/RoboMarket.sol/RoboMarket.json'
import { useContext } from "react"
import { commonContext } from "./commonContext"
import address from "./lib/contractAddress.json"

export default function Home() {

  const router = useRouter();

  const { ethers } = require('ethers');
  const {setRoboBankContract, 
         setRoboNFTContract, 
         setRoboMarketContract,
         setCommanderDna,
         setAccount} = useContext(commonContext);

  const startApp = async () => {

    // 检查 MetaMask 是否已安装
    if (typeof window.ethereum === 'undefined') {
      alert('MetaMask not detected! Please insall it.');
      return;  
    }

    // MetaMask requires requesting permission to connect users accounts
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    setAccount(provider.getSigner().getAddress())

    // 部署智能合约时生成的地址
    const roboBankAddress = address.roboBankAddress;
    const roboNFTAddress = address.roboNFTAddress;
    const roboMarketAddress = address.roboMarketAddress;
    // 使用合约地址和 ABI 连接到智能合约
    const roboBankContract = new ethers.Contract(roboBankAddress, roboBankJson.abi, provider.getSigner());
    const roboNFTContract = new ethers.Contract(roboNFTAddress, roboNFTJson.abi, provider.getSigner());
    const roboMarketContract = new ethers.Contract(roboMarketAddress, roboMarketJson.abi, provider.getSigner());
    setRoboBankContract(roboBankContract)
    setRoboNFTContract(roboNFTContract)
    setRoboMarketContract(roboMarketContract)

    const commanderId = await roboNFTContract.ownerToCommander(provider.getSigner().getAddress());
    if (commanderId.eq(0)) {
      setCommanderDna("111")
    } else {
      const commanderInfo = await roboNFTContract.commanders(commanderId); 
      setCommanderDna(commanderInfo.dna);      
    }
    router.push('/workbench');
  }

  return (
    <>
      <div className='w-max mx-auto mt-40'>
        <div className="mx-auto">
          <span className="text-4xl text-blue-500">Welcom </span>
          <span className="text-4xl text-red-500">To </span>
          <span className="text-4xl text-orange-500">HashCat </span>
          <span className="text-4xl text-green-500">Web3.0</span>
        </div>
        <br></br>
        <br></br>
        <div className="w-max mx-auto">
          <Button onClick={startApp} size="lg" color="orange" className="flex items-center gap-3" placeholder={undefined}>
            <img src="https://robohash.org/1231?set=set4" alt="app" className="h-10 w-10" />            
            Start Application
          </Button>
        </div>
        <div className="mt-10 w-max mx-auto text-gray-500" color='blue'>Notice:Only Supproted in Goerli Test Network</div>
      </div>
    </>)
}
