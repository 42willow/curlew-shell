import { Variable, GLib } from "astal";

export default function Time({ format = " %I:%M %p" }: { format?: string }) {
  const time = Variable<string>("").poll(1000, () => GLib.DateTime.new_now_local().format(format)!);

  return <label className="time" onDestroy={() => time.drop()} label={time()} />;
}
