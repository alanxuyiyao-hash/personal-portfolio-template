const projects = [
  {
    title: ["BLADE", "RUNNER"],
    short: "Blade Runner 2049",
    kicker: "01 / CINEMA STUDY",
    date: "2017",
    type: "SCI-FI NOIR",
    role: "TRAILER STUDY",
    client: "WARNER BROS.",
    url: "",
    videoSrc: "assets/Blade Runner 2049 Official Trailer.mp4",
    videoDuration: 141,
    description: "Neon fog, synthetic memory, and monumental color fields shaped as a slow cinematic system.",
    theme: "#e08a3f",
    bg: "#343d3f",
    visual: ["#e08a3f", "#65797c", "#111313"],
    image: "https://i.ytimg.com/vi/gCcx85zbxz4/maxresdefault.jpg",
    posterTitle: [
      { text: "BLADE", x: "0vw" },
      { text: "RUNNER", x: "13vw" }
    ],
    frames: [
      ["NEON", "Electric city haze, amber interiors, and hard silhouettes."],
      ["MEMORY", "Faces and fragments staged like evidence from another life."],
      ["SCALE", "Brutalist spaces turn the human figure into a small signal."],
      ["FUTURE", "A noir rhythm built from silence, weather, and artificial light."]
    ],
    chapters: [
      {
        start: 0,
        end: 6.5,
        title: "STRIKE",
        summary: "Holographic grid lines, flying cars, gunfire, neon bodies, and the red title card land as one metallic impact.",
        points: ["00:00 - 00:06", "RYAN GOSLING / HARRISON FORD", "Opening shock"]
      },
      {
        start: 6.5,
        end: 30.7,
        title: "WALLACE",
        summary: "A fog-choked pyramid, glass tanks, and Wallace's birth ritual frame replicants as a disposable workforce.",
        points: ["00:06 - 00:31", "Disposable workforce", "Happy birthday"]
      },
      {
        start: 30.7,
        end: 43.9,
        title: "ORDER",
        summary: "Joshi's warning about walls and war plays over rain, police vehicles, blood, and neon signs in the night city.",
        points: ["00:31 - 00:44", "We keep order", "City pressure"]
      },
      {
        start: 43.9,
        end: 77.9,
        title: "DESERT",
        summary: "The trailer shifts to orange dust, buried statues, and Deckard's guarded encounter with K inside a sun-bleached ruin.",
        points: ["00:44 - 01:18", "Denis Villeneuve", "Deckard returns"]
      },
      {
        start: 77.9,
        end: 102,
        title: "CHAOS",
        summary: "Storm flight, snow markets, explosions, flipped cars, fire, and magenta club gunfire push the cut into action velocity.",
        points: ["01:18 - 01:42", "They know you're here", "Action escalation"]
      },
      {
        start: 102,
        end: 128,
        title: "JOI",
        summary: "A glitching Joi screen, a sunlit forest, Luv's advance, and Joi's intimate words slow the trailer into emotional resolve.",
        points: ["01:42 - 02:08", "You're special", "Story unresolved"]
      },
      {
        start: 128,
        end: 141,
        title: "TITLE",
        summary: "K lifts his gaze before the final Blade Runner 2049 title, credits, IMAX card, hashtag, and release date burn out.",
        points: ["02:08 - 02:21", "10.6.17", "Final release card"]
      }
    ]
  },
  {
    title: ["DUNE", "DESERT"],
    short: "Dune",
    kicker: "02 / CINEMA STUDY",
    date: "2021",
    type: "MONUMENTAL SCI-FI",
    role: "TRAILER STUDY",
    client: "WARNER BROS.",
    url: "https://www.youtube.com/watch?v=8g18jFHCLXk",
    youtubeId: "8g18jFHCLXk",
    videoDuration: 220,
    description: "Desert scale, ritual architecture, and slow pressure arranged as a vast visual language.",
    theme: "#c99759",
    bg: "#d3c0a2",
    visual: ["#c99759", "#e0d0b0", "#2a2822"],
    image: "https://i.ytimg.com/vi/8g18jFHCLXk/maxresdefault.jpg",
    posterTitle: [
      { text: "DUNE", x: "0vw" },
      { text: "DESERT", x: "12vw" }
    ],
    frames: [
      ["SAND", "A restrained palette turns the landscape into a graphic field."],
      ["POWER", "Ceremony, armor, and architecture carry the political weight."],
      ["VISION", "Dream images arrive as fragments before the world explains them."],
      ["SCALE", "Wide frames use distance and silence to make the myth feel physical."]
    ]
  },
  {
    title: ["GRAND", "HOTEL"],
    short: "The Grand Budapest Hotel",
    kicker: "03 / CINEMA STUDY",
    date: "2014",
    type: "FORMAL COMEDY",
    role: "TRAILER STUDY",
    client: "SEARCHLIGHT",
    url: "https://www.youtube.com/watch?v=1Fg5iWmQjwk",
    youtubeId: "1Fg5iWmQjwk",
    videoDuration: 146,
    description: "Symmetry, powder color, and theatrical blocking make every frame read like a designed object.",
    theme: "#d68594",
    bg: "#ead2ca",
    visual: ["#d68594", "#f0d4c9", "#2f2d3b"],
    image: "https://i.ytimg.com/vi/1Fg5iWmQjwk/sddefault.jpg",
    posterTitle: [
      { text: "GRAND", x: "0vw" },
      { text: "HOTEL", x: "15vw" }
    ],
    frames: [
      ["PALETTE", "Pink facades, red uniforms, and icy blues build instant recognition."],
      ["ORDER", "Centered compositions make motion feel like choreography."],
      ["CAST", "Faces and costumes become a dense editorial system."],
      ["PACE", "Fast cuts stay legible because every frame has strict geometry."]
    ]
  },
  {
    title: ["LIGHT", "HOUSE"],
    short: "The Lighthouse",
    kicker: "04 / CINEMA STUDY",
    date: "2019",
    type: "BLACK AND WHITE",
    role: "TRAILER STUDY",
    client: "A24",
    url: "https://www.youtube.com/watch?v=Hyag7lR8CPA",
    youtubeId: "Hyag7lR8CPA",
    videoDuration: 142,
    description: "A square, storm-heavy image world where grain, faces, and darkness do most of the speaking.",
    theme: "#d9d7cb",
    bg: "#2d302d",
    visual: ["#d9d7cb", "#5a5d56", "#080908"],
    image: "https://i.ytimg.com/vi/Hyag7lR8CPA/maxresdefault.jpg",
    posterTitle: [
      { text: "LIGHT", x: "0vw" },
      { text: "HOUSE", x: "14vw" }
    ],
    frames: [
      ["GRAIN", "Heavy texture makes the image feel carved instead of photographed."],
      ["FACES", "Portraits hold pressure through stillness and extreme contrast."],
      ["STORM", "Weather becomes a moving wall around the characters."],
      ["RITUAL", "The trailer builds dread through repetition, sound, and hard cuts."]
    ]
  },
  {
    title: ["MOOD", "LOVE"],
    short: "In the Mood for Love",
    kicker: "05 / CINEMA STUDY",
    date: "2000",
    type: "ROMANTIC DRAMA",
    role: "TRAILER STUDY",
    client: "MUBI",
    url: "https://www.youtube.com/watch?v=m8GuedsQnWQ",
    youtubeId: "m8GuedsQnWQ",
    videoDuration: 102,
    description: "Red corridors, green shadows, and close textures turn restraint into pure visual memory.",
    theme: "#b64438",
    bg: "#3f4a3e",
    visual: ["#b64438", "#667155", "#160e0c"],
    image: "https://i.ytimg.com/vi/m8GuedsQnWQ/maxresdefault.jpg",
    posterTitle: [
      { text: "MOOD", x: "0vw" },
      { text: "LOVE", x: "13vw" }
    ],
    frames: [
      ["COLOR", "Red fabric, green rooms, and warm practical light carry emotion."],
      ["DISTANCE", "Characters are framed through doors, walls, and partial reflections."],
      ["RHYTHM", "Slow motion and repeated passages create a private pulse."],
      ["MEMORY", "The image feels less like plot and more like something remembered."]
    ]
  },
  {
    title: ["FURY", "ROAD"],
    short: "Mad Max: Fury Road",
    kicker: "06 / CINEMA STUDY",
    date: "2015",
    type: "ACTION DESIGN",
    role: "TRAILER STUDY",
    client: "WARNER BROS.",
    url: "https://www.youtube.com/watch?v=hEJnMQG9ev8",
    youtubeId: "hEJnMQG9ev8",
    videoDuration: 148,
    description: "Orange dust, blue night, chrome machinery, and centered action built for maximum velocity.",
    theme: "#e66b3c",
    bg: "#c6b690",
    visual: ["#e66b3c", "#d6bf8b", "#192d3f"],
    image: "https://i.ytimg.com/vi/hEJnMQG9ev8/maxresdefault.jpg",
    posterTitle: [
      { text: "FURY", x: "0vw" },
      { text: "ROAD", x: "15vw" }
    ],
    frames: [
      ["DUST", "The palette is brutal and simple: heat, metal, sky, skin."],
      ["MACHINE", "Vehicles read like characters because their shapes are so specific."],
      ["CENTER", "Action remains readable by locking the eye to the middle of frame."],
      ["IMPACT", "Cuts, crashes, and scale build a graphic rhythm of acceleration."]
    ]
  },
  {
    title: ["2001", "ODYSSEY"],
    short: "2001: A Space Odyssey",
    kicker: "07 / CINEMA STUDY",
    date: "1968",
    type: "SPACE MODERNISM",
    role: "TRAILER STUDY",
    client: "WARNER BROS.",
    url: "https://www.youtube.com/watch?v=oR_e9y-bka0",
    youtubeId: "oR_e9y-bka0",
    videoDuration: 131,
    description: "Pure geometry, human scale, and cosmic silence form one of cinema's clearest visual systems.",
    theme: "#d8d9d3",
    bg: "#eef0ec",
    visual: ["#d8d9d3", "#f4f5f1", "#171819"],
    image: "https://i.ytimg.com/vi/oR_e9y-bka0/maxresdefault.jpg",
    posterTitle: [
      { text: "2001", x: "0vw" },
      { text: "ODYSSEY", x: "13vw" }
    ],
    frames: [
      ["VOID", "Black space and white interiors make each object feel absolute."],
      ["GEOMETRY", "Circles, corridors, and screens turn design into narrative."],
      ["HUMAN", "Small gestures sit against impossible technological calm."],
      ["COSMIC", "The trailer suggests awe through scale more than exposition."]
    ]
  },
  {
    title: ["POOR", "THINGS"],
    short: "Poor Things",
    kicker: "08 / CINEMA STUDY",
    date: "2023",
    type: "SURREAL FABLE",
    role: "TRAILER STUDY",
    client: "SEARCHLIGHT",
    url: "https://www.youtube.com/watch?v=RlbR5N6veqw",
    youtubeId: "RlbR5N6veqw",
    videoDuration: 145,
    description: "A surreal color machine of distorted rooms, theatrical bodies, and strange comic luxury.",
    theme: "#3fa6b5",
    bg: "#cbd4cf",
    visual: ["#3fa6b5", "#dfc2b6", "#321d2f"],
    image: "https://i.ytimg.com/vi/RlbR5N6veqw/maxresdefault.jpg",
    posterTitle: [
      { text: "POOR", x: "0vw" },
      { text: "THINGS", x: "12vw" }
    ],
    frames: [
      ["WORLD", "Rooms bend toward fantasy while staying rich in tactile detail."],
      ["COLOR", "Turquoise, crimson, cream, and black keep the image alive."],
      ["BODY", "Performance and costume create a visual language of discovery."],
      ["STRANGE", "The trailer's rhythm turns spectacle into a designed curiosity."]
    ]
  }
];

