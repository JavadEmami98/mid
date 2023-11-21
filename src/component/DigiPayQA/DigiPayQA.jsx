import { Box } from "@mui/material";
import React, { useState } from "react";

function DigiPayQA() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDetails = () => {};
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <div className=" lg:mt-[50px] md:mt-[35px] mt-[15px]">
        <p className="text-[16px] text-[#000000] font-bold mb-3 pr-5">
          سوالات متداول
        </p>
        <div className="flex flex-col gap-6">
          <li className="flex flex-col px-[32px] bg-[#fff] rounded-[10px]">
            <div
              onClick={handleClick}
              className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium "
            >
              <span className="py-[18px] pl-[25px]">
                شرایط لازم جهت دریافت اعتبار چیست؟
              </span>
              {open ? (
                <img
                  src="assest/images/planLoan/arrowdown.svg"
                  alt=""
                  onClick={toggleDetails}
                />
              ) : (
                <img
                  src="assest/images/planLoan/arrowup.svg"
                  alt=""
                  onClick={toggleDetails}
                />
              )}
            </div>
            <Box
              sx={{
                /*    px: "27px", */
                pb: "16px",
                color: "#061962",
                fontSize: "14px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <p className="text-[10px] text-[#505050] font-normal  leading-5">
                • افراد ۱۸ سال به بالا و زیر ۷۰ سال
              </p>

              <p className="text-[10px] text-[#505050] font-normal leading-5">
                • رتبه‌ی اعتباری A یا B یا بدون رتبه‌ی اعتباری
              </p>

              <p className="text-[10px] text-[#505050] font-normal  leading-5">
                • عدم وجود چک برگشتی
              </p>
            </Box>
          </li>
          <li className="flex flex-col px-[32px] bg-[#fff] rounded-[10px]">
            <div
              onClick={handleClick}
              className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium "
            >
              <span className="py-[18px] pl-[25px]">
                برای خرید اقساطی به کدام شعب دی‌جی‌لند می‌توان مراجعه کرد؟
              </span>
              {open ? (
                <img
                  src="assest/images/planLoan/arrowdown.svg"
                  alt=""
                  onClick={toggleDetails}
                />
              ) : (
                <img
                  src="assest/images/planLoan/arrowup.svg"
                  alt=""
                  onClick={toggleDetails}
                />
              )}
            </div>
            <Box
              sx={{
                /*    px: "27px", */
                pb: "16px",
                color: "#061962",
                fontSize: "10px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                افراد بین ۱۸ تا ۷۰ سال در صورت داشتن شرایط زیر می‌­توانند با طی
                مسیر تخصیص اعتبار، این تسهیلات را دریافت کنند:
                <br />
                ۱- داشتن چک صیادی بنفش، ۲ - کسب امتیاز لازم در امکان‌سنجی
              </span>
            </Box>
          </li>
          <li className="flex flex-col px-[32px] bg-[#fff] rounded-[10px]">
            <div
              onClick={handleClick}
              className="flex justify-between items-center text-[14px] cursor-pointer text-[#061962] font-medium "
            >
              <span className="py-[18px] pl-[25px]">
                برای خرید اقساطی به کدام شعب دی‌جی‌لند می‌توان مراجعه کرد؟
              </span>
              {open ? (
                <img
                  src="assest/images/planLoan/arrowdown.svg"
                  alt=""
                  onClick={toggleDetails}
                />
              ) : (
                <img
                  src="assest/images/planLoan/arrowup.svg"
                  alt=""
                  onClick={toggleDetails}
                />
              )}
            </div>
            <Box
              sx={{
                /*    px: "27px", */
                pb: "16px",
                color: "#061962",
                fontSize: "10px",
              }}
              className={`details ${isVisible ? "visible" : "hidden"}`}
            >
              <span>
                افراد بین ۱۸ تا ۷۰ سال در صورت داشتن شرایط زیر می‌­توانند با طی
                مسیر تخصیص اعتبار، این تسهیلات را دریافت کنند:
                <br />
                ۱- داشتن چک صیادی بنفش، ۲ - کسب امتیاز لازم در امکان‌سنجی
              </span>
            </Box>
          </li>
        </div>
      </div>
    </div>
  );
}

export default DigiPayQA;
