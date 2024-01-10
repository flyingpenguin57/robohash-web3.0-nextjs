'use client'
import { useContext, useState } from "react";
import { Input, Button } from "../materialTailwind";
import { commonContext } from "../layout";

function CreateRobotCard() {

    const {roboNFTContract} = useContext(commonContext);

    const [inputValue, setInputValue] = useState('114.235.181.234.png');

    const handleInputChange = (e:any) => {
      let newValue = e.target.value;
      if (newValue === undefined || newValue.length === 0) {
        newValue = "114.235.181.234.png";
      }
      setInputValue(newValue);
    };

    const createRobot = async() => {
        if (inputValue === undefined || inputValue.length === 0) {
            alert("dna can not be empty")
            return;
        }
        const b = await roboNFTContract.ifRobotDnaExist(inputValue);
        console.log(b)
        if (b) {
            alert("dna already exist")
            return;
        }
        await roboNFTContract.createRobot(inputValue);
    }
  
    return (
        <div className="flex justify-center items-center">
            <div>
                <img className="mx-auto h-52" src={`https://robohash.org/${inputValue}`} alt="robot" />
            </div>
            <div className="w-96">
                <div className="w-max mx-auto">
                    <Input color="orange" label="Input dna" onInput={handleInputChange} className="" crossOrigin={undefined} />
                </div>
                <div className="w-max mx-auto">
                    <Button onClick={createRobot} color="orange" className="mt-6" placeholder={undefined}>Create Robot</Button>
                </div>
            </div>
        </div>
    );
}

export function CreateRobot() {
    return (
        <div className="flex justify-center">
            <CreateRobotCard></CreateRobotCard>
        </div>
    );
}