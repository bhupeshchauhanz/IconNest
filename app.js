/* ============================================================
   ICONNEST — App JavaScript  (clean, bug-free)
   ============================================================ */
'use strict';

// ── BASE PATHS ──
const BASE_PALETTE = 'assets/Iconly Pro, 3D shape icons/Shapes 6 Palette color/';
const BASE_CLAY = 'assets/Iconly Pro, 3D shape icons/Shapes Clay/';
const BASE_DARK = 'assets/Iconly Pro, 3D shape icons/Shapes Dark material/';
const BASE_WEATHER = 'assets/Weather icon/';
const BASE_GLASSY = 'assets/Glassy Icons/';
const BASE_ICONLY = 'assets/Iconly/';

// ── SHAPES DATA ──
const SHAPES = [
    { name: '1-5 Sphere', a1: '1-5 sphere angle 1', a2: '1-5 sphere angle 2', clayA: '1-5 sphere angle 1 clay', clayB: '1-5 sphere angle 2 clay', darkA: '1-5 sphere angle 1 Dark', darkB: '1-5 sphere angle 2 Dark' },
    { name: '2 Torus Chain', a1: '2 Torus chain angle 1', a2: '2 Torus chain angle 2', clayA: '2 Torus chain angle 1 clay', clayB: '2 Torus chain angle 2 clay', darkA: '2 Torus chain angle 1 Dark', darkB: '2 Torus chain angle 2 Dark' },
    { name: '2 Joined Sphere', a1: '2joined sphere angle 1', a2: '2joined sphere angle 2', clayA: '2jouned sphere angle 1 clay', clayB: '2jouned sphere angle 2 clay', darkA: '2jouned sphere angle 1 Dark', darkB: '2jouned sphere angle 2 Dark' },
    { name: '3 Triangle in 1', a1: '3triangle in 1 angle 1', a2: '3triangle in 1 angle 2', clayA: '3Triangle in 1 angle 1 clay', clayB: '3Triangle in 1 angle 2 clay', darkA: '3Triangle in 1 angle 1 Dark', darkB: '3Triangle in 1 angle 2 Dark' },
    { name: '4 Joined Cube', a1: '4Joined cube angle 1', a2: '4Joined cube angle 2', clayA: '4Joined Cube angle 1 clay', clayB: '4Joined Cube angle 2 clay', darkA: '4Joined Cube angle 1 Dark', darkB: '4Joined Cube angle 2 Dark' },
    { name: '5 Sided Twisted Curve', a1: '5 Sided twisted curve angle 1', a2: '5 Sided twisted curve angle 2', clayA: '5sided twisted curve angle 1 clay', clayB: '5sided twisted curve angle 2 clay', darkA: '5sided twisted curve angle 1 Dark', darkB: '5sided twisted curve angle 2 Dark' },
    { name: '5M Ball Close', a1: '5Mball close angle 1', a2: '5Mball close angle 2', clayA: '5Mball close angle 1 clay', clayB: '5Mball close angle 2 clay', darkA: '5Mball close angle 1 Dark', darkB: '5Mball close angle 2 Dark' },
    { name: '6 Mixed Circles', a1: '6 Mixed circles angle 1', a2: '6 Mixed circles angle 2', clayA: '6 Mixed circles angle 1 clay', clayB: '6 Mixed circles angle 2 clay', darkA: '6 Mixed circles angle 1 Dark', darkB: '6 Mixed circles angle 2 Dark' },
    { name: '6M Ball Star', a1: '6Mball Star angle 1', a2: '6Mball Star angle 2', clayA: '6Mball Star angle 1 clay', clayB: '6Mball Star angle 2 clay', darkA: '6Mball Star angle 1 Dark', darkB: '6Mball Star angle 2 Dark' },
    { name: '6 Sided', a1: '6Sided angle 1', a2: '6Sided angle 2', clayA: '6sided angle 1 clay', clayB: '6sided angle 2 clay', darkA: '6sided angle 1 Dark', darkB: '6sided angle 2 Dark' },
    { name: '8 Close Metaballs', a1: '8Close Metaballs angle 1', a2: '8Close Metaballs angle 2', clayA: '8Close Metaballs angle 1 clay', clayB: '8Close Metaballs angle 2 clay', darkA: '8close balls angle 1 Dark', darkB: '8close balls angle 2 Dark' },
    { name: '9 Object Rotated Circle', a1: '9object rotated circle angle 1', a2: '9object rotated circle angle 2', clayA: '9object rotated circle angle 1 clay', clayB: '9object rotated circle angle 2 clay', darkA: '9object rotated circle angle 1 Dark', darkB: '9object rotated circle angle 2 Dark' },
    { name: 'Bulging Sphere', a1: 'Bulging sphere angle 1', a2: 'Bulging sphere angle 2', clayA: 'Bulging sphere angle 1 clay', clayB: 'Bulging sphere angle 2 clay', darkA: 'Bulging sphere angle 1 Dark', darkB: 'Bulging sphere angle 2 Dark' },
    { name: 'Circle in Cube', a1: 'Circle in side cube angle 1', a2: 'Circle in side cube angle 2', clayA: 'Circle in side cube angle 1 clay', clayB: 'Circle in side cube angle 2 clay', darkA: 'Circle in side cube angle 1 Dark', darkB: 'Circle in side cube angle 2 Dark' },
    { name: 'Circle Sphere', a1: 'Circle sphere angle 1', a2: 'Circle sphere angle 2', clayA: 'Circle sphere angle 1 clay', clayB: 'Circle sphere angle 2 clay', darkA: 'Circle sphere angle 1 Dark', darkB: 'Circle sphere angle 2 Dark' },
    { name: 'Cylinder Through Sphere', a1: 'Cylender through sphere angle 1', a2: 'Cylender through sphere angle 2', clayA: 'Cylinder through angle 1 clay', clayB: 'Cylinder through angle 2 clay', darkA: 'Cylinder through angle 1 Dark', darkB: 'Cylinder through angle 2 Dark' },
    { name: 'Diamond Cubic', a1: 'Diamond cubic angle 1', a2: 'Diamond cubic angle 2', clayA: 'Diamond cubic angle 1 clay', clayB: 'Diamond cubic angle 2 clay', darkA: 'Diamond cubic angle 1 Dark', darkB: 'Diamond cubic angle 2 Dark' },
    { name: 'Displaced Cell Noise', a1: 'Displaced cell noise angle 1', a2: 'Displaced cell noise angle 2', clayA: 'Displaced cell noise angle 1 clay', clayB: 'Displaced cell noise angle 2 clay', darkA: 'Displaced cell noise angle 1 Dark', darkB: 'Displaced cell noise angle 2 Dark' },
    { name: 'Double Spinned Curve', a1: 'Double spinned curve angle 1', a2: 'Double spinned curve angle 2', clayA: 'Double spinned curve angle 1 clay', clayB: 'Double spinned curve angle 2 clay', darkA: 'Double spinned curve angle 1 Dark', darkB: 'Double spinned curve angle 2 Dark' },
    { name: 'Droplet', a1: 'Droplet angle 1', a2: 'Droplet angle 2', clayA: 'Droplet angle 1 clay', clayB: 'Droplet angle 2 clay', darkA: 'Droplet angle 1 Dark', darkB: 'Droplet angle 2 Dark' },
    { name: 'Electron V1', a1: 'Electron v1 angle 1', a2: 'Electron v1 angle 2', clayA: 'Electron v1 angle 1 clay', clayB: 'Electron v1 angle 2 clay', darkA: 'Electron v1 angle 1 Dark', darkB: 'Electron v1 angle 2 Dark' },
    { name: 'Electron V2', a1: 'Electron v2 angle 1', a2: 'Electron v2 angle 2', clayA: 'Electron v2 angle 1 clay', clayB: 'Electron v2 angle 2 clay', darkA: 'Electron v2 angle 1 Dark', darkB: 'Electron v2 angle 2 Dark' },
    { name: 'Flat Plus with Hole', a1: 'Flat Plus with Hoke angle 1', a2: 'Flat Plus with Hoke angle 2', clayA: 'Flat plus with hole angle 1 clay', clayB: 'Flat plus with hole angle 2 clay', darkA: 'Flat plus with hole angle 1 Dark', darkB: 'Flat plus with hole angle 2 Dark' },
    { name: 'Half Circle Top Bottom', a1: 'Half Circle top bot angle 1', a2: 'Half Circle top bot angle 2', clayA: 'Half Circle top bot angle 1 clay', clayB: 'Half Circle top bot angle 2 clay', darkA: 'Half Circle top bot angle 1 Dark', darkB: 'Half Circle top bot angle 2 Dark' },
    { name: 'Half Torus Bold', a1: 'Half Torus bold angle 1', a2: 'Half Torus bold angle 2', clayA: 'Half torus bold angle 1 clay', clayB: 'Half torus bold angle 2 clay', darkA: 'Half torus bold angle 1 Dark', darkB: 'Half torus bold angle 2 Dark' },
    { name: 'Half Torus', a1: 'Half torus angle 1', a2: 'Half torus angle 2', clayA: 'Half torus angle 1 clay', clayB: 'Half torus angle 2 clay', darkA: 'Half torus angle 1 Dark', darkB: 'Half torus angle 2 Dark' },
    { name: 'Half Sphere', a1: 'half sphere angle 1', a2: 'half sphere angle 2', clayA: 'Half sphere angle 1 clay', clayB: 'Half sphere angle 2 clay', darkA: 'Half sphere angle 1 Dark', darkB: 'Half sphere angle 2 Dark' },
    { name: 'Holed Sphere', a1: 'Holed sphere angle 1', a2: 'Holed sphere angle 2', clayA: 'Holed sphere angle 1 clay', clayB: 'Holed sphere angle 2 clay', darkA: 'Holed sphere angle 1 Dark', darkB: 'Holed sphere angle 2 Dark' },
    { name: 'Imploded Ropes', a1: 'Imploaded ropes angle 1', a2: 'Imploaded ropes angle 2', clayA: 'Imploaded ropes angle 1 clay', clayB: 'Imploaded ropes angle 2 clay', darkA: 'Imploaded ropes angle 1 Dark', darkB: 'Imploaded ropes angle 2 Dark' },
    { name: 'Indented Sphere 2 Half', a1: 'Indented sphere 2half angle 1', a2: 'Indented sphere 2half angle 2', clayA: 'indented sphere 2half angle 1 clay', clayB: 'indented sphere 2half angle 2 clay', darkA: 'indented sphere 2half angle 1 Dark', darkB: 'indented sphere 2half angle 2 Dark' },
    { name: 'Inserted Cylinder', a1: 'Inserted cylinder angle 1', a2: 'Inserted cylinder angle 2', clayA: 'Inserted cylender angle 1 clay', clayB: 'Inserted cylender angle 2 clay', darkA: 'Inserted cylender angle 1 Dark', darkB: 'Inserted cylender angle 2 Dark' },
    { name: 'Joined Waved Sphere', a1: 'Joined waved sphere angle 1', a2: 'Joined waved sphere angle 2', clayA: 'Joined waved sphere angle 1 clay', clayB: 'Joined waved sphere angle 2 clay', darkA: 'Joined waved sphere angle 1 Dark', darkB: 'Joined waved sphere angle 2 Dark' },
    { name: 'Piped Triangle', a1: 'Piped triangle angle 1', a2: 'Piped triangle angle 2', clayA: 'Piped triangle angle 1 clay', clayB: 'Piped triangle angle 2 clay', darkA: 'Piped triangle angle 1 Dark', darkB: 'Piped triangle angle 2 Dark' },
    { name: 'Plus', a1: 'Plus angle 1', a2: 'Plus angle 2', clayA: 'Plus angle 1 clay', clayB: 'Plus angle 2 clay', darkA: 'Plus angle 1 Dark', darkB: 'Plus angle 2 Dark' },
    { name: 'Plus on Indented Circle', a1: 'Plus on indented circle angle 1', a2: 'Plus on indented circle angle 2', clayA: 'Plus on indented circle angle 1 clay', clayB: 'Plus on indented circle angle 2 clay', darkA: 'Plus on indented circle angle 1 Dark', darkB: 'Plus on indented circle angle 2 Dark' },
    { name: 'Procedural Waved Sphere', a1: 'Procedural waved sphere angle 1', a2: 'Procedural waved sphere angle 2', clayA: 'Procedural waved sphere angle 1 clay', clayB: 'Procedural waved sphere angle 2 clay', darkA: 'Procedural waved sphere angle 1 Dark', darkB: 'Procedural waved sphere angle 2 Dark' },
    { name: 'Reticular Sphere', a1: 'Reticular sphere angle 1', a2: 'Reticular sphere angle 2', clayA: 'Reticular Sphere angle 1 clay', clayB: 'Reticular Sphere angle 2 clay', darkA: 'Reticular Sphere angle 1 Dark', darkB: 'Reticular Sphere angle 2 Dark' },
    { name: 'Screwed Pipe', a1: 'Screwed pipe angle 1', a2: 'Screwed pipe angle 2', clayA: 'Screwed pipe angle 1 clay', clayB: 'Screwed pipe angle 2 clay', darkA: 'Screwed pipe angle 1 Dark', darkB: 'Screwed pipe angle 2 Dark' },
    { name: 'Shabdar Shape Circles', a1: 'Shabdar shape circles angle 1', a2: 'Shabdar shape circles angle 2', clayA: 'Shabdar shape circles angle 1 clay', clayB: 'Shabdar shape circles angle 2 clay', darkA: 'Shabdar shape circles angle 1 Dark', darkB: 'Shabdar shape circles angle 2 Dark' },
    { name: '4 Sided Twisted Curve', a1: 'Shapes 4 sided twisted curve angle 1', a2: 'Shapes 4 sided twisted curve angle 2', clayA: 'Shapes 4 sided twisted curve angle 1 clay', clayB: 'Shapes 4 sided twisted curve angle 2 clay', darkA: 'Shapes 4 sided twisted curve angle 1 Dark', darkB: 'Shapes 4 sided twisted curve angle 2 Dark' },
    { name: '9 Pipe', a1: 'Shapes 9Pipe angle 1', a2: 'Shapes 9Pipe angle 2', clayA: '9Pipe angle 1 clay', clayB: '9Pipe angle 2 clay', darkA: '9Pipe angle 1 Dark', darkB: '9Pipe angle 2 Dark' },
    { name: '9 Objects Circle', a1: 'Shapes 9objects circle angle 1', a2: 'Shapes 9objects  circle angle 2', clayA: '9objects circle angle 1 clay', clayB: '9objects circle angle 2 clay', darkA: '9objects circle angle 1 Dark', darkB: '9objects circle angle 2 Dark' },
    { name: 'Cube in Cube', a1: 'Shapes Cube in cube angle 1', a2: 'Shapes Cube in cube angle 2', clayA: 'Cube in cube angle 1 clay', clayB: 'Cube in cube angle 2 clay', darkA: 'Cube in cube angle 1 Dark', darkB: 'Cube in cube angle 2 Dark' },
    { name: 'Spinned Cylinder', a1: 'Shapes Spinned cylinder angle 1', a2: 'Shapes Spinned cylinder angle 2', clayA: 'Spinned cylinder angle 1 clay', clayB: 'Spinned cylinder angle 2 clay', darkA: 'Spinned cylinder angle 1 Dark', darkB: 'Spinned cylinder angle 2 Dark' },
    { name: 'Sharp Donut', a1: 'Sharp donut angle 1', a2: 'Sharp donut angle 2', clayA: 'Sharp donut angle 1 clay', clayB: 'Sharp donut angle 2 clay', darkA: 'Sharp donut angle 1 Dark', darkB: 'Sharp donut angle 2 Dark' },
    { name: 'Simple Cone', a1: 'Simple Cone angle 1', a2: 'Simple Cone angle 2', clayA: 'Simple cone angle 1 clay', clayB: 'Simple cone angle 2 clay', darkA: 'Simple cone angle 1 Dark', darkB: 'Simple cone angle 2 Dark' },
    { name: 'Simple Torus', a1: 'Simple Torus angle 1', a2: 'Simple Torus angle 2', clayA: 'Simple torus angle 1 clay', clayB: 'Simple torus angle 2 clay', darkA: 'Simple torus angle 1 Dark', darkB: 'Simple torus angle 2 Dark' },
    { name: 'Star Shape Pipes', a1: 'Star shape pipes angle 1', a2: 'Star shape pipes angle 2', clayA: 'Star shape pipes angle 1 clay', clayB: 'Star shape pipes angle 2 clay', darkA: 'Star shape pipes angle 1 Dark', darkB: 'Star shape pipes angle 2 Dark' },
    { name: 'Stretched Simple Sphere', a1: 'Stretched simple sphere angle 1', a2: 'Stretched simple sphere angle 2', clayA: 'Stretched simple sphere angle 1 clay', clayB: 'Stretched simple sphere angle 2 clay', darkA: 'Stretched simple sphere angle 1 Dark', darkB: 'Stretched simple sphere angle 2 Dark' },
    { name: 'Stretched Sphere', a1: 'Stretched sphere angle 1', a2: 'Stretched sphere angle 2', clayA: 'Stretched sphere angle 1 clay', clayB: 'Stretched sphere angle 2 clay', darkA: 'Stretched sphere angle 1 Dark', darkB: 'Stretched sphere angle 2 Dark' },
    { name: 'Stretched Sphere with Circle', a1: 'Stretched sphere with circle in middle angle 1', a2: 'Stretched sphere with circle in middle angle 2', clayA: 'stretched sphere with circle middle angle 1 clay', clayB: 'stretched sphere with circle middle angle 2 clay', darkA: 'stretched sphere with circle middle angle 1 Dark', darkB: 'stretched sphere with circle middle angle 2 Dark' },
    { name: 'Tape Holder', a1: 'Tape Holder angle 1', a2: 'Tape Holder angle 2', clayA: 'Tape holder angle 1 clay', clayB: 'Tape holder angle 2 clay', darkA: 'Tape holder angle 1 Dark', darkB: 'Tape holder angle 2 Dark' },
    { name: 'Torus 5 Line', a1: 'Torus 5 line angle 1', a2: 'Torus 5 line angle 2', clayA: 'Torus 5 line angle 1 clay', clayB: 'Torus 5 line angle 2 clay', darkA: 'Torus 5 line angle 1 Dark', darkB: 'Torus 5 line angle 2 Dark' },
    { name: 'Torus Wire', a1: 'Torus wire angle 1', a2: 'Torus wire angle 2', clayA: 'Torus wire angle 1 clay', clayB: 'Torus wire angle 2 clay', darkA: 'Torus wire angle 1 Dark', darkB: 'Torus wire angle 2 Dark' },
    { name: 'Torus with Curve', a1: 'Torus with curve angle 1', a2: 'Torus with curve angle 2', clayA: 'Torus with curve angle 1 clay', clayB: 'Torus with curve angle 2 clay', darkA: 'Torus with curve angle 1 Dark', darkB: 'Torus with curve angle 2 Dark' },
    { name: 'Triangle Cone', a1: 'Triangle Cone angle 1', a2: 'Triangle Cone angle 2', clayA: 'Triangle Cone angle 1 clay', clayB: 'Triangle Cone angle 2 clay', darkA: 'Triangle Cone angle 1 Dark', darkB: 'Triangle Cone angle 2 Dark' },
    { name: 'Triangle Grid Sphere', a1: 'Triangle grid sphere angle 1', a2: 'Triangle grid sphere angle 2', clayA: 'Triangle Grid sphere angle 1 clay', clayB: 'Triangle Grid sphere angle 2 clay', darkA: 'Triangle Grid sphere angle 1 Dark', darkB: 'Triangle Grid sphere angle 2 Dark' },
    { name: 'Triangle Sphere', a1: 'Triangle sphere angle 1', a2: 'Triangle sphere angle 2', clayA: 'Triangle sphere angle 1 clay', clayB: 'Triangle sphere angle 2 clay', darkA: 'Triangle sphere angle 1 Dark', darkB: 'Triangle sphere angle 2 Dark' },
    { name: 'Twisted Spinned 2 Pipe', a1: 'Twisted spinned 2pipe angle 1', a2: 'Twisted spinned 2pipe angle 2', clayA: 'Twisted spinned 2pipe angle 1 clay', clayB: 'Twisted spinned 2pipe angle 2 clay', darkA: 'Twisted spinned 2pipe angle 1 Dark', darkB: 'Twisted spinned 2pipe angle 2 Dark' },
    { name: 'Vertical Wire Torus', a1: 'Vertical Wire torus angle 1', a2: 'Vertical Wire torus angle 2', clayA: 'Vertical wire torus angle 1 clay', clayB: 'Vertical wire torus angle 2 clay', darkA: 'Vertical wire torus angle 1 Dark', darkB: 'Vertical wire torus angle 2 Dark' },
    { name: 'Waved Sphere', a1: 'Waved sphere angle 1', a2: 'Waved sphere angle 2', clayA: 'Waved sphere angle 1 clay', clayB: 'Waved sphere angle 2 clay', darkA: 'Waved sphere angle 1 Dark', darkB: 'Waved sphere angle 2 Dark' },
];

