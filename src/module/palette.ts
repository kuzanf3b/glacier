export const palette = {
    name: "Glacier",
    description: "A mystical journey through frozen pastels and midnight ink.",
    colors: {
        zero: {
            base: "#13131C",
            surface: "#1B1B24",
            overlay: "#24252E",
            muted: "#62647A",
            subtle: "#8F92A8",
            text: "#E6E8F2",

            cyanide: "#89DCEB",
            stream: "#5FC3D6",
            amber: "#F9E2AF",
            leaf: "#A6E3A1",
            lilac: "#CBA6F7",
            coral: "#F38BA8",

            highlightLow: "#1E1F28",
            highlightMed: "#30313C",
            highlightHigh: "#444655",
        },

        mist: {
            base: "#1A1B26",
            surface: "#1F212A",
            overlay: "#282B34",
            muted: "#676C82",
            subtle: "#9AA0B5",
            text: "#E4E7F2",

            cyanide: "#89DCEB",
            stream: "#5FC3D6",
            amber: "#F9E2AF",
            leaf: "#A6E3A1",
            lilac: "#CBA6F7",
            coral: "#F38BA8",

            highlightLow: "#23252E",
            highlightMed: "#31343E",
            highlightHigh: "#444854",
        },

        peak: {
            base: "#F4F6FB",
            surface: "#E8EBF3",
            overlay: "#DCE1EC",
            muted: "#7A819A",
            subtle: "#4C5166",
            text: "#141826",

            cyanide: "#5CBFD6",
            stream: "#4FAFC3",
            amber: "#D9B75A",
            leaf: "#66B97B",
            lilac: "#A182F0",
            coral: "#D8728A",

            highlightLow: "#EEF1F8",
            highlightMed: "#DADFF0",
            highlightHigh: "#C6CCE2",
        },
    },
    roles: {
        base: {
            subtitle: "Primary background",
            description: "Main and accessory panels—application frames, sidebars, tabs, and extensions to the focal context.",
            tags: ["comments"],
        },
        surface: {
            subtitle: "Secondary background atop base",
            description: "Panels not directly related to the focal context—cards, inputs, and status lines.",
            tags: ["operators", "punctuation"],
        },
        overlay: {
            subtitle: "Tertiary background atop surface",
            description: "Temporary panels—popovers, notifications, and dialogs.",
            tags: ["variables"],
        },
        muted: {
            subtitle: "Low contrast foreground",
            description: "Ignored content—disabled elements and unfocused text.",
            tags: ["comments"],
        },
        subtle: {
            subtitle: "Medium contrast foreground",
            description: "Secondary content—comments, punctuation, and tab names.",
            tags: ["operators", "punctuation"],
        },
        text: {
            subtitle: "High contrast foreground",
            description: "Primary content—normal text, variables, and active content.",
            tags: ["variables"],
        },
        coral: {
            subtitle: "Error tone",
            description: "Diagnostic errors, deleted Git files, and terminal red.",
            tags: ["builtins"],
        },
        amber: {
            subtitle: "Warning tone",
            description: "Diagnostic warnings and terminal yellow.",
            tags: ["strings"],
        },
        stream: {
            subtitle: "Cold stream accent",
            description: "Search highlights, modified Git files, and terminal cyan.",
            tags: ["booleans", "functions"],
        },
        leaf: {
            subtitle: "Fresh alpine green",
            description: "Renamed Git files and terminal green.",
            tags: ["conditionals", "keywords"],
        },
        cyanide: {
            subtitle: "Glacial water tone",
            description: "Diagnostic information, Git additions, and terminal blue.",
            tags: ["keys", "tags", "types"],
        },
        lilac: {
            subtitle: "Frozen lavender",
            description: "Hints, links, staged Git changes, and terminal magenta.",
            tags: ["methods", "parameters"],
        },
        highlightLow: {
            subtitle: "Low contrast highlight",
            description: "Highlight for subtle background elements.",
            tags: ["comments"],
        },
        highlightMed: {
            subtitle: "Medium contrast highlight",
            description: "Highlight for secondary background elements.",
            tags: ["comments"],
        },
        highlightHigh: {
            subtitle: "High contrast highlight",
            description: "Highlight for strong background elements.",
            tags: ["comments"],
        },
    },
} as const