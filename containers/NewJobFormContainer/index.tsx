import React, { ElementRef, useId, useRef } from "react";
import { useRouter } from "next/router";

import Button from "@/components/UI/Buttons/Button";
import ButtonsGroup from "@/components/UI/Buttons/ButtonsGroup";
import Form from "@/components/UI/Form";
import Select from "@/components/UI/Select";

import styles from "./NewJobFormContainer.module.scss";
import { pointOfContacts } from "@/utils/constants";
import { Jobs } from "@/libs/jobs";

type NewJobFormContainerType = {
  jwtToken: string
};

const NewJobFormContainer: React.FC<NewJobFormContainerType> = ({ jwtToken }) => {
  console.log(jwtToken);

  const router = useRouter();
  const formRef = useRef<ElementRef<"form">>(null)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current as HTMLFormElement);
    const data = {
      job_position: formData.get("job-position") as string,
      company_name: formData.get("company-name") as string,
      job_post_url: formData.get("job-post-url") as string,
      point_of_contact: formData.get("point-of-contact") as string,
    };

    const res = await Jobs.addOne(jwtToken, data)

    if (res?.status === 200) {
      router.push("/")
    }
  }

  return (
    <Form formRef={formRef} onSubmit={handleSubmit}>
      <Form.Input
        inputLabel="job position"
        inputDescription="Add job position"
        name="job-position"
      />

      <Form.Input
        inputLabel="company name"
        inputDescription="Add company name"
        name="company-name"
      />

      <Form.Input
        inputLabel="job post url"
        inputDescription="Add link where the job is posted"
        name="job-post-url"
      />

      <Form.Fieldset
        inputLabel="Point of contact"
        inputDescription="select website form where u applied"
      >
        <div>
          {
            pointOfContacts.map(item => (
              <Form.RadioInput
                key={item.label}
                id={item.label}
                label={item.label}
                name="point-of-contact"
                value={item.value}
              />
            ))
          }
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
        />
      </ButtonsGroup>
    </Form>
  )
};

export default NewJobFormContainer;