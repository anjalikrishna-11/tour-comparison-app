import React, { useState, useEffect } from 'react';
import './Gallery.css';

const API_URL = 'https://course-api.com/react-tours-project';

const Gallery = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const removeTour = (id) => {
    const updatedTours = tours.filter(tour => tour.id !== id);
    setTours(updatedTours);
  };

  const toggleDetails = (id) => {
    const updatedTours = tours.map(tour =>
      tour.id === id ? { ...tour, showDetails: !tour.showDetails } : tour
    );
    setTours(updatedTours);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <section className="gallery">
      {tours.map(tour => (
        <article key={tour.id} className="tour">
          <div className="image">
            <img src={tour.image} alt={tour.name} />
          </div>
          <div className="tour-info">
            <h3>{tour.name}</h3>
            <h4>${tour.price}</h4>
            <p>{tour.info}</p>
            {tour.showDetails ? (
              <>
                <p>{tour.details}</p>
                <button onClick={() => toggleDetails(tour.id)}>Show Less</button>
              </>
            ) : (
              <button onClick={() => toggleDetails(tour.id)}>Read More</button>
            )}
            <button onClick={() => removeTour(tour.id)}>Not Interested</button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Gallery;
