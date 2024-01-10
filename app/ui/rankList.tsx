'use client'
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "../materialTailwind";
import data from "../lib/data/mockData.json";

function RankCard() {
  return (
    <ListItem placeholder={undefined} className="bg-orange-500 hover:bg-red-500">
      <ListItemPrefix placeholder={undefined}>
        <Avatar variant="circular" alt="robot" src="https://robohash.org/23244" placeholder={undefined} />
      </ListItemPrefix>
      <div>
        <Typography variant="h6" color="white" placeholder={undefined}>
          1000 Stars
        </Typography>
        <Typography variant="small" color="gray" className="font-normal" placeholder={undefined}>
          DNA: xxxxx
        </Typography>
      </div>
    </ListItem>
  );
}

export function ListWithAvatar() {
  return (
    <Card className="w-full bg-blue-gray-50 border-2" placeholder={undefined}>
      <div className="ml-2 text-red-500 text-2xl">Hot Robots</div>
      <List placeholder={undefined}>
        {data.ranking.map((item: any, index: any) => {
          return RankCard();
        })}
      </List>
    </Card>
  );
}