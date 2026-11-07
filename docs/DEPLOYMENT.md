# Triển khai Cloudflare Pages

1. Đăng nhập Cloudflare Dashboard.
2. Workers & Pages → Create → Pages → Connect to Git.
3. Chọn repository `WindFly2909/CongTrinhSnap-Website`.
4. Production branch: `main`.
5. Build command: `npm run build`.
6. Build output directory: `dist`.
7. Đặt biến môi trường Node.js tương thích Astro (Node 22.12 trở lên).
8. Deploy và dùng hostname miễn phí `congtrinhsnap.pages.dev`.

## Kiểm tra sau deploy
- Trang chủ, tính năng, Free/Pro, tải ứng dụng, hỗ trợ, blog, hướng dẫn.
- `/robots.txt`.
- `/sitemap-index.xml`.
- Kiểm tra trên điện thoại và máy tính.
- Kiểm tra HTTPS và log build.

Mỗi commit trên nhánh main sẽ tự kích hoạt build khi Pages đã kết nối GitHub.
