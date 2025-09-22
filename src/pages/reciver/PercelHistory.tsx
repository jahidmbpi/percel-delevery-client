import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // <-- এইটা যোগ করুন

import { usePercelHistoryQuery } from "@/redux/feature/percel/percel.api";
import type { Percel } from "@/redux/feature/percel/type";

export default function PercelHistory() {
  const {
    data: parcelData,
    isLoading,
    isError,
  } = usePercelHistoryQuery(undefined);

  if (isLoading) {
    return <p className="text-center py-10">Loading your history...</p>;
  }

  if (isError) {
    return (
      <p className="text-center py-10 text-red-500">Failed to load history</p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        📦 Your Delivery History
      </h1>

      {parcelData?.length === 0 ? (
        <p className="text-center text-gray-500">No delivered parcels yet.</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-4">
          {parcelData?.map((parcel: Percel) => (
            <Card
              key={parcel._id}
              className="shadow-md hover:shadow-lg transition"
            >
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{parcel.trakinId}</CardTitle>
                  <Badge
                    variant={
                      parcel.status === "DELIVERED" ? "default" : "secondary"
                    }
                    className="uppercase"
                  >
                    {parcel.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  <span className="font-semibold">Type:</span> {parcel.type}
                </p>
                <p>
                  <span className="font-semibold">Weight:</span> {parcel.weight}{" "}
                  kg
                </p>
                <p>
                  <span className="font-semibold">Pickup:</span>{" "}
                  {parcel.pickUpAddress}
                </p>
                <p>
                  <span className="font-semibold">Delivery:</span>{" "}
                  {parcel.deliveryAddress}
                </p>
                <p>
                  <span className="font-semibold">Fee:</span> ৳{parcel.fee}
                </p>
                <p>
                  <span className="font-semibold">Delivery Date:</span>{" "}
                  {new Date(parcel.deliveriDate).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
