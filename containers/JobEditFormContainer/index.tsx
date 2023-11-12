import React, { useState } from "react";

import Form from "@/components/UI/Form";
import { useRouter } from "next/router";
import ButtonsGroup from "@/components/UI/Buttons/ButtonsGroup";
import Button from "@/components/UI/Buttons/Button";

type NewJobFormContainerType = {};

const JobEditFormContainer: React.FC<NewJobFormContainerType> = (props) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);

  return (
    <Form>
      <Form.Input
        inputLabel="company name"
        inputDescription="Add company name"
      />

      <Form.Input
        inputLabel="job position"
        inputDescription="Add job position"
      />

      <Form.Input
        inputLabel="job post url"
        inputDescription="Add link where the job is posted"
      />

      <Form.Select
        inputLabel="Job status"
        inputDescription="What is the current status of your application"
      />

      <Form.Select
        inputLabel="Point of contact"
        inputDescription="select website form where u applied"
      />

      <Form.Fieldset
        inputLabel="On site"
        inputDescription="Select if you had an on site interview"
      >
        <div>
          <Form.RadioInput
            id="yes"
            label="yes"
            name="on site"
            value="yes"
          />

          <Form.RadioInput
            id="no"
            label="no"
            name="on site"
            value="no"
          />
        </div>
      </Form.Fieldset>

      {/* <Form.Fieldset
        inputLabel="Phone Screen"
        inputDescription="Did you have a phone screening interview"
      >
        <div>
          <input type="radio" id="yes" value="yes" />
          <label htmlFor="yes">yes</label>
        </div>

        <div>
          <input type="radio" id="no" value={"no"} />
          <label htmlFor="no">no</label>
        </div>

        <div>
          <input type="radio" id="no" value={"no"} />
          <label htmlFor="no">scheduled</label>
        </div>
      </Form.Fieldset> */}

      <ButtonsGroup>
        <Button
          onClick={() => router.back()}
          text="cancel"
          type="button"
          variant="is-info"
        />
        <Button
          text="submit"
          type="submit"
          variant="is-primary"
          isLoading={loading}
        />
      </ButtonsGroup>
    </Form>
  )
};

export default JobEditFormContainer;