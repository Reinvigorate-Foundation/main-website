{
    description = "Development Environment";
    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
    };
    outputs = { self, nixpkgs }:
    let
        system = "x86_64-linux";
        pkgs = nixpkgs.legacyPackages.${system};
    in
    {
        devShells.x86_64-linux.default = pkgs.mkShell {
            nativeBuildInputs = with pkgs; [
                nodejs_20
                firebase-tools
                jdk17
            ];
        };
    };
}
