// This workspace widget has been adapted from Ags v1 for Ags v2, full credit to the original author AndreasHGK <3
// License: GPL-3.0
// https://github.com/AndreasHGK/mithril-shell/blob/9bddecc9c08ee44709d2f8a078b1927fbcf3f09f/ags/bar/widgets/workspaces.ts

import { bind } from "astal";
import { Gdk, Gtk } from "astal/gtk3";
import Hyprland from "gi://AstalHyprland";

const MIN_WORKSPACES = 4;
const MAX_WORKSPACES = 25;

interface WorkspacesProps {
  gdkmonitor: Gdk.Monitor;
}

// function calc_workspace_count(hypr: Hyprland.Hyprland) {
//   return Math.max(
//     MIN_WORKSPACES,
//     Math.min(
//       MAX_WORKSPACES,
//       Math.max(...hypr.workspaces.map((workspace) => workspace.id))
//     ),
//   );
// };


function range(length: number, start = 1) {
	return Array.from({ length }, (_, i) => i + start);
}


export default function Workspaces({ gdkmonitor }: WorkspacesProps) {
  const hypr = Hyprland.get_default();
  const ws: number = 10;

  // TODO: use calc workspace count to dynamically adjust the number of workspaces
  // This will require binding the workspace count?

  // TODO: monitor specific workspaces

  // TODO: add scroll to switch workspaces functionality

  // TODO(?): diagnose the weird jiggle artifact when switching workspaces

  return (
    <box className="workspaces">
      {range(ws).map((i) => {
        function focusWorkspace(workspaceId: number) {
          hypr.dispatch("workspace", workspaceId.toString());
        }
					return (
						<button
							valign={Gtk.Align.CENTER}
							className={bind(hypr, "focusedWorkspace").as(
								(fw) => {
									return i === fw.id
										? "workspaces-indicator active"
										: "workspaces-indicator";
								},
							)}
							onClicked={() => focusWorkspace(i)}
						/>
					);
				})}
    </box>
  );
}
