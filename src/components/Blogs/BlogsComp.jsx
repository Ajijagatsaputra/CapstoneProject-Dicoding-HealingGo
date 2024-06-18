import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/lawangsewu.jpeg";
import Img2 from "../../assets/places/CandiBorobudur.jpg";
import Img3 from "../../assets/places/karimunjawa.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Lawang Sewu, Semarang",
    description:
    "Lawang Sewu merupakan Gedung megah berarsitektur art deco, yang digunakan Belanda sebagai Kantor Pusat Kereta Api (Trem) atau Nederlandsch Indische Spoorweg Maschaappij (NIS) yang terletak di Komplek Tugu Muda. Bangunan karya arsitek Belanda Prof. Jacob F. Klinkhamer dan B.J. Queendag ini menurut sejarah dibangun tahun 1903, kemudian diresmikan pada tanggal 1 Juli 1907. Masyarakat Semarang lebih mengenal gedung ini dengan sebutan Gedung Lawang Sewu, karena gedung ini memiliki jumlah pintu yang banyak, yang dalam bahasa jawa Lawang Sewu yaitu Lawang berarti Pintu dan Sewu yang berarti Seribu. Sekarang Gedung Lawang Sewu ini digunakan sebagai daya tarik wisata berupa peninggalan sejarah arsitek bangunan kuno dan antik, ruang bawah tanah dan menara informasi, sering pula digunakan sebagai tempat pameran dalam even-even tertentu.",
    author: "visit jateng",
    date: "1, Juli 1907",
  },
  {
    id: 1,
    image: Img2,
    title: "Candi Borobudur, Magelang",
    description:
      " Borobudur adalah candi atau kuil Buddha terbesar di dunia, sekaligus salah satu monumen Buddha terbesar di dunia. Monumen ini terdiri atas enam teras berbentuk bujur sangkar yang di atasnya terdapat tiga pelataran melingkar, pada dindingnya dihiasi dengan 2.672 panel relief dan aslinya terdapat 504 arca Buddha.",
    author: "Lanangejagat",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img3,
    title: "Pantai Karimun, Jepara",
    description:"KarimunJawa merupakan objek wisata kepulauan yang masuk dalam kawasan Taman Nasional KarimunJawa, tempat ini terletak di Laut Jawa dan masuk dalam kawasan Kabupaten Jepara Jawa Tengah. Destinasi wisata yang satu ini terdiri dari daratan dan lautan dengan luas daratannya sekitar 1.500 hektar dan luas perairannya sekitar 110.000 hektar.",
    author: "Wong Kae",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Artikel Terbaru Kami
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
