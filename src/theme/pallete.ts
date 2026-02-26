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
    }
} as const;