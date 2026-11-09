from PIL import Image, ImageDraw, ImageFilter
import math, os

def create_storycraft_icon(size):
    # High resolution canvas for antialiasing
    scale = 4
    s = size * scale
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # 1. Background Squircle
    margin = int(s * 0.05)
    radius = int(s * 0.24)
    # Background gradient approximation using layers
    for i in range(12):
        factor = i / 12.0
        r = int(15 + factor * 20)
        g = int(23 + factor * 25)
        b = int(42 + factor * 60)
        inset = margin + int(i * scale * 0.6)
        draw.rounded_rectangle([inset, inset, s - inset, s - inset], radius=max(1, radius - int(i * scale * 0.5)), fill=(r, g, b))
    
    # Border stroke
    draw.rounded_rectangle([margin, margin, s - margin, s - margin], radius=radius, outline=(99, 102, 241, 160), width=int(scale * 2.5))
    
    # 2. Glowing center badge
    cx, cy = s // 2, int(s * 0.53)
    badge_r = int(s * 0.32)
    # Soft glow behind
    glow_img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_img)
    glow_draw.ellipse([cx - badge_r - 20, cy - badge_r - 20, cx + badge_r + 20, cy + badge_r + 20], fill=(99, 102, 241, 60))
    glow_img = glow_img.filter(ImageFilter.GaussianBlur(int(scale * 4)))
    img.alpha_composite(glow_img)
    
    # Main badge circle
    draw.ellipse([cx - badge_r, cy - badge_r, cx + badge_r, cy + badge_r], fill=(30, 27, 75))
    draw.ellipse([cx - badge_r, cy - badge_r, cx + badge_r, cy + badge_r], outline=(129, 140, 248), width=int(scale * 1.5))
    
    # 3. Open Book & Speech Waves
    book_w = int(s * 0.40)
    book_h = int(s * 0.26)
    
    # Left page (crisp white)
    draw.polygon([
        (cx - 3, cy - int(book_h * 0.4)),
        (cx - book_w // 2, cy - int(book_h * 0.2)),
        (cx - book_w // 2, cy + int(book_h * 0.55)),
        (cx - 3, cy + int(book_h * 0.35))
    ], fill=(255, 255, 255))
    
    # Right page (crisp soft white)
    draw.polygon([
        (cx + 3, cy - int(book_h * 0.4)),
        (cx + book_w // 2, cy - int(book_h * 0.2)),
        (cx + book_w // 2, cy + int(book_h * 0.55)),
        (cx + 3, cy + int(book_h * 0.35))
    ], fill=(230, 238, 248))
    
    # 4. Stylized Golden Microphone / Flame atop the book
    flame_cx = cx
    flame_cy = cy - int(s * 0.17)
    flame_w = int(s * 0.14)
    flame_h = int(s * 0.22)
    
    # Outer flame / mic head (Vibrant Amber / Gold)
    draw.rounded_rectangle([flame_cx - flame_w//2, flame_cy - flame_h//2, flame_cx + flame_w//2, flame_cy + flame_h//2], radius=int(flame_w*0.48), fill=(245, 158, 11))
    
    # Inner flame core (bright yellow)
    core_w = int(flame_w * 0.55)
    core_h = int(flame_h * 0.60)
    draw.rounded_rectangle([flame_cx - core_w//2, flame_cy - core_h//2 + int(scale*2), flame_cx + core_w//2, flame_cy + core_h//2 + int(scale*2)], radius=int(core_w*0.48), fill=(254, 240, 138))
    
    # Stand / arc under mic
    arc_r = int(s * 0.11)
    draw.arc([flame_cx - arc_r, flame_cy - arc_r//2, flame_cx + arc_r, flame_cy + arc_r], start=0, end=180, fill=(255, 255, 255), width=int(scale * 2.5))
    draw.line([(flame_cx, flame_cy + arc_r), (flame_cx, flame_cy + arc_r + int(s*0.04))], fill=(255, 255, 255), width=int(scale * 2.5))
    
    # Downscale smoothly to target size
    return img.resize((size, size), Image.Resampling.LANCZOS)

os.makedirs("tools/gen_icons", exist_ok=True)
os.makedirs("www/icons", exist_ok=True)

# Generate resolutions
create_storycraft_icon(512).save("www/icons/icon-512.png")
create_storycraft_icon(192).save("www/icons/icon-192.png")
create_storycraft_icon(144).save("tools/gen_icons/xxhdpi.png")
create_storycraft_icon(96).save("tools/gen_icons/xhdpi.png")
create_storycraft_icon(72).save("tools/gen_icons/hdpi.png")
create_storycraft_icon(48).save("tools/gen_icons/mdpi.png")
create_storycraft_icon(36).save("tools/gen_icons/ldpi.png")

print("All StoryCraft icons successfully generated!")
