
from PIL import Image
im = Image.open('assets/images/4eefb7_real-estate.jpg')
print("4eefb7_real-estate.jpg size:", im.size, im.format)
im2 = Image.open('assets/images/041bdb_content-slider.jpg')
print("041bdb_content-slider.jpg size:", im2.size, im2.format)
im_ref = Image.open('C:/Users/HP/.gemini/antigravity/brain/bc6afea6-d921-4279-a33e-e499a0338d3d/.user_uploaded/media_1795425880280_8185f05f.jpg')
print("media_1795425880280_8185f05f.jpg size:", im_ref.size)
