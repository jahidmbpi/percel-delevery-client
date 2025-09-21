/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useGetAllAdminPercelQuery,
  useUpdateParcelMutation,
} from "@/redux/feature/percel/percel.api";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function ManageAdminPercel() {
  const { data: parcels } = useGetAllAdminPercelQuery(undefined);
  const [updateStatus] = useUpdateParcelMutation();

  // Parcel-specific status state
  const [parcelStatus, setParcelStatus] = useState<{ [key: string]: string }>(
    {}
  );

  const handleStatusChange = async (id: string) => {
    const status = parcelStatus[id];
    if (!status) return;
    console.log(status);

    try {
      const result = await updateStatus({ id, status });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">📦 Manage All Parcels</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {parcels?.data?.map((parcel: any) => (
          <Card key={parcel._id} className="shadow-md">
            <CardContent className="p-4 space-y-2">
              <p>
                <span className="font-semibold">Tracking ID:</span>{" "}
                {parcel.trakinId}
              </p>
              <p>
                <span className="font-semibold">Type:</span> {parcel.type}
              </p>
              <p>
                <span className="font-semibold">Weight:</span> {parcel.weight}{" "}
                kg
              </p>
              <p>
                <span className="font-semibold">Status:</span> {parcel.status}
              </p>

              <div className="flex items-center gap-2 mt-3">
                <Select
                  value={parcelStatus[parcel._id] ?? parcel.status}
                  onValueChange={(value) =>
                    setParcelStatus({ [parcel._id]: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="REQUESTED">REQUESTED</SelectItem>
                    <SelectItem value="APPROVED">APPROVED</SelectItem>
                    <SelectItem value="DISPATCHED">DISPATCHED</SelectItem>
                    <SelectItem value="IN_TRANSIT">IN_TRANSIT</SelectItem>
                    <SelectItem value="DELIVERED">DELIVERED</SelectItem>
                    <SelectItem value="CANCELLED">CANCELLED</SelectItem>
                  </SelectContent>
                </Select>

                <Button onClick={() => handleStatusChange(parcel._id)}>
                  Update
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
