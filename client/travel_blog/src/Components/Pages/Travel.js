import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

const Travel = () => {
  // Tips
  const milestoneTips = [
    "Pack light to avoid excess baggage fees",
    "Research local customs and traditions before visiting",
    "Carry a universal travel adapter for charging devices",
    "Always keep a copy of important travel documents",
    "Stay hydrated and drink bottled water in unfamiliar places",
  ];

  return (
    <Container>
      <h1 className='mb-4'>Milestone traveler Tips</h1>
      <ListGroup>
        {milestoneTips.map((tip, index) => (
          <ListGroup.Item className='text-center p-3 border border-primary' key={index}><h5>{tip}</h5></ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Travel;
