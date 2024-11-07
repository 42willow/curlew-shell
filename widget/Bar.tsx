import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import { Variable } from "astal"

const time = Variable("").poll(1000, "date")

export default function Bar(gdkmonitor: Gdk.Monitor) {
    return <window
        className="Bar"
        gdkmonitor={gdkmonitor}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        anchor={Astal.WindowAnchor.LEFT
            | Astal.WindowAnchor.BOTTOM
            | Astal.WindowAnchor.TOP}
        application={App}>
        <centerbox vertical={true}>
            <box />
            <button
                onClicked="echo hello"
                valign={Gtk.Align.CENTER} >
                <label label={"10\n:\n20"} />
            </button>
            <button
                onClick={() => print("hello")}
                valign={Gtk.Align.CENTER} >
                <label label={"21\n:\n11"} />
            </button>
        </centerbox>
    </window>
}
