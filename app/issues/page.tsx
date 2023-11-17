import { Button, Link, Table } from '@radix-ui/themes';
import {
  BookmarkIcon,
  FaceIcon,
  FilePlusIcon,
  Pencil1Icon,
  SunIcon,
} from '@radix-ui/react-icons';
import React from 'react';
import prisma from '@/prisma/client';

const page = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div>
      <div className="mb-5">
        <Link href="/issues/new">
          <Button>
            <FilePlusIcon width="16" height="16" />
            New Issue
          </Button>
        </Link>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                {issue.title}
                <div className="block md:hidden">{issue.status}</div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.status}
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default page;
