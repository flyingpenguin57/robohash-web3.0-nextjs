import { createContext } from "react";

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
  