const app = document.querySelector("#app");
const brandLink = document.querySelector("[data-action='home']");
const track = document.querySelector("#gallery-track");
const ticks = document.querySelector("#progress-ticks");
const homePreview = document.querySelector("#home-preview");
const homePreviewTitle = document.querySelector("#home-preview-title");
const homePreviewMedia = document.querySelector("#home-preview-media");
const homePreviewKicker = document.querySelector("#home-preview-kicker");
const homePreviewDate = document.querySelector("#home-preview-date");
const homePreviewType = document.querySelector("#home-preview-type");
const homePreviewRole = document.querySelector("#home-preview-role");
const homePreviewClient = document.querySelector("#home-preview-client");
const homePreviewDescription = document.querySelector("#home-preview-description");
const homePreviewExplore = document.querySelector("#home-preview-explore");
const aboutButton = document.querySelector("#about-toggle");
const aboutView = document.querySelector("#about");
const closeProjectButton = document.querySelector("#close-project");
const projectView = document.querySelector("#project");
const projectTitle = document.querySelector("#project-title");
const projectKicker = document.querySelector("#project-kicker");
const projectMediaShell = document.querySelector(".project-media-shell");
const projectMedia = document.querySelector("#project-media");
const localVideo = document.querySelector("#local-video");
const videoFrame = document.querySelector("#video-frame");
const videoToggle = document.querySelector("#video-toggle");
const videoToggleLabel = document.querySelector("#video-toggle-label");
const videoCurrent = document.querySelector("#video-current");
const videoDurationLabel = document.querySelector("#video-duration");
const videoTimecode = document.querySelector("#video-timecode");
const videoTrack = document.querySelector("#video-track");
const videoProgress = document.querySelector("#video-progress");
const videoChapters = document.querySelector("#video-chapters");
const chapterTitle = document.querySelector("#chapter-title");
const chapterSummary = document.querySelector("#chapter-summary");
const chapterPoints = document.querySelector("#chapter-points");
const projectRail = document.querySelector("#project-rail");
const projectDate = document.querySelector("#project-date");
const projectType = document.querySelector("#project-type");
const projectRole = document.querySelector("#project-role");
const projectClient = document.querySelector("#project-client");
const projectUrl = document.querySelector("#project-url");
const projectDescription = document.querySelector("#project-description");
const burstTitle = document.querySelector("#burst-title");
const burstMedia = document.querySelector("#burst-media");

