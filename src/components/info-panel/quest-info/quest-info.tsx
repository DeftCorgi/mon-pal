import React from "react";
import { QuestType } from "../../../../types/api/api";

type QuestInfoProps = {
  quests: QuestType[];
};

function QuestInfo(props: QuestInfoProps) {
  const { quests } = props;

  const renderQuestsList = () => (
    <ul>
      {quests.map((quest) => (
        <li key={quest.id}>{quest.id}</li>
      ))}
    </ul>
  );

  return (
    <section id="quests">
      <h3 className="text-2xl mb-2">Quests</h3>
      {quests && renderQuestsList()}
    </section>
  );
}

export default QuestInfo;