const WEATHER_ICONS = [
    { name: 'Clear Sky (Day)', id: '01d', tag: 'Clear' },
    { name: 'Clear Sky (Night)', id: '01n', tag: 'Clear' },
    { name: 'Few Clouds (Day)', id: '02d', tag: 'Clouds' },
    { name: 'Few Clouds (Night)', id: '02n', tag: 'Clouds' },
    { name: 'Scattered Clouds (Day)', id: '03d', tag: 'Clouds' },
    { name: 'Scattered Clouds (Night)', id: '03n', tag: 'Clouds' },
    { name: 'Broken Clouds (Day)', id: '04d', tag: 'Clouds' },
    { name: 'Broken Clouds (Night)', id: '04n', tag: 'Clouds' },
    { name: 'Shower Rain (Day)', id: '09d', tag: 'Rain' },
    { name: 'Shower Rain (Night)', id: '09n', tag: 'Rain' },
    { name: 'Rain (Day)', id: '10d', tag: 'Rain' },
    { name: 'Rain (Night)', id: '10n', tag: 'Rain' },
    { name: 'Thunderstorm (Day)', id: '11d', tag: 'Thunder' },
    { name: 'Thunderstorm (Night)', id: '11n', tag: 'Thunder' },
    { name: 'Snow (Day)', id: '13d', tag: 'Snow' },
    { name: 'Snow (Night)', id: '13n', tag: 'Snow' },
    { name: 'Mist (Day)', id: '50d', tag: 'Mist' },
    { name: 'Mist (Night)', id: '50n', tag: 'Mist' },
    { name: 'Humidity', id: 'humidity', tag: 'Misc', onlyAnimated: true },
    { name: 'Pressure', id: 'pressure', tag: 'Misc', onlyAnimated: true },
    { name: 'Sunrise', id: 'sunrise', tag: 'Misc', onlyAnimated: true },
    { name: 'Sunset', id: 'sunset', tag: 'Misc', onlyAnimated: true },
    { name: 'Visibility', id: 'visibility', tag: 'Misc', onlyAnimated: true },
    { name: 'Wind Speed', id: 'wind-speed', tag: 'Misc', onlyAnimated: true },
    { name: 'Direction', id: 'direction', tag: 'Misc', onlyPNG: true },
];

