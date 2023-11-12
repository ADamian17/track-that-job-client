import React from "react";

import Form from "@/components/UI/Form";

import styles from "./NewJobFormContainer.module.scss";

type NewJobFormContainerType = {};

const NewJobFormContainer: React.FC<NewJobFormContainerType> = (props) => {
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

      <Form.Select
        inputLabel="Point of contact"
        inputDescription="select website form where u applied"
      />
    </Form>
  )
};

export default NewJobFormContainer;