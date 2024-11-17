import { App, Astal, Gdk } from "astal/gtk3";
import { Variable } from "astal";
import { Workspaces } from "./modules/Workspaces";
import { Time } from "./modules/Time";
import { Power } from "./modules/Power";
import {MprisPlayers} from "./modules/Mpris";

const time = Variable("").poll(1000, "date");

export default function Bar(gdkmonitor: Gdk.Monitor) {
  return (
    <window
      className="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={Astal.WindowAnchor.LEFT | Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.TOP}
      application={App}>
      <centerbox vertical={true}>
        <box vertical={true}>
          <Workspaces />
        </box>
        <button>
          <Time />
        </button>
        <MprisPlayers />
        <button>
          <Power />
        </button>
        <box vertical={true} />
      </centerbox>
    </window>
  );
}
