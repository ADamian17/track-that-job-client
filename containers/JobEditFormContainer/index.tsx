import React, { useId, useState } from "react";
import { useRouter } from "next/router";

import { jobsStatus, pointOfContacts } from "@/utils/constants";
import Button from "@/components/UI/Buttons/Button";
import ButtonsGroup from "@/components/UI/Buttons/ButtonsGroup";
import Form from "@/components/UI/Form";

type NewJobFormContainerType = {};

const JobEditFormContainer: React.FC<NewJobFormContainerType> = (props) => {
  const router = useRouter()
  const id = useId()
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

      <Form.Fieldset
        inputLabel="Job status"
        inputDescription="What is the current status of your application"
      >
        <div>
          {
            jobsStatus.map(item => (
              <Form.RadioInput
                key={id}
                id={item.label}
                label={item.label}
                name="point of contact"
                value={item.value}
              />
            ))
          }
        </div>
      </Form.Fieldset>

      <Form.Fieldset
        inputLabel="Point of contact"
        inputDescription="select website form where u applied"
      >
        <div>
          {
            pointOfContacts.map(item => (
              <Form.RadioInput
                key={id}
                id={item.label}
                label={item.label}
                name="point of contact"
                value={item.value}
              />
            ))
          }
        </div>
      </Form.Fieldset>

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

      <Form.Fieldset
        inputLabel="Phone Screen"
        inputDescription="Did you have a phone screening interview"
      >
        <div>
          <Form.RadioInput
            id="yes"
            label="yes"
            name="phone screen"
            value="yes"
          />

          <Form.RadioInput
            id="no"
            label="no"
            name="phone screen"
            value="no"
          />

          <Form.RadioInput
            id="scheduled"
            label="scheduled"
            name="phone screen"
            value="scheduled"
          />
        </div>
      </Form.Fieldset>

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