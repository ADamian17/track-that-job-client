import { RenderResult, act, render, screen, fireEvent } from "@testing-library/react";

import useFormStepsStore from "@/zustand/useFormStepsStore";
import useFormFieldsStore from "@/zustand/useFormFieldsStore";

import SignUpFormContainer from "..";

const formStepsState = useFormStepsStore.getState();
const formFieldsState = useFormFieldsStore.getState();

describe("Sign Up Form Container", () => {
  let tree: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;

  beforeEach(() => {
    tree = render(<SignUpFormContainer />)
  });

  afterEach(() => {
    act(() => {
      useFormStepsStore.setState(formStepsState);
      useFormFieldsStore.setState(formFieldsState);
    });
  })

  it("should match snapshot", () => {
    expect(tree).toMatchSnapshot()
  })

  it("should be in the document", () => {
    expect(screen.getByTestId("sign-up-form-container")).toBeInTheDocument()
  })

  it("should render back button with backBtnHide class", () => {
    const backBtn = screen.getByTestId("sign-up-form-back-btn");

    expect(backBtn).toBeInTheDocument()
    expect(backBtn).toHaveTextContent("back")
    expect(backBtn).toHaveClass("backBtnHide")
  })

  it("should render next button", () => {
    const nextBtn = screen.getByTestId("sign-up-form-next-btn");
    expect(nextBtn).toBeInTheDocument()
    expect(nextBtn).toHaveTextContent("next")
    expect(nextBtn).toHaveAttribute("disabled")
  });

  it("should render step two", () => {
    fireEvent.change(screen.getByTestId("sign-up-form-first-name"), { target: { value: "john" } })
    fireEvent.change(screen.getByTestId("sign-up-form-last-name"), { target: { value: "doe" } })
    fireEvent.change(screen.getByTestId("sign-up-form-profession"), { target: { value: "dancer" } })

    const nextBtn = screen.getByTestId("sign-up-form-next-btn");
    expect(nextBtn).not.toHaveAttribute("disabled")

    fireEvent.click(nextBtn)

    expect(screen.getByTestId("sign-up-form-password")).toBeInTheDocument()
  })

  it("should render step one on btn back click", () => {
    fireEvent.change(screen.getByTestId("sign-up-form-first-name"), { target: { value: "john" } })
    fireEvent.change(screen.getByTestId("sign-up-form-last-name"), { target: { value: "doe" } })
    fireEvent.change(screen.getByTestId("sign-up-form-profession"), { target: { value: "dancer" } })

    fireEvent.click(screen.getByTestId("sign-up-form-next-btn"))
    expect(screen.getByTestId("sign-up-form-password")).toBeInTheDocument()


    fireEvent.click(screen.getByTestId("sign-up-form-back-btn"))
    expect(screen.getByTestId("sign-up-form-first-name")).toBeInTheDocument()
  })
});
