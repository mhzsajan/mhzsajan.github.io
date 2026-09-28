<img align="right" src="assets/profile.jpg" width="200" alt="Sajan Maharjan" />

# Sajan Maharjan

**Technical Director** — Deepak Bajracharya & The Rhythm Band
Nepali rock / folk-rock · Kathmandu, Nepal

I run the band's live production, and then I build the tools that make it possible.

`self-taught` `hands-on` `3+ years · all tours & shows` `16 skills`

[![Website](https://img.shields.io/badge/website-mhzsajan.github.io-ff9f2e?style=flat-square&logo=github)](https://mhzsajan.github.io/)
[![Ableton Live](https://img.shields.io/badge/Ableton_Live-11%2B-ff9f2e?style=flat-square)](https://www.ableton.com/en/live/)

---

## 🎛️ Two jobs, one stack

**I run the show.** Ableton Live with AbleSet for setlists, click and backing
tracks. TC-Helicon VoiceLive 3 Extreme for vocals, on a Behringer WING at FOH.
VideoSync2 driving tempo-synced backdrop video and lyric overlays, multi-camera
feeds, LTC timecode distributed to the visuals and lighting desk, and
MaestroDMX running the rig audio-reactively.

**I build the tools.** Most of what's on this page exists because a show needed
it and nothing off the shelf did — an MCP bridge so an AI assistant can drive
Live, OSC/MIDI automation to keep the layers in sync, custom hardware to
interface the band's gear.

### 🎚️ Live production

| | |
|---|---|
| **Show operation** | Ableton Live + AbleSet — setlist control, click tracks, tempo-synced backing |
| **Vocals & guitar** | TC-Helicon VoiceLive 3 Extreme, automated preset switching synced to the setlist |
| **FOH & monitors** | Behringer WING — front-of-house and monitor support |
| **Visuals** | VideoSync2 — backdrop video, lyric overlays, live camera feeds, blend modes |
| **Cameras** | iPhone via NDI/Camo, Kinect, DSLRs, GoPros, Rodecaster Video switcher |
| **Lighting** | MaestroDMX — autonomous audio-reactive control synced to performance |
| **Timecode** | LTC generation and distribution to visuals and lighting in real time |

### 🔧 What I build

| | |
|---|---|
| **[AbleBridgePlus](https://github.com/mhzsajan/AbleBridgePlus)** | MCP server giving any AI assistant 475 tools over Ableton Live |
| **OSC / MIDI integration** | Automation pipelines synchronising audio, video and lighting |
| **Custom hardware** | Interfaces built to operate the band's gear |
| **Web & systems** | WordPress/WooCommerce, Cloudflare, LiteSpeed, incident response |

---

## ⌨️ The show rig

```
Ableton Live  ·  AbleSet setlist
  ├── click tracks ──────────►  monitor mix
  ├── backing tracks ────────►  PA (FOH)
  ├── MIDI ─► VoiceLive 3 ───►  FOH / monitors (WING)
  ├── MIDI ─► VideoSync2 ────►  projector (layers)
  └── MIDI ─► MaestroDMX ────►  autonomous lighting

LTC timecode generator
  ├──►  VideoSync2   (backdrop + live cam)
  └──►  MaestroDMX   (audio-reactive DMX)
```

---

## 🚀 What I'm building

**Open source**

| Project | What it is |
|---|---|
| **[AbleBridgePlus](https://github.com/mhzsajan/AbleBridgePlus)** · `Python` | MCP server giving any AI assistant 475 tools over Ableton Live. Local-first, MIT. Born from automating my own show prep. |
| **[songtimer](https://github.com/mhzsajan/songtimer)** · `HTML` | Tap-and-adjust lyric timing in the browser with LRC export. — [try it live](https://mhzsajan.github.io/songtimer/) |
| **[AbleBridgePlus site](https://mhzsajan.github.io/AbleBridgePlus/)** · `HTML` | A plain-English tour of the MCP bridge, if you'd rather not read a README. |

**Private — the band's tooling, not open yet**

| Project | What it is |
|---|---|
| `stagecraft` · `Python` | Live-show pipeline wiring Ableton + AbleSet + Videosync2 + TouchDesigner into one performance system. |
| `nepali-lyric-video-maker` · `HTML` | Whisper-timed Nepali lyric videos — word-by-word karaoke MP4s, with shadow-key output for transparent live overlays. Handles Preeti-era fonts. |
| `StageCraft-Graphified` / `-RE` · `HTML` `Python` | Graphical companion and reverse-engineering toolkit for the pipeline. |
| `switchgod-bazar` / `pickbazar` · `TypeScript` | E-commerce platform work. |

*Also `enhanced-abletonbridge` — the earlier AbletonBridge extension that AbleBridgePlus grew out of.*

---

## 🧰 Toolbox

<table>
<tr><td valign="top" width="50%">

**Live & show**
- Ableton Live 11/12
- AbleSet · Showsync
- VideoSync2
- TC-Helicon VoiceLive 3 Extreme
- Behringer WING
- LTC Timecode · OSC · MIDI
- MaestroDMX / Maestro Smart

</td><td valign="top" width="50%">

**Video & capture**
- Rodecaster Video
- iPhone (NDI / Camo)
- Kinect · DSLR · GoPro

**Web & infra**
- WordPress · WooCommerce
- Elementor · Woodmart
- Cloudflare · LiteSpeed

**Building**
- Python · MCP servers
- Custom hardware
- LLM / agent integration

</td></tr>
</table>

---

## 📬 Reach me

[![Email](https://img.shields.io/badge/email-mhzsajan@gmail.com-ff9f2e?style=flat-square&logo=gmail&logoColor=white)](mailto:mhzsajan@gmail.com)
[![GitHub](https://img.shields.io/badge/github-mhzsajan-2ea44f?style=flat-square&logo=github)](https://github.com/mhzsajan)
[![Website](https://img.shields.io/badge/site-mhzsajan.github.io-2ea44f?style=flat-square&logo=github.io)](https://mhzsajan.github.io/)

Open to working on live-show automation, Ableton tooling, and music tech for
artists who'd rather not click through a setlist by hand.

---

<sub>This repository also serves <a href="https://mhzsajan.github.io/">mhzsajan.github.io</a> —
the README above is the GitHub profile; <code>index.html</code> is the website.
Built and maintained by Sajan Maharjan. MIT licensed.</sub>
