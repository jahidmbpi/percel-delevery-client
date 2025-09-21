import { useGetAllSenderPercelQuery } from "@/redux/feature/percel/percel.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { View } from "lucide-react";
import PercelDialog from "@/components/PercelDialog";

export default function StatusLog() {
  const { data: perceldata } = useGetAllSenderPercelQuery(undefined);
  console.log(perceldata);

  return (
    <div className="max-w-6xl w-full mx-auto mt-10 bg-white p-6 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">📦 My Parcels</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tracking Id</TableHead>
            <TableHead>Percel ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {perceldata?.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item.trakinId}</TableCell>
              <TableCell>{item._id}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded text-sm font-semibold ${
                    item.status === "CANCELLED"
                      ? "bg-red-100 text-red-600"
                      : item.status === "DELIVERED"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {item.status}
                </span>
              </TableCell>
              <TableCell>৳ {item.fee}</TableCell>
              <TableCell>
                <PercelDialog
                  parcel={item}
                  trigger={
                    <button className="p-1 rounded hover:bg-gray-100">
                      <View className="w-5 h-5 text-blue-600" />
                    </button>
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
