function InfoBlock(prop) {
  const { label, value } = prop;
  return (
    <div className="text-s text-darkblue dark:text-lightgrey1 flex flex-col max-mobile:text-xs max-mobile:gap-[5px]">
      {label}
      <span className="text-l text-darkgrey1 dark:text-white font-bold max-mobile:text-m">
        {value}
      </span>
    </div>
  );
}

export default InfoBlock;
