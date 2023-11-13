import React from "react";

import LinkButton from "../UI/Buttons/LinkButton";

const AddJobButton = () => (
  <LinkButton
    href='/job/new'
    variant='is-primary'
  >
    + Add Job
  </LinkButton>
)

export default AddJobButton;