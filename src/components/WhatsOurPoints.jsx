const WhatsOurPoints = ({
  listIcon: Icon,
  listTitle,
  iconColor,
  titleColor,
}) => {
  return (
    <div className="flex gap-2">
      <span className={`text-md mt-1 ${iconColor}`}>
        <Icon />
      </span>
      <p className={`${titleColor}`}>{listTitle}</p>
    </div>
  );
};

export default WhatsOurPoints;
