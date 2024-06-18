import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/CandiBorobudur.jpg";
import Img2 from "../../assets/places/Pantaipandawa.jpeg";
import Img3 from "../../assets/places/dieng.jpg";
import Img4 from "../../assets/places/rajaampat.jpeg";
import Img5 from "../../assets/places/malioboro.jpg";
import Img6 from "../../assets/places/kebunrayabogor.jpeg";

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
  },
  {
    img: Img4,
    title: "Pulau Raja Ampat",
    location: "Papua Barat",
    description:
      "Raja Ampat: Surga Petualangan Dunia di Ujung Papua. Sekilas pikiran menerawang dan sebuah lukisan elok pun muncul terbayang. Lautan lepas dengan pulau-pulau karang yang tersusun rapih menyambut beberapa ekor lumba-lumba yang berloncatan ceria.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Malioboro",
    location: "Yogyakarta, Jawa Tengah",
    description:
      "Malioboro merupakan nama salah satu jalan di pusat Kota Yogyakarta. Jalan Malioboro itu sendiri merupakan salah satu jalan dari tiga jalan di Kota Yogyakarta yang membentang dari Tugu Yogyakarta hingga ke perempatan Kantor Pos Yogyakarta.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Kebun Raya Bogor",
    location: "Bogor, Jawa Barat",
    description:
      "Kebun Raya Bogor adalah sebuah kebun botani besar yang terletak di Kota Bogor, Indonesia. Kebun ini dioperasikan oleh Badan Riset dan Inovasi Nasional(BRIN).",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Rekomendasi Wisata Terbaik
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
