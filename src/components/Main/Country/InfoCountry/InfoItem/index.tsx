interface InfoItemProps {
  label: string;
  value: string | string[] | number | undefined;
}

export const InfoItem = ({ label, value }: InfoItemProps) => {
  return (
    <>
      {value && (
        <li className="font-light leading-relaxed dark:text-white transition-colors">
          <span className="font-bold">{label}: </span>
          {value}
        </li>
      )}
    </>
  );
};
