#!/usr/bin/env python3
"""
Generate the dark/light "neofetch" profile cards (dark_mode.svg / light_mode.svg).

Inspired by Andrew6rant's GitHub profile README. This is a STATIC generator:
edit the CONFIG below (or ascii.txt) and re-run to refresh the card:

    python generate_card.py

No API token or network access is required — the GitHub stats are the values
you set in CONFIG. Update them whenever you like and re-run.
"""

import os
import html

# ---------------------------------------------------------------------------
# EDIT ME — your personal "neofetch" fields and your GitHub stats.
# ---------------------------------------------------------------------------
CONFIG = {
    "handle": "mohamad@hasoun",          # shown as the terminal prompt header
    "system": [
        ("OS",        "Windows 11, Debian Linux"),
        ("Uptime",    "5 years, 5 months, 14 days"),   # time on GitHub
        ("Host",      "Software Engineering Student"),
        ("Kernel",    "Web Developer · ex-Cyber Security"),
        ("Location",  "Amman, Jordan"),
        ("IDE",       "VS Code"),
    ],
    "languages": [
        (("Languages", "Programming"), "JavaScript, TypeScript, Python, C++"),
        (("Languages", "Computer"),    "HTML, CSS, SCSS, SQL"),
        (("Languages", "Real"),        "Arabic, English"),
    ],
    "hobbies": [
        (("Hobbies", "Software"), "Building Web Apps, Open Source"),
        (("Hobbies", "Media"),    "YouTube (Dev Dive), Tech Content"),
    ],
    "contact": [
        (("Email", "Personal"), "mohamad.hasoun.work@gmail.com"),
        ("Portfolio", "ramadanportf.netlify.app"),
        ("YouTube",   "@Dev-Dive01"),
        ("Instagram", "m9.prof"),
        ("LinkedIn",  "ramadanuv"),
    ],
    # GitHub stats — static snapshot. Refresh these numbers and re-run.
    "stats": {
        "repos": 18,
        "stars": 16,
        "commits": 102,
        "followers": 27,
        "following": 36,
        "since": 2021,
    },
}

# ---------------------------------------------------------------------------
# Theme palettes (GitHub's own dark / light colors, like the reference).
# ---------------------------------------------------------------------------
THEMES = {
    "dark": {
        "bg": "#161b22", "text": "#c9d1d9", "key": "#ffa657",
        "value": "#a5d6ff", "cc": "#616e7f", "add": "#3fb950", "del": "#f85149",
    },
    "light": {
        "bg": "#f6f8fa", "text": "#24292f", "key": "#953800",
        "value": "#0a3069", "cc": "#c2cfde", "add": "#1a7f37", "del": "#cf222e",
    },
}

# ---------------------------------------------------------------------------
# Layout constants.
# ---------------------------------------------------------------------------
ASCII_FONT = 9          # px font size for the ASCII portrait
ASCII_LINE = 11         # px line height for the ASCII portrait
ASCII_X = 15
ASCII_Y0 = 24           # first baseline
STATS_FONT = 16         # px font size for the stats panel
STATS_LINE = 20         # px line height for the stats panel
STATS_Y0 = 30           # first baseline
ALIGN_COL = 31          # values line up at this character column (like reference)
PANEL_CHARS = 66        # total character width of the stats panel
GAP = 24                # gap between ASCII column and stats column
RIGHT_MARGIN = 18
BOTTOM_MARGIN = 22
CHAR_RATIO = 0.6023     # monospace advance width / font size (DejaVu/Consolas)


def read_ascii():
    here = os.path.dirname(os.path.abspath(__file__))
    with open(os.path.join(here, "ascii.txt"), encoding="utf-8") as f:
        lines = f.read().split("\n")
    while lines and lines[-1].strip() == "":
        lines.pop()
    while lines and lines[0].strip() == "":
        lines.pop(0)
    return lines


def leader(n):
    """Dot leader of total length n (space + dots + space), like the reference."""
    if n <= 0:
        return " "
    if n == 1:
        return " "
    if n == 2:
        return ". "
    return " " + "." * (n - 2) + " "


