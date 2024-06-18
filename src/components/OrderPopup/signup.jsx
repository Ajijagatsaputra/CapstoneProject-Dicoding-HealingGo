import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const SignupPopup = ({ setOpen }) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleSignup = () => {
    // Logika signup Anda di sini, misalnya memvalidasi dan mengirim data ke server.
    // Jika signup berhasil, tampilkan notifikasi.
    setShowNotification(true);

    // Sembunyikan notifikasi setelah beberapa detik (misalnya 3 detik).
    setTimeout(() => {
      setShowNotification(false);
      setOpen(false); // Menutup popup signup setelah notifikasi ditampilkan.
    }, 3000);
  };

  return (
    <>
      <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-black/70">Sign Up</h1>
            </div>
            <div>
              <IoCloseOutline
                className="text-2xl cursor-pointer "
                onClick={() => setOpen(false)}
              />
            </div>
          </div>
          {/* Body */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Nama"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
            />
            <input
              type="password"
              placeholder="Konfirmasi Password"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
            />
            <div className="flex justify-center">
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full "
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notifikasi sukses */}
      {showNotification && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-4 rounded-md shadow-md">
            <p>Berhasil signup!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupPopup;
