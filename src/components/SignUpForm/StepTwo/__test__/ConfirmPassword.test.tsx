import { act, render, screen, fireEvent } from "@testing-library/react";

import useFormFieldsStore from "@/zustand/useFormFieldsStore";

import ConfirmPassword from "../ConfirmPassword";

const formFieldsState = useFormFieldsStore.getState();

describe("Sign Up Form Step Two Inputs", () => {
  beforeEach(() => {
    render(<ConfirmPassword />)
  });

  afterEach(() => {
    act(() => {
      useFormFieldsStore.setState(formFieldsState)
    });
  })

  describe("Email Name Input", () => {
    let confirmPasswordInput: HTMLInputElement;

    beforeEach(() => {
      confirmPasswordInput = screen.getByTestId("sign-up-form-confirm-password")
    });

    test("user should be able to type in the confirm password input", () => {
      fireEvent.change(confirmPasswordInput, { target: { value: "john" } })
      expect(confirmPasswordInput).toHaveValue("john")
    })

    it("should render error msg if empty", () => {
      fireEvent.blur(confirmPasswordInput)
      expect(screen.getByText("This field can not be empty")).toBeInTheDocument()
    })

    it("should render error msg if is confirm password does not match password", () => {
      fireEvent.change(confirmPasswordInput, { target: { value: "john" } })
      fireEvent.blur(confirmPasswordInput)
      expect(screen.getByText("Passwords don't match")).toBeInTheDocument()
    })
  })
});
