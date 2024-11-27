import { Astal, Gtk, Gdk } from "astal/gtk3";
import AudioSlider from "./modules/Audio";
import BatteryLevel from "./modules/Battery";
import FocusedClient from "./modules/FocusedClient";
import Media from "./modules/Media";
import Time from "./modules/Time";
import SysTray from "./modules/Tray";
import Workspaces from "./modules/Workspaces";

export default function Bar(monitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor;

  return (
    <window className="Bar" gdkmonitor={monitor} exclusivity={Astal.Exclusivity.EXCLUSIVE} anchor={TOP | LEFT | RIGHT}>
      <centerbox>
        <box hexpand halign={Gtk.Align.START}>
          <Workspaces />
          {/* <FocusedClient /> */}
        </box>
        <box>
          <Media />
        </box>
        <box hexpand halign={Gtk.Align.END}>
          <SysTray />
          <AudioSlider />
          <BatteryLevel />
          <Time />
        </box>
      </centerbox>
    </window>
  );
}
