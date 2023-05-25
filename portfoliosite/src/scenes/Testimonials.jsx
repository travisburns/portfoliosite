import LineGradient from "../components/LineGradient";
import {motion} from "framer-motion"
import image1 from "../assets/person-1.png"
import image2 from "../assets/person-2.png"
import image3 from "../assets/person-3.png"

const Testimonials = () => {
    const TestimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col 
    justify-end pt-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`

    return (
        <section id="testimonials" className="pt-32 pb-16">
            {/*HEADING */}
           
          <motion.div
          className="md:w-1/3 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 text-red">
            TESTIMONIALS
          </p>
          <LineGradient width="mx-auto w-2/4" />
          <p className="mt-10 mb-7">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Accusamus eveniet quis odit architecto vitae provident! Neque cum voluptatibus a quia.
          </p>
       </motion.div>
       {/* TESTIMONIALS */}
       <div className="md:flex md:justify-between gap-8">
          <motion.div
            className={`bg-blue ${TestimonialStyles} before:content-person1`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img src={image1} />
            <p className="font-playfair text-6xl">""</p>
            <p className="text-center text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, voluptate!
            </p>
          </motion.div>

          <motion.div
            className={`bg-red ${TestimonialStyles} before:content-person2`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1},
            }}
          >
             <img src={image2} />
            <p className="font-playfair text-6xl">""</p>
            <p className="text-center text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, tempore!
            </p>
          </motion.div>

          <motion.div
            className={`bg-yellow ${TestimonialStyles} before:content-person3`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1},
            }}
          >
            <img src={image3} />
            <p className="font-playfair text-6xl">""</p>
            <p className="text-center text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, natus!
            </p>
          </motion.div>
       </div>
        </section>
    )
}

export default Testimonials