let scrollTarget = 0;
let scrollCurrent = 0;
let activeIndex = -1;
let centeredCell = 0;
let hoveredIndex = -1;
let hoveredCell = -1;
let previewIndex = 0;
let motionEnergy = 0;
let exitWheel = 0;
let openedIndex = 0;
let frameIndex = 0;
let frameLocked = false;
let videoDuration = 0;
let videoCurrentTime = 0;
let videoPlaying = false;
let videoRaf = 0;
let videoLastTick = 0;
let videoChapterIndex = -1;
let videoChaptersData = [];
let localVideoLoaded = false;
let youtubeLoaded = false;
let isScrubbingVideo = false;
let isTransitioning = false;
let suppressGalleryHoverUntil = 0;
let gap = 78;
let pointerX = 0;
let pointerY = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartTarget = 0;
let smoothedVelocity = 0;
let pointerSpeed = 0;
let lastPointerClientX = 0;
let lastPointerTime = 0;
let hasPointerPosition = false;
let wavePhase = 0;
let waveDirection = 1;
let lastSweepAt = 0;

const thumbs = [];
const tickEls = [];
const homeRepeats = 4;

function wrapIndex(index, length = projects.length) {
  return ((index % length) + length) % length;
}

function wrapDistance(value, total) {
  return ((value + total / 2) % total + total) % total - total / 2;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getMaxHomeScroll() {
  return Math.max(0, (thumbs.length - 1) * gap - window.innerWidth * 0.02);
}

function clampHomeScroll(value) {
  return clamp(value, 0, getMaxHomeScroll());
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function buildHome() {
  Array.from({ length: homeRepeats }).forEach(() => {
    projects.forEach((project, projectIndex) => {
      const cellIndex = thumbs.length;
      const thumb = document.createElement("button");
      thumb.type = "button";
      thumb.className = "thumb";
      thumb.setAttribute("aria-label", `Open ${project.short}`);
      thumb.style.setProperty("--image", `url("${project.image}")`);
      thumb.style.setProperty("--visual-a", project.visual[0]);
      thumb.style.setProperty("--visual-b", project.visual[1]);
      thumb.style.setProperty("--visual-c", project.visual[2]);

      const visual = document.createElement("span");
      visual.className = "thumb-visual";
      visual.setAttribute("aria-hidden", "true");

      const title = document.createElement("span");
      title.className = "thumb-title";
      title.textContent = project.short;

      thumb.append(visual, title);
      thumb.addEventListener("pointerenter", () => setGalleryHover(projectIndex, cellIndex));
      thumb.addEventListener("pointerleave", clearGalleryHover);
      thumb.addEventListener("click", (event) => {
        event.stopPropagation();
        if (app.classList.contains("is-project")) return;
        scrollTarget = clampHomeScroll(cellIndex * gap);
        enterPreview(projectIndex);
      });

      track.appendChild(thumb);
      thumbs.push({ el: thumb, projectIndex, cellIndex, hover: 0, depth: 0, tilt: 0, glow: 0 });
    });
  });

  projects.forEach(() => {
    const tick = document.createElement("i");
    ticks.appendChild(tick);
    tickEls.push(tick);
  });
}

function updateTheme(index) {
  const project = projects[index];
  app.style.setProperty("--project", project.theme);
  app.style.setProperty("--project-bg", project.bg);
}

function updateActive(index) {
  if (index === activeIndex) return;
  activeIndex = index;
  if (hoveredIndex === -1 && !app.classList.contains("is-project")) {
    updateTheme(index);
  }

  thumbs.forEach(({ el, projectIndex }) => {
    el.classList.toggle("is-active", projectIndex === index);
  });

  tickEls.forEach((tick, tickIndex) => {
    tick.classList.toggle("is-active", tickIndex === index);
  });
}

function setGalleryHover(index, cellIndex) {
  if (app.classList.contains("is-project") || app.classList.contains("is-about")) return;
  if (performance.now() < suppressGalleryHoverUntil) return;
  if (performance.now() - lastSweepAt < 240) return;
  if (isDragging || Math.abs(smoothedVelocity) > 0.35 || pointerSpeed > 0.07) return;
  hoveredIndex = index;
  hoveredCell = cellIndex;
  previewIndex = index;
  updateTheme(index);
  app.classList.add("is-hovering-gallery");
}

function clearGalleryHover() {
  hoveredIndex = -1;
  hoveredCell = -1;
  app.classList.remove("is-hovering-gallery");
  if (!app.classList.contains("is-home-preview")) {
    updateTheme(activeIndex === -1 ? 0 : activeIndex);
  }
}

function enterPreview(index) {
  if (app.classList.contains("is-project") || app.classList.contains("is-about")) return;
  if (performance.now() < suppressGalleryHoverUntil) return;
  renderHomePreview(index);
  updateTheme(index);
  app.classList.add("is-home-preview");
  app.classList.remove("is-hovering-gallery");
  hoveredIndex = -1;
  hoveredCell = -1;
}

function exitPreview() {
  app.classList.remove("is-home-preview");
  updateTheme(activeIndex === -1 ? 0 : activeIndex);
}

function resetGalleryInteraction(suppressMs = 0) {
  hoveredIndex = -1;
  hoveredCell = -1;
  isDragging = false;
  pointerSpeed = 0;
  app.classList.remove("is-hovering-gallery", "is-home-preview");
  thumbs.forEach((thumb) => {
    thumb.hover = 0;
  });
  if (suppressMs) {
    suppressGalleryHoverUntil = performance.now() + suppressMs;
    lastSweepAt = performance.now();
  }
  updateTheme(activeIndex === -1 ? 0 : activeIndex);
}

function animateGallery() {
  const n = thumbs.length;
  scrollTarget = clampHomeScroll(scrollTarget);

  const velocity = scrollTarget - scrollCurrent;
  const frameVelocity = velocity * 0.07;
  scrollCurrent += frameVelocity;
  smoothedVelocity += (frameVelocity - smoothedVelocity) * 0.11;
  pointerSpeed *= 0.94;

  const speed = clamp(Math.abs(smoothedVelocity) / 9.5, 0, 1);
  if (performance.now() - lastSweepAt > 120 && Math.abs(smoothedVelocity) > 0.018) {
    waveDirection += (Math.sign(smoothedVelocity) - waveDirection) * 0.18;
  }
  const direction = waveDirection;
  const scrollWave = Math.pow(clamp(Math.abs(smoothedVelocity) / 11.0, 0, 1), 1.1);
  const pointerBoost = Math.pow(pointerSpeed, 0.75);
  const targetWave = clamp(scrollWave * 0.45 + pointerBoost * 0.95, 0, 0.95);
  motionEnergy += (targetWave - motionEnergy) * (targetWave > motionEnergy ? 0.3 : 0.04);
  const wave = motionEnergy;
  const stripProgress = scrollCurrent / gap;
  centeredCell = clamp(Math.round(stripProgress), 0, n - 1);
  updateActive(thumbs[centeredCell].projectIndex);

  if ((performance.now() - lastSweepAt < 220 || speed > 0.04 || pointerSpeed > 0.18) && hoveredCell !== -1) {
    hoveredIndex = -1;
    hoveredCell = -1;
    app.classList.remove("is-hovering-gallery");
    if (!app.classList.contains("is-project") && !app.classList.contains("is-home-preview")) {
      updateTheme(activeIndex === -1 ? 0 : activeIndex);
    }
  }

  thumbs.forEach((thumb) => {
    const { el, cellIndex } = thumb;
    const x = cellIndex * gap - scrollCurrent;
    const screenX = window.innerWidth * 0.5 + x;
    const distance = Math.abs(x);
    const centerScore = 1 - clamp(distance / 320, 0, 1);
    const hoverTarget = hoveredCell === cellIndex && speed < 0.04 ? 1 : 0;
    thumb.hover += (hoverTarget - thumb.hover) * 0.055;

    const viewportScore = clamp(
      1 - Math.abs(screenX - window.innerWidth * 0.5) / (window.innerWidth * 0.68),
      0,
      1
    );
    const freq = 0.72 + Math.pow(scrollWave, 0.6) * 0.22;
    const waveCurve = (Math.cos((cellIndex - stripProgress) * freq) + 1) * 0.5;
    const crest = Math.pow(waveCurve, 1.25);
    const depthTarget = clamp(wave * viewportScore * (0.46 + crest * 0.54) * (0.86 + speed * 0.22), 0, 1);
    thumb.depth += (depthTarget - thumb.depth) * (depthTarget > thumb.depth ? 0.24 : 0.05);

    const depth = thumb.depth;
    const z = depth * (430 + speed * 130) + thumb.hover * 32;
    const y = 0;
    const tiltTarget = direction * depth * (22 + crest * 30);
    thumb.tilt += (tiltTarget - thumb.tilt) * 0.12;
    const rotate = clamp(thumb.tilt, -44, 44);
    const scale = 0.9 + depth * 0.22 + thumb.hover * 0.018;
    const dim = hoveredCell === -1 ? 0 : 1 - thumb.hover;
    const inViewport = screenX > -130 && screenX < window.innerWidth + 180;
    const visibleScore = 1 - clamp(Math.abs(screenX - window.innerWidth * 0.5) / (window.innerWidth * 0.86), 0, 1);
    const opacity = inViewport ? clamp(0.3 + visibleScore * 0.52 + depth * 0.1 - dim * 0.05, 0, 0.96) : 0;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
    el.style.setProperty("--z", `${z}px`);
    el.style.setProperty("--r", `${rotate}deg`);
    el.style.setProperty("--rz", "0deg");
    el.style.setProperty("--s", scale.toFixed(3));
    el.style.setProperty("--o", opacity.toFixed(3));
    el.style.setProperty("--heat", clamp(depth * 0.86 + centerScore * wave * 0.18 + thumb.hover * 0.56, 0, 1).toFixed(3));
    const glowTarget = clamp(depth * 0.18 + thumb.hover * 0.18, 0, 0.32);
    thumb.glow += (glowTarget - thumb.glow) * 0.05;
    el.style.setProperty("--glow", thumb.glow.toFixed(3));
    el.style.setProperty("--pan", `${clamp(direction * (crest - 0.5) * 16 * depth + smoothedVelocity * 0.035, -14, 14)}px`);
    el.style.setProperty("--shadow-y", `${Math.round(20 + z * 0.06)}px`);
    el.style.setProperty("--shadow-blur", `${Math.round(42 + z * 0.16)}px`);
    el.style.zIndex = String(100 + cellIndex);
    el.classList.toggle("is-center", cellIndex === centeredCell && (depth > 0.24 || wave < 0.08));
  });

  requestAnimationFrame(animateGallery);
}

function renderPosterTitle(target, lines, lineClass) {
  target.innerHTML = "";
  target.setAttribute("aria-label", lines.map((line) => {
    return typeof line === "string" ? line : line.text;
  }).join(" "));

  lines.forEach((line, lineIndex) => {
    const titleLine = typeof line === "string" ? { text: line } : line;
    const wrapper = document.createElement("span");
    wrapper.className = lineClass;
    wrapper.style.setProperty("--line-x", titleLine.x || "0vw");

    const inner = document.createElement("span");
    inner.textContent = titleLine.text;
    inner.style.setProperty("--delay", `${lineIndex * 150}ms`);

    wrapper.appendChild(inner);
    target.appendChild(wrapper);
  });
}

function splitTitle(lines) {
  renderPosterTitle(projectTitle, lines, "title-line");
}

function renderHomePreview(index) {
  const project = projects[index];
  previewIndex = index;
  homePreview.style.setProperty("--image", `url("${project.image}")`);
  homePreview.style.setProperty("--visual-a", project.visual[0]);
  homePreview.style.setProperty("--visual-b", project.visual[1]);
  homePreview.style.setProperty("--visual-c", project.visual[2]);
  homePreviewMedia.style.setProperty("--image", `url("${project.image}")`);
  homePreviewMedia.style.setProperty("--visual-a", project.visual[0]);
  homePreviewMedia.style.setProperty("--visual-b", project.visual[1]);
  homePreviewMedia.style.setProperty("--visual-c", project.visual[2]);
  homePreviewKicker.textContent = project.kicker;
  homePreviewDate.textContent = project.date;
  homePreviewType.textContent = project.type;
  homePreviewRole.textContent = project.role;
  homePreviewClient.textContent = project.client || "—";
  homePreviewDescription.textContent = project.description;
  renderPosterTitle(homePreviewTitle, project.posterTitle || project.title, "home-preview-line");
}

function renderBurst(project) {
  burstTitle.innerHTML = "";
  burstMedia.style.setProperty("--visual-a", project.visual[0]);
  burstMedia.style.setProperty("--visual-b", project.visual[1]);
  burstMedia.style.setProperty("--visual-c", project.visual[2]);
  burstMedia.dataset.label = project.frames[0][0];
  burstMedia.dataset.note = project.frames[0][1];

  project.title.forEach((line, lineIndex) => {
    const wrapper = document.createElement("span");
    wrapper.className = "burst-line";

    const inner = document.createElement("span");
    inner.textContent = line;
    inner.style.setProperty("--delay", `${lineIndex * 76}ms`);

    wrapper.appendChild(inner);
    burstTitle.appendChild(wrapper);
  });
}

function renderProject(index) {
  const project = projects[index];
  openedIndex = index;
  frameIndex = 0;
  updateTheme(index);
  projectView.style.setProperty("--image", `url("${project.image}")`);
  projectView.classList.toggle("has-video-project", hasProjectVideo(project));

  projectKicker.textContent = project.kicker;
  projectDate.textContent = project.date;
  projectType.textContent = project.type;
  projectRole.textContent = project.role;
  projectClient.textContent = project.client || "—";
  projectUrl.href = project.url || "#";
  projectUrl.style.visibility = project.url ? "visible" : "hidden";
  projectDescription.textContent = project.description;
  splitTitle(project.posterTitle || project.title);
  renderRail(project);
  renderFrame(0);
  renderVideoProject(project);
}

function renderRail(project) {
  projectRail.innerHTML = "";

  project.frames.forEach((frame, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "rail-thumb";
    button.style.setProperty("--image", `url("${project.image}")`);
    button.style.setProperty("--image-x", `${28 + index * 15}%`);
    button.style.setProperty("--visual-a", project.visual[0]);
    button.style.setProperty("--visual-b", project.visual[1]);
    button.style.setProperty("--visual-c", project.visual[2]);
    button.setAttribute("aria-label", `Show frame ${index + 1}: ${frame[0]}`);
    button.addEventListener("click", () => renderFrame(index));
    projectRail.appendChild(button);
  });
}

function renderFrame(index) {
  const project = projects[openedIndex];
  frameIndex = wrapIndexForFrames(index, project.frames.length);
  const frame = project.frames[frameIndex];

  projectMedia.classList.remove("is-visible");
  const tone = frameIndex * 16;
  projectMedia.style.setProperty("--image", `url("${project.image}")`);
  projectMedia.style.setProperty("--image-x", `${36 + frameIndex * 10}%`);
  projectMedia.style.setProperty("--visual-a", shiftColor(project.visual[0], tone));
  projectMedia.style.setProperty("--visual-b", shiftColor(project.visual[1], -tone));
  projectMedia.style.setProperty("--visual-c", project.visual[2]);
  projectMedia.dataset.label = frame[0];
  projectMedia.dataset.note = frame[1];

  requestAnimationFrame(() => {
    projectMedia.classList.add("is-visible");
  });

  [...projectRail.children].forEach((child, childIndex) => {
    child.classList.toggle("is-active", childIndex === frameIndex);
  });
}

function formatTime(seconds) {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  return `${pad(Math.floor(safeSeconds / 60))}:${pad(safeSeconds % 60)}`;
}

function getVideoDuration(project) {
  return project.videoDuration || 136 + openedIndex * 14;
}

function hasProjectVideo(project) {
  return Boolean(project.videoSrc);
}

function buildVideoChapters(project) {
  const duration = getVideoDuration(project);
  if (project.chapters?.length) {
    return project.chapters.map((chapter, index) => {
      const start = clamp(chapter.start, 0, duration);
      const fallbackEnd = index === project.chapters.length - 1
        ? duration
        : project.chapters[index + 1].start;
      const end = clamp(chapter.end ?? fallbackEnd, start, duration);

      return {
        start,
        end,
        title: chapter.title,
        summary: chapter.summary,
        points: chapter.points || [
          `${formatTime(start)} - ${formatTime(end)}`,
          `${project.type} / ${project.role}`
        ]
      };
    });
  }

  const frames = project.frames.length ? project.frames : [["INTRO", project.description]];
  const chapterCount = frames.length;

  return frames.map((frame, index) => {
    const start = Math.round((duration / chapterCount) * index);
    const end = index === chapterCount - 1 ? duration : Math.round((duration / chapterCount) * (index + 1));
    const focus = index === 0 ? "Opening rhythm" : index === chapterCount - 1 ? "Closing takeaway" : "Core section";

    return {
      start,
      end,
      title: frame[0],
      summary: frame[1],
      points: [
        `${formatTime(start)} - ${formatTime(end)}`,
        `${project.type} / ${project.role}`,
        focus
      ]
    };
  });
}

function getYoutubeEmbedUrl(project, start = 0) {
  if (!project.youtubeId) return "";

  const params = new URLSearchParams({
    autoplay: "1",
    controls: "1",
    enablejsapi: "1",
    modestbranding: "1",
    playsinline: "1",
    rel: "0",
    start: String(Math.max(0, Math.floor(start)))
  });

  if (window.location.origin && window.location.origin !== "null") {
    params.set("origin", window.location.origin);
  }

  return `https://www.youtube.com/embed/${project.youtubeId}?${params.toString()}`;
}

function postYoutubeCommand(command) {
  if (!youtubeLoaded || !videoFrame.contentWindow) return;
  videoFrame.contentWindow.postMessage(JSON.stringify({
    event: "command",
    func: command,
    args: []
  }), "*");
}

function loadYoutubeVideo(project, start = 0) {
  const src = getYoutubeEmbedUrl(project, start);
  if (!src) return;

  clearLocalVideo();
  videoFrame.title = `${project.short} trailer`;
  projectMediaShell.classList.add("has-youtube");

  if (videoFrame.dataset.youtubeId !== project.youtubeId || !youtubeLoaded) {
    videoFrame.src = src;
    videoFrame.dataset.youtubeId = project.youtubeId;
    youtubeLoaded = true;
  } else {
    videoFrame.src = src;
  }
}

function pauseYoutubeVideo() {
  postYoutubeCommand("pauseVideo");
}

function clearYoutubeVideo() {
  youtubeLoaded = false;
  videoFrame.removeAttribute("src");
  videoFrame.dataset.youtubeId = "";
  projectMediaShell.classList.remove("has-youtube");
}

function loadLocalVideo(project, start = 0) {
  if (!project.videoSrc) return;

  clearYoutubeVideo();
  localVideo.poster = project.image;
  projectMediaShell.classList.add("has-local-video");

  if (localVideo.dataset.src !== project.videoSrc || !localVideoLoaded) {
    localVideo.src = project.videoSrc;
    localVideo.dataset.src = project.videoSrc;
    localVideoLoaded = true;
  }

  const syncTime = () => {
    if (Number.isFinite(localVideo.duration) && localVideo.duration > 0) {
      videoDuration = localVideo.duration;
    }
    localVideo.currentTime = clamp(start, 0, Math.max(videoDuration, 0));
    updateVideoUI();
    localVideo.play().catch(() => {
      videoPlaying = false;
      projectMedia.classList.remove("is-playing");
      videoToggleLabel.textContent = "PLAY";
      videoToggle.setAttribute("aria-label", "Play video");
      updateVideoUI();
    });
  };

  if (localVideo.readyState >= 1) {
    syncTime();
  } else {
    localVideo.addEventListener("loadedmetadata", syncTime, { once: true });
  }
}

function pauseLocalVideo() {
  if (!localVideoLoaded) return;
  localVideo.pause();
}

function clearLocalVideo() {
  pauseLocalVideo();
  localVideoLoaded = false;
  localVideo.removeAttribute("src");
  localVideo.removeAttribute("poster");
  localVideo.dataset.src = "";
  localVideo.load();
  projectMediaShell.classList.remove("has-local-video");
}

function clearEmbeddedVideo() {
  clearLocalVideo();
  clearYoutubeVideo();
}

function renderVideoProject(project) {
  cancelAnimationFrame(videoRaf);
  videoRaf = 0;
  videoLastTick = 0;
  videoPlaying = false;
  clearEmbeddedVideo();
  videoChapters.innerHTML = "";
  videoCurrentTime = 0;
  videoChapterIndex = -1;

  if (!hasProjectVideo(project)) {
    videoDuration = 0;
    videoChaptersData = [];
    videoCurrent.textContent = "00:00";
    videoDurationLabel.textContent = "00:00";
    videoTimecode.textContent = "00:00 / 00:00";
    videoProgress.style.transform = "scaleX(0)";
    videoTrack.style.setProperty("--video-progress", "0");
    videoTrack.style.setProperty("--video-progress-pct", "0%");
    chapterTitle.textContent = "";
    chapterSummary.textContent = "";
    chapterPoints.innerHTML = "";
    return;
  }

  videoCurrentTime = 0;
  videoDuration = getVideoDuration(project);
  videoChapterIndex = -1;
  videoChaptersData = buildVideoChapters(project);

  videoChaptersData.forEach((chapter, index) => {
    const marker = document.createElement("button");
    const left = (chapter.start / videoDuration) * 100;
    const width = ((chapter.end - chapter.start) / videoDuration) * 100;

    marker.type = "button";
    marker.className = "chapter-marker";
    marker.style.left = `${left}%`;
    marker.style.width = `${width}%`;
    marker.setAttribute("aria-label", `${chapter.title}, ${formatTime(chapter.start)}`);
    marker.addEventListener("pointerdown", (event) => event.stopPropagation());
    marker.addEventListener("click", (event) => {
      event.stopPropagation();
      setVideoTime(chapter.start, true);
    });

    videoChapters.appendChild(marker);
  });

  setVideoPlaying(false);
  setVideoTime(0);
}

function getActiveVideoChapter(time) {
  if (!videoChaptersData.length) return -1;

  return videoChaptersData.reduce((active, chapter, index) => {
    return time >= chapter.start ? index : active;
  }, 0);
}

function updateChapterPanel(index) {
  const chapter = videoChaptersData[index];
  if (!chapter) return;

  chapterTitle.textContent = chapter.title;
  chapterSummary.textContent = chapter.summary;
  chapterPoints.innerHTML = "";

  chapter.points.forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    chapterPoints.appendChild(item);
  });

  [...videoChapters.children].forEach((child, childIndex) => {
    child.classList.toggle("is-active", childIndex === index);
  });
}

