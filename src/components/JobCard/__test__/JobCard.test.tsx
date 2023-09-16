import React from 'react';
import { render, screen } from "@testing-library/react"

import JobCard from ".."

beforeEach(() => {
  render(<JobCard
    _id={''}
    job_position={''}
    job_post_url={''}
    company_name={''}
    point_of_contact={''}
    job_status={'applied'}
    on_site={'yes'}
    phone_screen={'yes'}
    user={null!}
    applied_date={''}
    createdAt={''}
    updatedAt={''}
    __v={0}
  />)
});

it("should be in the document", () => {
  expect(screen.getByTestId("job-card")).toBeInTheDocument();
})