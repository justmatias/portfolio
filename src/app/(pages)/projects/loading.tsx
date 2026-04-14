export default function Loading() {
  return (
    <section className='grow max-w-5xl pt-4 animate-pulse'>
      <div className='h-8 bg-muted rounded w-32 mb-4' />
      <div className='h-4 bg-muted rounded w-full mb-2' />
      <div className='h-4 bg-muted rounded w-3/4 mb-8' />
      <div className='flex gap-4 flex-wrap'>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className='w-4/5 min-w-72 sm:w-1/3 sm:min-w-96 h-80 bg-muted rounded-lg'
          />
        ))}
      </div>
    </section>
  );
}