function updateVideoUI() {
  const ratio = videoDuration ? clamp(videoCurrentTime / videoDuration, 0, 1) : 0;
  const percent = Math.round(ratio * 100);
  const activeChapter = getActiveVideoChapter(videoCurrentTime);

  videoCurrent.textContent = formatTime(videoCurrentTime);
  videoDurationLabel.textContent = formatTime(videoDuration);
  videoTimecode.textContent = `${formatTime(videoCurrentTime)} / ${formatTime(videoDuration)}`;
  videoTrack.setAttribute("aria-valuenow", String(percent));
  videoTrack.setAttribute("aria-valuetext", videoTimecode.textContent);
  videoTrack.style.setProperty("--video-progress", ratio.toFixed(4));
  videoTrack.style.setProperty("--video-progress-pct", `${ratio * 100}%`);
  videoProgress.style.transform = `scaleX(${ratio})`;
  projectMedia.style.setProperty("--image-x", `${36 + ratio * 28}%`);
  projectMediaShell.style.setProperty("--video-progress", ratio.toFixed(4));

  if (activeChapter !== videoChapterIndex) {
    videoChapterIndex = activeChapter;
    updateChapterPanel(activeChapter);
  }
}

function setVideoTime(seconds, syncYoutube = false) {
  videoCurrentTime = clamp(seconds, 0, videoDuration);
  updateVideoUI();

  if (syncYoutube && videoPlaying) {
    const project = projects[openedIndex];
    if (project.videoSrc) {
      loadLocalVideo(project, videoCurrentTime);
    } else {
      loadYoutubeVideo(project, videoCurrentTime);
    }
  }
}

