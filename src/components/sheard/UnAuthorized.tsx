import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function UnAuthorized() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h3 className="text-5xl font-medium font-serif">Oops!</h3>
      <h2 className="mt-2 text-lg">You are not authorized for this page</h2>
      <Button className="mt-4 capitalize" onClick={() => navigate("/")}>
        Back Home
      </Button>
    </div>
  );
}
