/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetAlluserForAdminQuery,
  useUpdateUserMutation,
} from "@/redux/feature/user/user.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Scaling, Shield, Trash2, User, UserX } from "lucide-react";
import Loader from "@/components/Loader";

import StatusDialog from "./StatusDialog";

export default function ManageUser() {
  const { data: alluser, isLoading } = useGetAlluserForAdminQuery(undefined);

  const [updateUser] = useUpdateUserMutation();

  const handleDelete = async (userId: string) => {
    try {
      console.log(userId);
      const result = await updateUser({
        userId,
        data: { isDeleted: true },
      }).unwrap();
      console.log("User deleted:", result);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handelUnblock = async (userId: string) => {
    try {
      console.log(userId);
      const result = await updateUser({
        userId,
        data: { isActive: "ACTIVE" },
      }).unwrap();
      console.log("User deleted:", result);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handelblock = async (userId: string) => {
    try {
      console.log(userId);
      const result = await updateUser({
        userId,
        data: { isActive: "BLOCKED" },
      }).unwrap();
      console.log("User deleted:", result);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto mt-10 bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">👥 Manage Users</h2>

      <div className="overflow-x-auto">
        <Table className="min-w-[900px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead className="w-[250px]">Email</TableHead>
              <TableHead className="w-[120px]">Role</TableHead>
              <TableHead className="w-[150px]">Phone</TableHead>
              <TableHead className="w-[250px]">Address</TableHead>
              <TableHead className="w-[120px]">Status</TableHead>
              <TableHead className="w-[160px]">Block/unblock</TableHead>
              <TableHead className="w-[160px]">edit/delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alluser?.data.map((user: any) => (
              <TableRow key={user._id} className="align-middle">
                {/* Name */}
                <TableCell className="font-medium flex items-center gap-2">
                  {user.name ? (
                    <h2>{user.name}</h2>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-500" />
                    </div>
                  )}
                  {user.name}
                </TableCell>

                {/* Email */}
                <TableCell>{user.email}</TableCell>

                {/* Role */}
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      user.role === "ADMIN"
                        ? "bg-red-100 text-red-600"
                        : user.role === "SENDER"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {user.role}
                  </span>
                </TableCell>

                {/* Phone */}
                <TableCell>{user.phone || "N/A"}</TableCell>

                {/* Address */}
                <TableCell>{user.address || "N/A"}</TableCell>

                {/* Status */}
                <TableCell className="flex items-center">
                  <button
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      user.isActive === "BLOCKED"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {user.isActive || "ACTIVE"}
                  </button>
                </TableCell>

                <TableCell>
                  <div className="flex gap-2 items-center">
                    <div>
                      {user.isActive === "BLOCKED" ? (
                        <button
                          onClick={() => handelUnblock(user._id)}
                          className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-600 rounded hover:bg-green-200 text-xs"
                        >
                          <Shield className="w-4 h-4" /> Unblock
                        </button>
                      ) : (
                        <button
                          onClick={() => handelblock(user._id)}
                          className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 text-xs"
                        >
                          <UserX className="w-4 h-4" /> Block
                        </button>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-4 items-center">
                    <StatusDialog user={user}>
                      <Scaling className="text-[12px]" />
                    </StatusDialog>
                    <div>
                      {user.isDeleted === false && (
                        <Trash2
                          onClick={() => handleDelete(user._id)}
                          className="text-red-600"
                        />
                      )}
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
