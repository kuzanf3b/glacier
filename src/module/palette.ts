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

            cyanide: "#6ED4E6",
            stream: "#47B8CF",
            amber: "#F4D07E",
            leaf: "#A6E3A1",
            lilac: "#B98EF5",
            coral: "#F16C93",

            highlightLow: "#1E1F28",
            highlightMed: "#30313C",
            highlightHigh: "#444655",
        },

        mist: {
            base: "#1A1B26",
            surface: "#20222D",
            overlay: "#292C37",
            muted: "#6A6F86",
            subtle: "#9AA0B5",
            text: "#E4E7F2",

            cyanide: "#6ED4E6",
            stream: "#47B8CF",
            amber: "#F4D07E",
            leaf: "#9EDB9A",
            lilac: "#B98EF5",
            coral: "#F16C93",

            highlightLow: "#242630",
            highlightMed: "#323543",
            highlightHigh: "#454959",
        },

        peak: {
            base: "#F4F6FB",
            surface: "#E8EBF3",
            overlay: "#DCE1EC",
            muted: "#7A819A",
            subtle: "#4C5166",
            text: "#141826",

            cyanide: "#45B7CF",
            stream: "#3FA6BD",
            amber: "#D4B35A",
            leaf: "#66B97B",
            lilac: "#9A78F2",
            coral: "#D45C82",

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
        leaf: {
            subtitle: "Fresh alpine green",
            description: "Renamed Git files and terminal green.",
            tags: ["conditionals", "keywords"],
        },
        stream: {
            subtitle: "Cold stream accent",
            description: "Search highlights, modified Git files, and terminal cyan.",
            tags: ["booleans", "functions"],
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