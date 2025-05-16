import subprocess
import sys


def start(debug):
    print("starting curlew shell...")
    if not debug:
        subprocess.Popen(
            ["ags", "run", "app.ts"],
            # stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            stdin=subprocess.DEVNULL,
            start_new_session=True
        )
    else:
        subprocess.Popen(
            ["ags", "run", "app.ts"],
            start_new_session=True
        )


def stop():
    print("stopping curlew shell...")
    subprocess.run(["ags", "quit"])


def reload(debug):
    print("reloading curlew shell...")
    stop()
    start(debug)


def main():
    usage = "usage: curlew {start|stop|reload} [--debug|-d]"
    if len(sys.argv) < 2:
        print(usage)
        sys.exit(1)

    command = sys.argv[1].lower()
    debug = sys.argv[2].lower() if len(sys.argv) > 2 else ""

    debug_mode = debug == "--debug" or debug == "-d"

    if command == "start":
        start(debug_mode)
    elif command == "stop":
        stop()
    elif command == "reload":
        reload(debug_mode)
    else:
        print("invalid command :o\n" + usage)
        sys.exit(1)


if __name__ == "__main__":
    main()
