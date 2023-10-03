async function getTicket(id) {
  const res = await fetch("http://localhost:4000/tickets" + id, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket([params.id]);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
    </main>
  );
}