const GLASSY_ICONS = [
    { name: 'Activity', file: 'Activity.svg' }, { name: 'Add', file: 'Add.svg' },
    { name: 'Arrow', file: 'Arrow.svg' }, { name: 'Arrow 1', file: 'Arrow_1.svg' },
    { name: 'Bag', file: 'Bag.svg' }, { name: 'Bag 1', file: 'Bag_1.svg' },
    { name: 'Bookmark', file: 'Bookmark.svg' }, { name: 'Buy', file: 'Buy.svg' },
    { name: 'Calendar', file: 'Calendar.svg' }, { name: 'Camera', file: 'Camera.svg' },
    { name: 'Chart', file: 'Chart.svg' }, { name: 'Chat', file: 'Chat.svg' },
    { name: 'Clock', file: 'Clock.svg' }, { name: 'Close', file: 'Close.svg' },
    { name: 'Danger', file: 'Danger.svg' }, { name: 'Discount', file: 'Discount.svg' },
    { name: 'Discovery', file: 'Discovery.svg' }, { name: 'Document', file: 'Document.svg' },
    { name: 'Edit', file: 'Edit.svg' }, { name: 'Filter', file: 'Filter.svg' },
    { name: 'Folder', file: 'Folder.svg' }, { name: 'Gallery', file: 'Gallery.svg' },
    { name: 'Game', file: 'Game.svg' }, { name: 'Graph', file: 'Graph.svg' },
    { name: 'Heart', file: 'Heart.svg' }, { name: 'Home', file: 'Home.svg' },
    { name: 'Info', file: 'Info.svg' }, { name: 'Info 1', file: 'Info_1.svg' },
    { name: 'Location', file: 'Location.svg' }, { name: 'Lock', file: 'Lock.svg' },
    { name: 'Lock 1', file: 'Lock_1.svg' }, { name: 'Menu', file: 'Menu.svg' },
    { name: 'Menu 1', file: 'Menu_1.svg' }, { name: 'Message', file: 'Message.svg' },
    { name: 'Notification', file: 'Notification.svg' }, { name: 'Paper Plus', file: 'Paper Plus.svg' },
    { name: 'Paper', file: 'Paper.svg' }, { name: 'Play', file: 'Play.svg' },
    { name: 'Profile', file: 'Profile.svg' }, { name: 'Search', file: 'Search.svg' },
    { name: 'Send', file: 'Send.svg' }, { name: 'Setting', file: 'Setting.svg' },
    { name: 'Shield', file: 'Shield.svg' }, { name: 'Show', file: 'Show.svg' },
    { name: 'Star', file: 'Star.svg' }, { name: 'Star 1', file: 'Star_1.svg' },
    { name: 'Tick', file: 'Tick.svg' }, { name: 'Video', file: 'Video.svg' },
    { name: 'Volume', file: 'Volume.svg' }, { name: 'Wallet', file: 'Wallet.svg' },
];

