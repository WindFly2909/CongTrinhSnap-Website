# Kiến trúc website CongTrinhSnap

## Mục tiêu
- Website tiếng Việt trước, có thể mở rộng tiếng Anh.
- Static-first để giữ chi phí vận hành thấp.
- Không lưu dữ liệu công trình riêng tư hoặc dữ liệu người dùng trên website.
- CMS chỉ cho chủ sở hữu GitHub `WindFly2909` quyền ghi vào repository website.

## Luồng
1. Cloudflare Pages phân phối HTML/CSS/JS tĩnh.
2. Astro build từ mã nguồn và nội dung Markdown/JSON trong GitHub.
3. Sveltia CMS tại `/admin` là giao diện biên tập.
4. Chủ sở hữu xác thực với GitHub bằng Fine-grained PAT trên trình duyệt.
5. CMS gửi thao tác tới GitHub; token chỉ có quyền Contents read/write của repository website.
6. Mỗi commit làm Cloudflare Pages build lại website.

## Thành phần
- Astro static output, sitemap.
- Sveltia CMS.
- GitHub repository làm nguồn nội dung và lịch sử phiên bản.
- Cloudflare Pages hosting.
- Không cần OAuth Worker hoặc database riêng cho CMS giai đoạn đầu.

## Bảo mật
- Repository Public: nội dung commit cần được xem là công khai.
- Fine-grained PAT chỉ giới hạn repository `WindFly2909/CongTrinhSnap-Website`.
- Chỉ cấp Contents read/write và Metadata read-only.
- Không cấp quyền vào repository Android.
- Không lưu PAT trong Git hoặc mã nguồn.
- Người không có token ghi hợp lệ không thể lưu nội dung.
