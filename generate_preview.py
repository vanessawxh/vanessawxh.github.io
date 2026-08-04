from PIL import Image, ImageDraw, ImageFont
import os
width, height = 1200, 630
bg_color = (3, 11, 24)
img = Image.new('RGBA', (width, height), bg_color)
draw = ImageDraw.Draw(img)
draw.rounded_rectangle([(40,40), (1160,590)], radius=30, fill=(255,255,255,10), outline=(255,255,255,30), width=2)
try:
    title_font = ImageFont.truetype('arial.ttf', 42)
    subtitle_font = ImageFont.truetype('arial.ttf', 20)
    mono_font = ImageFont.truetype('cour.ttf', 18)
except Exception:
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    mono_font = ImageFont.load_default()

draw.text((70, 70), 'vanessa wu', font=title_font, fill=(223,231,245))
draw.text((70, 120), 'Mechanical Engineering · Architecture · Design Innovation', font=subtitle_font, fill=(159,183,214))
ascii_lines = [
    '      .-++++++++--.',
    '  .+#+++############+++++++#+-',
    '-#++######################+#++++++#-',
    '.+++###############################++#++#',
    '+++###################++++++++###++###++###+-.',
    '.++#############++..                ..-++#++###+++',
    '.++###########+...                          .+#####++-++',
    '-++########+-..                                . .+###+-+#.',
    '+####+##....                                          +++++-#.',
    '++#####-.-.                                             -+++-+#.',
    '+-+####+ ....                                               --++-++',
    '--+##+#.  ...                                                 --++-#',
    '.+-##+++  ..                                                    -++-++',
    '+++#++++ ..                                                      -+-+#',
]
line_y = 190
for line in ascii_lines:
    draw.text((70, line_y), line, font=mono_font, fill=(203,214,234))
    line_y += 28
try:
    footer_font = ImageFont.truetype('arial.ttf', 20)
except Exception:
    footer_font = ImageFont.load_default()
draw.text((70, 540), 'vanessawxh.github.io', font=footer_font, fill=(141,165,203))
path = os.path.join('assets', 'social-preview.png')
img.save(path)
print('Saved', path)
