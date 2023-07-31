import React from 'react';
import {
  RenderResult,
  render,
} from "@testing-library/react";

import BadgeWithLink from ".."
describe("Badge Component", () => {
  let tree: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;

  beforeEach(() => {
    tree = render(<BadgeWithLink badgeText={''} badgeLink={''} handleClick={() => { }} />)
  })

  it("should match snapshot", () => {
    expect(tree).toMatchSnapshot()
  })
})