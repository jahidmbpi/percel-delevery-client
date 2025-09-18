export interface TrackingEvent {
  _id: string;
  location: string;
  updatedBy: string;
  status: string;
  note?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Percel {
  _id: string;
  trakinId: string;
  type: string;
  weight: number;
  sender: string; // ObjectId string
  reciver: string; // ObjectId string
  pickUpAddress: string;
  deliveryAddress: string;
  deliveriDate: string; // ISO date string
  fee: number;
  status: string;
  trackingEvents: TrackingEvent[];
  __v: number;
}
