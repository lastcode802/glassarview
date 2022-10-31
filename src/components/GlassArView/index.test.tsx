import { render } from "@testing-library/react";
import React from "react";
import GlassArView, { GlassArViewProps } from ".";


describe("ThreedView", () => {
    let props: GlassArViewProps;
    beforeEach(() => {
      props = {
        modelname: 'rayban_aviator_or_vertFlash',
        canvaswidth: 500,
        canvasheight: 500,
        buttonFontColor: 'white',
        buttonBackgroundColor: '#FFE5B4'
      };
    });
  
    describe("ThreedView Button Render", () => {
      it("Add a Button", () => {
        const { container } = render(<GlassArView {...props} />);
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        expect(container.firstChild).toMatchInlineSnapshot()
        
      });
    });
   
  });
  