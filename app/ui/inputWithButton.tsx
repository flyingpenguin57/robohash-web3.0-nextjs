import React from "react";
import { Button, Input } from "../materialTailwind";

interface ChildProps {
    prop1: string;
    prop2: string;
    prop3: any;
    prop4: any;
}
const InputWithButton: React.FC<ChildProps> = (props) => {

  const {prop1, prop2, prop3, prop4} = props;
  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
              label={prop1}
              className="pr-20"
              color="orange"
              containerProps={{
                  className: "min-w-0",
              }} crossOrigin={undefined} 
              onInput={prop3}
              />
      <Button
              size="sm"
              color="orange"
              className="!absolute right-1 top-1 rounded" placeholder={undefined} 
              onClick={prop4}     >
        {prop2}
      </Button>
    </div>
  );
}

export default InputWithButton;
