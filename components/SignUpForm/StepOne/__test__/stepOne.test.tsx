import { act, render, screen, fireEvent } from "@testing-library/react";

import useFormStepsStore from "@/zustand/useFormStepsStore";
import useFormFieldsStore from "@/zustand/useFormFieldsStore";

import StepOne from "..";

const formStepsState = useFormStepsStore.getState();
const formFieldsState = useFormFieldsStore.getState();

describe("Sign Up Form Step One Inputs", () => {
  beforeEach(() => {
    render(<StepOne />)
  });

  afterEach(() => {
    act(() => {
      useFormStepsStore.setState(formStepsState);
      useFormFieldsStore.setState(formFieldsState)
    });
  })

  describe("First Name Input", () => {
    let firstNameInput: HTMLInputElement;

    beforeEach(() => {
      firstNameInput = screen.getByTestId("sign-up-form-first-name")
    });

    it("should render error msg if empty", () => {
      fireEvent.blur(firstNameInput)
      expect(screen.getByText("This field can not be empty")).toBeInTheDocument()
    })

    test("user should be able to type in the first name input", () => {
      fireEvent.change(firstNameInput, { target: { value: "john" } })
      expect(firstNameInput).toHaveValue("john")
    })
  })

  describe("Last Name Input", () => {
    let lastNameInput: HTMLInputElement;

    beforeEach(() => {
      lastNameInput = screen.getByTestId("sign-up-form-last-name")
    });

    it("should render error msg if empty", () => {
      fireEvent.blur(lastNameInput)
      expect(screen.getByText("This field can not be empty")).toBeInTheDocument()
    })

    test("user should be able to type in the last name input", () => {
      fireEvent.change(lastNameInput, { target: { value: "doe" } })

      expect(lastNameInput).toHaveValue("doe")
    });
  })

  describe("Profession Input", () => {
    let professionInput: HTMLInputElement;

    beforeEach(() => {
      professionInput = screen.getByTestId("sign-up-form-profession")
    })

    it("should render error msg if empty", () => {
      fireEvent.blur(professionInput)
      expect(screen.getByText("This field can not be empty")).toBeInTheDocument()
    })

    test("user should be able to type in the profession input", () => {
      fireEvent.change(professionInput, { target: { value: "dancer" } })

      expect(professionInput).toHaveValue("dancer")
    });
  })




  // it("should render back button with backBtnHide class", () => {
  //   const backBtn = screen.getByTestId("sign-up-form-back-btn");

  //   expect(backBtn).toBeInTheDocument()
  //   expect(backBtn).toHaveTextContent("back")
  //   expect(backBtn).toHaveClass("backBtnHide")
  // })

  // it("should render next button", () => {
  //   screen.debug()
  //   const nextBtn = screen.getByTestId("sign-up-form-next-btn");
  //   expect(nextBtn).toBeInTheDocument()
  //   expect(nextBtn).toHaveTextContent("next")
  //   expect(nextBtn).toHaveAttribute("disabled")
  // });
});