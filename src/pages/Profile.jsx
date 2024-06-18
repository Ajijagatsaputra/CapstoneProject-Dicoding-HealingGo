import React from "react";
import { FaUserCircle } from "react-icons/fa";
import PlaceCard from "../components/Places/PlaceCard";
import Img1 from "../assets/places/CandiBorobudur.jpg";
import Img2 from "../assets/places/Pantaipandawa.jpeg";
import Img3 from "../assets/places/dieng.jpg";


const Profile = () => {
  const PlacesData = [
    {
      img: Img1,
      title: "Candi Borobudur",
      location: "Magelang, Yogyakarta",
      description:
        "Candi Borobudur adalah sebuah maha karya arsitektur dan seni yang memukau dunia. Dengan desain yang kompleks, relief indah, dan simbolisme mendalam, candi ini tidak hanya menjadi saksi sejarah dan warisan budaya Indonesia, tetapi juga menginspirasi pengunjung dari seluruh dunia. Keindahan dan makna di balik arsitektur spektakuler Candi Borobudur akan terus memikat dan mengagumkan kita sepanjang masa..",
      price: 50000,
      type: "Buka setiap hari di jam : 06.30-16.30",
    },
    {
      img: Img2,
      title: "Pantai Pandawa",
      location: "Bali",
      description:
        "Pantai Pandawa terletak di Desa Kutuh, Kuta Selatan, Badung, Bali. Pantai ini bisa ditempuh selama 30 menit dari Nusa Dua dan Uluwatu",
      price: 100000,
      type: "Setiap hari buka pukul 07.00-18.00",
    },
    {
      img: Img3,
      title: "Dieng, Negeri atas awan",
      location: "Wonosobo",
      description:
        "Dataran Tinggi Dieng, dikenal juga sebagai Dieng Plateau, memiliki ciri khas administratif dan geografis yang langka di Indonesia. Wilayah ini terbagi menjadi dua wilayah administratif yang terpisah, yaitu Dieng Kulon di Kabupaten Wonosobo (bagian barat) dan Dieng Wetan di Kabupaten Banjarnegara (bagian timur)",
      price: 6200,
      type: "Wonosobo, Jawa Tengah",
    }
  ];
  
  return (
    <>
      <section className="container">
        <div data-aos="fade-up"  className="pt-28 flex items-center text-black gap-5">
          <div className="w-36 h-36 rounded-full overflow-hidden">
            <FaUserCircle className="text-neutral-700 w-full h-full" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Aji Jagat Saputra</h1>
            <p>alamat lengkap</p>
          </div>
        </div>
        <div data-aos="fade-up"  className="my-10">
          <div className="">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex gap-6">
                <a
                  href="#"
                  className="bg-gray-50 shrink-0 rounded-t-lg border border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600"
                >
                  Semua
                </a>
                <a
                  href="#"
                  className="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Menunggu Pembayaran
                </a>

                <a
                  href="#"
                  className="shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Selesai
                </a>
              </nav>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 p-10">
            {PlacesData.map((item, index) => (
              <PlaceCard
                key={index}
                {...item}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

