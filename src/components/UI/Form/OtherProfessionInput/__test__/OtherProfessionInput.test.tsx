import React from "react";

import {
  RenderResult,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { staticQueryMock } from "../../../services/test-services";

import OtherProfessionInput from "..";
import { specialtyOptionsQuery } from "./specialtyOptionsQueryMock";

staticQueryMock(specialtyOptionsQuery);

const onBlurHandler = jest.fn();
const onFocusHandler = jest.fn();
const onSetValueHandler = jest.fn();
const onHandleKeyUp = jest.fn();

const setup = (props = {} as Partial<OtherProfessionInput.MainArgsType>) => {
  const internalProps = {
    globalProfession: "7",
    hasError: false,
    inputVal: "",
    handlers: {
      onBlurHandler,
      onFocusHandler,
      onSetValueHandler,
      onHandleKeyUp,
    },
    ...props,
  };

  return render(<OtherProfessionInput {...internalProps} />);
};

describe("OtherProfessionInput handlers", () => {
  let tree: RenderResult<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement,
    HTMLElement
  >;

  beforeEach(() => {
    tree = setup();
  });

  it("should match snapshot", () => {
    expect(tree).toMatchSnapshot();
  });

  test("onBlurHandler should be call once on blur", () => {
    fireEvent.blur(screen.getByTestId("listbox-input"));
    expect(onBlurHandler).toBeCalledTimes(1);
  });
  test("onFocusHandler should be call once on focus", () => {
    fireEvent.focus(screen.getByTestId("listbox-input"));
    expect(onFocusHandler).toBeCalledTimes(1);
  });
  test("onSetValueHandler should be call once on change", () => {
    fireEvent.change(screen.getByTestId("listbox-input"), {
      target: { value: "h" },
    });
    expect(onSetValueHandler).toBeCalledTimes(1);
  });
  test("onHandleKeyUp should be call once on keyup", () => {
    fireEvent.keyUp(screen.getByTestId("listbox-input"), { key: "ArrowDown" });
    expect(onHandleKeyUp).toBeCalledTimes(1);
  });
});

describe("OtherProfessionInput", () => {
  it("should not be in the document", () => {
    setup({ globalProfession: "" });
    expect(screen.queryByTestId("listbox-input")).not.toBeInTheDocument();
  });
  it("should have error class", () => {
    setup({ hasError: true });
    expect(screen.getByTestId("listbox-input")).toHaveClass("error");
  });
  it("should show error message", () => {
    setup({ hasError: true });
    expect(screen.getByTestId("listbox-input-error-copy")).toHaveTextContent(
      "Please enter a valid profession."
    );
  });
  it("should show error icon", () => {
    setup({ hasError: true });
    expect(screen.getByTestId("listbox-input-error-icon")).toBeInTheDocument();
  });
  it("should show menu with 9 children", () => {
    setup({ inputVal: "h" });
    fireEvent.focus(screen.getByTestId("listbox-input"));
    expect(screen.getByRole("listbox").children).toHaveLength(9);
  });
  it("should show menu with 5 children", () => {
    setup({ inputVal: "hea" });
    fireEvent.focus(screen.getByTestId("listbox-input"));
    expect(screen.getByRole("listbox").children).toHaveLength(5);
  });

  it("should show menu with 1 children", () => {
    setup({ inputVal: "hai" });
    fireEvent.focus(screen.getByTestId("listbox-input"));
    expect(screen.getByRole("listbox").children).toHaveLength(1);
  });
});

describe("OtherProfessionInput menu arrows functionality", () => {
  beforeEach(() => {
    setup({ inputVal: "hea" });
    fireEvent.focus(screen.getByTestId("listbox-input"));
  });
  test("first item in the list should be in focus ArrowDown", () => {
    fireEvent.keyUp(screen.getByTestId("listbox-input"), { key: "ArrowDown" });
    const item = screen.getByRole("listbox").children[0];
    expect(item).toHaveFocus();
    expect(item).toHaveTextContent("health coach");
  });

  test("second item in the list should be in focus ArrowDown", () => {
    fireEvent.keyUp(screen.getByTestId("listbox-input"), { key: "ArrowDown" });
    fireEvent.keyUp(screen.getByRole("listbox"), { key: "ArrowDown" });
    const item = screen.getByRole("listbox").children[1];
    expect(item).toHaveFocus();
    expect(item).toHaveTextContent("health educator");
  });

  test("third item in the list should be in focus ArrowDown", () => {
    fireEvent.keyUp(screen.getByTestId("listbox-input"), { key: "ArrowDown" });
    fireEvent.keyUp(screen.getByRole("listbox"), { key: "ArrowDown" });
    fireEvent.keyUp(screen.getByRole("listbox"), { key: "ArrowDown" });
    const item = screen.getByRole("listbox").children[2];
    expect(item).toHaveFocus();
    expect(item).toHaveTextContent("health information technician");
  });
  test("second item in the list should be in focus ArrowUp", () => {
    fireEvent.keyUp(screen.getByTestId("listbox-input"), { key: "ArrowDown" });
    fireEvent.keyUp(screen.getByRole("listbox"), { key: "ArrowDown" });
    fireEvent.keyUp(screen.getByRole("listbox"), { key: "ArrowDown" });
    fireEvent.keyUp(screen.getByRole("listbox"), { key: "ArrowUp" });
    const item = screen.getByRole("listbox").children[1];
    expect(item).toHaveFocus();
    expect(item).toHaveTextContent("health educator");
  });

  test("first item in the list should be in focus ArrowUp", () => {
    fireEvent.keyUp(screen.getByTestId("listbox-input"), { key: "ArrowDown" });
    fireEvent.keyUp(screen.getByRole("listbox"), { key: "ArrowDown" });
    fireEvent.keyUp(screen.getByRole("listbox"), { key: "ArrowUp" });
    const item = screen.getByRole("listbox").children[0];
    expect(item).toHaveFocus();
    expect(item).toHaveTextContent("health coach");
  });

  test("input should be in focus ArrowUp", () => {
    fireEvent.keyUp(screen.getByTestId("listbox-input"), { key: "ArrowDown" });
    fireEvent.keyUp(screen.getByRole("listbox"), { key: "ArrowUp" });
    expect(screen.getByTestId("listbox-input")).toHaveFocus();
  });
});
