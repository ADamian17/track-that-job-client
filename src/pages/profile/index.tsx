import SimpleLayout from "@/layouts/SimpleLayout";

export default function Profile() {
  const editButton = {
    buttonText: "Edit Profile",
    buttonUrl: "/profile/edit"
  }

  return (
    <SimpleLayout editButton={editButton}>
      Profile
    </SimpleLayout>
  )
}