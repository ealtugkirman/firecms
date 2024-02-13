import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function TabsSection() {
  const [selected, setSelected] = React.useState("photos");

  const handleTabSelection = (key) => {
    setSelected(key);
  };

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={handleTabSelection}
      >
        <Tab
          className={`mr-12 text-xl font-semibold rounded-xl ${
            selected === "photos" ? "selected-tab" : "unselected-tab"
          }`}
          key="photos"
          title="Photos"
        >
          <Card>
            <CardBody className="text-lg text-first bg-light pt-3  font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>
        </Tab>
        <Tab
          className={`mr-12 text-xl font-semibold rounded-xl ${
            selected === "music" ? "selected-tab" : "unselected-tab"
          }`}
          key="music"
          title="Music"
        >
          <Card>
            <CardBody className="text-lg text-first bg-light pt-3  font-light">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </CardBody>
          </Card>
        </Tab>
        <Tab
          className={`text-xl font-semibold rounded-xl ${
            selected === "videos" ? "selected-tab" : "unselected-tab"
          }`}
          key="videos"
          title="Videos"
        >
          <Card>
            <CardBody className="text-lg text-first bg-light pt-3 font-light">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