function setVideoPlaying(nextPlaying) {
  if (nextPlaying && !hasProjectVideo(projects[openedIndex])) return;

  videoPlaying = Boolean(nextPlaying);

  if (videoPlaying && videoCurrentTime >= videoDuration - 0.05) {
    videoCurrentTime = 0;
  }

  projectMedia.classList.toggle("is-playing", videoPlaying);
  projectMediaShell.classList.toggle("is-playing", videoPlaying);
  videoToggleLabel.textContent = videoPlaying ? "PAUSE" : "PLAY";
  videoToggle.setAttribute("aria-label", videoPlaying ? "Pause video" : "Play video");

  if (videoPlaying) {
    const project = projects[openedIndex];
    if (project.videoSrc) {
      loadLocalVideo(project, videoCurrentTime);
    } else {
      loadYoutubeVideo(project, videoCurrentTime);
    }
    videoLastTick = performance.now();
    if (!videoRaf) {
      videoRaf = requestAnimationFrame(tickVideo);
    }
  } else if (videoRaf) {
    pauseLocalVideo();
    pauseYoutubeVideo();
    cancelAnimationFrame(videoRaf);
    videoRaf = 0;
  } else {
    pauseLocalVideo();
    pauseYoutubeVideo();
  }

  updateVideoUI();
}

