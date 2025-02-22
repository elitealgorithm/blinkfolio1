"use client";
import React, { useEffect, useRef, useState } from "react";

const FaqIndividual = () => {
  const [open, setopen] = useState(false);
  const solref = useRef(null);
  const handleClick = () => {
    setopen(!open);
    // console.log(solref.current);
    // console.log(open);

    if (solref.current) {
      solref.current.style.transitionDuration = "500ms";
      solref.current.style.height = !open
        ? `${solref.current.scrollHeight}px`
        : "0px";
      //   solref.current.style.display = !open && "hidden";
    }
  };
  useEffect(() => {
    // if (!open) {
    solref.current.style.height = "0px";
    // } else {
    //   solref.current.style.height = "min-content";
    // }
  }, []);
  return (
    <div
      data-framer-name="SIngle FAQ"
      className=" place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-[10px] h-min overflow-visible p-0 relative w-full rounded-tl-[16px] rounded-tr-[16px] transform-none origin-[50%_50%_0px]"
    >
      <div className=" flex-[1_0_0px] h-auto relative w-px transform-none origin-[50%_50%_0px]">
        <div
          data-framer-name="Close"
          data-highlight="true"
          tabIndex={0}
          className=" items-start cursor-pointer flex [flex-flow:column] gap-0 h-min overflow-hidden px-0 py-[32px] relative w-full rounded-[16px] transform-none origin-[50%_50%_0px]"
        >
          <div
            data-framer-name="Content & Icon"
            data-highlight="true"
            tabIndex={0}
            className=" items-start cursor-pointer flex flex-[0_0_auto] [flex-flow:row] gap-[16px] h-min overflow-visible p-0 relative w-full transform-none origin-[50%_50%_0px]"
          >
            <div
              onClick={handleClick}
              data-framer-name="Content"
              className=" place-content-center items-center justify-center flex flex-[1_0_0px] [flex-flow:column] gap-[16px] h-min overflow-visible p-0 relative w-px transform-none origin-[50%_50%_0px]"
            >
              <div
                data-framer-name="Question"
                className=" items-center flex flex-[0_0_auto] [flex-flow:row] gap-[24px] h-min overflow-visible p-0 relative w-full transform-none origin-[50%_50%_0px]"
              >
                <div
                  data-framer-component-type="RichTextContainer"
                  className="  flex-[1_0_0px] h-auto whitespace-pre-wrap w-px break-words outline-[none] flex flex-col justify-start flex-shrink-0 transform-none origin-[50%_50%_0px]"
                >
                  <p
                    data-styles-preset="f3rFV3raZ"
                    className="text-[#9ea3bf] text-[20px] font-normal leading-[1.7em] tracking-normal text-start"
                  >
                    Can't I just code it myself?
                  </p>
                </div>
                <div
                  data-framer-name="Icon"
                  className=" place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-0 h-min overflow-hidden pt-[4px] px-0 pb-0 relative w-min rounded-[100px] transform-none origin-[50%_50%_0px]"
                >
                  <div
                    data-framer-name="Icon"
                    className=" flex-[0_0_auto] h-[24px] relative w-[24px] transform-none origin-[50%_50%_0px]"
                  >
                    <div
                      data-framer-background-image-wrapper="true"
                      className=" absolute [border-radius:inherit]"
                    >
                      <img
                        decoding="async"
                        loading="lazy"
                        sizes="24px"
                        src="https://framerusercontent.com/images/dDFnN7NQRlS8lCvI0dkVOJZAUnw.svg"
                        alt=""
                        className=" block w-full h-full [border-radius:inherit] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-framer-name="answer"
                className={`bg-[#0a0e28] rounded-[16px] px-[24px] transform-none  ${
                  open ? "py-[24px] " : "py-0"
                }  flex justify-center items-start gap-[10px]  duration-500 overflow-hidden relative w-full `}
              >
                <div
                  ref={solref}
                  data-framer-component-type="RichTextContainer"
                  className=" flex-[1_0_0] w-px h-full relative whitespace-pre-wrap outline-[none] flex flex-col justify-start flex-shrink-0 transform-none origin-[50%_50%_0px]"
                >
                  <p
                    data-styles-preset="vi7hyoDN2"
                    className=" text-[#9ea3bf] text-[16px] h-full
                     font-normal leading-[1.8em] tracking-normal text-start"
                  >
                    While coding your own portfolio is an option, BlinkFolio
                    streamlines the process, saving you valuable time and
                    effort. Our AI-driven content generation and professionally
                    designed templates ensure your portfolio stands out,
                    allowing you to focus on what you do best—coding!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqIndividual;
