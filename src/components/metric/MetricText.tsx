import MetricTextProps from "../../interfaces/MetricTextProps";

const MetricText = ({ strongText, normalText }: MetricTextProps) => {
  return (
    <>
      <strong>
        <span>{strongText}</span>
      </strong>
      {normalText}
    </>
  );
};

export default MetricText;