function tickVideo(now) {
  if (!videoPlaying) {
    videoRaf = 0;
    return;
  }

  if (localVideoLoaded && Number.isFinite(localVideo.duration) && localVideo.duration > 0) {
    videoDuration = localVideo.duration;
    videoCurrentTime = localVideo.currentTime;
  } else {
    const delta = Math.min((now - videoLastTick) / 1000, 0.08);
    videoLastTick = now;
    videoCurrentTime += delta;
  }

  if (videoCurrentTime >= videoDuration || (localVideoLoaded && localVideo.ended)) {
    videoCurrentTime = videoDuration;
    videoPlaying = false;
    projectMedia.classList.remove("is-playing");
    projectMediaShell.classList.remove("is-playing");
    pauseLocalVideo();
    pauseYoutubeVideo();
    videoToggleLabel.textContent = "PLAY";
    videoToggle.setAttribute("aria-label", "Play video");
    updateVideoUI();
    videoRaf = 0;
    return;
  }

  updateVideoUI();
  videoRaf = requestAnimationFrame(tickVideo);
}

function seekVideoFromPointer(event) {
  const rect = videoTrack.getBoundingClientRect();
  const ratio = clamp((event.clientX - rect.left) / rect.width, 0, 1);
  setVideoTime(ratio * videoDuration);
}

