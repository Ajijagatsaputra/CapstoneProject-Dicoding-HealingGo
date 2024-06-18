import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Tentang Kami
          </h1>
          <p>
            Aplikasi HealingGo adalah sebuah aplikasi sistem informasi tentang
            travel wisata. Aplikasi ini ditujukan kepada seluruh masyarakat
            khusus nya masyarakat Indonesia, dengan adanya aplikasi HealingGo
            ini maka dapat membantu masyarakat Indonesia mencari destinasi
            wisata di wilayah negara Indonesia.Di era digital ini, kemudahan
            akses informasi menjadi hal yang esensial. Hal ini juga berlaku
            dalam hal pariwisata. Masyarakat Indonesia kini memiliki banyak
            pilihan untuk menjelajahi keindahan alam dan budaya negaranya
            melalui berbagai aplikasi wisata. Salah satu aplikasi yang patut
            dipertimbangkan adalah HealingGo.
          </p>
          <br />
          <p>
            Apliasi ini dibuat dengan tujuan membantu masyarakat Indonesia.
            HealingGo hadir sebagai solusi bagi para pelancong yang ingin
            menemukan destinasi wisata yang sesuai dengan kebutuhan dan minat
            mereka. Aplikasi ini menyediakan informasi lengkap tentang berbagai
            tempat wisata di seluruh Indonesia, mulai dari wisata alam, wisata
            budaya, hingga wisata kuliner.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
