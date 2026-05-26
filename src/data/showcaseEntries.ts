import type { ShowcaseEntry } from '../types/showcase'


export const showcaseEntries: ShowcaseEntry[] = [
  {
    id: "domora",
    title: "Domora",
    shortDescription:
      "Open-source WG-Organizer als self-hosted Web-App mit PWA und mobilem Android-Paket.",
    longDescription:
      "Domora organisiert gemeinsames Wohnen in einem System: Haushalt, Shopping, rotierende Aufgaben, Finanzen, OCR-Belege, Push-Erinnerungen und Rollenlogik. Laut README basiert das Projekt auf React, TypeScript, Vite und Supabase, läuft als PWA und hat zusätzlich eine Android-Schiene über Capacitor.",
    category: "Household",
    author: "Haschtl",
    platform: "web",
    tags: ["pwa", "supabase", "household", "shopping", "tasks", "finance"],
    href: "https://haschtl.github.io/Domora",
    kind: "own",
  },
  {
    id: "chroniq",
    title: "chroniq",
    shortDescription:
      "Standalone-PWA für lokale Partyspiele mit Timeline-Mechanik und Spotify-Connector.",
    longDescription:
      "chroniq ist laut README als browserbasierte Party-Game-App gebaut. Teams sortieren Karten in einer Timeline, während ein Spotify-Generator nur Audio freigibt und Auflösung erst später sichtbar wird. Die App setzt auf React, TanStack Router, TypeScript, PWA-Manifest und lokalen Persistenzzustand.",
    category: "Game",
    author: "Haschtl",
    platform: "web",
    tags: ["pwa", "spotify", "party-game", "timeline", "react"],
    icon: "https://haschtl.github.io/chroniq/icon.svg",
    href: "https://haschtl.github.io/chroniq",
    kind: "own",
  },
  {
    id: "steinlampe",
    title: "Steinlampe",
    shortDescription:
      "ESP32-Lampenprojekt mit Web-BLE-UI, Home-Assistant-Integration und vielen PWM-Patterns.",
    longDescription:
      "Steinlampe kombiniert Firmware für eine Steinlampe mit Touch-, BLE-, BT- und MIDI-Steuerung sowie einer React/Vite-Weboberfläche. Die README nennt rund 50 Lichtmuster, Profile, Sensorik und eine HACS-fähige Home-Assistant-Integration für den Heimautomations-Teil.",
    category: "IoT",
    author: "Haschtl",
    platform: "web",
    tags: [
      "esp32",
      "web-bluetooth",
      "home-assistant",
      "iot",
      "midi",
      "lighting",
    ],
    icon: "https://haschtl.github.io/Steinlampe/icon-lamp.svg",
    href: "https://haschtl.github.io/Steinlampe",
    kind: "own",
  },
  {
    id: "guitar-chord-library",
    title: "guitar-chord-library",
    shortDescription:
      "Web-UI für Gitarrenakkorde mit eigener Demo-Seite auf GitHub Pages.",
    longDescription:
      "Das Repo beschreibt eine UI für Gitarrenakkorde und verweist auf eine veröffentlichte Demo. Technisch ist das Projekt als React-, TypeScript- und Vite-App aufgesetzt und eignet sich als fokussiertes Frontend-Tool für Griffbilder und Akkorddarstellung.",
    category: "Music Tool",
    author: "Haschtl",
    platform: "web",
    tags: ["guitar", "chords", "music", "ui", "vite"],
    icon: "https://haschtl.github.io/guitar-chord-library/vite.svg",
    href: "https://haschtl.github.io/guitar-chord-library",
    kind: "own",
  },
  {
    id: "svg-guitar-strum-pattern",
    title: "svg-guitar-strum-pattern",
    shortDescription:
      "Kleines Tool zum Erzeugen von Gitarren-Strumming-Patterns als SVG.",
    longDescription:
      "Laut Repo dient das Projekt dazu, Gitarren-Strum-Patterns als SVG zu generieren. Es ist ein sehr fokussiertes Web-Tool mit Demo-Seite und passt gut in ein Musik- und Notations-Setup, in dem visuelle Pattern schnell exportierbar sein sollen.",
    category: "Music Tool",
    author: "Haschtl",
    platform: "web",
    tags: ["guitar", "svg", "strumming", "notation", "generator"],
    href: "https://haschtl.github.io/svg-guitar-strum-pattern",
    kind: "own",
  },
  {
    id: "transcripy",
    title: "transcripy",
    shortDescription:
      "CLI für Multi-Speaker-Transkription mit Whisper, Pyannote und Audio-Slicing.",
    longDescription:
      "transcripy ist ein Python-CLI für mehrspurige Audio-Transkription, Speaker-Diarization und Folgeprozesse wie Slicing, Analyse und Export in mehrere Textformate. Die README nennt OpenAI Whisper, pyannote-audio und Spleeter als zentrale Bausteine sowie Windows-, Linux- und macOS-Kompatibilität.",
    category: "Audio AI",
    author: "Haschtl",
    platform: "desktop",
    tags: [
      "python",
      "whisper",
      "transcription",
      "audio",
      "cli",
      "speaker-diarization",
    ],
    href: "https://haschtl.github.io/transcripy",
    kind: "own",
  },
  {
    id: "tasker-ble-writer",
    title: "Tasker-Ble-Writer",
    shortDescription:
      "Android-Plugin für Tasker zum Schreiben beliebiger BLE-Payloads inklusive UTF-8-Textmodus.",
    longDescription:
      "Tasker-Ble-Writer erweitert ein bestehendes Basic-BLE-Writer-Plugin um serielle UTF-8-Textpayloads neben Hex-Werten. Das Projekt zielt klar auf Android- und Automations-Workflows, bei denen Tasker BLE-Geräte direkt ansprechen und konfigurieren soll.",
    category: "Automation",
    author: "Haschtl",
    platform: "mobile-app",
    tags: ["android", "tasker", "ble", "automation", "plugin"],
    href: "https://github.com/haschtl/Tasker-Ble-Writer",
    kind: "own",
  },
  {
    id: "spacenavigator-midi",
    title: "SpaceNavigatorMIDI",
    shortDescription:
      "Python-Service, der einen SpaceNavigator in MIDI-Daten für Desktop-Setups übersetzt.",
    longDescription:
      "SpaceNavigatorMIDI ist bewusst minimal gehalten: ein Python-Dienst, der einen 3Dconnexion SpaceNavigator als MIDI-Quelle nutzbar macht. Die README ist knapp, nennt aber direkt die benötigten Python-Abhängigkeiten und macht den Zweck des Tools klar für experimentelle Musik- und Control-Workflows.",
    category: "MIDI Utility",
    author: "Haschtl",
    platform: "desktop",
    tags: ["python", "midi", "spacenavigator", "controller", "music"],
    href: "https://haschtl.github.io/SpaceNavigatorMIDI",
    kind: "own",
  },
  {
    id: "gpx-studio",
    title: "GPX Studio",
    shortDescription:
      "Web-App zum Bearbeiten von GPX-Dateien mit Kartenansicht, Track- und Wegpunkt-Management.",
    longDescription:
      "Die OpenAI Platform ist hier als externer Referenzpunkt aufgenommen, weil sie für Prototyping, Textverarbeitung und agentische Automatisierung oft die schnellste Abkürzung ist. Im Portfolio funktioniert sie als klar verlinkter Technologie-Baustein.",
    category: "Tool",
    author: "GPX Studio Team",
    platform: "web",
    tags: ["navigation", "gpx", "maps", "web-app"],
    href: "https://gpx.studio/",
    kind: "external",
  },
  {
    id: "supersplat",
    title: "SuperSplat",
    shortDescription:
      "Open-source Web-Plattform zum Bearbeiten, Veröffentlichen und Teilen von 3D Gaussian Splats.",
    longDescription:
      "SuperSplat beschreibt sich als zentrale Plattform für 3D Gaussian Splatting. Die Web-App deckt Bearbeiten, Publizieren, Teilen, Download und Browsing von Splats ab und richtet sich klar an 3D-, WebGL-, WebGPU- und Visualisierungs-Workflows im Browser.",
    category: "3D Tool",
    author: "PlayCanvas",
    platform: "web",
    tags: ["3d", "gaussian-splatting", "webgl", "webgpu", "visualization", "editor"],
    href: "https://superspl.at/",
    kind: "external",
  },
];
