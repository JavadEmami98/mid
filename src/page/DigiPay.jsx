import { Button } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import DigiPayPlans from "../component/DigiPayPlans/DigiPayPlans";
import DigiPayQA from "../component/DigiPayQA/DigiPayQA";

function DigiPay() {
  return (
    <>
      <div className="bg-[#F6F6F6]">
        <div className="container">
          {/* Page 1 */}
          <div className="border-[3px] border-[#FFFFFF] rounded-[10px] overflow-hidden">
            <div className="lg:flex md:flex bg-[#F6F6F6]  items-center">
              <img src="assest/images/planLoan/header.svg" alt="" />
              <div className="flex flex-col gap-3  items-center">
                <p className="text-[18px] text-[#3E8AC9] font-bold">
                  “بهترین انتخاب برای خـرید هوشـمندانه”
                </p>
                <p className="text-[15px] font-medium text-[#505050]">
                  از لوازم آشپزخانه تا گوشی موبایل توی جیبت رو
                </p>
                <p className="text-[26px] text-[#FF720C] font-extrabold">
                  اقـسـاطـی خـریــد کــن!
                </p>
              </div>
            </div>
          </div>
          {/* Padding */}
          <div className="lg:px-[83.5px] px-[30px]">
            {/* Part 2 */}
            <div className="flex justify-between flex-wrap lg:mt-6 md:mt-6 mt-3 lg:gap-0 gap-3">
              <Button
                variant="contained"
                sx={{
                  minWidth: "143px",
                  height: "40px",
                  background: "#FF720C",
                  borderRadius: "7px",
                  fontWeight: 700,
                  fontSize: "13px",
                  ":hover": { background: "#FF720C" },
                }}
              >
                ورود
              </Button>
              <Button
                variant="contained"
                sx={{
                  minWidth: "143px",
                  height: "40px",
                  background: "#FF720C",
                  borderRadius: "7px",
                  fontWeight: 700,
                  fontSize: "12px",
                  ":hover": { background: "#FF720C" },
                }}
              >
                محاسبه گر اقساط
              </Button>

              <Button
                variant="outlined"
                sx={{
                  minWidth: "121px",
                  height: "40px",
                  background: "#F6F6F6",
                  color: "#FF720C",
                  borderRadius: "7px",
                  fontSize: "12px",
                  border: "2px solid #FF720C",
                  ":hover": {
                    background: "#F6F6F6",
                    border: "2px solid #FF720C",
                  },
                }}
              >
                راهنمای ثبت نام
              </Button>
              <Button
                variant="outlined"
                sx={{
                  /*  width: "199px", */
                  height: "40px",
                  background: "#F6F6F6",
                  color: "#3E8BC9",
                  borderRadius: "7px",
                  fontSize: "12px",
                  border: "2px solid #3E8BC9",
                  ":hover": {
                    background: "#F6F6F6",
                    border: "2px solid #3E8BC9",
                  },
                }}
              >
                راهنمای خرید بعد از دریافت اعتبار
              </Button>
            </div>
            {/* part 3 */}
            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-[17px] lg:mt-[30px] md:mt-[25px] mt-[15px]">
              <div className="flex items-center justify-center gap-2 bg-[#fff] h-[50px] cursor-pointer rounded-[10px] text-[#3E8BC9] text-[11px] font-bold">
                <img
                  src="assest/images/planLoan/write.svg"
                  alt=""
                  loading="lazy"
                />
                <p>ثبت نام آسان</p>
              </div>
              <div className="flex items-center justify-center gap-2 bg-[#fff] h-[50px] cursor-pointer rounded-[10px] text-[#3E8BC9] text-[11px] font-bold">
                <img
                  src="assest/images/planLoan/time.svg"
                  alt=""
                  loading="lazy"
                />
                <p>تامین اعتبار سریع</p>
              </div>
              <div className="flex items-center justify-center gap-2 bg-[#fff] h-[50px] cursor-pointer rounded-[10px] text-[#3E8BC9] text-[11px] font-bold">
                <img
                  src="assest/images/planLoan/persons.svg"
                  alt=""
                  loading="lazy"
                />
                <p>بـدون نیاز به ضـامن </p>
              </div>
              <div className="flex items-center justify-center gap-2 bg-[#fff] h-[50px] cursor-pointer rounded-[10px] text-[#3E8BC9] text-[11px] font-bold">
                <img
                  src="assest/images/planLoan/dollar.svg"
                  alt=""
                  loading="lazy"
                />
                <p> قیمت های مناسب</p>
              </div>
            </div>
            {/* Part 4 */}
            <div className=" lg:mt-[30px] md:mt-[25px] mt-[15px]">
              <div className="flex flex-col">
                <p className="text-[16px] text-[#000000] font-bold mb-3 pr-5">
                  شـرایط و مدارک مـورد نیاز
                </p>
                <div className="flex flex-col rounded-[15px] bg-[#fff] p-6">
                  <div className="flex items-center gap-2">
                    <CircleIcon sx={{ width: "2px", height: "2px" }} />
                    <p className="lg:text-[16px] text-[14px] text-[#505050] font-normal">
                      چک صیادی بنفش به‌ نام خود متقاضی
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleIcon sx={{ width: "2px", height: "2px" }} />
                    <p className="lg:text-[16px] text-[14px] text-[#505050] font-normal">
                      امکان ثبت نام فقط برای گروه سنی ۱۸ الی ۷۰ سال می‌باشد.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Part 5 */}
            <DigiPayPlans />
            {/* Part 6 */}
            <div className=" lg:mt-[30px] md:mt-[25px] mt-[15px]">
              <div className="flex flex-col">
                <p className="text-[16px] text-[#000000] font-semibold mb-3 pr-5">
                  فرایند دریافت وام کالا
                </p>
                <div className="flex flex-col gap-3 rounded-[15px] bg-[#fff] py-6 px-[50px]">
                  <div className="flex items-center gap-2">
                    <CircleIcon sx={{ width: "2px", height: "2px" }} />
                    <p className="text-[18px] text-[#000000] font-normal">
                      پیش ثبت نام زیترو
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <CircleIcon sx={{ width: "2px", height: "2px" }} />
                      <p className="text-[18px] text-[#000000] font-normal">
                        تکمیل مراحل درخواست وام در دی جی پی
                      </p>
                    </div>
                    <div className="flex items-center mr-2">
                      <p className="text-[12px] text-[#646464] font-normal">
                        (در صورت شارژ کیف پول و دریافت پیامک)
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <CircleIcon sx={{ width: "2px", height: "2px" }} />
                      <p className="text-[18px] text-[#000000] font-normal">
                        ورود به سایت زیترو
                      </p>
                    </div>
                    <div className="flex items-center mr-2">
                      <p className="text-[12px] text-[#646464] font-normal">
                        (با همان شماره ثبت شده وارد سایت زیترو شوید)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleIcon sx={{ width: "2px", height: "2px" }} />
                    <p className="text-[18px] text-[#000000] font-normal">
                      انتخاب محصول و افزودن به سبد کالا
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <CircleIcon sx={{ width: "2px", height: "2px" }} />
                      <p className="text-[18x] text-[#000000] font-normal">
                        انتخاب گزینه”پرداخت اینترنتی دی جی پی”
                      </p>
                    </div>
                    <div className="flex items-center mr-2">
                      <p className="text-[12px] text-[#646464] font-normal">
                        (در مرحله “نحوه پرداخت”، در بخش “شیوه پرداخت” گزینه
                        “پرداخت اینترنتی دی جی پی” را انتخاب کنید)
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <CircleIcon sx={{ width: "2px", height: "2px" }} />
                      <p className="text-[18px] text-[#000000] font-normal">
                        انتخاب دکمه “پرداخت نهایی”
                      </p>
                    </div>
                    <div className="flex items-center mr-2">
                      <p className="text-[12px] text-[#646464] font-normal">
                        (بعد از زدن دکمه پرداخت نهایی پیامک حاوی کد تایید برای
                        شما ارسال می شود)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Part 7 */}
            <DigiPayQA />
            {/* Part 8 */}
            <div className=" lg:mt-[30px] md:mt-[25px] mt-[15px]">
              <div className="flex flex-col">
                <p className="text-[16px] text-[#000000] font-bold mb-3 pr-5">
                  راهنما
                </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 rounded-[10px] bg-[#fff] pt-6 px-[50px]">
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outlined"
                      sx={{
                        height: "40px",
                        background: "#fff",
                        borderRadius: "7px",
                        border: "1px solid #3E8BC9",
                        ":hover": {
                          background: "#fff",
                          border: "1px solid #3E8BC9",
                        },
                      }}
                    >
                      <img
                        src="assest/images/planLoan/digipay-logo.svg"
                        alt=""
                      />
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        /*  width: "199px", */
                        height: "40px",
                        background: "#3E8BC9",
                        color: "#fff",
                        borderRadius: "7px",
                        fontSize: "12px",

                        ":hover": {
                          background: "#3E8BC9",
                        },
                      }}
                    >
                      راهنمای ثبت نام
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outlined"
                      sx={{
                        height: "40px",
                        background: "#fff",
                        borderRadius: "7px",
                        border: "1px solid #3E8BC9",
                        ":hover": {
                          background: "#fff",
                          border: "1px solid #3E8BC9",
                        },
                      }}
                    >
                      <img src="assest/images/planLoan/zitro-logo.svg" alt="" />
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        /*  width: "199px", */
                        height: "40px",
                        background: "#3E8BC9",
                        color: "#fff",
                        borderRadius: "7px",
                        fontSize: "12px",

                        ":hover": {
                          background: "#3E8BC9",
                        },
                      }}
                    >
                      راهنمای ثبت نام
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outlined"
                      sx={{
                        height: "40px",
                        background: "#fff",
                        borderRadius: "7px",
                        border: "1px solid #3E8BC9",
                        ":hover": {
                          background: "#fff",
                          border: "1px solid #3E8BC9",
                        },
                      }}
                    >
                      <img src="assest/images/planLoan/balon-logo.svg" alt="" />
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        /*  width: "199px", */
                        height: "40px",
                        background: "#3E8BC9",
                        color: "#fff",
                        borderRadius: "7px",
                        fontSize: "12px",

                        ":hover": {
                          background: "#3E8BC9",
                        },
                      }}
                    >
                      راهنمای ثبت نام
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DigiPay;
