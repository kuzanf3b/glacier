export const pallete = {
    name: "Glacier",
    description: "A warmer ice colorscheme.",
    colors: {
        zero: {
            base: "#13131C",    // Abyss
            surface: "#1A1A27",    // Frost
            overlay: "#232333",    // Glacier
            muted: "#5B5B7E",    // Vapor
            subtle: "#8E8EAF",    // Mist
            text: "#E0E0ED",    // Crystal

            // Accent
            cyanide: "#89DCEB",
            amber: "#F9E2AF",
            petal: "#F5C2E7",
            leaf: "#A6E3A1",
            lilac: "#CBA6F7",
            coral: "#F38BA8",

            // Highlight
            highlightLow: "#1E1E2E",   // Aura Low
            highlightMed: "#313244",   // Aura Med
            highlightHigh: "#45475A",  // Aura High
        },
        mist: {
            base: "#1E1E2E",    // Haze
            surface: "#252535",    // Cloud
            overlay: "#2F2F45",    // Spirit
            muted: "#6C7086",    // Ethereal
            subtle: "#9399B2",    // Ghost
            text: "#C2C6D9",    // Flow

            // Accent
            cyanide: "#89D1DD",
            amber: "#E5D5B1",
            petal: "#E1B0D0",
            leaf: "#B4D5B0",
            lilac: "#C2B3E1",
            coral: "#E0A3AD",

            // Highlight
            highlightLow: "#2A2A3C",   // Veil Low
            highlightMed: "#3E3E56",   // Veil Med
            highlightHigh: "#525270",  // Veil High
        },
        peak: {
            base: "#F2F2F7",    // Summit
            surface: "#E6E6F0",    // Slope
            overlay: "#D9D9E8",    // Ridge
            muted: "#9494B8",    // Snow
            subtle: "#62628A",    // Pebble
            text: "#1A1A27",    // Ink

            // Accent
            cyanide: "#179299",
            amber: "#A67C00",
            petal: "#B31E8D",
            leaf: "#40A02B",
            lilac: "#7287FD",
            coral: "#D20F39",

            // Highlight
            highlightLow: "#E8E8F4",   // Ice Low
            highlightMed: "#D0D0E8",   // Ice Med
            highlightHigh: "#B8B8D8",  // Ice High
        }
    },
    roles: {
        base: {
            subtitle: "Primary background",
            description: "Main and accessory panels—**application frames**, **sidebars**, **tabs**, and extensions to the focal context.",
            tags: ["comments"],
        },
        surface: {
            subtitle: "Secondary background atop base",
            description: "Panels that are not directly related to the focal context—**cards**, **inputs**, and **status lines**.",
            tags: ["operators", "punctuation"],
        },
        overlay: {
            subtitle: "Tertiary background atop surface",
            description: "Panels that are more temporary in nature—**popovers**, **notifications**, and **dialogs**.",
            tags: ["variables"],
        },
        muted: {
            subtitle: "Low contrast foreground",
            description: "Ignored content—**disabled elements** and **unfocused text**.",
            tags: ["comments"],
        },
        subtle: {
            subtitle: "Medium contrast foreground",
            description: "Secondary content—**comments**, **punctuation**, and **tab names**.",
            tags: ["operators", "punctuation"],
        },
        text: {
            subtitle: "High contrast foreground",
            description: "Primary content—**normal text**, **variables**, and **active content**.",
            tags: ["variables"],
        },
        coral: {
            subtitle: "Per favore ama tutti",
            description: "**Diagnostic errors**, **Deleted Git files**, and **Terminal red, bright red**.",
            tags: ["builtins"],
        },
        amber: {
            subtitle: "Lemon tea on a summer morning",
            description: "**Diagnostic warnings** and **Terminal yellow, bright yellow**.",
            tags: ["strings"],
        },
        petal: {
            subtitle: "A beautiful yet cautious blossom",
            description: "**Matching search background** paired with base foreground, **Modified Git files**, and **Terminal cyan, bright cyan**.",
            tags: ["booleans", "functions"],
        },
        leaf: {
            subtitle: "Fresh winter greenery",
            description: "**Renamed Git files** and **Terminal green, bright green**.",
            tags: ["conditionals", "keywords"],
        },
        cyanide: {
            subtitle: "Saltwater tidepools",
            description: "**Diagnostic information**, **Git additions**, and **Terminal blue, bright blue**.",
            tags: ["keys", "tags", "types"],
        },
        lilac: {
            subtitle: "Smells of groundedness",
            description: "**Diagnostic hints**, **Inline links**, **Merged and staged Git modifications**, and **Terminal magenta, bright magenta**.",
            tags: ["methods", "parameters"],
        },
    },
} as const;