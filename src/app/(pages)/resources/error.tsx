'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className='grow max-w-5xl pt-4 flex flex-col gap-4'>
      <h2 className='text-xl font-semibold text-destructive'>
        Failed to load resources
      </h2>
      <p className='text-muted-foreground'>{error.message}</p>
      <button onClick={reset} className='w-fit text-sky-500 underline'>
        Try again
      </button>
    </section>
  );
}
