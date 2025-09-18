import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAllSenderPercelQuery } from "@/redux/feature/percel/percel.api";

export default function ManagePercel() {
  const { data: perceldata } = useGetAllSenderPercelQuery(undefined);
  console.log(perceldata);
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">📦 My Parcels</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {perceldata?.map((parcel) => (
          <Card
            key={parcel._id}
            className="shadow-lg hover:shadow-xl transition"
          >
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{parcel.trakinId}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    parcel.status === "DELIVERED"
                      ? "bg-green-100 text-green-800"
                      : parcel.status === "IN_TRANSIT"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {parcel.status}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Type:</span> {parcel.type}
              </p>
              <p>
                <span className="font-semibold">Weight:</span> {parcel?.weight}{" "}
                kg
              </p>
              <p>
                <span className="font-semibold">Fee:</span> {parcel.fee}৳
              </p>
              <p>
                <span className="font-semibold">Pick-up:</span>{" "}
                {parcel.pickUpAddress}
              </p>
              <p>
                <span className="font-semibold">Delivery:</span>{" "}
                {parcel.deliveryAddress}
              </p>
              <p>
                <span className="font-semibold">Delivery Date:</span>{" "}
                {new Date(parcel.deliveriDate).toLocaleDateString()}
              </p>
              <p className="text-gray-500 text-xs">
                Last Update:{" "}
                {
                  parcel.trackingEvents[parcel.trackingEvents.length - 1]
                    ?.createdAt
                }
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
