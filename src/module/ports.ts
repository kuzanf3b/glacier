export const ports = {
    description: "Glacier is in building.",
    categories: {
        music: [
            {
                name: "Cava",
                icon: "music" as const,
                repo: "https://github.com/glacier-s/cava"
            }
        ],
        app: [
            {
                name: "tmux",
                icon: "app" as const,
                repo: "https://github.com/glacier-s/tmux"
            },
            {
                name: "Rofi",
                icon: "app" as const,
                repo: "https://github.com/glacier-s/rofi"
            }
        ],
        terminal: [
            {
                name: "Foot",
                icon: "terminal" as const,
                repo: "https://github.com/glacier-s/foot"
            },
            {
                name: "Ghostty",
                icon: "terminal" as const,
                repo: "https://github.com/glacier-s/ghostty"
            },
            {
                name: "Alacritty",
                icon: "terminal" as const,
                repo: "https://github.com/glacier-s/alacritty"
            },
        ]
    }
} as const
