'use client';
import {
  BookmarkIcon,
  FilePlusIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  SliderIcon,
} from '@radix-ui/react-icons';
import { Button, TextArea, TextField } from '@radix-ui/themes';
import React from 'react';

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        {/* <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot> */}
        <TextField.Input placeholder="Search the docs…" />
      </TextField.Root>
      <TextArea placeholder="Reply to comment…" />
      <Button>
        <FilePlusIcon width="16" height="16" /> submit issue
      </Button>
    </div>
  );
};

export default NewIssuePage;
