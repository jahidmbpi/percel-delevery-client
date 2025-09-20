import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type PercelDialogProps = {
  parcel: Percel;
  trigger: React.ReactNode;
};

type TrackingEvent = {
  _id: string;
  status: string;
  location: string;
  note?: string;
  createdAt: string;
};

type Percel = {
  _id: string;
  trakinId: string;
  type: string;
  weight: number;
  fee: number;
  status: string;
  deliveriDate: string;
  pickUpAddress: string;
  deliveryAddress: string;
  trackingEvents?: TrackingEvent[];
};

export default function PercelDialog({ parcel, trigger }: PercelDialogProps) {
  return (
    <Dialog>
      {/* Trigger button */}
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      {/* Content */}
      <DialogContent className="w-full max-w-2xl sm:max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">
            📦 Parcel Details
          </DialogTitle>
          <DialogDescription className="text-sm">
            Tracking ID:{" "}
            <span className="font-semibold">{parcel.trakinId}</span>
          </DialogDescription>
        </DialogHeader>

        {/* Basic Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-100 p-3 rounded">
            <p className="text-xs text-gray-500">Status</p>
            <p className="font-semibold text-sm">{parcel.status}</p>
          </div>
          <div className="bg-gray-100 p-3 rounded">
            <p className="text-xs text-gray-500">Fee</p>
            <p className="font-semibold text-sm">৳ {parcel.fee}</p>
          </div>
          <div className="bg-gray-100 p-3 rounded">
            <p className="text-xs text-gray-500">Weight</p>
            <p className="font-semibold text-sm">{parcel.weight} kg</p>
          </div>
          <div className="bg-gray-100 p-3 rounded">
            <p className="text-xs text-gray-500">Delivery Date</p>
            <p className="font-semibold text-sm">
              {new Date(parcel.deliveriDate).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="mt-4 space-y-2">
          <div>
            <p className="text-xs text-gray-500">Pickup Address</p>
            <p className="font-semibold text-sm">{parcel.pickUpAddress}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Delivery Address</p>
            <p className="font-semibold text-sm">{parcel.deliveryAddress}</p>
          </div>
        </div>

        {/* Tracking Events */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">🕒 Tracking Events</h3>
          <div className="border-l-2 border-gray-300 pl-4">
            {parcel.trackingEvents?.length ? (
              parcel.trackingEvents.map((event) => (
                <div key={event._id} className="mb-4 relative">
                  <span className="absolute -left-[17px] top-1 w-4 h-4 rounded-full bg-blue-500"></span>
                  <p className="font-semibold text-sm">{event.status}</p>
                  <p className="text-xs text-gray-600">📍 {event.location}</p>
                  {event.note && (
                    <p className="text-xs text-gray-500">💬 {event.note}</p>
                  )}
                  <p className="text-[10px] text-gray-400">
                    {new Date(event.createdAt).toLocaleString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No tracking events yet.</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
