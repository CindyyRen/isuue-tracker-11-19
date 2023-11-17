import { FilePlusIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';

const IssueActions = () => {
  return (
    <div className="mb-5">
      <Link href="/issues/new">
        <Button>
          <FilePlusIcon width="16" height="16" />
          New Issue
        </Button>
      </Link>
    </div>
  );
};

export default IssueActions;