const ICONLY_COMMON = [
    '2 User', '3 User', 'Activity', 'Add User',
    'Arrow - Down 2', 'Arrow - Down 3', 'Arrow - Down 4', 'Arrow - Down 5',
    'Arrow - Down Circle', 'Arrow - Down Square', 'Arrow - Down',
    'Arrow - Left 2', 'Arrow - Left 3', 'Arrow - Left 4', 'Arrow - Left 5',
    'Arrow - Left Circle', 'Arrow - Left Square', 'Arrow - Left',
    'Arrow - Right 2', 'Arrow - Right 3', 'Arrow - Right 4', 'Arrow - Right 5',
    'Arrow - Right Circle', 'Arrow - Right Square', 'Arrow - Right',
    'Arrow - Up 2', 'Arrow - Up 3', 'Arrow - Up 4', 'Arrow - Up 5',
    'Arrow - Up Circle', 'Arrow - Up Square', 'Arrow - Up',
    'Bag 2', 'Bag 3', 'Bag', 'Bookmark', 'Buy', 'Calendar',
    'Call Missed', 'Call Silent', 'Call', 'Calling', 'Camera',
    'Category', 'Chart', 'Chat', 'Close Square',
    'Danger Square', 'Danger Triangle', 'Delete', 'Discount', 'Discovery',
    'Document', 'Download', 'Edit Square', 'Edit',
    'Filter 2', 'Filter 3', 'Filter', 'Folder', 'Game', 'Graph',
    'Heart', 'Hide', 'Home', 'Image 2', 'Image 3', 'Image',
    'Info Square', 'Location', 'Lock', 'Login', 'Logout', 'Message',
    'More Circle', 'More Square', 'Notification',
    'Paper Download', 'Paper Fail', 'Paper Negative', 'Paper Plus', 'Paper Upload', 'Paper',
    'Password', 'Play', 'Plus', 'Profile', 'Scan', 'Search', 'Send', 'Setting',
    'Shield Done', 'Shield Fail', 'Show', 'Star', 'Swap',
    'Tick Square', 'Ticket Star', 'Ticket', 'Time Circle', 'Time Square',
    'Unlock', 'Upload', 'Video', 'Voice 2', 'Voice 3', 'Voice',
    'Volume Down', 'Volume Off', 'Volume Up', 'Wallet', 'Work', 'coffee'
];

