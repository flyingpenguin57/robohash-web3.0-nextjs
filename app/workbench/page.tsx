'use client'
import { useContext, useEffect, useState } from "react";
import { CreateRobot } from "../ui/createRobot";
import { commonContext } from "../commonContext";
import { Chip } from "../materialTailwind";
import {
    Card,
    CardHeader,
  } from "../materialTailwind";
import { useRouter } from "next/navigation";
   
function RobotCard(index:any, dna:any, id:any) {
    return (
      <Card className="w-46" key={index} placeholder={undefined}>
        <CardHeader floated={false} className="h-36" placeholder={undefined}>
          <img className="h-32 mx-auto" src={`https://robohash.org/${dna}?set=set4`} alt="profile-picture" />
        </CardHeader>
        <div className="mx-auto">ID: {id}</div>
      </Card>
    );
  }

const HomePage = () => {
    const router = useRouter()
    const{roboNFTContract, account} = useContext(commonContext)

    const[myRobots, setMyRobots] = useState<[any]>();
    useEffect(()=>{
        const fetchData =async () => {
            if (roboNFTContract === undefined) {
                router.push("/")
            }
            const _myRobots = await roboNFTContract?.getMyRobots();  
            console.log(_myRobots)  
            setMyRobots(_myRobots)        
        }

        const listenNewCat = async() => {
            const filter = roboNFTContract?.filters.NewRobot(null, null, await account);
            roboNFTContract?.on(filter, async(from: any, to: any, amount: any, event: any) => {
              // The to will always be "address"
              console.log("Your robot with " + event.args.robotDna + " dna created success.");
                const newRobots = await roboNFTContract.getMyRobots();
                setMyRobots(newRobots);
              
            });
        }

        fetchData();
        listenNewCat();
    }, [])

    return (
        <div className="flex justify-between max-w-screen-xl mx-auto">
            <div className="w-full md:w-2/3 mx-auto">
                <div className="border-2 rounded-xl bg-blue-gray-100">
                    <CreateRobot></CreateRobot>
                </div>
                <div className="bg-orange-400 rounded-xl my-2 py-0.5">
                    <div className="w-24 ml-0"><Chip className="" color="red" value="My Robots" /></div>
                    <div className="flex flex-wrap justify-center gap-2 py-2">
                        {myRobots?.map((r:any, index:any) => {
                            return (
                                RobotCard(index, r.dna, r.id.toNumber())
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage; 