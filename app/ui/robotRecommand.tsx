'use client'
import { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  IconButton,
} from "../materialTailwind";
import { commonContext } from "../layout";

function getRandomInt(min: number, max: number) {
  // 使用 Math.floor() 向下取整，Math.random() 返回一个介于 0（包括）和 1（不包括）之间的随机浮点数
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RobotCardWithLike(key: any, dna: any, stars: any) {
  return (
    <Card key={key} className="w-52 max-w-[26rem] shadow-lg bg-orange-300" placeholder={undefined}>
      <CardHeader floated={false} color="white" placeholder={undefined}>
        <img
          src={`https://robohash.org/${dna}`}
          alt="robot"
          className="h-40"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          onClick={() => {
            console.log(`give a like ${dna}`)
          }}
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full" placeholder={undefined}            >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </IconButton>
      </CardHeader>
      <CardBody placeholder={undefined}>
        <div className="mb-3 flex items-center justify-center">
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal" placeholder={undefined}              >
            {stars}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-red-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

export default function RobotRecommand() {

  const [randomRobots, setRandomRobots] = useState<any>();
  const { roboNFTContract } = useContext(commonContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const array = [];
        let j = 4;
        const index = getRandomInt(0, j);
        const robot = await roboNFTContract.robots(index);
        console.log(robot)
        array.push(robot);

        const index1 = getRandomInt(0, j);
        const robot1 = await roboNFTContract.robots(index1);
        console.log(robot1)
        array.push(robot1)

        const index2 = getRandomInt(0, j);
        const robot2 = await roboNFTContract.robots(index2);
        console.log(robot2)
        array.push(robot2)

        const index3 = getRandomInt(0, j);
        const robot3 = await roboNFTContract.robots(index3);
        console.log(robot3)
        array.push(robot3)

        const index4 = getRandomInt(0, j);
        const robot4 = await roboNFTContract.robots(index4);
        console.log(robot4)
        array.push(robot4)

        const index5 = getRandomInt(0, j);
        const robot5 = await roboNFTContract.robots(index5);
        console.log(robot5)
        array.push(robot5)

        setRandomRobots(array);
        console.log(randomRobots)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // 空数组表示只在组件挂载时执行

  const changeBatch = async() => {
    console.log("start change a batch")
    const array = [];
    let j = 4;
    // for (let i = 0; i++; i<6) {
    //   const index = getRandomInt(0, j);
    //   const robot = await roboNFTContract.robots(index);
    //   console.log(robot)
    //   array.push(robot);
    // }
    const index = getRandomInt(0, j);
    const robot = await roboNFTContract.robots(index);
    console.log(robot)
    array.push(robot);

    const index1 = getRandomInt(0, j);
    const robot1 = await roboNFTContract.robots(index1);
    console.log(robot1)
    array.push(robot1)

    const index2 = getRandomInt(0, j);
    const robot2 = await roboNFTContract.robots(index2);
    console.log(robot2)
    array.push(robot2)

    const index3 = getRandomInt(0, j);
    const robot3 = await roboNFTContract.robots(index3);
    console.log(robot3)
    array.push(robot3)

    const index4 = getRandomInt(0, j);
    const robot4 = await roboNFTContract.robots(index4);
    console.log(robot4)
    array.push(robot4)

    const index5 = getRandomInt(0, j);
    const robot5 = await roboNFTContract.robots(index5);
    console.log(robot5)
    array.push(robot5)

    setRandomRobots(array)
  }

  return (
    <>
      <div className="flex justify-center gap-2 flex-wrap mt-6">
        {randomRobots?.map((robot: any, index: any) => {
          return RobotCardWithLike(index, robot, 8888);
        })}
      </div>
      <div className="flex justify-center my-6">
        <Button onClick={changeBatch} color="orange" placeholder={undefined}>
          Change a Batch
        </Button>
      </div>
    </>
  );
}