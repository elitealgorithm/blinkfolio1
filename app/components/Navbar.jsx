"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setopen] = useState(false);
  //   console.log(open);

  return (
    <header
      name="Header"
      className=" place-content-center items-center backdrop-filter backdrop-blur bg-[rgba(5,_7,_26,_0.8)] flex flex-[0_0_auto] [flex-flow:column] gap-0 h-min left-2/4 overflow-visible p-0 md:overflow-hidden md:px-0 md:py-[30px] fixed top-0 -translate-x-1/2 w-[390px] md:w-full z-10 "
    >
      <div
        name="Container"
        className=" place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-[10px] h-min max-w-[390px] overflow-visible md:max-w-[1200px] md:overflow-hidden p-0 relative w-full"
      >
        <div className=" contents">
          <div className=" flex-[1_0_0px] h-auto relative w-px">
            <nav
              data-hide-scrollbars="true"
              className=" items-center flex flex-col py-[15px] md:[flex-flow:row] h-min overflow-visible md:p-0 relative w-full [box-shadow:none] "
            >
              <div className=" items-center flex flex-none md:flex-[1_0_0px] justify-between flex-row md:gap-[10px] h-min overflow-visible px-[20px] w-full md:p-0 relative md:w-px ">
                <div className=" flex-[0_0_auto] h-[56px] relative w-[163px] ">
                  <a
                    href="./"
                    tabIndex={0}
                    className="  block h-full overflow-visible relative w-full "
                  >
                    <div className=" absolute [border-radius:inherit] top-[0] right-[0] bottom-[0] left-[0]">
                      <img
                        decoding="async"
                        sizes="163px"
                        src="https://framerusercontent.com/images/WRIw8Ur2Ge4d1dusiGoTGs1So.svg"
                        alt="main-logo"
                        className=" block w-full h-full [border-radius:inherit] object-center object-contain"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex-none md:hidden h-[40px] relative w-[40px]">
                  <div
                    onClick={() => setopen(!open)}
                    data-framer-name="Close"
                    data-highlight="true"
                    tabIndex={0}
                    className="box-border [-webkit-font-smoothing:inherit] cursor-pointer h-full overflow-hidden relative w-full opacity-100"
                  >
                    <div
                      data-framer-name="Bottom"
                      style={{
                        transform: open
                          ? "translate3d(0px,-4.68507px,0px) rotate(-45deg)"
                          : null,
                        top: !open
                          ? "calc(62.50000000000002% - 2px / 2)"
                          : "calc(50.00000000000002% - 2px / 2)",
                      }}
                      className="box-border [-webkit-font-smoothing:inherit] bg-[#9ea3bf] flex-[0_0_auto] h-[2px] left-[calc(50% - 10px)] overflow-hidden absolute w-[20px] rounded-[50%_/_500%] duration-300 origin-[50%_50%_0px]"
                    />
                    <div
                      style={{
                        transform: open
                          ? "translate3d(0px,-4.68507px,0px) rotate(45deg)"
                          : null,
                        top: !open
                          ? "calc(37.50000000000002% - 2px / 2)"
                          : "calc(50.00000000000002% - 2px / 2)",
                      }}
                      data-framer-name="Top"
                      className="box-border [-webkit-font-smoothing:inherit] bg-[#9ea3bf] flex-[0_0_auto] h-[2px] left-[calc(50% - 10px)] overflow-hidden absolute  w-[20px] rounded-[50%_/_500%] duration-300 origin-[50%_50%_0px]"
                    />
                  </div>
                </div>
              </div>
              {open && (
                <div
                  data-framer-name="Menu"
                  data-border="true"
                  className="box-border [-webkit-font-smoothing:inherit] overflow-hidden items-start flex flex-[0_0_auto] flex-col bg-[#05071a] border-[#1c244c] border-[1px] gap-[8px] justify-end  h-min px-[32px] py-[24px] overflow-y-auto  absolute w-full z-10  -bottom-[150px]  left-2/4  rounded-[16px] [box-shadow:rgb(16,_22,_54)_0px_-10px_40px_0px_inset] -translate-x-1/2 opacity-100"
                >
                  <div className="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-auto opacity-100">
                    <a
                      data-framer-name="Primary"
                      href="./#features"
                      className="box-border [-webkit-font-smoothing:inherit] flex items-center justify-start cursor-pointer flex-row gap-[8px] h-min overflow-visible p-0 relative no-underline w-min opacity-100"
                    >
                      <div
                        data-framer-component-type="RichTextContainer"
                        className="box-border [-webkit-font-smoothing:inherit]  flex-[0_0_auto] h-auto select-none whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100"
                      >
                        <p
                          data-styles-preset="vi7hyoDN2"
                          className="mobnavtext"
                        >
                          Benefits
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-auto opacity-100">
                    <a
                      data-framer-name="Primary"
                      href="./#how-it-works"
                      className="box-border [-webkit-font-smoothing:inherit] flex items-center cursor-pointer [flex-flow:row] gap-[8px] h-min overflow-visible p-0 relative no-underline w-min opacity-100"
                    >
                      <div
                        data-framer-component-type="RichTextContainer"
                        className="box-border [-webkit-font-smoothing:inherit]  flex-[0_0_auto] h-auto select-none whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100"
                      >
                        <p
                          data-styles-preset="vi7hyoDN2"
                          className="mobnavtext"
                        >
                          How it works
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-auto opacity-100">
                    <a
                      data-framer-name="Primary"
                      href="./#faqs"
                      className="box-border [-webkit-font-smoothing:inherit] flex items-center cursor-pointer [flex-flow:row] gap-[8px] h-min overflow-visible p-0 relative no-underline w-min opacity-100"
                    >
                      <div
                        data-framer-component-type="RichTextContainer"
                        className="box-border [-webkit-font-smoothing:inherit]  flex-[0_0_auto] h-auto select-none whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100"
                      >
                        <p
                          data-styles-preset="vi7hyoDN2"
                          className="mobnavtext"
                        >
                          FAQs
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              )}
              <div className=" items-center hidden md:flex flex-[0_0_auto] [flex-flow:row] gap-[33px] h-min overflow-hidden p-0 relative w-min bg-[rgba(0,_0,_0,_0)] rounded-none z-[1] [box-shadow:none] ">
                <div className=" linkparent ">
                  <a
                    href="./#features"
                    className=" flex items-center justify-start cursor-pointer [flex-flow:row] gap-[8px] h-min overflow-visible p-0 relative no-underline w-min "
                  >
                    <div className="  linktextwrap ">
                      <p data-styles-preset="vi7hyoDN2" className="  navtext">
                        Benefits
                      </p>
                    </div>
                  </a>
                </div>
                <div className=" linkparent ">
                  <a href="./#how-it-works" className="link ">
                    <div className="  linktextwrap ">
                      <p data-styles-preset="vi7hyoDN2" className="  navtext">
                        How it works
                      </p>
                    </div>
                  </a>
                </div>
                <div className=" linkparent ">
                  <a href="./#faqs" className="link ">
                    <div className="  linktextwrap ">
                      <p data-styles-preset="vi7hyoDN2" className="  navtext">
                        FAQs
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className=" items-center hidden md:flex flex-[1_0_0px] [flex-flow:row] gap-[24px] h-min min-h-[59px] overflow-visible p-0 relative w-px " />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
