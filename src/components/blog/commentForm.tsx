import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface CommentFormProps {
  _id: string;
}

export default function CommentForm({ _id }: CommentFormProps) {
  const [formData, setFormData] = useState<any>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setFormData(data);
    try {
      await fetch('/api/createComment', {
        method: 'POST',
        body: JSON.stringify({ ...data, _id }),
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
    } catch (err: any) {
      setFormData(err);
    }
  };

  if (isSubmitting) {
    return <h3>Submitting comment…</h3>;
  }
  if (hasSubmitted) {
    return (
      <div className="mx-auto my-4 flex w-full max-w-4xl flex-col rounded-lg border-2 border-primary p-4 text-center">
        <h3 className="text-2xl font-bold">Thanks for your comment!</h3>
        <ul>
          <li className="my-2">
            Name: {formData.name} <br />
          </li>
          <li className="my-2">
            Comment: {formData.comment} <br />
          </li>
        </ul>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto my-4 flex w-full max-w-4xl flex-col rounded-md border-2 border-primary p-4"
    >
      <h2 className="text-2xl font-bold">Leave a comment</h2>
      <input
        {...register('name', { required: true })}
        className="my-2 rounded-md border-2 border-primary bg-base-100 p-2 placeholder-secondary focus:outline-none"
        placeholder="Name"
      />
      {errors.name && <span>This field is required</span>}
      <textarea
        {...register('comment', { required: true })}
        className="my-2 rounded-md border-2 border-primary bg-base-100 p-2 placeholder-secondary focus:outline-none"
        placeholder="Comment"
      />
      {errors.comment && <span>This field is required</span>}
      <input
        type="submit"
        className="my-2 cursor-pointer rounded-md border-2 border-primary bg-primary p-2 text-white transition-all ease-in-out hover:border-secondary hover:bg-secondary hover:text-base-100 focus:outline-none"
      />
    </form>
  );
}
