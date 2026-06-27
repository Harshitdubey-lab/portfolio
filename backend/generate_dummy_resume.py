import os

def create_dummy_pdf():
    static_dir = os.path.join(os.path.dirname(__file__), "static")
    os.makedirs(static_dir, exist_ok=True)
    pdf_path = os.path.join(static_dir, "resume.pdf")
    
    # Just creating a minimal valid empty PDF file
    pdf_content = b"%PDF-1.0\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj 2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj 3 0 obj<</Type/Page/MediaBox[0 0 3 3]>>endobj\nxref\n0 4\n0000000000 65535 f\n0000000010 00000 n\n0000000053 00000 n\n0000000102 00000 n\ntrailer<</Size 4/Root 1 0 R>>\nstartxref\n149\n%EOF\n"
    
    with open(pdf_path, "wb") as f:
        f.write(pdf_content)

if __name__ == "__main__":
    create_dummy_pdf()
    print("Dummy resume.pdf created.")
