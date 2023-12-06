import React, { use } from "react";
import { useRouter } from "next/router";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import useLink from "@/hooks/useLink";
import { Auth } from "@/generated/graphql";

const CreateLinkPullDown = () => {
  const { pullValue, handlePullDownChange, handleCreateLink } = useLink();
  const router = useRouter();
  const pageId = router.query.id as string;
  handleCreateLink(pageId, pullValue);

  const handleSelectChange = (event: SelectChangeEvent<Auth>) => {
    handlePullDownChange(event as React.ChangeEvent<{ value: unknown }>);
  };

  return (
    <FormControl variant='outlined'>
      <InputLabel id='select-label-1'>Option 1</InputLabel>
      <Select
        labelId='select-label-1'
        value={pullValue}
        onChange={handleSelectChange}
      >
        <MenuItem value={Auth.Owner}>Owner</MenuItem>
        <MenuItem value={Auth.ReadOnly}>ReadOnly</MenuItem>
        <MenuItem value={Auth.ReadWrite}>ReadWrite</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CreateLinkPullDown;
