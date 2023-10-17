import { act, render, screen, fireEvent } from "@testing-library/react";

import useFormStepsStore from "@/zustand/useFormStepsStore";
import useFormFieldsStore from "@/zustand/useFormFieldsStore";

import Email from "../Email";

const formFieldsState = useFormFieldsStore.getState();

describe("Email Name Input", () => {
  let emailInput: HTMLInputElement;

  beforeEach(() => {
    render(<Email />)
    emailInput = screen.getByTestId("sign-up-form-email")
  });

  afterEach(() => {
    act(() => {
      useFormFieldsStore.setState(formFieldsState)
    });
  })

  test("user should be able to type in the email input", () => {
    fireEvent.change(emailInput, { target: { value: "john" } })
    expect(emailInput).toHaveValue("john")
  })

  it("should render error msg if empty", () => {
    fireEvent.blur(emailInput)
    expect(screen.getByText("This field can not be empty")).toBeInTheDocument()
  })

  it("should render error msg if is invalid email", () => {
    fireEvent.change(emailInput, { target: { value: "john" } })
    fireEvent.blur(emailInput)
    expect(screen.getByText("Please Enter a valid Email")).toBeInTheDocument()
  })

  it("should render email suggestion", () => {
    fireEvent.change(emailInput, { target: { value: "john@gmail.co" } })
    fireEvent.blur(emailInput)
    expect(screen.getByText("Did you mean: john@gmail.com?")).toBeInTheDocument()
  })
})