def kv_spans(key, value):
    """Build spans for a '. Key: .... value' line. key may be str or tuple."""
    parts = [key] if isinstance(key, str) else list(key)
    key_text = ".".join(parts)
    prefix_len = 2 + len(key_text) + 1            # ". " + key + ":"
    dots = leader(ALIGN_COL - prefix_len)
    spans = [(". ", "cc")]
    for i, p in enumerate(parts):
        if i:
            spans.append((".", "plain"))
        spans.append((p, "key"))
    spans.append((":", "plain"))
    spans.append((dots, "cc"))
    spans.append((value, "value"))
    return spans


def fill_header(prefix, total=PANEL_CHARS):
    """A section header padded with em-dashes to `total` characters."""
    rem = total - len(prefix)
    if rem < 4:
        return prefix
    return prefix + "-" + "\u2014" * (rem - 4) + "-\u2014-"


def build_rows():
    """Return the stats panel as a list of rows; each row is a list of spans."""
    rows = []
    rows.append([(CONFIG["handle"] + " ", "plain"),
                 (fill_header(CONFIG["handle"] + " ")[len(CONFIG["handle"]) + 1:], "plain")])
    for key, value in CONFIG["system"]:
        rows.append(kv_spans(key, value))
    rows.append([(". ", "cc")])
    for key, value in CONFIG["languages"]:
        rows.append(kv_spans(key, value))
    rows.append([(". ", "cc")])
    for key, value in CONFIG["hobbies"]:
        rows.append(kv_spans(key, value))
    rows.append([(". ", "cc")])
    rows.append([(fill_header("- Contact "), "plain")])
    for key, value in CONFIG["contact"]:
        rows.append(kv_spans(key, value))
    rows.append([(". ", "cc")])
    rows.append([(fill_header("- GitHub Stats "), "plain")])

    s = CONFIG["stats"]
    rows.append([(". ", "cc"), ("Repos", "key"), (":", "plain"),
                 (leader(6), "cc"), (str(s["repos"]), "value"),
                 ("  |  ", "plain"), ("Stars", "key"), (":", "plain"),
                 (leader(8), "cc"), (str(s["stars"]), "value")])
    rows.append([(". ", "cc"), ("Commits", "key"), (":", "plain"),
                 (leader(4), "cc"), (str(s["commits"]), "value"),
                 ("  |  ", "plain"), ("Followers", "key"), (":", "plain"),
                 (leader(5), "cc"), (str(s["followers"]), "value")])
    rows.append([(". ", "cc"), ("Following", "key"), (":", "plain"),
                 (leader(3), "cc"), (str(s["following"]), "value"),
                 ("  |  ", "plain"), ("Member since", "key"), (":", "plain"),
                 (leader(3), "cc"), (str(s["since"]), "value")])
    return rows


def row_text(row):
    return "".join(t for t, _ in row)


def compute_layout(ascii_lines, rows):
    ascii_w = max(len(l) for l in ascii_lines) * ASCII_FONT * CHAR_RATIO
    stats_x = round(ASCII_X + ascii_w + GAP)
    panel_w = PANEL_CHARS * STATS_FONT * CHAR_RATIO
    width = round(stats_x + panel_w + RIGHT_MARGIN)
    stats_bottom = STATS_Y0 + (len(rows) - 1) * STATS_LINE
    ascii_bottom = ASCII_Y0 + (len(ascii_lines) - 1) * ASCII_LINE
    height = round(max(stats_bottom, ascii_bottom) + BOTTOM_MARGIN)
    return width, height, stats_x


