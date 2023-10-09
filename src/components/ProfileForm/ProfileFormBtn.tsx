import React from "react";
import { useRouter } from "next/router";

import Button from "../UI/Buttons/Button";
import ButtonsGroup from "../UI/Buttons/ButtonsGroup";

type ProfileFormType = {
  isEditPage: boolean | undefined
};


const ProfileFormBtn: React.FC<ProfileFormType> = ({ isEditPage = false }) => {
  const router = useRouter();

  if (!isEditPage) {
    return (
      <Button
        text="sign up"
        type="submit"
        variant="is-primary"
      />
    )
  }

  return (
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
  )
};

export default ProfileFormBtn;
