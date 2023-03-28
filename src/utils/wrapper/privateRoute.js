import React from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../localStorage";
import { Dialog } from '@headlessui/react'

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = React.useState(false);


  React.useEffect(() => {
    const token = get("tokokopi-token");
    if (!token) {
      setIsModalOpen(true);
    }
  }, []);

  return (
    <>
      <Dialog
        open={isModalOpen}
        onClose={() => navigate("/login", { replace: true })}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white w-fit p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-medium mb-4">Anda harus login terlebih dahulu</h2>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={() => navigate("/login", { replace: true })}
            >
              Login
            </button>
          </div>
        </div>
      </Dialog>
      {children}
    </>
  );
}

export default PrivateRoute;
