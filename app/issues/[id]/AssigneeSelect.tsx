'use client';

import { Select } from '@radix-ui/themes';
import axios from 'axios';
import { User } from 'next-auth';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useQuery } from '@tanstack/react-query';

const AssigneeSelect = () => {
  // const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const { data } = await axios.get<User[]>('/api/users');
  //     setUsers(data);
  //   };

  //   fetchUsers();
  // }, []);
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then((res) => res.data),
    staleTime: 60 * 1000, //60s
    retry: 3,
  });
  if (isLoading) return <Skeleton />;
  if (error) return null;
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
