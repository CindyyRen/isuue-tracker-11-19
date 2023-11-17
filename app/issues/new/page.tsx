'use client';
import { FilePlusIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import { Button, Callout, Text, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import { useForm, Controller } from 'react-hook-form';
import 'easymde/dist/easymde.min.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueForm>({ resolver: zodResolver(createIssueSchema) });
  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post('/api/issues0', data);
            router.push('/issues');
          } catch (error) {
            setError('An unexpected error occurred.');
          }
        })}
      >
        <TextField.Root>
          {/* <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot> */}
          <TextField.Input placeholder="title" {...register('title')} />
        </TextField.Root>
        {/* {errors.title && (
          <Text color="red" as="p">
            {errors.title.message}
          </Text>
        )} */}
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {/* {errors.description && (
          <Text color="red" as="p">
            {errors.description.message}
          </Text>
        )} */}
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button>
          <FilePlusIcon width="16" height="16" /> submit issue
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
