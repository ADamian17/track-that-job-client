import React from "react";

import { render, screen } from "@testing-library/react";

import OtherProfessionItem from "..";

it("should render correctly", () => {
  render(
    <OtherProfessionItem idx={0} selectedOption={""} suggestionItem={""} />
  );
});
