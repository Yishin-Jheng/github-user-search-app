import { ReactNode } from "react";

interface InfoItemProps {
  icon: React.JSX.Element;
  content: ReactNode;
}

function InfoItem(props: InfoItemProps) {
  const { icon, content } = props;

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
