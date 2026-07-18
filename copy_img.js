const fs = require('fs');
const src = 'C:\\Users\\HP PC\\.gemini\\antigravity\\brain\\3b7f610c-42cc-472c-90a7-10839118a1d4\\media__1784394351347.jpg';
fs.copyFileSync(src, 'c:\\Users\\HP PC\\OneDrive\\Desktop\\New folder (3)\\avatar3d.jpg');
fs.copyFileSync(src, 'c:\\Users\\HP PC\\OneDrive\\Desktop\\New folder (3)\\photo.jpg');
fs.copyFileSync(src, 'c:\\Users\\HP PC\\OneDrive\\Desktop\\New folder (3)\\public\\avatar3d.jpg');
fs.copyFileSync(src, 'c:\\Users\\HP PC\\OneDrive\\Desktop\\New folder (3)\\public\\photo.jpg');
console.log('done');
