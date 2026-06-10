import { ReactNode } from "react";
import { UserData } from "../App";
import { NumberKeysOf, StringKeysOf } from "../types";
import { locationIcon, twitterIcon, websiteIcon, companyIcon } from "./Icons";
import InfoBlock from "./InfoBlock";
import InfoItem from "./InfoItem";

interface MainProps {
  userData: UserData | null;
}

interface InfoBlockSetting {
  label: string;
  valueKey: NumberKeysOf<UserData>;
}

interface InfoItemSetting {
  icon: React.JSX.Element;
  valueKey: StringKeysOf<UserData>;
  formatter?: (value: string) => ReactNode;
}

const infoBlockSettings: InfoBlockSetting[] = [
  { label: "Repos", valueKey: "repos" },
  { label: "Followers", valueKey: "followers" },
  { label: "Following", valueKey: "following" },
];

const infoItemSettings: InfoItemSetting[] = [
  { icon: locationIcon, valueKey: "location" },
  {
    icon: twitterIcon,
    valueKey: "twitter",
    formatter: (value) => (value ? `@${value}` : null),
  },
  {
    icon: websiteIcon,
    valueKey: "url",
    formatter: (value) =>
      value ? (
        <a
          className="hover:underline"
          href={value}
          target="_blank"
          rel="noreferrer noopener"
        >
          {value}
        </a>
      ) : null,
  },
  { icon: companyIcon, valueKey: "company" },
];

function Main(props: MainProps) {
  const { userData } = props;

  return (
    <main className="w-full bg-white dark:bg-darkgrey3 p-[4.3rem] rounded-2xl shadow-darkgrey dark:shadow-lightgrey grid grid-cols-[117px_1fr] gap-x-16 transition-all duration-300 max-mobile:grid-cols-[70px_1fr] max-mobile:gap-x-10 max-mobile:px-10 max-mobile:py-12">
      {userData && (
        <>
          <img
            src={userData.avatar}
            className="w-[117px] h-[117px] row-start-1 row-end-3 rounded-full max-mobile:w-[70px] max-mobile:h-[70px]"
          />
          <section className="grid grid-cols-[1fr_185px] gap-y-[3px] content-start items-center max-tablet:grid-cols-1 max-tablet:content-center">
            <p className="text-xl text-darkgrey1 dark:text-white font-bold max-mobile:text-m">
              {userData.name ? userData.name : userData.loginName}
            </p>
            <p className="text-body text-lightgrey3 dark:text-lightgrey1 justify-self-end max-tablet:justify-self-start max-mobile:text-s">
              {`Joined ${new Date(userData.created)
                .toUTCString()
                .split(" ")
                .filter((_, i) => i > 0 && i < 4)
                .join(" ")}`}
            </p>
            <p className="text-m text-blue col-span-full max-tablet:row-start-2 max-mobile:text-s">
              {`@${userData.loginName}`}
            </p>
          </section>
          <p className="text-body text-darkblue dark:text-lightgrey1 my-10 col-start-2 max-tablet:col-span-full max-tablet:mt-10 max-mobile:text-s">
            {userData.bio ? userData.bio : "This profile has no bio"}
          </p>

          <section className="bg-lightgrey2 dark:bg-darkgrey1 px-[3.2rem] py-[1.6rem] rounded-2xl flex gap-36 items-center col-start-2 transition-all duration-300 max-tablet:col-span-full max-semimobile:justify-evenly max-mobile:text-center max-mobile:gap-4 max-mobile:justify-between max-mobile:p-8">
            {infoBlockSettings.map((item) => {
              const value = userData[item.valueKey];
              return (
                <InfoBlock
                  key={item.valueKey}
                  label={item.label}
                  value={value}
                />
              );
            })}
          </section>

          <section className="grid grid-cols-[1fr_220px] gap-x-6 gap-y-6 mt-12 col-start-2 max-tablet:col-span-full max-mobile:grid-cols-1">
            {infoItemSettings.map((item) => {
              const value = userData[item.valueKey];
              return (
                <InfoItem
                  key={item.valueKey}
                  icon={item.icon}
                  content={item.formatter ? item.formatter(value) : value}
                />
              );
            })}
          </section>
        </>
      )}
      {!userData && (
        <div className="col-span-full my-[14.8rem] text-center text-l text-lightgrey3 dark:text-greyblue">
          Try to search a GitHub user 🔍
        </div>
      )}
    </main>
  );
}

export default Main;
