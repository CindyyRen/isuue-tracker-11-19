'use client';
import { FilePlusIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import { Button, Callout, TextArea, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import { useForm, Controller } from 'react-hook-form';
import 'easymde/dist/easymde.min.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const NewIssuePage = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
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
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <Button>
          <FilePlusIcon width="16" height="16" /> submit issue
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
