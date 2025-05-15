function MultipleLineText({ text }) {
  return (
    <pre style={{marginBottom: '0'}}>
      {text.split('\n').map((line, idx) => (
        <span key={idx}>
          {line}
          <br />
        </span>
      ))}
    </pre>
  );
}

export default MultipleLineText;