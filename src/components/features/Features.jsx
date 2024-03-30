import React from 'react'
import { AiFillLayout, AiOutlineCloudServer, AiFillCode } from "react-icons/ai";
import { IoSpeedometerSharp } from "react-icons/io5";
import { SiAntdesign } from "react-icons/si";
import { PiDevicesDuotone, PiShoppingCartDuotone } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { FaWordpressSimple } from "react-icons/fa6";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
    return (
        <section
            id="features"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <Title title="Features" des="What I Do" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
                <Card
                    title="Front-End Development"
                    des="Crafting pixel-perfect front-end solutions that precisely match UX designs, utilizing modern front-end languages and frameworks."
                    icon={<AiFillLayout />}
                />

                <Card
                    title="Responsive Design"
                    des="Creating web applications with responsive design principles, ensuring a seamless user experience across a wide range of devices and screen sizes."
                    icon={<PiDevicesDuotone />}
                />
                <Card
                    title="UI/UX Design"
                    des="Crafting visually appealing and intuitive user interfaces that enhance the overall user experience, resulting in engaging and user-friendly web applications."
                    icon={<SiAntdesign />}
                />

                <Card
                    title="WordPress Development"
                    des="Creation of custom themes and plugins, bringing unique and tailored solutions to enhance the functionality and design of websites."
                    icon={<FaWordpressSimple />}
                />
                <Card
                    title="E-Commerce"
                    des="Crafting e-commerce solutions using WordPress WooCommerce, with a focus on seamless integration, secure payment gateways, and delivering user-friendly online shopping experiences."
                    icon={<PiShoppingCartDuotone />}
                />

                <Card
                    title="Performance Optimization and SEO"
                    des="Enhancing web applications for faster load times and improved user experiences, while also implementing SEO best practices to boost search engine visibility and rankings."
                    icon={<IoSpeedometerSharp />}
                />
                <Card
                    title="Back-End Development"
                    des="Designing and developing robust and efficient back-end systems that power web applications and creating integrated APIs, leveraging the latest back-end languages and frameworks."
                    icon={<AiFillCode />}
                />
                <Card
                    title="Secure Application Development"
                    des="Committed to ensuring robust security across the entire development stack, implementing best practices and protocols to safeguard web applications from potential vulnerabilities and unauthorized access."
                    icon={<MdOutlineSecurity />}
                />
                <Card
                    title="Server Management and Deployment"
                    des="Efficient server management and deployment, ensuring web applications are hosted and scaled seamlessly, whether it's on traditional servers or cloud platforms."
                    icon={<AiOutlineCloudServer />}
                />

            </div>
        </section>
    );
}

export default Features