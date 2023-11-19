import { FilePlusIcon } from '@radix-ui/react-icons';
import { Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import IssueStatusFilter from './IssueStatusFilter';

const IssueActions = () => {
  return (
    <Flex mb="5" justify="between">
      <IssueStatusFilter />
      <Link href="/issues/new">
        <Button>
          <FilePlusIcon width="16" height="16" />
          New Issue
        </Button>
      </Link>
    </Flex>
  );
};

export default IssueActions;
