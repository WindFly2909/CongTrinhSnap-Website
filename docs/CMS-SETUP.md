# Thiết lập Sveltia CMS

CMS UI: `/admin`; cấu hình: `public/admin/config.yml`.

## Vì sao dùng OAuth Worker
Sveltia CMS Authenticator là Worker mã nguồn mở của Sveltia, dùng làm OAuth client cho GitHub. Tài khoản GitHub owner duy nhất có quyền write repository. Worker nên giới hạn site domain là `congtrinhsnap.pages.dev`.

## Các bước
1. Mở repository chính thức `https://github.com/sveltia/sveltia-cms-auth`.
2. Deploy project authenticator sang Cloudflare Workers theo README chính thức.
3. Ghi lại Worker URL dạng `https://sveltia-cms-auth.<subdomain>.workers.dev`.
4. Tạo GitHub OAuth App riêng cho CMS.
5. Homepage URL của OAuth App có thể là trang mô tả authenticator hoặc site website.
6. Authorization callback URL phải đúng dạng `<YOUR_WORKER_URL>/callback`.
7. Cấu hình Worker Variables:
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET` (Encrypt/Secret)
   - `ALLOWED_DOMAINS=congtrinhsnap.pages.dev`
8. Deploy Worker.
9. Sửa `base_url` trong `public/admin/config.yml` thành Worker URL thực tế.
10. Commit thay đổi và chờ Cloudflare Pages build.

## Kiểm thử bắt buộc
- Chủ sở hữu `WindFly2909` đăng nhập được.
- Tài khoản khác không có quyền repository write không thể lưu bài.
- Kiểm tra callback OAuth, state/CSRF và cookie.
- Đăng bài thử; commit chỉ xuất hiện trong repository website.
- Không cấp quyền ghi cho repository Android.

## Quan trọng
Không commit Client Secret hoặc Personal Access Token. Không bật CMS production trước khi Worker được cấu hình và kiểm thử.
