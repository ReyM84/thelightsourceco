import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import SliderContent from "./SliderComponents/SliderContent";

const Slider = () => {
  const getWidth = () => window.innerWidth;

  const [state, transition] = state;

  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth()}
      >
        {/* */}
      </SliderContent>
    </div>
  );
};

const SliderCSS = css`
position: relavtive;
height: 100vh;
width 100vh;
margin: 0 auto;
overflow: hidden;
`;

export default Slider;
