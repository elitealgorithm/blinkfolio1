import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex items-center flex-none flex-col h-min justify-center overflow-visible max79:p-[100px_0_0] b7611:p-[120px_0_10px] pt-[120px] relative w-full">
      <div className="flex z-[1] flex-none items-center flex-col max79:gap-[30px] max79:p-[10px_0_40px] gap-[60px] justify-center b7611:gap-[50px] b7611:p-[50px_0_40px] py-[40px] relative b7611:w-[73%] w-full">
        <div
          data-name="Secton Title"
          name="Secton Title"
          className=" place-content-center items-center flex flex-[0_0_auto] flex-col gap-[32px] h-min overflow-hidden max79:p-[0_20px] max79:w-full p-0 relative b7611:w-[73%] w-[820px]"
        >
          <div
            data-name="Title"
            name="Title"
            className=" place-content-center items-center justify-center flex flex-[0_0_auto]  gap-[24px] h-min overflow-hidden p-0 relative w-full"
          >
            <div
              data-border="true"
              data-name="Overlay"
              name="Overlay"
              className=" place-content-center items-center justify-center bg-[rgb(6,_10,_30)] rounded-[32px] [box-shadow:rgba(58,_110,_242,_0.41)_0px_2px_6px_inset] flex flex-[0_0_auto] gap-[10px] h-[15%] overflow-hidden pt-[6px] px-[16px] pb-[4px] border border-[#1c244c] relative w-min"
            >
              <div
                data-component-type="RichTextContainer"
                className=" relative flex-[0_0_auto] h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none"
              >
                <p
                  data-styles-preset="TbmJG1iM0"
                  className=" m-0 p-0 text-white font-[300] text-[14px] leading-[1.7em] text-start"
                >
                  Launching soon
                </p>
              </div>
            </div>
          </div>
          <div
            data-name="Contant"
            name="Contant"
            className=" place-content-center items-center justify-center flex flex-[0_0_auto] flex-col  gap-[10px] h-min overflow-hidden p-0 relative w-full"
          >
            <div className="contents">
              <div
                data-component-type="RichTextContainer"
                className=" relative flex-[0_0_auto] h-auto whitespace-pre-wrap w-full break-words outline-[none] flex flex-col justify-start flex-shrink-0 transform-none"
              >
                <h1
                  data-styles-preset="Z9AZtUOya"
                  className=" m-0 p-0 text-white text-balance b7611:text-[52px] text-[64px] font-[400] tracking-[-3px] leading-[1.15em] text-center"
                >
                  Get Stunning Developer Portfolio in Minutes
                </h1>
              </div>
            </div>
            <div
              data-component-type="RichTextContainer"
              className="  flex-[0_0_auto] h-auto whitespace-pre-wrap max79:w-full w-[69%] break-words outline-[none] flex flex-col justify-start flex-shrink-0 transform-none"
            >
              <p
                data-styles-preset="vi7hyoDN2"
                className=" m-0 p-0 text-center text-[#9ea3bf] leading-[1.8em] text-[16px] font-normal"
              >
                Stand out to employers with portfolio
              </p>
              <p
                data-styles-preset="vi7hyoDN2"
                className=" text-center text-[#9ea3bf] leading-[1.8em] text-[16px] font-normal"
              >
                that highlights your best projects and skills
              </p>
              <p
                data-styles-preset="vi7hyoDN2"
                className="text-center text-[#9ea3bf] leading-[1.8em] text-[16px] font-normal"
              >
                — no design skills needed
              </p>
            </div>
          </div>
          <form className=" place-content-center items-center justify-center flex flex-[0_0_auto] max79:flex-col [flex-flow:row] gap-[8px] h-min overflow-hidden p-0 relative w-full">
            <div className=" flex-[3.5_0_0px] max79:flex-none max79:w-full h-[60px] relative w-px overflow-hidden   bg-[rgba(187,187,187,.15)] [transition-property:background,_box-shadow] rounded-[12px]">
              <input
                type="email"
                required=""
                name="Email"
                placeholder="jane.com"
                defaultValue=""
                fdprocessedid="lsc1j8"
                className=" p-[12px_12px_12px_24px]   font-normal  text-[14px] text-[#999999] overflow-ellipsis  text-[var(--input-font-size)]  bg-transparent border-[none]  whitespace-nowrap  w-full h-full  leading-[1.2em]"
              />
            </div>
            <div className=" contents">
              <div className=" self-stretch flex-[1_0_0px] max79:flex-none max79:w-full max79:h-[60px] max79:items-[unset] h-auto relative w-px">
                <button
                  type="submit"
                  data-border="true"
                  data-reset="button"
                  tabIndex={0}
                  fdprocessedid="iwzlxd"
                  data-name="Default"
                  className=" text-[12px] border-[rgba(158,163,191,.25)] border bg-[rgb(58,110,242)] font-[sans-serif]  p-0 bg-none place-content-center items-center cursor-pointer flex [flex-flow:row] gap-0 h-full overflow-visible justify-center relative w-full rounded-[12px] opacity-100"
                >
                  <div
                    data-component-type="RichTextContainer"
                    className=" relative flex-[0_0_auto] h-auto select-none whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100"
                  >
                    <p
                      data-styles-preset="PdokfQujq"
                      className=" text-[16px] leading-[1.7em] text-start font-medium text-[#9ea3bf]"
                    >
                      Get Access Now
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex-none max79:h-[257px] max79:w-[352px] h-[706px] relative b7611:h-[480px] b7611:w-[657px] w-[967px]">
          <video
            src="https://framerusercontent.com/assets/pC8lRLkpc2i1p1fgECgSV3JAHow.mp4"
            loop
            preload="auto"
            muted
            playsInline
            style={{
              cursor: "auto",
              width: "100%",
              height: "100%",
              borderRadius: 30,
              display: "block",
              objectFit: "cover",
              backgroundColor: "rgba(0, 0, 0, 0)",
              objectPosition: "50% 50%",
            }}
          />
        </div>
      </div>
      <div className="contents">
        <div
          className="aspect-[1.3333333333333333_/_1] max79:bottom-[-51px] max79:h-auto b7611:bottom-[-102px] b7611:h-auto bottom-[-400px] blur-none flex-none h-auto absolute -translate-x-2/4 w-full z-0 left-2/4
   "
        >
          <div className="absolute inset-0">
            <img
              decoding="async"
              sizes="100vw"
              srcSet="https://framerusercontent.com/images/0pkkUPiiBy68AdWhcnSLJijrCvQ.svg?scale-down-to=1024 831w,https://framerusercontent.com/images/0pkkUPiiBy68AdWhcnSLJijrCvQ.svg 1440w"
              src="https://framerusercontent.com/images/0pkkUPiiBy68AdWhcnSLJijrCvQ.svg"
              alt=""
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center center",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
