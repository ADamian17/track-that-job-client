import { act, render, screen, fireEvent } from "@testing-library/react";

import useFormFieldsStore from "@/zustand/useFormFieldsStore";

import Password from "../Password";

const formFieldsState = useFormFieldsStore.getState();

describe("Password Name Input", () => {
  let passwordInput: HTMLInputElement;

  beforeEach(() => {
    render(<Password />)
    passwordInput = screen.getByTestId("sign-up-form-password")
  });

  afterEach(() => {
    act(() => {
      useFormFieldsStore.setState(formFieldsState)
    });
  })

  test("user should be able to type in the password input", () => {
    fireEvent.change(passwordInput, { target: { value: "john" } })
    expect(passwordInput).toHaveValue("john")
  });

  it("should render error msg if empty", () => {
    fireEvent.blur(passwordInput)
    expect(screen.getByText("This field can not be empty")).toBeInTheDocument()
  })

  it("should render error msg password is not strong", () => {
    fireEvent.change(passwordInput, { target: { value: "adonis" } })
    fireEvent.blur(passwordInput)
    expect(screen.getByText("Password must contain symbol - number - and upper case letter")).toBeInTheDocument()
  })
})
