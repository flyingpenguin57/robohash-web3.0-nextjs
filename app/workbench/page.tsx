import { CreateRobot } from "../ui/createRobot";
import { ListWithAvatar } from "../ui/rankList";
import RobotRecommand from "../ui/robotRecommand";

const HomePage = () => {
    return (
        <div className="flex justify-between max-w-screen-xl mx-auto">
            <div className="w-1/3">
                <ListWithAvatar></ListWithAvatar>
            </div>
            <div className="w-2/3 ml-1">
                <div className="border-2 rounded-xl bg-blue-gray-50">
                    <CreateRobot></CreateRobot>
                </div>
                <div className="bg-blue-gray-50 rounded-xl mt-1 py-0.5">
                    <RobotRecommand></RobotRecommand>
                </div>
            </div>
        </div>
    )
}

export default HomePage; 