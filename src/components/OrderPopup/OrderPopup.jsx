import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleBookingClick = () => {
    setShowConfirmation(true);
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {" "}
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black/70">
                  Pesan Tempat Wisata
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer "
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* BodyBooking */}
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
                type="text"
                placeholder="Alamat Wisata"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="text"
                placeholder="Wisata yang dikunjungi"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <div className="flex justify-center">
                <button
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full "
                  onClick={handleBookingClick}
                >
                  Beli Tiket
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showConfirmation && (
        <ConfirmationPopup setShowConfirmation={setShowConfirmation} />
      )}
    </>
  );
};

const ConfirmationPopup = ({ setShowConfirmation }) => {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center">
      <div className="p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-black/70">
            Konfirmasi Pesanan
          </h1>
          <IoCloseOutline
            className="text-2xl cursor-pointer"
            onClick={() => setShowConfirmation(false)}
          />
        </div>
        <p className="mb-4 text-center text-black/70">Berhasil booking!</p>
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
            onClick={() => setShowConfirmation(false)}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPopup;
