export default function Loading() {
  return (
    <section className='grow max-w-5xl pt-4 animate-pulse'>
      <div className='h-8 bg-muted rounded w-48 mb-4' />
      <div className='h-4 bg-muted rounded w-full mb-2' />
      <div className='h-4 bg-muted rounded w-3/4 mb-8' />
      {[...Array(3)].map((_, i) => (
        <div key={i} className='h-48 bg-muted rounded-lg mb-8' />
      ))}
    </section>
  );
}
