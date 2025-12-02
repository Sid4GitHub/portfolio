import pypdf

try:
    reader = pypdf.PdfReader("D:/Downloads/Browser/Siddhartha.Sadhukhan_Resume.pdf")
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    print(text)
except Exception as e:
    print(f"Error: {e}")
