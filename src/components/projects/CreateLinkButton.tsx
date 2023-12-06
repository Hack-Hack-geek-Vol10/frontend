import React from "react";
import { useCreateInviteLink } from "@/service/useLinkServices";
import { useRouter } from "next/router";
import { Button } from "@/lib/mui/muiRendering";

const CreateLinkButton = () => {
  const { createInviteLink } = useCreateInviteLink();
  const router = useRouter();

  const handleCreateLink = () => {
    const id = router.query.id as string;
    if (id) {
      createInviteLink({
        variables: {
          projectId: id,
        },
      });
    }
  };

  return <Button onClick={handleCreateLink}>CreateLinkButton</Button>;
};

export default CreateLinkButton;
