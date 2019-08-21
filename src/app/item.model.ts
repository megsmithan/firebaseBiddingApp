import {Bid} from "./bids.model";

export interface Item {
  id: string;
  name: string;
  bids: Bid[];
  description: string;
}
