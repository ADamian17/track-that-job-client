import React, { useId } from "react";
import { useRouter } from "next/router";

import Button from "@/components/UI/Buttons/Button";
import ButtonsGroup from "@/components/UI/Buttons/ButtonsGroup";
import Form from "@/components/UI/Form";
import Select from "@/components/UI/Select";

import styles from "./NewJobFormContainer.module.scss";
import { pointOfContacts } from "@/utils/constants";

type NewJobFormContainerType = {};

const NewJobFormContainer: React.FC<NewJobFormContainerType> = (props) => {
  const router = useRouter();
  const id = useId()

  return (
    <Form>
      <Form.Input
        inputLabel="job position"
        inputDescription="Add job position"
      />

      <Form.Input
        inputLabel="company name"
        inputDescription="Add company name"
      />

      <Form.Input
        inputLabel="job post url"
        inputDescription="Add link where the job is posted"
      />

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