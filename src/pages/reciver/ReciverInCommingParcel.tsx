/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  useGetAllReciverPercelQuery,
  useUpdateParcelMutation,
} from "@/redux/feature/percel/percel.api";

export default function ReciverInCommingParcel() {
  const { data: ReciverPrcel } = useGetAllReciverPercelQuery(undefined);

  const [updateStatus] = useUpdateParcelMutation();
  console.log(ReciverPrcel?.data);

  const handeleConfrimDelivery = async (id: string) => {
    console.log(id);

    const status = "DELIVERED";
    try {
      const result = await updateStatus({ id, status }).unwrap();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">📦 Incoming Parcels</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ReciverPrcel?.data.map((parcel: any) => (
            <Card
              key={parcel._id}
              className="rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {parcel.trakinId}
                </CardTitle>
                <p className="text-gray-500 text-sm">{parcel.type}</p>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">Weight:</span> {parcel.weight}{" "}
                  kg
                </p>
                <p>
                  <span className="font-semibold">Sender:</span> {parcel.sender}
                </p>
                <p>
                  <span className="font-semibold">Receiver:</span>{" "}
                  {parcel.receiver || "N/A"}
                </p>
                <div className="flex items-center justify-between">
                  <p>
                    <span className="font-semibold">Status:</span>{" "}
                    {parcel.status || "Processing"}
                  </p>
                  <Button onClick={() => handeleConfrimDelivery(parcel._id)}>
                    confrim
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>{" "}
    </div>
  );
}
