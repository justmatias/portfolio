export default function Loading() {
  return (
    <section className='grow max-w-5xl pt-4 animate-pulse'>
      <div className='h-8 bg-muted rounded w-56 mb-4' />
      <div className='h-4 bg-muted rounded w-full mb-2' />
      <div className='h-4 bg-muted rounded w-2/3 mb-8' />
      {[...Array(5)].map((_, i) => (
        <div key={i} className='h-12 bg-muted rounded mb-4' />
      ))}
    </section>
  );
}
