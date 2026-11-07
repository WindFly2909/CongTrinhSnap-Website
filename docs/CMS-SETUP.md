# Thiết lập Sveltia CMS — chế độ một chủ sở hữu

CMS UI: `https://congtrinhsnap.pages.dev/admin/`

## Phương án xác thực đã chọn

Dùng GitHub Fine-grained Personal Access Token (PAT) và chỉ bật `auth_methods: [token]`.

Lý do:
- Sveltia CMS khuyến nghị Access Token khi chỉ chủ sở hữu hoặc nhóm kỹ thuật nhỏ sử dụng CMS.
- Không cần triển khai OAuth Worker, OAuth App hoặc máy chủ xác thực riêng.
- Có thể giới hạn token vào đúng một repository.
- Tài khoản không có quyền ghi repository không thể dùng token để quản trị nội dung.

## Quyền token cần cấp

Tạo token tại GitHub Settings → Developer settings → Personal access tokens → Fine-grained tokens.

Chọn:
- Resource owner: `WindFly2909`
- Repository access: Only select repositories
- Chọn đúng: `CongTrinhSnap-Website`
- Repository permissions:
  - Contents: Read and write
  - Metadata: Read-only (GitHub tự thêm)
- Không cấp Administration, Actions, Secrets, Workflows hoặc quyền không cần thiết.
- Không cần Pull requests vì CMS đang dùng Simple Workflow, không dùng Editorial Workflow.

Đặt thời hạn token phù hợp (khuyến nghị 90 ngày để có lịch luân phiên). Không chọn No expiration nếu không cần.

## Đăng nhập CMS

1. Mở `https://congtrinhsnap.pages.dev/admin/`.
2. Chọn “Sign In with Token”.
3. Dùng nút/link tạo token có sẵn trong màn hình CMS hoặc mở trang tạo Fine-grained PAT của GitHub.
4. Kiểm tra repository access và quyền Contents như mục trên.
5. Generate token.
6. Dán token trực tiếp vào hộp thoại đăng nhập Sveltia CMS trong trình duyệt. Không gửi token qua ChatGPT, email, tin nhắn hoặc đưa vào tệp mã nguồn.
7. Sveltia CMS lưu token trong local storage của trình duyệt để dùng cho các lần đăng nhập sau.

## Quy tắc bảo mật

- Token chỉ cấp quyền vào `WindFly2909/CongTrinhSnap-Website`, không cấp quyền vào repository Android.
- Chỉ tạo token trên thiết bị cá nhân đáng tin cậy.
- Không dùng CMS trên máy tính công cộng.
- Khi mất thiết bị hoặc nghi ngờ token bị lộ, vào GitHub Settings và revoke token ngay.
- Khi token hết hạn, tạo token mới theo đúng quyền tối thiểu và đăng nhập lại.
- Vì repository Public, mọi bài viết/ảnh upload vào repository sẽ là nội dung công khai. Không upload ảnh công trình khách hàng, dữ liệu cá nhân hoặc hồ sơ riêng tư.
- Trang `/admin` có `noindex`, nhưng đây không phải lớp xác thực mạng. Quyền ghi được kiểm soát ở GitHub bằng token giới hạn repository.
- Người khác vẫn có thể mở trang đăng nhập CMS, nhưng không thể lưu nội dung nếu không có token hợp lệ có quyền ghi vào repository website.

## Vì sao không triển khai OAuth Worker ở giai đoạn đầu

OAuth Authenticator mặc định yêu cầu scope `repo,user`, có thể rộng hơn phạm vi website public. Sveltia CMS có tài liệu khuyên dùng PAT cho trường hợp chỉ một chủ sở hữu quản trị. Do vậy token Fine-grained với một repository và Contents read/write là lựa chọn gọn và giới hạn quyền tốt hơn.

## Kiểm thử bắt buộc

- Token truy cập được đúng repository website.
- Đăng nhập CMS và xem danh sách collections.
- Tạo một bài nháp thử nghiệm.
- Xác nhận commit chỉ xuất hiện trong repository website.
- Không để token trong commit, log, ảnh chụp màn hình hoặc nội dung công khai.
- Xóa bài thử sau khi kiểm tra.
