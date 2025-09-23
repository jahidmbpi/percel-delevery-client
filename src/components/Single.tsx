import type { Percel } from "@/redux/feature/percel/type";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface SingleProps {
  children: React.ReactNode;
  data: Percel | null;
}

export default function Single({ children, data }: SingleProps) {
  if (!data) return null;

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="max-w-lg rounded-lg shadow-lg bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">
            Parcel Details
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Here are the details of your parcel.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          {/* Parcel Info */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <span className="font-semibold text-gray-700">
                  Tracking ID:
                </span>{" "}
                {data.trakinId}
              </div>
              <div>
                <span className="font-semibold text-gray-700">Type:</span>{" "}
                {data.type}
              </div>
              <div>
                <span className="font-semibold text-gray-700">Weight:</span>{" "}
                {data.weight} kg
              </div>
              <div>
                <span className="font-semibold text-gray-700">Sender ID:</span>{" "}
                {data.sender}
              </div>
              {data.reciver && (
                <div>
                  <span className="font-semibold text-gray-700">
                    Receiver ID:
                  </span>{" "}
                  {data.reciver}
                </div>
              )}
              {data.status && (
                <div>
                  <span className="font-semibold text-gray-700">Status:</span>{" "}
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      data.status === "DELIVERED"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {data.status}
                  </span>
                </div>
              )}
              {data.pickUpAddress && (
                <div>
                  <span className="font-semibold text-gray-700">
                    PickUp Address:
                  </span>{" "}
                  {data.pickUpAddress}
                </div>
              )}
              {data.deliveryAddress && (
                <div>
                  <span className="font-semibold text-gray-700">
                    Delivery Address:
                  </span>{" "}
                  {data.deliveryAddress}
                </div>
              )}
              {data.deliveriDate && (
                <div>
                  <span className="font-semibold text-gray-700">
                    Delivery Date:
                  </span>{" "}
                  {new Date(data.deliveriDate).toLocaleDateString()}
                </div>
              )}
              {data.fee && (
                <div>
                  <span className="font-semibold text-gray-700">Fee:</span>{" "}
                  {data.fee} ৳
                </div>
              )}
            </div>
          </div>

          {/* Tracking Events */}
          {data.trackingEvents && data.trackingEvents.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Tracking Events
              </h3>
              <ul className="relative border-l border-gray-300">
                {data.trackingEvents.map((event) => (
                  <li key={event._id} className="mb-6 ml-4">
                    <span className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></span>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                      <div className="text-gray-700">
                        <span className="font-semibold">Location:</span>{" "}
                        {event.location}
                      </div>
                      <div className="text-gray-700">
                        <span className="font-semibold">Status:</span>{" "}
                        {event.status}
                      </div>
                      <div className="text-gray-700">
                        <span className="font-semibold">Updated By:</span>{" "}
                        {event.updatedBy}
                      </div>
                      <div className="text-gray-700">
                        <span className="font-semibold">Note:</span>{" "}
                        {event.note}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {new Date(event.updatedAt).toLocaleString()}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