// ── STATE ──
let currentStyle = 'palette';
let currentAngle = '1';
let currentIconlyCurvature = 'Curved';
let currentIconlyStyle = 'Light';
let currentWeatherStyle = 'animated_icons';
let shapesSearchQuery = '';
let iconlySearchQuery = '';
let glassySearchQuery = '';
let weatherSearchQuery = '';
let lightboxShape = null;
let lightboxDisplayAngle = '1';

const PAGE = 20;
let shapesLimit = PAGE;
let iconlyLimit = PAGE;
let glassyLimit = PAGE;
let weatherLimit = PAGE;

// ── HELPERS ──
function getStyleBase(s) {
    return s === 'palette' ? BASE_PALETTE : s === 'clay' ? BASE_CLAY : BASE_DARK;
}
function getA1Key(s) { return s === 'palette' ? 'a1' : s === 'clay' ? 'clayA' : 'darkA'; }
function getA2Key(s) { return s === 'palette' ? 'a2' : s === 'clay' ? 'clayB' : 'darkB'; }
function enc(s) { return encodeURIComponent(s); }
function setCount(id, n, word) {
    const el = document.getElementById(id);
    if (el) el.textContent = n + ' ' + word + (n !== 1 ? 's' : '') + ' found';
}

// ── TOAST ──
function showToast(msg) {
    const t = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

// ── DOWNLOAD SINGLE FILE ──
function downloadFile(url, filename) {
    showToast('\u2b07 Preparing download\u2026');

    function saveBlob(blob) {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(blobUrl); }, 15000);
        showToast('\u2713 ' + filename);
    }

    // XHR blob (most reliable) → fetch blob → direct link fallback
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
        if (xhr.status === 200 || xhr.status === 0) { saveBlob(xhr.response); }
        else { tryFetch(); }
    };
    xhr.onerror = function () { tryFetch(); };
    xhr.send();

    function tryFetch() {
        fetch(url)
            .then(function (r) { return r.blob(); })
            .then(function (blob) { saveBlob(blob); })
            .catch(function () {
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                showToast('\u2713 ' + filename);
            });
    }
}


// ── STATIC ZIP DIRECT DOWNLOAD ──
function downloadStaticZip(zipPath, zipName) {
    showToast('⬇ Downloading ' + zipName + '…');
    const a = document.createElement('a');
    a.href = zipPath;
    a.download = zipName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { showToast('✓ ' + zipName); }, 500);
}

