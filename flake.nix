{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    ags.url = "github:aylur/ags";
  };

  outputs = {
    self,
    nixpkgs,
    ags,
  }: let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
    curlew = pkgs.writers.writePython3Bin "cl" {} (builtins.readFile ./curlew.py);
  in {
    devShells.${system}.default = pkgs.mkShell {
      shellHook = ''
        echo "hiii :)"
        echo "you can run the start script using: ${nixpkgs.lib.getName curlew}"
      '';

      buildInputs = [
        curlew
        # includes astal3 astal4 astal-io by default
        (ags.packages.${system}.default.override {
          extraPackages = [
            ags.packages.${system}.hyprland
            ags.packages.${system}.mpris
            ags.packages.${system}.wireplumber
            ags.packages.${system}.network
            ags.packages.${system}.tray
            ags.packages.${system}.io
            ags.packages.${system}.battery
            ags.packages.${system}.notifd
          ];
        })
      ];
    };
  };
}
