import { render, fireEvent } from "@testing-library/react";
import React from "react";
import ControlButton, { GlassArBtnProps } from ".";

describe("ThreedView", () => {
  let props: GlassArBtnProps;
  beforeEach(() => {
    props = {
      backgroundColor: "red",
      color: "blue",
      onClick: jest.fn(),
      className: "test",
      children: "test",
    };
  });

  describe("ThreedView Button Render", () => {
    it("Add a Button", () => {
      const { container } = render(<ControlButton {...props} />);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(".JeelizVTOWidgetButton")).toBeTruthy();
    });
  });
  describe("ThreedView Button Call", () => {
    it("Call Button", () => {
      const { container } = render(<ControlButton {...props} />);
      // eslint-disable-next-line testing-library/prefer-screen-queries, testing-library/no-container, testing-library/no-node-access
      const button: any = container.querySelector(".JeelizVTOWidgetButton");
      fireEvent.click(button);
      expect(props.onClick).toHaveBeenCalled();
    });
  });
  describe("ThreedView Button Click", () => {
    it("Click Button", () => {
      const { container } = render(<ControlButton {...props} />);
      // eslint-disable-next-line testing-library/prefer-screen-queries, testing-library/no-container, testing-library/no-node-access
      const button: any = container.querySelector(".JeelizVTOWidgetButton");
      fireEvent.click(button);
      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });
  describe("ThreedView Button Snap", () => {
    it("Snap Button", () => {
      const { container } = render(<ControlButton {...props} />);
      // eslint-disable-next-line testing-library/no-node-access
      expect(container.firstChild).toMatchInlineSnapshot(`
        <button
          class="JeelizVTOWidgetButton test"
          style="background-color: red; color: blue;"
        >
          test
        </button>
      `);
    });
    it("Snap Button props change", () => {
      props.backgroundColor = "black";
      props.color = "white";
      props.className = "checkClass";
      // eslint-disable-next-line testing-library/no-node-access
      props.children = "model btn";

      const { container } = render(<ControlButton {...props} />);
      // eslint-disable-next-line testing-library/no-node-access
      expect(container.firstChild).toMatchInlineSnapshot(`
        <button
          class="JeelizVTOWidgetButton checkClass"
          style="background-color: black; color: white;"
        >
          model btn
        </button>
      `);
    });
  });
});
