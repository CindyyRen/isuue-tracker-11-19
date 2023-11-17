import { Button, Link } from '@radix-ui/themes';
import { BookmarkIcon, FaceIcon, SunIcon } from '@radix-ui/react-icons';
import React from 'react';

const page = () => {
  return (
    <div>
      <Link href="/issues/new">
        <Button>
          <SunIcon width="16" height="16" /> Bookmark
        </Button>
      </Link>
    </div>
  );
};

export default page;