def emit_svg(theme_name, ascii_lines, rows, width, height, stats_x):
    t = THEMES[theme_name]
    out = []
    out.append("<?xml version='1.0' encoding='UTF-8'?>")
    out.append(
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'font-family="ConsolasFallback,Consolas,monospace" '
        f'width="{width}px" height="{height}px" font-size="{STATS_FONT}px">'
    )
    out.append("<style>")
    out.append("@font-face {")
    out.append("src: local('Consolas'), local('Consolas Bold');")
    out.append("font-family: 'ConsolasFallback';")
    out.append("font-display: swap;")
    out.append("-webkit-size-adjust: 109%;")
    out.append("size-adjust: 109%;")
    out.append("}")
    out.append(f".key {{fill: {t['key']};}}")
    out.append(f".value {{fill: {t['value']};}}")
    out.append(f".addColor {{fill: {t['add']};}}")
    out.append(f".delColor {{fill: {t['del']};}}")
    out.append(f".cc {{fill: {t['cc']};}}")
    out.append(f".ascii {{font-size: {ASCII_FONT}px;}}")
    out.append("text, tspan {white-space: pre;}")
    out.append("</style>")
    out.append(f'<rect width="{width}px" height="{height}px" fill="{t["bg"]}" rx="15"/>')

    # ASCII portrait
    out.append(f'<text x="{ASCII_X}" y="{ASCII_Y0}" fill="{t["text"]}" class="ascii">')
    for i, line in enumerate(ascii_lines):
        y = ASCII_Y0 + i * ASCII_LINE
        out.append(f'<tspan x="{ASCII_X}" y="{y}">{html.escape(line)}</tspan>')
    out.append("</text>")

    # Stats panel
    out.append(f'<text x="{stats_x}" y="{STATS_Y0}" fill="{t["text"]}">')
    for i, row in enumerate(rows):
        y = STATS_Y0 + i * STATS_LINE
        first = True
        for text, cls in row:
            esc = html.escape(text)
            if cls == "plain":
                if first:
                    out.append(f'<tspan x="{stats_x}" y="{y}">{esc}</tspan>')
                else:
                    out.append(f"<tspan>{esc}</tspan>")
            else:
                css = {"key": "key", "value": "value", "cc": "cc",
                       "add": "addColor", "del": "delColor"}[cls]
                if first:
                    out.append(f'<tspan x="{stats_x}" y="{y}" class="{css}">{esc}</tspan>')
                else:
                    out.append(f'<tspan class="{css}">{esc}</tspan>')
            first = False
        out.append("\n")
    out.append("</text>")
    out.append("</svg>")
    return "".join(out)


def render_preview(path, ascii_lines, rows, width, height, stats_x, theme_name="dark"):
    """Rasterize a PNG preview with Pillow + a monospace TTF (for verification)."""
    from PIL import Image, ImageDraw, ImageFont
    from matplotlib import font_manager

    t = THEMES[theme_name]
    font_path = font_manager.findfont("DejaVu Sans Mono")
    scale = 2  # render at 2x for crispness
    img = Image.new("RGB", (width * scale, height * scale), t["bg"])
    d = ImageDraw.Draw(img)
    f_ascii = ImageFont.truetype(font_path, ASCII_FONT * scale)
    f_stats = ImageFont.truetype(font_path, STATS_FONT * scale)
    colors = {"plain": t["text"], "key": t["key"], "value": t["value"],
              "cc": t["cc"], "add": t["add"], "del": t["del"]}

    # rounded background already filled; draw ASCII
    for i, line in enumerate(ascii_lines):
        y = (ASCII_Y0 + i * ASCII_LINE) * scale
        d.text((ASCII_X * scale, y), line, font=f_ascii, fill=t["text"], anchor="ls")

    # stats: advance x by measured glyph widths so spans line up exactly
    for i, row in enumerate(rows):
        y = (STATS_Y0 + i * STATS_LINE) * scale
        x = stats_x * scale
        for text, cls in row:
            d.text((x, y), text, font=f_stats, fill=colors[cls], anchor="ls")
            x += d.textlength(text, font=f_stats)

    img = img.resize((width, height), Image.LANCZOS)
    img.save(path)


def main():
    here = os.path.dirname(os.path.abspath(__file__))
    ascii_lines = read_ascii()
    rows = build_rows()
    width, height, stats_x = compute_layout(ascii_lines, rows)
    print(f"Card size: {width} x {height}px | stats column x={stats_x}")
    longest = max((len(row_text(r)) for r in rows), default=0)
    print(f"Longest stats line: {longest} chars (panel budget {PANEL_CHARS})")
    for theme in ("dark", "light"):
        svg = emit_svg(theme, ascii_lines, rows, width, height, stats_x)
        out = os.path.join(here, f"{theme}_mode.svg")
        with open(out, "w", encoding="utf-8") as f:
            f.write(svg)
        print("wrote", out)
    try:
        render_preview(os.path.join(here, "preview_dark.png"),
                       ascii_lines, rows, width, height, stats_x, "dark")
        render_preview(os.path.join(here, "preview_light.png"),
                       ascii_lines, rows, width, height, stats_x, "light")
        print("wrote preview_dark.png / preview_light.png")
    except Exception as e:
        print("preview skipped:", e)


if __name__ == "__main__":
    main()
