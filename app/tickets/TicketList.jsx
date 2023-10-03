// when we use server components we can declar them as ASYNC FUNCTIONS
// we will do another function outside of the component to fetch the data and keep the component clean

// by default it will cache the first response, so we need to revalidate the data
// it is set to the amount of time that next needs to wait before revalidating the data

async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0, // use 0 to opt out of using cache
    },
  });

  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  );
}

// folder tickets is a segment
// dignamic segment is a variable segment and the folder name is wrapperd in brackets []
