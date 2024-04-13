import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_CHAT_PROJECT_ID,
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }} className="background">
      <MultiChatSocket {...chatProps} />
      <PrettyChatWindow {...chatProps} style={{ height: "100vh" }} />
    </div>
  );
};
export default ChatsPage;
