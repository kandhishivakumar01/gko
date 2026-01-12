
export default function Location() {
  return (
    <div>
      <h1>Find Us</h1>
      <p>Granny's Kitchen – Bahadurpally, Hyderabad</p>

      <iframe
        src="https://maps.google.com/maps?q=Bahadurpally%20Hyderabad&t=&z=15&output=embed"
        width="100%"
        height="400"
        style={{border:0}}
        loading="lazy"
      ></iframe>

      <a 
        href="https://www.google.com/maps/dir/?api=1&destination=Bahadurpally+Hyderabad" 
        target="_blank"
      >
        Get Directions
      </a>
    </div>
  );
}
