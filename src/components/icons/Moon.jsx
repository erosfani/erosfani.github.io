function Moon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <mask id="moon-cutout">
        <rect width="16" height="16" fill="white"/>
        <circle cx="10" cy="6" r="5" fill="black"/>
      </mask>
      <circle cx="8" cy="8" r="6.5" mask="url(#moon-cutout)"/>
    </svg>
  );
}

export default Moon;
