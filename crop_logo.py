from PIL import Image
import os

def crop_image(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        # Get the bounding box of the non-zero regions
        bbox = img.getbbox()
        
        if bbox:
            cropped_img = img.crop(bbox)
            cropped_img.save(output_path)
            print(f"Successfully cropped image. New size: {cropped_img.size}")
        else:
            print("Image is entirely transparent, nothing to crop.")
            
    except Exception as e:
        print(f"Error cropping image: {e}")

if __name__ == "__main__":
    input_file = "src/assets/logo.png"
    # Overwrite the same file or create a new one. Let's overwrite safely by saving to temp first then rename if needed, 
    # but PIL save to same path works.
    crop_image(input_file, input_file)