// ── ZIP DOWNLOAD (on-the-fly, for server environments) ──
async function createZip(files, zipName, folder) {
    if (!files.length) { showToast('Nothing to download'); return; }

    showToast('⏳ Building zip (' + files.length + ' files)…');
    try {
        const zip = new JSZip().folder(folder || 'icons');
        const results = await Promise.allSettled(
            files.map(f => fetch(f.url)
                .then(r => { if (!r.ok) throw new Error(); return r.blob(); })
                .then(b => ({ name: f.name, blob: b }))
            )
        );

        let added = 0;
        results.forEach(r => { if (r.status === 'fulfilled') { zip.file(r.value.name, r.value.blob); added++; } });
        if (!added) throw new Error('No files fetched');
        showToast('⚙️ Compressing ' + added + ' files…');
        const blob = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE', compressionOptions: { level: 6 } });
        const a = Object.assign(document.createElement('a'), {
            href: URL.createObjectURL(blob),
            download: zipName,
        });
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(a.href), 10000);
        showToast('✓ ' + zipName);
    } catch (e) {
        showToast('❌ Zip failed — ' + e.message);
    }
}

// ── 3D TILT ──
function applyTilt(card) {
    let raf = null, tRX = 0, tRY = 0, cRX = 0, cRY = 0;
    const lerp = (a, b, t) => a + (b - a) * t;
    function tick() {
        cRX = lerp(cRX, tRX, 0.12); cRY = lerp(cRY, tRY, 0.12);
        card.style.transform = `perspective(700px) rotateX(${cRX.toFixed(2)}deg) rotateY(${cRY.toFixed(2)}deg) translateZ(8px) scale(1.03)`;
        card.style.setProperty('--gx', (50 + tRY * 2) + '%');
        card.style.setProperty('--gy', (50 - tRX * 2) + '%');
        raf = (Math.abs(cRX - tRX) > 0.05 || Math.abs(cRY - tRY) > 0.05) ? requestAnimationFrame(tick) : null;
    }
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        tRY = ((e.clientX - r.left) / r.width - 0.5) * 28;
        tRX = -((e.clientY - r.top) / r.height - 0.5) * 14;
        if (!raf) raf = requestAnimationFrame(tick);
    });
    card.addEventListener('mouseleave', () => {
        tRX = tRY = 0;
        card.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)';
        card.style.transform = '';
        setTimeout(() => { card.style.transition = ''; }, 520);
        if (raf) { cancelAnimationFrame(raf); raf = null; }
    });
}

// ── DOWNLOAD ICON BUTTON HTML ──
const dlBtnSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;

// ══════════════════════════════════
// RENDER: 3D SHAPES GRID
// ══════════════════════════════════
function renderIconGrid() {
    const grid = document.getElementById('iconGrid');
    if (!grid) return;
    const q = shapesSearchQuery.trim().toLowerCase();
    const filtered = q ? SHAPES.filter(s => s.name.toLowerCase().includes(q)) : SHAPES;

    // snap limit
    if (filtered.length - shapesLimit > 0 && filtered.length - shapesLimit < 10) shapesLimit = filtered.length;
    const shown = filtered.slice(0, shapesLimit);
    document.getElementById('shapesLoadMoreWrap').style.display = filtered.length > shapesLimit ? 'flex' : 'none';
    setCount('countLabel', filtered.length, 'shape');

    if (!filtered.length) {
        grid.innerHTML = `<div class="empty-state"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><p>No shapes match "<strong>${shapesSearchQuery}</strong>"</p></div>`;
        return;
    }
    grid.innerHTML = '';
    const a1k = getA1Key(currentStyle), a2k = getA2Key(currentStyle), base = getStyleBase(currentStyle);

    shown.forEach((shape, i) => {
        const card = document.createElement('div');
        card.className = 'icon-card';
        card.style.animationDelay = (i * 0.03) + 's';

        let imgHtml;
        if (currentAngle === 'both') {
            imgHtml = `<div class="card-img-wrap two-imgs">
                <img src="${base}${enc(shape[a1k])}.png" alt="${shape.name} A1" loading="lazy" onerror="this.style.opacity='0.2'"/>
                <img src="${base}${enc(shape[a2k])}.png" alt="${shape.name} A2" loading="lazy" onerror="this.style.opacity='0.2'"/>
            </div>`;
        } else {
            const key = currentAngle === '2' ? a2k : a1k;
            imgHtml = `<div class="card-img-wrap"><img src="${base}${enc(shape[key])}.png" alt="${shape.name}" loading="lazy" onerror="this.style.opacity='0.2'"/></div>`;
        }
        const dlKey = currentAngle === '2' ? a2k : a1k;
        const dlSrc = base + enc(shape[dlKey]) + '.png';
        const dlName = shape[dlKey] + '.png';

        card.innerHTML = `${imgHtml}<div class="card-name">${shape.name}</div><button class="card-download-btn" title="Download">${dlBtnSVG}</button>`;
        card.addEventListener('click', e => {
            if (e.target.closest('.card-download-btn')) { e.stopPropagation(); downloadFile(dlSrc, dlName); return; }
            openLightbox(shape);
        });
        grid.appendChild(card);
        applyTilt(card);
        const img = card.querySelector('.card-img-wrap img');
        if (img) { img.style.setProperty('--dur', (4.5 + (i * 0.37 % 3)).toFixed(2) + 's'); img.style.setProperty('--delay', -((i * 1.13) % 6).toFixed(2) + 's'); }
    });
}

// ══════════════════════════════════
// RENDER: ICONLY GRID
// ══════════════════════════════════
function renderIconlyGrid() {
    const grid = document.getElementById('iconlyGrid');
    if (!grid) return;
    const q = iconlySearchQuery.trim().toLowerCase();
    const filtered = q ? ICONLY_COMMON.filter(n => n.toLowerCase().includes(q)) : ICONLY_COMMON;

    if (filtered.length - iconlyLimit > 0 && filtered.length - iconlyLimit < 10) iconlyLimit = filtered.length;
    const shown = filtered.slice(0, iconlyLimit);
    document.getElementById('iconlyLoadMoreWrap').style.display = filtered.length > iconlyLimit ? 'flex' : 'none';
    setCount('iconlyCountLabel', filtered.length, 'icon');

    if (!filtered.length) { grid.innerHTML = `<div class="empty-state">No icons match "<strong>${iconlySearchQuery}</strong>"</div>`; return; }
    grid.innerHTML = '';
    shown.forEach(name => {
        const src = BASE_ICONLY + currentIconlyCurvature + '/' + currentIconlyStyle + '/' + name + '.svg';
        const card = document.createElement('div');
        card.className = 'icon-card';
        card.innerHTML = `<div class="card-img-wrap"><img src="${src}" alt="${name}" loading="lazy" onerror="this.closest('.icon-card').style.display='none'"/></div><div class="card-name">${name}</div><button class="card-download-btn" title="Download">${dlBtnSVG}</button>`;
        card.querySelector('.card-download-btn').addEventListener('click', e => { e.stopPropagation(); downloadFile(src, name + '.svg'); });
        grid.appendChild(card);
        applyTilt(card);
    });
}

