import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import { createPost } from '../api/post';
import { IPostPayload } from '../types';

const CreatePost = () => {
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const createPostMutation = useMutation(
    (payload: IPostPayload) => createPost(payload),
    {
      onSuccess: () => {
        console.log('created');
      },
    }
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const title = titleRef.current?.value;
    const content = contentRef.current?.value || '';

    if (title) {
      createPostMutation.mutate({
        title,
        content,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea ref={titleRef} placeholder="Title"></textarea>
        <textarea ref={contentRef} placeholder="Content"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
