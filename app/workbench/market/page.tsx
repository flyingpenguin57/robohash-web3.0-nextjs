'use client'
import { commonContext } from "@/app/commonContext";
import { Button, Chip, IconButton, Input, Typography } from "@/app/materialTailwind";
import { useContext, useEffect, useState } from "react";
import address from "../../lib/contractAddress.json";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";

function getRandomInt(min: number, max: number) {
    // 使用 Math.floor() 向下取整，Math.random() 返回一个介于 0（包括）和 1（不包括）之间的随机浮点数
    return Math.floor(Math.random() * (max - min)) + min;
}

export default function Market() {
    const {roboNFTContract, roboMarketContract, account} = useContext(commonContext)
    const [price, setPrice] = useState<any>();
    const [id, setId] = useState<any>();
    const [myCatInSale, setMyCatInSale] = useState<any>();
    const [mysaledna, setMysaledna] = useState<any>();
    const [total, setTotal] = useState<any>();
    const [market, setMarket] = useState<any>();
    const router = useRouter()


    useEffect(() => {
        const getMySale = async() => {
            if (roboNFTContract === undefined) {
                router.push("/")
                return
            }
            const mysales = await roboMarketContract?.getMySale(account)
            console.log(mysales)
            setMyCatInSale(mysales);
            const _mysaledna = [];
            for (let i =0; i<mysales.length; i++) {
                const dnn = await roboNFTContract.robots(mysales[i].robotId.toNumber())
                _mysaledna.push(dnn)
            }
            await setMysaledna(_mysaledna);
            console.log(mysaledna)
            console.log(_mysaledna)
            const _total = await roboMarketContract.getSaleCount()
            setTotal(_total.toNumber())
            if (_total.toNumber() >= 1) {
                const info = [];

                const r1 = getRandomInt(0, _total.toNumber())
                const saleInfo1 = await roboMarketContract.market(r1)
                const catInfo1 = await roboNFTContract.robots(saleInfo1.robotId.toNumber())
                info.push([saleInfo1.robotId.toNumber(), saleInfo1.price.toNumber(), catInfo1])
                console.log(info)

                const r2 = getRandomInt(0, _total.toNumber())
                const saleInfo2 = await roboMarketContract.market(r2)
                const catInfo2 = await roboNFTContract.robots(saleInfo2.robotId.toNumber())
                info.push([saleInfo2.robotId.toNumber(), saleInfo2.price.toNumber(), catInfo2])
                console.log(info)

                const r3 = getRandomInt(0, _total.toNumber())
                const saleInfo3 = await roboMarketContract.market(r3)
                const catInfo3 = await roboNFTContract.robots(saleInfo3.robotId.toNumber())
                info.push([saleInfo3.robotId.toNumber(), saleInfo3.price.toNumber(), catInfo3])
                console.log(info)

                const r4 = getRandomInt(0, _total.toNumber())
                const saleInfo4 = await roboMarketContract.market(r4)
                const catInfo4 = await roboNFTContract.robots(saleInfo4.robotId.toNumber())
                info.push([saleInfo4.robotId.toNumber(), saleInfo4.price.toNumber(), catInfo4])
                console.log(info)

                const r5 = getRandomInt(0, _total.toNumber())
                const saleInfo5 = await roboMarketContract.market(r5)
                const catInfo5 = await roboNFTContract.robots(saleInfo5.robotId.toNumber())
                info.push([saleInfo5.robotId.toNumber(), saleInfo5.price.toNumber(), catInfo5])
                console.log(info)

                const r6 = getRandomInt(0, _total.toNumber())
                const saleInfo6 = await roboMarketContract.market(r6)
                const catInfo6 = await roboNFTContract.robots(saleInfo6.robotId.toNumber())
                info.push([saleInfo6.robotId.toNumber(), saleInfo6.price.toNumber(), catInfo6])
                console.log(info)

                setMarket(info)
            }

        }
        getMySale()
        console.log(myCatInSale)
        console.log(mysaledna)
    }, [])

    const handlePriceChange = (event:any) => {
        setPrice(event.target.value);
    };

    const handleIdChange = (event:any) => {
        setId(event.target.value)
    }
 
    const sale = async () => {
        const var_id = Number.parseInt(id)
        const var_price = Number.parseFloat(price)
        console.log(var_id)
        console.log(var_price)
        if (Number.isNaN(var_id) || Number.isNaN(var_price)) {
            alert("please input correct param.")
            return
        }

        const realPrice = Math.floor(var_price * 10)
        console.log(realPrice)
        const byteArray = ethers.utils.solidityPack(['uint256'], [realPrice])
        console.log(byteArray)
        await roboNFTContract["safeTransferFrom(address,address,uint256,bytes)"](account, address.roboMarketAddress, var_id, byteArray);
        alert("wait a moment and you will see your cat in market")
        //await roboNFTContract.safeTransferFrom(account, address.roboMarketAddress, var_id, byteArray)

    }

    const changeBatch = async() => {
        if (total >= 1) {
            const info = [];

            const r1 = getRandomInt(0, total)
            const saleInfo1 = await roboMarketContract.market(r1)
            const catInfo1 = await roboNFTContract.robots(saleInfo1.robotId.toNumber())
            info.push([saleInfo1.robotId.toNumber(), saleInfo1.price.toNumber(), catInfo1])
            console.log(info)
            const r2 = getRandomInt(0, total)
            const saleInfo2 = await roboMarketContract.market(r2)
            const catInfo2 = await roboNFTContract.robots(saleInfo2.robotId.toNumber())
            info.push([saleInfo2.robotId.toNumber(), saleInfo2.price.toNumber(), catInfo2])
            console.log(info)

            const r3 = getRandomInt(0, total)
            const saleInfo3 = await roboMarketContract.market(r3)
            const catInfo3 = await roboNFTContract.robots(saleInfo3.robotId.toNumber())
            info.push([saleInfo3.robotId.toNumber(), saleInfo3.price.toNumber(), catInfo3])
            console.log(info)

            const r4 = getRandomInt(0, total)
            const saleInfo4 = await roboMarketContract.market(r4)
            const catInfo4 = await roboNFTContract.robots(saleInfo4.robotId.toNumber())
            info.push([saleInfo4.robotId.toNumber(), saleInfo4.price.toNumber(), catInfo4])
            console.log(info)

            const r5 = getRandomInt(0, total)
            const saleInfo5 = await roboMarketContract.market(r5)
            const catInfo5 = await roboNFTContract.robots(saleInfo5.robotId.toNumber())
            info.push([saleInfo5.robotId.toNumber(), saleInfo5.price.toNumber(), catInfo5])
            console.log(info)
            const r6 = getRandomInt(0, total)
            const saleInfo6 = await roboMarketContract.market(r6)
            const catInfo6 = await roboNFTContract.robots(saleInfo6.robotId.toNumber())
            info.push([saleInfo6.robotId.toNumber(), saleInfo6.price.toNumber(), catInfo6])
            console.log(info)

            setMarket(info)
    }}

    const unsale = async() => {
        console.log(id)
        await roboMarketContract.unsale(id)
        alert("unsale success.pleaese reEnter this page.")
    }

    const setprice = async() => {
        console.log(price)
        await roboMarketContract.setPrice(id, price * 10)
        alert("set price success.please reEnter this page.")
    }

    const buy = async() => {
        await roboMarketContract.buyRobot(id)
        alert("buy success.please reEnter home page.")
    } 

    return (
        <div className="w-full flex items-center gap-2 flex-col">

            <div className="bg-blue-gray-50 w-full md:w-2/3 rounded-xl">
                <Chip className="w-20 my-1" color="red" value={"sale"}></Chip>
                <div className="w-40 mx-auto flex flex-col items-center gap-2">
                  <Input color="orange" onChange={handleIdChange} label="Input ID" crossOrigin={undefined}></Input>
                  <Input  color="orange" onChange={handlePriceChange} label="Input Price In Uint Robo" crossOrigin={undefined}></Input>
                  <div className="flex justify-center gap-2 mb-2">
                  <Button color="red" onClick={sale} placeholder={undefined}>sale</Button>
                  <Button color="green" onClick={unsale} placeholder={undefined}>unsale</Button>
                  <Button color="blue" onClick={setprice} placeholder={undefined}>set price</Button>
                  <Button color="orange" onClick={buy} placeholder={undefined}>buy</Button>
                  </div>
                </div>
            </div>
            <div className="bg-blue-gray-50 w-full md:w-2/3 rounded-xl">
                <Chip className="w-40 my-1" color="red" value={"my cat in sale"}></Chip>
                <div className="mx-auto mb-2 flex flex-wrap justify-center gap-2">
                  {myCatInSale?.map((r:any, index:any) => {
                    return <div className="mt-2 w-max flex-col justify-center text-gray-800" key={index}>
                        <img className="w-28" src={`https://robohash.org/${mysaledna?.[index]}?set=set4`}></img>
                        <div>ID: {r.robotId.toNumber()}   PRICE: {r.price.toNumber()/10}</div></div>
                  })}
                </div>
            </div>
            
            <div className="bg-blue-gray-50 w-full md:w-2/3 rounded-xl">
                <Chip className="w-20 my-1" color="red" value={"market"}></Chip>
                <div className="w-max mx-auto my-1 text-blue-gray-500">{total} cats in sale</div>
                <div className="flex justify-center flex-wrap gap-2">
                  {market?.map((r:any, index:any) => {
                    return <div key={index} className="border-2 border-red-500 rounded-xl p-1">
                        <img className="w-20 mx-auto" src={`https://robohash.org/${r[2]}?set=set4`}></img>
                        id:{r[0]}  price:{r[1]/10}
                        </div>
                  })}
                </div>
                <div className="w-max mx-auto my-2">
                <Button color='red' onClick={changeBatch} placeholder={undefined}>change a batch</Button>
                </div>
            </div>
        </div>
    );

}

