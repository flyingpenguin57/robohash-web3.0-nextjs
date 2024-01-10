import { Typography } from "../materialTailwind";
 
export function SimpleFooter() {
  return (
    <footer className="px-4 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="orange" className="font-normal" placeholder={undefined}>
        &copy; 2023 LQH
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            color="orange"
            className="font-normal transition-colors hover:text-red-500 focus:text-red-500" placeholder={undefined}          >
            Contact Me: 597314452@qq.com
          </Typography>
        </li>
        <li>
          <Typography
            color="orange"
            className="font-normal transition-colors hover:text-red-500 focus:text-red-500" placeholder={undefined}          >
            GitHub: flyingpenguin57   
          </Typography>
        </li>
      </ul>
    </footer>
  );
}