function onVideoPointerDown(event) {
  if (!app.classList.contains("is-project")) return;
  event.preventDefault();
  event.stopPropagation();
  isScrubbingVideo = true;
  videoTrack.setPointerCapture?.(event.pointerId);
  seekVideoFromPointer(event);
}

function onVideoPointerMove(event) {
  if (!isScrubbingVideo) return;
  event.preventDefault();
  event.stopPropagation();
  seekVideoFromPointer(event);
}

function onVideoPointerUp(event) {
  if (!isScrubbingVideo) return;
  event.preventDefault();
  event.stopPropagation();
  isScrubbingVideo = false;
  videoTrack.releasePointerCapture?.(event.pointerId);
  if (videoPlaying) {
    const project = projects[openedIndex];
    if (project.videoSrc) {
      loadLocalVideo(project, videoCurrentTime);
    } else {
      loadYoutubeVideo(project, videoCurrentTime);
    }
  }
}

function onVideoKeyDown(event) {
  if (!app.classList.contains("is-project")) return;

  if (event.key === "ArrowRight") {
    event.preventDefault();
    event.stopPropagation();
    setVideoTime(videoCurrentTime + 6, true);
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    event.stopPropagation();
    setVideoTime(videoCurrentTime - 6, true);
  } else if (event.key === "Home") {
    event.preventDefault();
    event.stopPropagation();
    setVideoTime(0, true);
  } else if (event.key === "End") {
    event.preventDefault();
    event.stopPropagation();
    setVideoTime(videoDuration, true);
  } else if (event.key === " ") {
    event.preventDefault();
    event.stopPropagation();
    setVideoPlaying(!videoPlaying);
  }
}

function wrapIndexForFrames(index, length) {
  return ((index % length) + length) % length;
}

function shiftColor(hex, amount) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  const r = Math.round(clamp((num >> 16) + amount, 0, 255));
  const g = Math.round(clamp(((num >> 8) & 255) + amount, 0, 255));
  const b = Math.round(clamp((num & 255) + amount, 0, 255));
  return `rgb(${r}, ${g}, ${b})`;
}

function openProject(index = activeIndex) {
  if (isTransitioning) return;

  isTransitioning = true;
  index = wrapIndex(index);
  updateTheme(index);
  hoveredIndex = -1;
  hoveredCell = -1;
  app.classList.remove("is-about", "is-hovering-gallery", "is-home-preview", "is-bursting");
  aboutView.setAttribute("aria-hidden", "true");
  aboutButton.textContent = "ABOUT";

  renderProject(index);
  projectView.setAttribute("aria-hidden", "false");

  requestAnimationFrame(() => requestAnimationFrame(() => {
    app.classList.add("is-project");

    window.setTimeout(() => {
      isTransitioning = false;
    }, 1200);
  }));
}

function closeProject(options = {}) {
  app.classList.remove("is-bursting");
  setVideoPlaying(false);
  clearEmbeddedVideo();
  if (options.fast) {
    app.classList.add("is-returning");
  }
  app.classList.remove("is-project");
  resetGalleryInteraction(520);
  projectView.setAttribute("aria-hidden", "true");
  isTransitioning = false;
  frameLocked = false;
  exitWheel = 0;

  window.setTimeout(() => {
    app.classList.remove("is-returning");
  }, 260);
}

function toggleAbout() {
  if (app.classList.contains("is-project") || isTransitioning) return;
  const isOpen = app.classList.toggle("is-about");
  aboutView.setAttribute("aria-hidden", String(!isOpen));
  aboutButton.textContent = isOpen ? "CLOSE" : "ABOUT";
}

