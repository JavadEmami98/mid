import React from "react";
import SwiperPay from "../SwiperPay/SwpierPay";
import { Button, Checkbox } from "@mui/material";

function DigiPayPlans() {
  return (
    <div className="lg:mt-[30px] md:mt-[25px] mt-[15px]">
      <div className="flex flex-col">
        <p className="text-[16px] text-[#000000] font-bold mb-3 pr-5">
          مـحاسـبه گر اقـساط
        </p>
        <div className="flex flex-col rounded-[15px] bg-[#fff] lg:p-9 md:p-8 p-6">
          <p className="text-[15px] text-[#646464] font-medium">
            مبلغ درخواستی ( از 10 تا 50 میلیون تومان )
          </p>
          <SwiperPay />
          <div className="grid grid-cols-3 lg:gap-10 md:gap-7 gap-4 mt-[10px]">
            <div className="flex items-center justify-center lg:px-[18px] md:px-[18px] px-[8px] lg:py-[13px] md:py-[13px] py-[8px] border-[1px] border-[#646464] bg-[#fff] rounded-[7px] lg:text-[14px] md:text-[14px] text-[10px] text-[#646464] font-bold cursor-pointer">
              6 قسط
            </div>
            <div className="flex items-center justify-center lg:px-[18px] md:px-[18px] px-[8px] lg:py-[13px] md:py-[13px] py-[8px]  bg-[#FF720C] rounded-[7px] lg:text-[14px] md:text-[14px] text-[10px] text-[#fff] font-bold cursor-pointer">
              9 قسط
            </div>
            <div className="flex items-center justify-center lg:px-[18px] md:px-[18px] px-[8px] lg:py-[13px] md:py-[13px] py-[8px] border-[1px] border-[#646464] bg-[#fff] rounded-[7px] lg:text-[14px] md:text-[14px] text-[10px] text-[#646464] font-bold cursor-pointer">
              12 قسط
            </div>
          </div>
        </div>
        <div className="lg:flex md:flex hidden flex-col gap-6 mt-[15px]">
          <div className="flex gap-3">
            <div className="flex justify-center items-center bg-[#fff]  rounded-[10px]">
              <img
                src="assest/images/planLoan/digipay-logo.svg"
                alt=""
                className="p-4"
              />
            </div>
            <div className="flex flex-col justify-center gap-2 items-center px-4 bg-[#fff]  rounded-[10px]">
              <img src="assest/images/planLoan/bank-saman.svg" alt="" />
              <p className="text-[8px] text-[#119B0F] font-semibold">سود 22%</p>
            </div>

            <div className="flex flex-col bg-[#fff]   rounded-[10px] px-6 py-4">
              <div className="flex items-center border-b border-[#D9D9D9]">
                <div className="flex flex-col p-6 border-l border-[#D9D9D9] gap-1 whitespace-nowrap">
                  <p className="text-[11px] text-[#000000] font-medium">
                    مبلغ اعتبار نهایی
                  </p>
                  <p className="text-[12px] text-[#6464] font-medium">
                    69,212,270 تومان{" "}
                  </p>
                </div>
                <div className="flex flex-col p-6 border-l border-[#D9D9D9] gap-1 whitespace-nowrap">
                  <p className="text-[11px] text-[#000000] font-medium">
                    پیش پرداخت
                  </p>
                  <p className="text-[12px] text-[#6464] font-medium">
                    69,212,270 تومان{" "}
                  </p>
                </div>
                <div className="flex flex-col p-6 gap-1 whitespace-nowrap">
                  <p className="text-[11px] text-[#000000] font-medium">
                    هزینه زیر ساخت
                  </p>
                  <p className="text-[12px] text-[#6464] font-medium">
                    69,212,270 تومان{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center p-3 whitespace-nowrap">
                <div className="flex items-center gap-2 border-l px-4">
                  <p className="text-[11px] text-[#000000] font-medium">
                    مبلغ نهایی هر قسط
                  </p>
                  <p className="text-[12px] text-[#6464] font-medium">
                    69,212,270 تومان{" "}
                  </p>
                </div>
                <div className="flex items-center gap-2 pr-4">
                  <p className="text-[11px] text-[#000000] font-medium">
                    بازپرداخت نهایی
                  </p>
                  <p className="text-[12px] text-[#6464] font-medium">
                    69,212,270 تومان{" "}
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="contained"
              sx={{
                minWidth: "46px",
                height: "full",
                background: "#FF720C",
                borderRadius: "10px",
                fontWeight: 500,
                fontSize: "10px",
                ":hover": { background: "#FF720C" },
              }}
            >
              درخـواست
            </Button>
          </div>
          <div className="flex gap-3">
            <div className="flex justify-center items-center bg-[#fff]  rounded-[10px]">
              <img
                src="assest/images/planLoan/balon-logo.svg"
                alt=""
                className="p-4"
              />
            </div>
            <div className="flex flex-col justify-center gap-2 items-center px-4 bg-[#fff]  rounded-[10px]">
              <img src="assest/images/planLoan/bank-melat.svg" alt="" />
              <p className="text-[8px] text-center whitespace-nowrap text-[#119B0F] font-semibold">
                سود 23%
              </p>
            </div>

            <div className="flex flex-col bg-[#fff]   rounded-[10px] px-6 py-4">
              <div className="flex items-center border-b border-[#D9D9D9]">
                <div className="flex flex-col p-6 border-l border-[#D9D9D9] gap-1 whitespace-nowrap">
                  <p className="text-[11px] text-[#000000] font-medium">
                    مبلغ اعتبار نهایی
                  </p>
                  <p className="text-[12px] text-[#6464] font-medium">
                    69,212,270 تومان{" "}
                  </p>
                </div>
                <div className="flex flex-col p-6 border-l border-[#D9D9D9] gap-1 whitespace-nowrap">
                  <p className="text-[11px] text-[#000000] font-medium">
                    پیش پرداخت
                  </p>
                  <p className="text-[12px] text-[#6464] font-medium">
                    0 تومان{" "}
                  </p>
                </div>
                <div className="flex flex-col p-6 gap-1 whitespace-nowrap">
                  <p className="text-[11px] text-[#000000] font-medium">
                    هزینه زیر ساخت
                  </p>
                  <p className="text-[6px] text-[#6464] font-medium">
                    مبلغ 564654 تومان به عنوان هزینه عملیات <br /> به اقساط
                    ماهیانه شما اضافه خواهد شد
                  </p>
                </div>
              </div>
              <div className="flex items-center p-3 whitespace-nowrap">
                <div className="flex items-center gap-2 border-l px-4">
                  <p className="text-[11px] text-[#000000] font-medium">
                    مبلغ نهایی هر قسط
                  </p>
                  <p className="text-[12px] text-[#6464] font-medium">
                    69,212,270 تومان{" "}
                  </p>
                </div>
                <div className="flex items-center gap-2 pr-4">
                  <p className="text-[11px] text-[#000000] font-medium">
                    بازپرداخت نهایی
                  </p>
                  <p className="text-[12px] text-[#6464] font-medium">
                    69,212,270 تومان{" "}
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="contained"
              sx={{
                minWidth: "46px",
                height: "full",
                background: "#FF720C",
                borderRadius: "10px",
                fontWeight: 500,
                fontSize: "10px",
                ":hover": { background: "#FF720C" },
              }}
            >
              درخـواست
            </Button>
          </div>
          <div className="flex gap-3">
            <div className="flex justify-center px-4 items-center bg-[#fff]  rounded-[10px]">
              <img src="assest/images/planLoan/zitro.svg" alt="" />
            </div>
            <div className="flex flex-col justify-center gap-2 items-center px-4 bg-[#fff]  rounded-[10px]">
              <img src="assest/images/planLoan/bank-melat.svg" alt="" />
              <p className="text-[8px] text-center whitespace-nowrap text-[#119B0F] font-semibold">
                سود 23%
              </p>
            </div>
            <div className="flex flex-col bg-[#fff]   rounded-[10px] px-6 py-4">
              <div className="flex items-center border-b border-[#D9D9D9]">
                <div className="flex flex-col p-6 border-l border-[#D9D9D9] gap-1 whitespace-nowrap">
                  <p className="text-[11px] text-[#000000] font-medium">
                    مبلغ اعتبار نهایی
                  </p>
                  <p className="text-[12px] text-[#6464] font-medium">
                    69,212,270 تومان{" "}
                  </p>
                </div>
                <div className="flex flex-col p-6 border-l border-[#D9D9D9] gap-1 whitespace-nowrap">
                  <p className="text-[11px] text-[#000000] font-medium">
                    پیش پرداخت
                  </p>
                  <p className="text-[12px] text-[#6464] font-medium">
                    0 تومان{" "}
                  </p>
                </div>
                <div className="flex flex-col p-6 gap-1 whitespace-nowrap">
                  <p className="text-[11px] text-[#000000] font-medium">
                    هزینه زیر ساخت
                  </p>
                  <p className="text-[6px] text-[#6464] font-medium">
                    مبلغ 564654 تومان به عنوان هزینه عملیات <br /> به اقساط
                    ماهیانه شما اضافه خواهد شد
                  </p>
                </div>
              </div>
              <div className="flex items-center p-3 whitespace-nowrap">
                <div className="flex items-center gap-2 border-l px-4">
                  <p className="text-[11px] text-[#000000] font-medium">
                    مبلغ نهایی هر قسط
                  </p>
                  <p className="text-[12px] text-[#6464] font-medium">
                    69,212,270 تومان{" "}
                  </p>
                </div>
                <div className="flex items-center gap-2 pr-4">
                  <p className="text-[11px] text-[#000000] font-medium">
                    بازپرداخت نهایی
                  </p>
                  <p className="text-[12px] text-[#6464] font-medium">
                    69,212,270 تومان{" "}
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="contained"
              sx={{
                minWidth: "46px",
                height: "full",
                background: "#FF720C",
                borderRadius: "10px",
                fontWeight: 500,
                fontSize: "10px",
                ":hover": { background: "#FF720C" },
              }}
            >
              درخـواست
            </Button>
          </div>
        </div>
        {/* mobile */}
        <div className="block lg:hidden md:hidden">
          <div className="rounded-[20px] mt-[25px]">
            <div className="flex flex-col bg-[#fff] rounded-[15px] p-[20px]">
              <div className="border rounded-[10px] border-[#EEEEEE] flex justify-between p-[15px]">
                <div className="flex flex-col gap-3">
                  <p className="text-[16px] text-[#000000] font-medium">
                    راهنمای پیش از درخواست اعتبار
                  </p>
                  <p className="text-[9px] text-[#646464] font-medium">
                    برای ثبت درخواست خود ابتدا بهتر است با مفاهیمی مانند هزینه‌
                    عملیات و اعتبارسنجی <br />
                    آشنا شوید. در ادامه نیز فرایند ثبت‌نام خود را تکمیل کنید.
                  </p>
                </div>
                <img src="assest/images/planLoan/bank-saman.svg" alt="" />
              </div>
              <div className="flex flex-col mt-[12px]">
                <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
                  <div className="flex flex-col items-start">
                    <p className="text-[11px] text-[#000000] font-medium">
                      مبلغ اعتبار نهایی
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-[12px] text-[#646464] font-medium">
                      69,212,270
                    </p>
                    <p className="text-[10px] text-[#646464] font-medium">
                      تومان{" "}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
                  <div className="flex flex-col items-start">
                    <p className="text-[11px] text-[#000000] font-medium">
                      پیش پرداخت
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-[12px] text-[#646464] font-medium">
                      69,212,270
                    </p>
                    <p className="text-[10px] text-[#646464] font-medium">
                      تومان{" "}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
                  <div className="flex flex-col items-start">
                    <p className="text-[11px] text-[#000000] font-medium">
                      هزینه زیر ساخت
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-[12px] text-[#646464] font-medium">
                      69,212,270
                    </p>
                    <p className="text-[10px] text-[#646464] font-medium">
                      تومان{" "}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
                  <div className="flex flex-col items-start">
                    <p className="text-[11px] text-[#000000] font-medium">
                      مبلغ نهایی هر قسط
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-[12px] text-[#646464] font-medium">
                      69,212,270
                    </p>
                    <p className="text-[10px] text-[#646464] font-medium">
                      تومان{" "}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b-[0.5px] py-[15px] border-[#D9D9D9]">
                  <div className="flex flex-col items-start">
                    <p className="text-[11px] text-[#000000] font-medium">
                      بازپرداخت نهایی
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-[12px] text-[#646464] font-medium">
                      69,212,270
                    </p>
                    <p className="text-[10px] text-[#646464] font-medium">
                      تومان{" "}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col  justify-between items-center my-[12px]">
                  <div className="flex flex-col gap-3 items-start w-full">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        sx={{
                          width: "7px !important",
                          height: "7px !important",
                        }}
                      />
                      <p className="text-[#646464] text-[10px]">
                        داری دسته چک به نام خودم هستم
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Checkbox
                        sx={{
                          width: "7px !important",
                          height: "7px !important",
                        }}
                      />
                      <p className="text-[#646464] text-[10px]">
                        {" "}
                        مفاهیم را خواندم و قوانین را پذیرفتم
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 mt-[10px]">
                    <Button
                      variant="outlined"
                      sx={{
                        width: "117px",
                        height: "42px",
                        background: "#fff",
                        color: "#4E8AFF",
                        borderRadius: "7px",
                        fontSize: "12px",
                        ":hover": { background: "#fff" },
                      }}
                    >
                      انصراف
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        width: "143px",
                        height: "42px",
                        background: "#FF720C",
                        borderRadius: "7px",
                        fontSize: "12px",
                        ":hover": { background: "#FF720C" },
                      }}
                    >
                      تایید و ادامه
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigiPayPlans;
