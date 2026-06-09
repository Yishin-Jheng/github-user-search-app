function InfoItem(prop) {
  const { icon, content } = prop;
  return (
    <div
      className={`flex gap-[1.6rem] items-center ${
        content ? "" : "opacity-60"
      }`}
    >
      <span className="basis-8">{icon}</span>
      <span className="block break-all text-body text-darkblue dark:text-lightgrey1 max-mobile:text-s">
        {content ? content : "Not Available"}
      </span>
    </div>
  );
}

export default InfoItem;