// ══════════════════════════════════
// RENDER: GLASSY GRID
// ══════════════════════════════════
function renderGlassyGrid() {
    const grid = document.getElementById('glassyGrid');
    if (!grid) return;
    const q = glassySearchQuery.trim().toLowerCase();
    const filtered = q ? GLASSY_ICONS.filter(ic => ic.name.toLowerCase().includes(q)) : GLASSY_ICONS;

    if (filtered.length - glassyLimit > 0 && filtered.length - glassyLimit < 10) glassyLimit = filtered.length;
    const shown = filtered.slice(0, glassyLimit);
    document.getElementById('glassyLoadMoreWrap').style.display = filtered.length > glassyLimit ? 'flex' : 'none';
    setCount('glassyCountLabel', filtered.length, 'icon');

    if (!filtered.length) { grid.innerHTML = `<div class="empty-state">No glassy icons match "<strong>${glassySearchQuery}</strong>"</div>`; return; }
    grid.innerHTML = '';
    shown.forEach(ic => {
        const src = BASE_GLASSY + ic.file;
        const card = document.createElement('div');
        card.className = 'icon-card';
        card.innerHTML = `<div class="card-img-wrap"><img src="${src}" alt="${ic.name}" loading="lazy" onerror="this.closest('.icon-card').style.display='none'"/></div><div class="card-name">${ic.name}</div><button class="card-download-btn" title="Download">${dlBtnSVG}</button>`;
        card.querySelector('.card-download-btn').addEventListener('click', e => { e.stopPropagation(); downloadFile(src, ic.file); });
        grid.appendChild(card);
        applyTilt(card);
    });
}

// ══════════════════════════════════
// RENDER: WEATHER GRID
// ══════════════════════════════════
function renderWeatherGrid() {
    const grid = document.getElementById('weatherGrid');
    if (!grid) return;
    const q = weatherSearchQuery.trim().toLowerCase();
    const filtered = WEATHER_ICONS.filter(ic => {
        if (currentWeatherStyle === 'static_icons' && (ic.onlyAnimated || ic.onlyPNG)) return false;
        if (currentWeatherStyle === 'icons' && ic.onlyAnimated) return false;
        if (currentWeatherStyle === 'animated_icons' && ic.onlyPNG) return false;
        if (q && !ic.name.toLowerCase().includes(q) && !ic.tag.toLowerCase().includes(q)) return false;
        return true;
    });

    if (filtered.length - weatherLimit > 0 && filtered.length - weatherLimit < 10) weatherLimit = filtered.length;
    const shown = filtered.slice(0, weatherLimit);
    document.getElementById('weatherLoadMoreWrap').style.display = filtered.length > weatherLimit ? 'flex' : 'none';
    setCount('weatherCountLabel', filtered.length, 'icon');

    if (!filtered.length) { grid.innerHTML = `<div class="empty-state">No weather icons match "<strong>${weatherSearchQuery}</strong>"</div>`; return; }
    grid.innerHTML = '';
    const ext = currentWeatherStyle === 'icons' ? '.png' : '.svg';

    shown.forEach(ic => {
        const file = ic.id + ext;
        const src = BASE_WEATHER + currentWeatherStyle + '/' + file;
        const card = document.createElement('div');
        card.className = 'weather-card';
        card.innerHTML = `
            <div class="weather-icon-wrap"><img src="${src}" alt="${ic.name}" onerror="this.closest('.weather-card').style.display='none'"/></div>
            <div class="weather-name">${ic.name}</div>
            <span class="weather-tag">${ic.tag}</span>
            <button class="card-download-btn" title="Download">${dlBtnSVG}</button>`;
        card.querySelector('.card-download-btn').addEventListener('click', e => { e.stopPropagation(); downloadFile(src, file); });
        grid.appendChild(card);
    });
}

// ── LIGHTBOX ──
function openLightbox(shape) {
    lightboxShape = shape;
    lightboxDisplayAngle = currentAngle === 'both' ? '1' : currentAngle;
    const base = getStyleBase(currentStyle);
    const src1 = base + enc(shape[getA1Key(currentStyle)]) + '.png';
    const src2 = base + enc(shape[getA2Key(currentStyle)]) + '.png';
    const lbl = currentStyle === 'palette' ? '6 Palette' : currentStyle === 'clay' ? 'Clay' : 'Dark Material';

    document.getElementById('lightboxTitle').textContent = shape.name;
    document.getElementById('lightboxImg').src = lightboxDisplayAngle === '1' ? src1 : src2;
    document.getElementById('lightboxTags').innerHTML = `<span class="lightbox-tag">${lbl}</span><span class="lightbox-tag">Angle ${lightboxDisplayAngle}</span><span class="lightbox-tag">PNG</span>`;
    document.getElementById('thumbAngle1').src = src1;
    document.getElementById('thumbAngle2').src = src2;
    document.getElementById('thumbAngle1').className = 'angle-thumb' + (lightboxDisplayAngle === '1' ? ' active' : '');
    document.getElementById('thumbAngle2').className = 'angle-thumb' + (lightboxDisplayAngle === '2' ? ' active' : '');
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
    lightboxShape = null;
}

function switchLightboxAngle(angle) {
    if (!lightboxShape) return;
    lightboxDisplayAngle = angle;
    const src = getStyleBase(currentStyle) + enc(lightboxShape[angle === '1' ? getA1Key(currentStyle) : getA2Key(currentStyle)]) + '.png';
    const img = document.getElementById('lightboxImg');
    img.style.opacity = '0';
    setTimeout(() => { img.src = src; img.style.opacity = '1'; }, 150);
    document.getElementById('thumbAngle1').className = 'angle-thumb' + (angle === '1' ? ' active' : '');
    document.getElementById('thumbAngle2').className = 'angle-thumb' + (angle === '2' ? ' active' : '');
    const lbl = currentStyle === 'palette' ? '6 Palette' : currentStyle === 'clay' ? 'Clay' : 'Dark Material';
    document.getElementById('lightboxTags').innerHTML = `<span class="lightbox-tag">${lbl}</span><span class="lightbox-tag">Angle ${angle}</span><span class="lightbox-tag">PNG</span>`;
}