function onWheel(event) {
  event.preventDefault();

  if (isTransitioning) return;

  if (app.classList.contains("is-home-preview")) {
    if (Math.abs(event.deltaX) > 40) {
      exitPreview();
    }
    return;
  }

  if (app.classList.contains("is-project")) {
    if (frameLocked || Math.abs(event.deltaY) < 12) return;
    exitWheel += Math.abs(event.deltaY);

    if (exitWheel > 130) {
      closeProject({ fast: true });
      motionEnergy = 0;
      scrollTarget = clampHomeScroll(scrollTarget + Math.sign(event.deltaY) * gap * 1.7);
      return;
    }

    frameLocked = true;
    window.setTimeout(() => {
      frameLocked = false;
      exitWheel = Math.max(0, exitWheel - 80);
    }, 520);
    return;
  }

  if (app.classList.contains("is-about")) return;
  pointerSpeed = Math.min(1, Math.max(pointerSpeed, Math.abs(event.deltaY) / 700 + Math.abs(event.deltaX) / 550));
  scrollTarget = clampHomeScroll(scrollTarget + event.deltaY * 0.82 + event.deltaX * 1.0);
}

function onPointerMove(event) {
  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;
  const movementX = hasPointerPosition ? event.clientX - lastPointerClientX : 0;
  const movement = Math.abs(movementX);
  const eventTime = event.timeStamp || performance.now();
  const timeDelta = hasPointerPosition ? Math.max(16, eventTime - lastPointerTime) : 16;
  lastPointerClientX = event.clientX;
  lastPointerTime = eventTime;
  hasPointerPosition = true;
  const rawSpeed = movement / timeDelta;
  const norm = clamp(rawSpeed / 2.4, 0, 1);
  const instantSpeed = Math.pow(norm, 0.85);
  pointerSpeed += (instantSpeed - pointerSpeed) * (instantSpeed > pointerSpeed ? 0.55 : 0.12);
  pointerX += (x - pointerX) * 0.18;
  pointerY += (y - pointerY) * 0.18;

  if (app.classList.contains("is-project") || app.classList.contains("is-about") || isTransitioning) {
    return;
  }

  if (movement > 1.5) {
    lastSweepAt = performance.now();
    waveDirection += (Math.sign(movementX || waveDirection) - waveDirection) * 0.24;
  }

  if (app.classList.contains("is-home-preview")) return;

  if (isDragging) {
    const drag = event.clientX - dragStartX;
    scrollTarget = clampHomeScroll(dragStartTarget - drag * 0.74);
  } else if (movement > 0) {
    scrollTarget = clampHomeScroll(scrollTarget + movementX * 0.72);
  }
}

function onPointerDown(event) {
  if (app.classList.contains("is-project") || app.classList.contains("is-home-preview") || isTransitioning) return;
  isDragging = true;
  dragStartX = event.clientX;
  dragStartTarget = scrollTarget;
}

function onPointerUp() {
  isDragging = false;
}

function onKeyDown(event) {
  if (isTransitioning) return;

  if (event.key === "Escape") {
    if (app.classList.contains("is-project")) {
      closeProject();
    } else if (app.classList.contains("is-about")) {
      toggleAbout();
    } else if (app.classList.contains("is-home-preview")) {
      exitPreview();
    }
  }

  if (event.key === "Enter" && !app.classList.contains("is-project")) {
    openProject(activeIndex);
  }

  if (event.key === "ArrowRight") {
    if (app.classList.contains("is-project")) {
      return;
    } else {
      scrollTarget = clampHomeScroll(scrollTarget + gap);
    }
  }

  if (event.key === "ArrowLeft") {
    if (app.classList.contains("is-project")) {
      return;
    } else {
      scrollTarget = clampHomeScroll(scrollTarget - gap);
    }
  }
}

function resize() {
  if (window.innerWidth < 620) {
    gap = 68;
  } else if (window.innerWidth < 980) {
    gap = 76;
  } else {
    gap = 82;
  }

  scrollTarget = clampHomeScroll(scrollTarget);
  scrollCurrent = clampHomeScroll(scrollCurrent);
}

buildHome();
resize();
scrollCurrent = 0;
scrollTarget = 0;
updateActive(0);
renderHomePreview(0);
animateGallery();

window.addEventListener("resize", resize);
window.addEventListener("wheel", onWheel, { passive: false });
window.addEventListener("pointermove", onPointerMove);
window.addEventListener("pointerdown", onPointerDown);
window.addEventListener("pointerup", onPointerUp);
window.addEventListener("keydown", onKeyDown);
closeProjectButton.addEventListener("click", closeProject);
homePreviewExplore.addEventListener("click", (event) => {
  event.stopPropagation();
  openProject(previewIndex);
});
document.addEventListener("click", (event) => {
  if (!app.classList.contains("is-home-preview")) return;
  if (event.target.closest(".thumb, .home-preview, .chrome")) return;
  exitPreview();
});
aboutButton.addEventListener("click", toggleAbout);
videoToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  setVideoPlaying(!videoPlaying);
});
projectMediaShell.addEventListener("click", (event) => {
  if (!app.classList.contains("is-project") || event.target.closest("button")) return;
  if (!hasProjectVideo(projects[openedIndex])) return;
  setVideoPlaying(!videoPlaying);
});
videoTrack.addEventListener("pointerdown", onVideoPointerDown);
videoTrack.addEventListener("pointermove", onVideoPointerMove);
videoTrack.addEventListener("pointerup", onVideoPointerUp);
videoTrack.addEventListener("pointercancel", onVideoPointerUp);
videoTrack.addEventListener("keydown", onVideoKeyDown);
localVideo.addEventListener("play", () => {
  videoPlaying = true;
  projectMedia.classList.add("is-playing");
  projectMediaShell.classList.add("is-playing");
  videoToggleLabel.textContent = "PAUSE";
  videoToggle.setAttribute("aria-label", "Pause video");
  videoLastTick = performance.now();
  if (!videoRaf) {
    videoRaf = requestAnimationFrame(tickVideo);
  }
});
localVideo.addEventListener("pause", () => {
  if (localVideo.ended) return;
  videoPlaying = false;
  projectMedia.classList.remove("is-playing");
  projectMediaShell.classList.remove("is-playing");
  videoToggleLabel.textContent = "PLAY";
  videoToggle.setAttribute("aria-label", "Play video");
});
localVideo.addEventListener("timeupdate", () => {
  if (!localVideoLoaded) return;
  if (Number.isFinite(localVideo.duration) && localVideo.duration > 0) {
    videoDuration = localVideo.duration;
  }
  videoCurrentTime = localVideo.currentTime;
  updateVideoUI();
});
brandLink.addEventListener("click", (event) => {
  event.preventDefault();

  if (app.classList.contains("is-project")) {
    closeProject();
  }

  if (app.classList.contains("is-about")) {
    toggleAbout();
  }
});
