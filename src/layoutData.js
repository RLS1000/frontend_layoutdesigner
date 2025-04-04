// src/layoutData.js
export const layoutData = [

  { id: 1, name: "Style 1 - 15x10 - 2 Fotos", format: "15x10", background: "https://app.layoutdesigner.einfach-knips.de/public_html/assets/style1.png", textGroups: [
    { groupId: "names", 
        groupX: 300,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 84,   // Vertikale Position der Gruppe
        spacing: 15,  // Abstand zwischen den Texten
        maxWidth: 450, // Maximale Breite der Gruppe
        originY: "bottom",
        texts: [
            { text: "name1", size: 30, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "&", size: 30, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "secondary"},
            { text: "name2", size: 30, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "date",
        groupX: 300,  // Zentrum der Gruppe
        groupY: 103,  // Vertikale Position
        spacing: 15,
        maxWidth: 200, // Maximale Breite der Gruppe
        texts: [
            { text: "• weddingDate •", size: 18, fontFamily: "Raleway", charSpacing: 100, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "ad",
        groupX: 300,  // Zentrum der Gruppe
        groupY: 156,  // Vertikale Position
        spacing: 15,
        maxWidth: 500, // Maximale Breite der Gruppe
        texts: [
            { text: "EINFACH KNIPS®", size: 8, fontFamily: "Raleway", charSpacing: 100, fill: "#000000"}
        ]
    }
]
},

{ id: 2, name: "Style 2 - 15x10 - 2 Fotos", format: "15x10", background: "https://app.layoutdesigner.einfach-knips.de/public_html/assets/style2.png", textGroups: [
    { groupId: "names", 
        groupX: 300,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 282,   // Vertikale Position der Gruppe
        spacing: 15,  // Abstand zwischen den Texten
        maxWidth: 500, // Maximale Breite der Gruppe
        originY: "bottom",
        texts: [
            { text: "name1", size: 18, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "&", size: 18, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "secondary"},
            { text: "name2", size: 18, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "•  weddingDate", size: 18, fontFamily: "Raleway", charSpacing: 100, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "ad",
        groupX: 300,  // Zentrum der Gruppe
        groupY: 301,  // Vertikale Position
        spacing: 15,
        maxWidth: 500, // Maximale Breite der Gruppe
        texts: [
            { text: "EINFACH KNIPS®", size: 8, fontFamily: "Raleway", charSpacing: 100, fill: "#000000"}
        ]
    }
]
},

{ id: 3, name: "Style 3 - 15x10 - 2 Fotos", format: "15x10", background: "https://app.layoutdesigner.einfach-knips.de/public_html/assets/style3.png", textGroups: [
    { groupId: "names1", 
        groupX: 155,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 127,   // Vertikale Position der Gruppe
        spacing: 15,  // Abstand zwischen den Texten
        maxWidth: 250, // Maximale Breite der Gruppe
        originY: "bottom",
        texts: [
            { text: "name1", size: 27, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    { groupId: "and", 
        groupX: 155,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 133,   // Vertikale Position der Gruppe
        spacing: 15,  // Abstand zwischen den Texten
        maxWidth: 250, // Maximale Breite der Gruppe
        texts: [
            { text: "und", size: 18, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 200, fill: "#000000", isColorEditable: true, fontGroup: "secondary"}
        ]
    },
    { groupId: "names2", 
        groupX: 155,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 166,   // Vertikale Position der Gruppe
        spacing: 15,  // Abstand zwischen den Texten
        maxWidth: 250, // Maximale Breite der Gruppe
        originY: "top",
        texts: [
            { text: "name2", size: 27, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    { groupId: "date", 
        groupX: 155,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 215,   // Vertikale Position der Gruppe
        spacing: 15,  // Abstand zwischen den Texten
        maxWidth: 500, // Maximale Breite der Gruppe
        texts: [
            { text: "weddingDate", size: 12, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 100, fill: "#000000", isColorEditable: true, fontGroup: "secondary"}
        ]
    },
    {
        groupId: "ad",
        groupX: 155,  // Zentrum der Gruppe
        groupY: 370,  // Vertikale Position
        spacing: 15,
        maxWidth: 500, // Maximale Breite der Gruppe
        texts: [
            { text: "EINFACH KNIPS®", size: 8, fontFamily: "Raleway", charSpacing: 100, fill: "#000000"}
        ]
    }
]
},

{ id: 4, name: "Style 4 - 15x10 - 3 Fotos", format: "15x10", background: "https://app.layoutdesigner.einfach-knips.de/public_html/assets/style4.png", textGroups: [
{ groupId: "names", 
        groupX: 166,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 72,   // Vertikale Position der Gruppe
        spacing: 15,  // Abstand zwischen den Texten
        maxWidth: 230, // Maximale Breite der Gruppe
        originY: "bottom",
        texts: [
            { text: "name1", size: 20, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "&", size: 20, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "secondary"},
            { text: "name2", size: 20, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "date",
        groupX: 166,  // Zentrum der Gruppe
        groupY: 96,  // Vertikale Position
        spacing: 15,
        maxWidth: 500, // Maximale Breite der Gruppe
        texts: [
            { text: "weddingDate", size: 12, fontFamily: "Raleway", charSpacing: 100, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "ad",
        groupX: 166,  // Zentrum der Gruppe
        groupY: 161,  // Vertikale Position
        spacing: 15,
        maxWidth: 500, // Maximale Breite der Gruppe
        texts: [
            { text: "EINFACH KNIPS®", size: 8, fontFamily: "Raleway", charSpacing: 100, fill: "#000000"}
        ]
    }
]
},

{ id: 5, name: "Style 5 - 10x15 - 6 Fotos", format: "10x15", background: "https://app.layoutdesigner.einfach-knips.de/public_html/assets/style5.png", textGroups: [
{ groupId: "names", 
        groupX: 200,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 463,   // Vertikale Position der Gruppe
        spacing: 15,  // Abstand zwischen den Texten
        maxWidth: 350, // Maximale Breite der Gruppe
        originY: "bottom",
        texts: [
            { text: "name1", size: 28, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "&", size: 28, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "name2", size: 28, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "date",
        groupX: 200,  // Zentrum der Gruppe
        groupY: 490,  // Vertikale Position
        spacing: 15,
        maxWidth: 500, // Maximale Breite der Gruppe
        texts: [
            { text: "weddingDate", size: 14, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 100, fill: "#000000", isColorEditable: true, fontGroup: "secondary"}
        ]
    },
    {
        groupId: "ad",
        groupX: 200,  // Zentrum der Gruppe
        groupY: 560,  // Vertikale Position
        spacing: 15,
        maxWidth: 500, // Maximale Breite der Gruppe
        texts: [
            { text: "EINFACH KNIPS®", size: 8, fontFamily: "Raleway", charSpacing: 100, fill: "#000000"}
        ]
    }
]
},

{ id: 6, name: "Style 6 - 15x10 - 3 Fotos", format: "15x10", background: "https://app.layoutdesigner.einfach-knips.de/public_html/assets/style6.png", textGroups: [
{ groupId: "names", 
        groupX: 300,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 88,   // Vertikale Position der Gruppe
        spacing: 15,  // Abstand zwischen den Texten
        maxWidth: 500, // Maximale Breite der Gruppe
        originY: "bottom",
        texts: [
            { text: "name1", size: 30, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "&", size: 30, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "secondary"},
            { text: "name2", size: 30, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "date",
        groupX: 300,  // Zentrum der Gruppe
        groupY: 107,  // Vertikale Position
        spacing: 15,
        maxWidth: 500, // Maximale Breite der Gruppe
        texts: [
            { text: "weddingDate", size: 14, fontFamily: "Raleway", charSpacing: 100, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "ad",
        groupX: 300,  // Zentrum der Gruppe
        groupY: 383,  // Vertikale Position
        spacing: 15,
        maxWidth: 500, // Maximale Breite der Gruppe
        texts: [
            { text: "EINFACH KNIPS®", size: 8, fontFamily: "Raleway", charSpacing: 100, fill: "#000000"}
        ]
    }
]
},

{ id: 7, name: "Style 7 - 15x10 - 3 Fotos", format: "15x10", background: "https://app.layoutdesigner.einfach-knips.de/public_html/assets/style7.png", textGroups: [
{ groupId: "names", 
        groupX: 120,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 186,   // Vertikale Position der Gruppe
        spacing: 10,  // Abstand zwischen den Texten
        maxWidth: 200, // Maximale Breite der Gruppe
        originY: "bottom",
        texts: [
            { text: "name1", size: 16, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "&", size: 16, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "name2", size: 16, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "date",
        groupX: 120,  // Zentrum der Gruppe
        groupY: 146,  // Vertikale Position
        spacing: 5,
        maxWidth: 200, // Maximale Breite der Gruppe
        texts: [
            { text: "Erinnerungen für die Ewigkeit", size: 8, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 80, fill: "#000000", isColorEditable: true, fontGroup: "secondary"} ,
            { text: "|", size: 8, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 80, fill: "#000000"} ,
            { text: "weddingDate", size: 8, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 80, fill: "#000000", isColorEditable: true, fontGroup: "secondary"}
        ]
    },
    {
        groupId: "ad",
        groupX: 120,  // Zentrum der Gruppe
        groupY: 206,  // Vertikale Position
        spacing: 15,
        maxWidth: 500, // Maximale Breite der Gruppe
        texts: [
            { text: "EINFACH KNIPS®", size: 8, fontFamily: "Raleway", charSpacing: 100, fill: "#000000"}
        ]
    }
]
},

{ id: 8, name: "Style 8 - 15x10 - 2 Fotos", format: "15x10", background: "https://app.layoutdesigner.einfach-knips.de/public_html/assets/style8.png", textGroups: [
{ groupId: "names", 
        groupX: 300,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 59,   // Vertikale Position der Gruppe
        spacing: 10,  // Abstand zwischen den Texten
        maxWidth: 285, // Maximale Breite der Gruppe
        originY: "center",
        texts: [
            { text: "name1", size: 30, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "&", size: 30, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "secondary"},
            { text: "name2", size: 30, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "date_ad",
        groupX: 300,  // Zentrum der Gruppe
        groupY: 367,  // Vertikale Position
        spacing: 5,
        maxWidth: 200, // Maximale Breite der Gruppe
        texts: [
            { text: "weddingDate", size: 10, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 80, fill: "#000000", isColorEditable: true, fontGroup: "secondary"},
            { text: "| EINFACH KNIPS®", size: 10, fontFamily: "Raleway", charSpacing: 100, fill: "#000000"}
        ]
    }
]
},

{ id: 9, name: "Style 9 - 15x5 - 2 Fotos", format: "15x5", background: "https://app.layoutdesigner.einfach-knips.de/public_html/assets/style9.png", textGroups: [
    {   groupId: "names1", 
        groupX: 68,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 77,   // Vertikale Position der Gruppe
        spacing: 5,  // Abstand zwischen den Texten
        maxWidth: 100, // Maximale Breite der Gruppe
        texts: [
            { text: "name1", size: 21, fontFamily: "Raleway", charSpacing: 100, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
        ]
    },
    {   groupId: "names2", 
        groupX: 68,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 124,   // Vertikale Position der Gruppe
        spacing: 5,  // Abstand zwischen den Texten
        maxWidth: 100, // Maximale Breite der Gruppe
        originY: "bottom",
        texts: [
            { text: "&", size: 21, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "secondary"},
            { text: "name2", size: 21, fontFamily: "Raleway", charSpacing: 100, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "date",
        groupX: 68,  // Zentrum der Gruppe
        groupY: 46,  // Vertikale Position
        spacing: 5,
        maxWidth: 100, // Maximale Breite der Gruppe
        texts: [
            { text: "weddingDate", size: 8, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 80, fill: "#000000", isColorEditable: true, fontGroup: "secondary"}
        ]
    },
    {
        groupId: "ad",
        groupX: 68,  // Zentrum der Gruppe
        groupY: 145,  // Vertikale Position
        spacing: 15,
        maxWidth: 100, // Maximale Breite der Gruppe
        texts: [
            { text: "EINFACH KNIPS®", size: 7, fontFamily: "Raleway", charSpacing: 100, fill: "#000000"}
        ]
    }
]
},

{ id: 10, name: "Style 10 - 15x5 - 2 Fotos", format: "15x5", background: "https://app.layoutdesigner.einfach-knips.de/public_html/assets/style10.png", textGroups: [
    {   groupId: "names1", 
        groupX: 507,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 50,   // Vertikale Position der Gruppe
        spacing: 5,  // Abstand zwischen den Texten
        maxWidth: 110, // Maximale Breite der Gruppe
        texts: [
            { text: "name1", size: 20, fontFamily: "Raleway", charSpacing: 200, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
        ]
    },
    {   groupId: "names2", 
        groupX: 507,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 73,   // Vertikale Position der Gruppe
        spacing: 5,  // Abstand zwischen den Texten
        maxWidth: 110, // Maximale Breite der Gruppe
        texts: [
            { text: "&", size: 20, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 100, fill: "#000000", isColorEditable: true, fontGroup: "secondary"},
            { text: "name2", size: 20, fontFamily: "Raleway", charSpacing: 200, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "date",
        groupX: 507,  // Zentrum der Gruppe
        groupY: 103,  // Vertikale Position
        spacing: 5,
        maxWidth: 100, // Maximale Breite der Gruppe
        texts: [
            { text: "weddingDate", size: 8, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 80, fill: "#000000", isColorEditable: true, fontGroup: "secondary"}
        ]
    },
    {
        groupId: "ad",
        groupX: 507,  // Zentrum der Gruppe
        groupY: 159,  // Vertikale Position
        spacing: 15,
        maxWidth: 100, // Maximale Breite der Gruppe
        texts: [
            { text: "EINFACH KNIPS®", size: 8, fontFamily: "Raleway", charSpacing: 100, fill: "#000000"}
        ]
    }
]
},

{ id: 11, name: "Style 11 - 15x5 - 2 Fotos", format: "15x5", background: "https://app.layoutdesigner.einfach-knips.de/public_html/assets/style11.png", textGroups: [
    { 
        groupId: "names", 
        groupX: 300,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 160,   // Vertikale Position der Gruppe
        spacing: 10,  // Abstand zwischen den Texten
        maxWidth: 285, // Maximale Breite der Gruppe
        originY: "center",
        texts: [
            { text: "• name1", size: 15, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "&", size: 15, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "name2 •", size: 15, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "date_ad",
        groupX: 300,  // Zentrum der Gruppe
        groupY: 175,  // Vertikale Position
        spacing: 5,
        maxWidth: 200, // Maximale Breite der Gruppe
        texts: [
            { text: "weddingDate", size: 10, fontFamily: "Raleway", charSpacing: 80, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "| EINFACH KNIPS®", size: 10, fontFamily: "Raleway", charSpacing: 100, fill: "#000000"}
        ]
    }
]
},

{ id: 12, name: "Style 12 - 15x5 - 3 Fotos", format: "15x5", background: "https://app.layoutdesigner.einfach-knips.de/public_html/assets/style12.png", textGroups: [
    { 
        groupId: "names", 
        groupX: 300,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 18,   // Vertikale Position der Gruppe
        spacing: 10,  // Abstand zwischen den Texten
        maxWidth: 400, // Maximale Breite der Gruppe
        originY: "center",
        texts: [
            { text: "• name1", size: 14, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "&", size: 14, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "secondary"},
            { text: "name2 •", size: 14, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "date_ad",
        groupX: 300,  // Zentrum der Gruppe
        groupY: 175,  // Vertikale Position
        spacing: 5,
        maxWidth: 500, // Maximale Breite der Gruppe
        texts: [
            { text: "Ab jetzt - für immer |", size: 9, fontFamily: "Raleway", charSpacing: 80, fill: "#000000", isColorEditable: true, fontGroup: "primary"} ,
            { text: "weddingDate", size: 9, fontFamily: "Raleway", charSpacing: 80, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "| EINFACH KNIPS®", size: 9, fontFamily: "Raleway", charSpacing: 100, fill: "#000000"}
        ]
    }
]
},

{ id: 13, name: "Style 13 - 5x15 - 4 Fotos", format: "5x15", background: "https://app.layoutdesigner.einfach-knips.de/public_html/assets/style13.png", textGroups: [
    { 
        groupId: "names", 
        groupX: 100,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 533,   // Vertikale Position der Gruppe
        spacing: 10,  // Abstand zwischen den Texten
        maxWidth: 160, // Maximale Breite der Gruppe
        originY: "bottom",
        texts: [
            { text: "name1", size: 15, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "&", size: 15, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "secondary"},
            { text: "name2", size: 15, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "date",
        groupX: 100,  // Zentrum der Gruppe
        groupY: 547,  // Vertikale Position
        spacing: 5,
        maxWidth: 200, // Maximale Breite der Gruppe
        texts: [
            { text: "weddingDate", size: 12, fontFamily: "Raleway", charSpacing: 80, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "ad",
        groupX: 100,  // Zentrum der Gruppe
        groupY: 577,  // Vertikale Position
        spacing: 15,
        maxWidth: 500, // Maximale Breite der Gruppe
        texts: [
            { text: "EINFACH KNIPS®", size: 8, fontFamily: "Raleway", charSpacing: 100, fill: "#000000"}
        ]
    }
]
},

{ id: 14, name: "Style 14 - 5x15 - 3 Fotos", format: "5x15", background: "https://app.layoutdesigner.einfach-knips.de/public_html/assets/style14.png", textGroups: [
{   groupId: "names1", 
        groupX: 100,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 63,   // Vertikale Position der Gruppe
        spacing: 5,  // Abstand zwischen den Texten
        maxWidth: 160, // Maximale Breite der Gruppe
        originY: "bottom",
        texts: [
            { text: "name1", size: 24, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
        ]
    },
    {   groupId: "names2", 
        groupX: 100,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 61,   // Vertikale Position der Gruppe
        spacing: 5,  // Abstand zwischen den Texten
        maxWidth: 160, // Maximale Breite der Gruppe
        texts: [
            { text: "&", size: 24, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 100, fill: "#000000", isColorEditable: true, fontGroup: "secondary"},
            { text: "name2", size: 24, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "date",
        groupX: 100,  // Zentrum der Gruppe
        groupY: 107,  // Vertikale Position
        spacing: 5,
        maxWidth: 200, // Maximale Breite der Gruppe
        texts: [
            { text: "weddingDate", size: 10, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 80, fill: "#000000", isColorEditable: true, fontGroup: "secondary"}
        ]
    },
    {
        groupId: "ad",
        groupX: 100,  // Zentrum der Gruppe
        groupY: 542,  // Vertikale Position
        spacing: 15,
        maxWidth: 500, // Maximale Breite der Gruppe
        texts: [
            { text: "EINFACH KNIPS®", size: 8, fontFamily: "Raleway", charSpacing: 100, fill: "#000000"}
        ]
    }
]
},

{ id: 15, name: "Style 15 - 5x15 - 3 Fotos", format: "5x15", background: "https://app.layoutdesigner.einfach-knips.de/public_html/assets/style15.png", textGroups: [
{   groupId: "names1", 
        groupX: 100,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 205,   // Vertikale Position der Gruppe
        spacing: 5,  // Abstand zwischen den Texten
        maxWidth: 160, // Maximale Breite der Gruppe
        originY: "bottom",
        texts: [
            { text: "name1", size: 24, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
        ]
    },
    {   groupId: "names2", 
        groupX: 100,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 201,   // Vertikale Position der Gruppe
        spacing: 5,  // Abstand zwischen den Texten
        maxWidth: 160, // Maximale Breite der Gruppe
        texts: [
            { text: "&", size: 24, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 100, fill: "#000000", isColorEditable: true, fontGroup: "secondary"},
            { text: "name2", size: 24, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "date",
        groupX: 100,  // Zentrum der Gruppe
        groupY: 237,  // Vertikale Position
        spacing: 5,
        maxWidth: 200, // Maximale Breite der Gruppe
        texts: [
            { text: "• weddingDate •", size: 10, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 80, fill: "#000000", isColorEditable: true, fontGroup: "secondary"}
        ]
    },
    {
        groupId: "ad",
        groupX: 100,  // Zentrum der Gruppe
        groupY: 572,  // Vertikale Position
        spacing: 15,
        maxWidth: 500, // Maximale Breite der Gruppe
        texts: [
            { text: "EINFACH KNIPS®", size: 8, fontFamily: "Raleway", charSpacing: 100, fill: "#000000"}
        ]
    }
]
},

{ id: 16, name: "Style 16 - 5x15 - 4 Fotos", format: "5x15", background: "https://app.layoutdesigner.einfach-knips.de/public_html/assets/style16.png", textGroups: [
    { 
        groupId: "names", 
        groupX: 100,  // Mittelpunkt der Gruppe auf X-Achse
        groupY: 30,   // Vertikale Position der Gruppe
        spacing: 10,  // Abstand zwischen den Texten
        maxWidth: 170, // Maximale Breite der Gruppe
        originY: "bottom",
        texts: [
            { text: "name1", size: 14, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "+", size: 14, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"},
            { text: "name2", size: 14, fontFamily: "Raleway", charSpacing: 300, fill: "#000000", isColorEditable: true, fontGroup: "primary"}
        ]
    },
    {
        groupId: "date",
        groupX: 100,  // Zentrum der Gruppe
        groupY: 558,  // Vertikale Position
        spacing: 5,
        maxWidth: 80, // Maximale Breite der Gruppe
        originY: "center",
        texts: [
            { text: "weddingDate", size: 10, fontFamily: "Baskerville", fontWeight: "italic", charSpacing: 80, fill: "#000000", isColorEditable: true, fontGroup: "secondary"}
        ]
    },
    {
        groupId: "ad",
        groupX: 100,  // Zentrum der Gruppe
        groupY: 574,  // Vertikale Position
        spacing: 15,
        maxWidth: 500, // Maximale Breite der Gruppe
        texts: [
            { text: "EINFACH KNIPS®", size: 8, fontFamily: "Raleway", charSpacing: 100, fill: "#000000"}
        ]
    }
 ]},
];