// ── BULK DOWNLOADS (all route to pre-built static ZIPs) ──
function downloadStyleBulk() {
    const sl = currentStyle === 'palette' ? 'Shapes-6-Palette'
        : currentStyle === 'clay' ? 'Shapes-Clay'
            : 'Shapes-Dark-Material';
    downloadStaticZip('assets/zips/' + sl + '.zip', sl + '.zip');
}

function downloadIconlyBulk() {
    // Dynamically pick the correct pre-built ZIP for the active curvature + style
    const zipName = 'Iconly-' + currentIconlyCurvature + '-' + currentIconlyStyle + '.zip';
    downloadStaticZip('assets/zips/' + zipName, zipName);
}

function downloadGlassyBulk() {
    downloadStaticZip('assets/zips/Glassy-Icons.zip', 'Glassy-Icons.zip');
}

function downloadWeatherBulk() {
    downloadStaticZip('assets/zips/Weather-Icons.zip', 'Weather-Icons.zip');
}

// ── UNIVERSAL SEARCH ──
function applyUniversalSearch(val) {
    shapesSearchQuery = val;
    iconlySearchQuery = val;
    glassySearchQuery = val;
    weatherSearchQuery = val;

    // Sync section inputs
    const ids = ['searchInput', 'iconlySearch', 'glassySearch', 'weatherSearch'];
    ids.forEach(id => { const el = document.getElementById(id); if (el) el.value = val; });

    // Reset pagination
    shapesLimit = iconlyLimit = glassyLimit = weatherLimit = PAGE;

    renderIconGrid();
    renderIconlyGrid();
    renderGlassyGrid();
    renderWeatherGrid();

    document.getElementById('universalSearchClear').classList.toggle('visible', val.length > 0);
}

// ── SCROLL ──
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    document.getElementById('navbar').classList.toggle('scrolled', y > 60);
    document.getElementById('scrollTopBtn').classList.toggle('show', y > 500);
}, { passive: true });

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderIconGrid();
    renderIconlyGrid();
    renderGlassyGrid();
    renderWeatherGrid();

    // 3D Shapes — style tabs
    document.querySelectorAll('#styleTabs .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#styleTabs .tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentStyle = btn.dataset.style;
            shapesLimit = PAGE;
            renderIconGrid();
        });
    });

    // 3D Shapes — angle buttons
    document.querySelectorAll('#angleTabs .angle-btn, #angleTabs .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#angleTabs .angle-btn, #angleTabs .tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentAngle = btn.dataset.angle;
            shapesLimit = PAGE;
            renderIconGrid();
        });
    });


    // 3D Shapes — search
    document.getElementById('searchInput').addEventListener('input', e => {
        shapesSearchQuery = e.target.value;
        shapesLimit = PAGE;
        renderIconGrid();
    });

    // Iconly — curvature tabs
    document.querySelectorAll('#iconlyCurvatureTabs .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#iconlyCurvatureTabs .tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentIconlyCurvature = btn.dataset.curvature;
            iconlyLimit = PAGE;
            renderIconlyGrid();
        });
    });

    // Iconly — style tabs
    document.querySelectorAll('#iconlyStyleTabs .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#iconlyStyleTabs .tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentIconlyStyle = btn.dataset.style;
            iconlyLimit = PAGE;
            renderIconlyGrid();
        });
    });

    // Iconly — search
    document.getElementById('iconlySearch').addEventListener('input', e => {
        iconlySearchQuery = e.target.value;
        iconlyLimit = PAGE;
        renderIconlyGrid();
    });

    // Glassy — search
    document.getElementById('glassySearch').addEventListener('input', e => {
        glassySearchQuery = e.target.value;
        glassyLimit = PAGE;
        renderGlassyGrid();
    });

    // Weather — style tabs
    document.querySelectorAll('#weatherStyleTabs .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#weatherStyleTabs .tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentWeatherStyle = btn.dataset.style;
            weatherLimit = PAGE;
            renderWeatherGrid();
        });
    });

    // Weather — search
    document.getElementById('weatherSearch').addEventListener('input', e => {
        weatherSearchQuery = e.target.value;
        weatherLimit = PAGE;
        renderWeatherGrid();
    });

    // Load More
    document.getElementById('shapesLoadMore').addEventListener('click', () => { shapesLimit += PAGE; renderIconGrid(); });
    document.getElementById('iconlyLoadMore').addEventListener('click', () => { iconlyLimit += PAGE; renderIconlyGrid(); });
    document.getElementById('glassyLoadMore').addEventListener('click', () => { glassyLimit += PAGE; renderGlassyGrid(); });
    document.getElementById('weatherLoadMore').addEventListener('click', () => { weatherLimit += PAGE; renderWeatherGrid(); });

    // Bulk downloads
    document.getElementById('downloadStyleBtn').addEventListener('click', downloadStyleBulk);
    document.getElementById('downloadIconlyBtn').addEventListener('click', downloadIconlyBulk);
    document.getElementById('downloadGlassyBtn').addEventListener('click', downloadGlassyBulk);
    document.getElementById('downloadWeatherBtn').addEventListener('click', downloadWeatherBulk);

    // Scroll to top
    document.getElementById('scrollTopBtn').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Buy me a Coffee
    document.getElementById('premiumCta').addEventListener('click', () => window.open('https://buymeacoffee.com/bhupeshchauhanz', '_blank'));

    // Universal Search
    const uInput = document.getElementById('universalSearch');
    const uClear = document.getElementById('universalSearchClear');
    uInput.addEventListener('input', e => applyUniversalSearch(e.target.value));
    uClear.addEventListener('click', () => { uInput.value = ''; applyUniversalSearch(''); uInput.focus(); });

    // Lightbox
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.getElementById('lightboxBackdrop').addEventListener('click', closeLightbox);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
    document.getElementById('thumbAngle1').addEventListener('click', () => switchLightboxAngle('1'));
    document.getElementById('thumbAngle2').addEventListener('click', () => switchLightboxAngle('2'));
    document.getElementById('lightboxDownload').addEventListener('click', () => {
        if (!lightboxShape) return;
        const key = lightboxDisplayAngle === '1' ? getA1Key(currentStyle) : getA2Key(currentStyle);
        downloadFile(getStyleBase(currentStyle) + enc(lightboxShape[key]) + '.png', lightboxShape[key] + '.png');
    });
});
