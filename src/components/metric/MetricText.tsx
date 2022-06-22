interface Text {
  strongText: string;
  normalText: string;
}

function MetricText({ strongText, normalText }: Text) {
  return (
    <>
      <strong>
        <span>{strongText}</span>
      </strong>
      {normalText}
    </>
  );
}

export default MetricText;
