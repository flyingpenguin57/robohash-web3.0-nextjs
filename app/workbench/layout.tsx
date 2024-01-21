'use client'
import { useRouter } from "next/navigation";
import { Typography } from "../materialTailwind";
import { NavbarSimple } from "../ui/nav";



export default async function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  //账户切换事件监听
  if (typeof window !== 'undefined') {
  window.ethereum.on('accountsChanged', (accounts:any) => {
    console.log('Accounts changed:', accounts);
    // 在这里处理账号切换的逻辑
    router.push('/')
  });
  }


  return (
    <div>
      <NavbarSimple></NavbarSimple>
      <div className="my-10">{children}</div>
      <hr></hr>
      <Typography className="w-max mx-auto mt-2 mb-8 text-xl font-medium flex flex-wrap items-center" placeholder={undefined}>
      
          <img src={'https://robohash.org/114.235.181.234.png?set=set4'} className="h-8"></img>
        <span className="text-red-500 mr-2"> HASH </span>
        <span className="text-blue-500 mr-2">CAT </span>
        <span className="text-orange-500">WEB3.0</span>
      </Typography>
    </div>
  );
}