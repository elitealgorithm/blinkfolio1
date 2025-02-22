import React from "react";
import FaqIndividual from "./FaqIndividual";

const Faqs = () => {
  return (
    <section
      data-framer-name="FAQs"
      id="faqs"
      name="FAQs"
      className=" bg-[#05071a] place-content-center items-center justify-center flex flex-[0_0_auto] flex-col gap-0 h-min overflow-hidden pt-[120px] px-[30px] pb-0 relative w-full opacity-100 transform-none"
    >
      <div
        data-framer-name="Container"
        name="Container"
        className=" items-start justify-center flex flex-[0_0_auto] [flex-flow:row] gap-0 h-min max-w-[1200px] overflow-visible pt-0 px-0 pb-[10px] relative w-full"
      >
        <div
          data-framer-name="Section Title"
          name="Section Title"
          className=" items-start flex flex-[0_0_auto] [flex-flow:column] gap-[16px] h-min overflow-hidden pl-0 pr-[40px] py-0 relative w-[41%]"
        >
          <div
            data-framer-component-type="RichTextContainer"
            className=" relative flex-[0_0_auto] h-auto whitespace-pre-wrap w-full break-words outline-[none] flex flex-col justify-start flex-shrink-0 transform-none"
          >
            <h2
              data-styles-preset="HUWPt_ptU"
              className="text-[#9ea3bf] text-[48px] tracking-[-2px] leading-[1.2em] text-start "
            >
              Common Questions
            </h2>
          </div>
          <div
            data-framer-component-type="RichTextContainer"
            className="  flex-[0_0_auto] h-auto whitespace-pre-wrap w-[83%] break-words outline-[none] flex flex-col justify-start flex-shrink-0 transform-none"
          >
            <p
              data-styles-preset="vi7hyoDN2"
              className="text-[#9ea3bf] text-[16px] leading-[1.8] tracking-normal text-start"
            >
              Haven’t found what you’re looking for? Contact us
            </p>
          </div>
        </div>
        <div
          data-framer-name="Section Title"
          name="Section Title"
          className=" items-end flex flex-[0_0_auto] [flex-flow:column] gap-[16px] h-min overflow-hidden p-0 relative w-[59%]"
        >
          <div className=" contents">
            <div
              data-framer-name="Faq Area"
              name="Faq Area"
              className=" flex-[0_0_auto] h-auto relative w-full"
            >
              <div
                name="Faq Area"
                data-framer-name="Desktop"
                className=" place-content-center items-center flex [flex-flow:column] gap-0 h-min overflow-hidden p-0 relative w-full transform-none origin-[50%_50%_0px]"
              >
                <FaqIndividual />
                {/* <div
                  data-border="true"
                  data-framer-name="SIngle FAQ"
                  className=" place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-[10px] h-min overflow-visible p-0 relative w-full transform-none origin-[50%_50%_0px]"
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
                          data-framer-name="Content"
                          className=" place-content-center items-center flex flex-[1_0_0px] [flex-flow:column] gap-[16px] h-min overflow-visible p-0 relative w-px transform-none origin-[50%_50%_0px]"
                        >
                          <div
                            data-framer-name="Question"
                            className=" items-center flex flex-[0_0_auto] [flex-flow:row] gap-[24px] h-min overflow-visible p-0 relative w-full transform-none origin-[50%_50%_0px]"
                          >
                            <div
                              data-framer-component-type="RichTextContainer"
                              className=" absolute flex-[1_0_0px] h-auto whitespace-pre-wrap w-px break-words outline-[none] flex flex-col justify-start flex-shrink-0 transform-none origin-[50%_50%_0px]"
                            >
                              <p
                                data-styles-preset="f3rFV3raZ"
                                className=" m-0 p-0 font-[var(--framer-blockquote-font-family,_var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif))] font-[var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))] text-[calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1))] tracking-[var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0))] leading-[var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em))] [font-variation-settings:var(--framer-font-variation-axes,_normal)]"
                              >
                                But what if someone has the same portfolio?
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
