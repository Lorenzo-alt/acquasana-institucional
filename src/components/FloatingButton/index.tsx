"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { event } from "@/lib/fpixel";

export default function FloatingButton() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const event = () => {
      router.push("/conversao");
      window.open("https://wa.me/5554991290422?text=Ol%C3%A1%2C+Gostaria+de+realizar+um+or%C3%A7amento%21", "_blank");
  };

  const modal = searchParams.get("modal");
  const variants = {
    visible: (custom: any) => ({
      opacity: 1,
      transition: { duration: 0.3 },
    }),
  };
  if (!modal) {
    return (
      <div className="absolute z-auto self-end h-full flex items-end">
        <motion.a
          onClick={event}
          initial={{ opacity: 0 }}
          custom={2}
          whileHover={{ scale: 1.2 }}
          animate="visible"
          variants={variants}
          transition={{ duration: 0.2 }}
          className="self-end object-cover cursor-pointer sticky z-30 bottom-10 right-0 mr-2 mb-5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" className="h-auto lg:w-16">
            <path
              d="M0.597296 49.3029L4.03721 36.8645C1.91014 33.2248 0.805056 29.0921 0.805056 24.8643C0.805056 11.6322 11.6758 0.86377 25.0338 0.86377C31.512 0.86377 37.6043 3.3677 42.176 7.89732C46.7487 12.4407 49.2764 18.4609 49.2626 24.878C49.2626 38.1101 38.3918 48.8785 25.0338 48.8785H25.02C20.9588 48.8785 16.9807 47.8662 13.4448 45.964L0.597296 49.3029Z"
              fill="url(#paint0_linear_72_623)"
            />
            <path
              d="M0 50L3.53394 37.1692C1.35589 33.4056 0.205051 29.1518 0.205051 24.7749C0.205051 11.1131 11.3828 0 25.0957 0C31.7534 0 38.0001 2.5771 42.7124 7.26743C47.4109 11.9441 50 18.1754 50 24.7886C50 38.4504 38.8223 49.5635 25.1094 49.5635H25.0957C20.9309 49.5635 16.8357 48.5273 13.2057 46.5498L0 50ZM13.8081 42.0783L14.5615 42.5284C17.7393 44.4102 21.3832 45.3917 25.0957 45.4053H25.1094C36.5206 45.4053 45.794 36.1741 45.794 24.8169C45.794 19.3082 43.6434 14.1403 39.7396 10.2547C35.8358 6.36901 30.6438 4.21476 25.1094 4.21476C13.6982 4.21476 4.41104 13.446 4.41104 24.8032C4.41104 28.6889 5.50694 32.4798 7.57511 35.7659L8.0686 36.5432L5.97296 44.1378L13.8081 42.0783Z"
              fill="url(#paint1_linear_72_623)"
            />
            <path
              d="M18.8765 14.4262C18.4104 13.3901 17.9179 13.3765 17.4794 13.3628C17.1232 13.3491 16.6984 13.3491 16.2873 13.3491C15.8763 13.3491 15.2052 13.4995 14.6303 14.1264C14.0553 14.7397 12.4522 16.2397 12.4522 19.2943C12.4522 22.3353 14.6852 25.2795 14.9864 25.7024C15.3013 26.1116 19.2876 32.5606 25.6167 35.042C30.8773 37.1006 31.9458 36.6914 33.0819 36.5967C34.219 36.4873 36.7669 35.0967 37.2869 33.6514C37.8079 32.2062 37.8079 30.965 37.643 30.7062C37.4919 30.4474 37.0681 30.297 36.451 29.9836C35.8349 29.6701 32.766 28.1701 32.2048 27.966C31.6298 27.7619 31.2188 27.6525 30.8077 28.2795C30.3966 28.8928 29.2046 30.297 28.8347 30.7062C28.4785 31.1154 28.1087 31.17 27.4925 30.8566C26.8764 30.5431 24.8622 29.8888 22.4928 27.7883C20.6434 26.1526 19.3974 24.1204 19.0276 23.5071C18.6714 22.8938 18.9864 22.553 19.3013 22.2396C19.575 21.9671 19.9174 21.5169 20.2324 21.1488C20.5473 20.7806 20.6434 20.5355 20.8485 20.1127C21.0535 19.7035 20.9584 19.3353 20.7936 19.0219C20.6434 18.7074 19.4377 15.6538 18.8765 14.4262Z"
              fill="white"
            />
            <defs>
              <linearGradient id="paint0_linear_72_623" x1="24.93" y1="49.3032" x2="24.93" y2="0.864347" gradientUnits="userSpaceOnUse">
                <stop stopColor="#20B038" />
                <stop offset="1" stopColor="#60D66A" />
              </linearGradient>
              <linearGradient id="paint1_linear_72_623" x1="24.9995" y1="50" x2="24.9995" y2="0.000977496" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F9F9F9" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </motion.a>
      </div>
    );
  }
}
