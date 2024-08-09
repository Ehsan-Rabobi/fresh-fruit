import React from "react";
import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";


const bgStyle = {
  backgroundImage : `url(${BannerPng})`,
  backgroundSize: "cover",
  backgroundPosition:"center",
  backgroundRepeat: "no-repeat",
}

const Banner3 = () => {
  return (
    <>
      <section className="container mb-12">
        <div
        style={bgStyle}
          className="container grid grid-cols-1
        md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl"
        >
          <div></div>
          {/* <div className="flex justify-center items-center">
            <motion.img
            initial={{opacity:0 , scale:0.5}}
            whileInView={{opacity:1 , scale:1}}
            transition={{type:"spring" , stiffness:100 , delay:0.2}}
              src={BannerPng}
              className="w-[300px] md:max-w-[400px]
                h-full object-cover drop-shadow"
              alt=""
            />
          </div> */}
          <div className="flex flex-col justify-center">
            <div
              className="text-center md:text-left space-y-4
            lg:max-w-[400px]"
            >
              <motion.h1
                variants={FadeLeft(0.5)}FadeLeft
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold
                uppercase"
              >
                Get Fresh Fruit Today
              </motion.h1>
              <motion.p
                variants={FadeLeft(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium molestias perspiciatis sequi neque optio, excepturi
                incidunt saepe rerum recusandae, culpa odio, laboriosam illo
                impedit facere temporibus nobis fuga voluptatibus? Facere?
              </motion.p>
              {/* <motion.p
                variants={FadeLeft(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita facere velit maxime, exercitationem quidem possimus.
              </motion.p> */}
              <motion.div
                variants={FadeLeft(0.9)}
                initial="hidden"
                animate="visible"
                className="flex justify-center md:justify-start"
              >
                <button className="primary-btn">Learn More</button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner3;
