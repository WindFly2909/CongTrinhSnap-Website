# Kiến trúc website CongTrinhSnap

## Mục tiêu
- Website tiếng Việt trước, có khả năng mở rộng tiếng Anh.
- Static-first để giữ chi phí vận hành thấp.
- Không lưu dữ liệu công trình riêng tư hoặc dữ liệu người dùng trên website.
- CMS chỉ cho GitHub owner `WindFly2909` quản trị nội dung.

## Luồng
1. Cloudflare Pages phân phối HTML/CSS/JS tĩnh.
2. Astro build từ mã nguồn và nội dung Markdown/JSON trong GitHub.
3. Sveltia CMS tại `/admin` là giao diện biên tập.
4. GitHub OAuth xử lý qua Sveltia CMS Authenticator Worker.
5. CMS ghi thay đổi vào repository website; Cloudflare Pages build lại website.

## Thành phần
- Astro static output, sitemap.
- Sveltia CMS.
- GitHub repository làm nguồn nội dung và lịch sử phiên bản.
- Cloudflare Pages hosting.
- Cloudflare Worker nhỏ cho OAuth authenticator.
- Cloudflare Web Analytics và Google Search Console (tùy chọn).

## Bảo mật
- Repository Public: nội dung commit cần được xem là công khai.
- Không lưu OAuth Client Secret, PAT, token, mật khẩu hoặc dữ liệu khách hàng trong Git.
- GitHub chỉ cấp quyền write cho chủ repository.
- Authenticator giới hạn ALLOWED_DOMAINS thành `congtrinhsnap.pages.dev`.
- Không cấp CMS quyền ghi vào repository Android.
