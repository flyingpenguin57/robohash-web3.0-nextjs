'use client'
import { commonContext } from "@/app/commonContext";
import { Chip } from "@/app/materialTailwind";
import InputWithButton from "@/app/ui/inputWithButton";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Zookeeper() {

    const [commanderName, setCommanderName] =useState<any>("No Name"); 
    const {commanderDna, setCommanderDna, roboNFTContract, account, roboBankContract} = useContext(commonContext);
    const [localDna, setLocalDna] = useState<any>()
    const [balance, setBalance] = useState<any>()

    const router = useRouter()

    useEffect(()=>{
        const getCommanderAndBalance =async () => {
            if (roboNFTContract === undefined) {
                router.push('/')
            }
            const id = await roboNFTContract?.ownerToCommander(account)
            if (!id?.eq(0)) {
                const commander = await roboNFTContract?.commanders(id)
                setCommanderName(commander?.name)
            }
            setLocalDna(commanderDna)

            const balance = await roboBankContract?.balanceOf(account);
            console.log(balance?.toString())
            setBalance((balance/10).toString())
        }
        getCommanderAndBalance()
    }, []);

    const inputName = (e:any) => {
        let newValue = e.target.value;
        if (newValue === undefined || newValue.length === 0) {
          newValue = "No Name";
        }
        setCommanderName(newValue);
    }
    const editName = async() => {
        if (commanderName === undefined || commanderName.length === 0) {
            alert("Zookeeper name can not be empty.")
        }
        const id = await roboNFTContract.ownerToCommander(account)
        console.log(id)
        if (id.eq(0)) {
            //create commander
            await roboNFTContract.createCommander(commanderName)
        } else {
            //edit commander name
            await roboNFTContract.modifyCommanderName(commanderName)
        }
    }

    const inputDna = (e:any) => {
        let newValue = e.target.value;
        if (newValue === undefined || newValue.length === 0) {
          newValue = commanderDna;
        }
        setLocalDna(newValue);
    }

    const editDna = async() => {
        if (localDna === undefined || localDna.length === 0) {
            alert("Zookeeper dna can not be empty.")
        }
        const id = await roboNFTContract.ownerToCommander(account)
        console.log(id)
        if (id.eq(0)) {
            //no commander
            alert("Name your commander first.")
        } else {
            //edit commander dna
            await roboNFTContract.modifyCommanderDna(localDna)
            setCommanderDna(localDna)
        }
    }

    return (
        <>
        <div className="w-full md:w-2/3 bg-blue-gray-50 rounded-xl mx-auto flex justify-center items-center">
            <div>
                <img className="h-28" src={`https://robohash.org/${localDna}?set=set5`}></img>
                <div className="w-max mx-auto text-blue-gray-500">{commanderName}</div>
            </div>
            <div>
                <InputWithButton prop1='Name' prop2="Edit" prop3={inputName} prop4={editName}></InputWithButton>
                <br></br>
                <InputWithButton prop1='Dna' prop2="Edit" prop3={inputDna} prop4={editDna}></InputWithButton>
            </div>
        </div>
        <div className="w-full md:w-2/3 mx-auto bg-blue-gray-50 mt-2 rounded-xl">
            <div className="w-24 ml-0"><Chip className="" color="red" value="Wallet" /></div>
                <div className="w-max mx-auto text-red-500">Balance: {balance} ROBO</div>
                <p className="w-full mx-auto text-blue-gray-500">&nbsp;Notice: each account can get 100 robo for free and create one cat cost 10 robo.</p>
        </div>
        </>
    );
}