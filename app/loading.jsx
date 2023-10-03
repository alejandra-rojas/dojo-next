//the suspense window only wraps the pages
// navbar is outside the boundaries

export default function Loading() {
  return (
    <main className="text-center">
      <h2 className="text-primary">Loading...</h2>
      <p>Hopefully not for too long</p>
    </main>
  );
}
