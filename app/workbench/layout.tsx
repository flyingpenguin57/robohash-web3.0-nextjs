'use client'
import { useContext } from "react";
import { SimpleFooter } from "../ui/footer";
import { NavbarSimple } from "../ui/nav"
import { commonContext } from "../layout";
import { useRouter } from 'next/navigation'

export default async function Layout({ children }: { children: React.ReactNode }) {
  
    const router = useRouter();
    // 监听 MetaMask 切换账号事件
    window.ethereum.on('accountsChanged', (accounts:any) => {
      console.log('Accounts changed:', accounts);
      // 在这里处理账号切换的逻辑
      router.push('/')
    });

    const {roboNFTContract, account} = useContext(commonContext);
    const filter = roboNFTContract.filters.NewRobot(null, null, await account);
    roboNFTContract.on(filter, (from:any, to:any, amount:any, event:any) => {
      // The to will always be "address"
      alert("Your robot with " + event.args.robotDna + " dna created success.");
    });

    return (
      <div>
        <NavbarSimple></NavbarSimple>
        <div className="my-10">{children}</div>
        <SimpleFooter></SimpleFooter>
      </div>
    );
  }