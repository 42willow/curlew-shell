import Hyprland from "gi://AstalHyprland";
import { bind } from "astal";

export function Workspaces() {
  const hypr = Hyprland.get_default()

  return <eventbox
    onScroll={(_, e) => {
        hypr.dispatch("workspace", e.delta_y > 0 ? "+1" : "-1");
    }}>
    <box className="Workspaces" vertical={true}>
        {bind(hypr, "workspaces").as(wss => wss
            .filter(ws => ws.id > 0) // Filter out negative IDs
            .sort((a, b) => a.id - b.id)
            .map(ws => (
                <button
                    className={bind(hypr, "focusedWorkspace").as(fw =>
                        ws === fw ? "focused" : "")}
                    onClicked={() => ws.focus()}>
                    {ws.id}
                </button>
            ))
        )}
    </box>
  </eventbox>
}