module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        // 4 spaces indents
        "indent": [2, 4],
        // Requires comma after and on the same line
        "comma-style": [2, "last"],
        // No trailing commas
        "comma-dangle": [2, "never"],
        // No inline comments
        "no-inline-comments": 2,
        // Requires sorting var declaration alphabetically
        "sort-vars": 2
    }
};
