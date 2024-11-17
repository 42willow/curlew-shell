import { Variable, GLib } from "astal"

export function Power({ format = "%I\n%M\n%p" }) {
    const time = Variable<string>("").poll(1000, () =>
      GLib.DateTime.new_now_local().format(format)!)

    return <label
        className="time"
        onDestroy={() => time.drop()}
        label={time()}
    />
}
