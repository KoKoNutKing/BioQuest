# BIOQUEST
## Interactive Creature Discovery World
**Project Proposal — Gian hàng khám phá sinh vật tương tác 3D & AR**

**Phiên bản:** 1.1  
**Ngày:** 23/11/2026  
**Đối tượng:** Học sinh Tiểu học và THCS

---

## 1. Tổng quan dự án (Project Overview)

BioQuest là một nền tảng trò chơi giáo dục tương tác, cho phép học sinh khám phá thế giới sinh vật thông qua mô hình 3D và công nghệ thực tế tăng cường (AR).

Trò chơi được tổ chức dưới dạng bản đồ gồm nhiều khu vực sinh thái có độ khó khác nhau.

Hai chế độ trải nghiệm được định hướng phát triển:

- **Creature Lab:** Quan sát, tháo rời và lắp ráp mô hình sinh vật 3D.
- **AR Explorer:** Dùng điện thoại để tìm kiếm và tương tác với sinh vật ảo trong môi trường thực.

BioQuest hướng tới việc biến kiến thức sinh học thành trải nghiệm khám phá trực quan, thú vị và dễ tiếp cận.

### Mục tiêu

- Khơi gợi hứng thú với khoa học tự nhiên.
- Giúp học sinh nhận biết cấu tạo và đặc điểm sinh vật.
- Tạo trải nghiệm học thông qua tương tác và giải quyết thử thách.
- Xây dựng nền tảng có thể bổ sung sinh vật, khu vực và chế độ chơi trong tương lai.

---

## 2. Đối tượng người dùng (Target Audience)

| Nhóm | Đặc điểm trải nghiệm |
|---|---|
| Tiểu học | Ít bộ phận, thao tác đơn giản, hướng dẫn trực quan |
| THCS | Nhiều bộ phận, câu hỏi kiến thức, thử thách nâng cao |
| Tình nguyện viên | Hướng dẫn, điều phối và khởi động lại lượt chơi |

Mục tiêu thời lượng cho một nhiệm vụ là khoảng 3–5 phút.

---

## 3. Ý tưởng sản phẩm (Product Concept)

### 3.1. World Map — Bản đồ khám phá

Màn hình chính là bản đồ với nhiều khu vực sinh thái.

Mỗi khu vực có:

- Chủ đề sinh vật riêng.
- Mức độ khó.
- Danh sách sinh vật.
- Các nhiệm vụ khám phá.
- Trạng thái hoàn thành.

Các khu vực định hướng gồm:

1. **Tiny Forest:** Côn trùng và động vật nhỏ.
2. **Blue Ocean:** Sinh vật thủy sinh.
3. **Micro World:** Thế giới vi sinh vật.
4. **Prehistoric World:** Sinh vật tiền sử.

### 3.2. Creature Lab — Phòng thí nghiệm sinh vật

Chế độ chơi chính của MVP.

**Deconstruction — Tháo rời**

Người chơi quan sát sinh vật 3D, lựa chọn và tháo các bộ phận theo yêu cầu.

Các bộ phận được tách ra bằng hiệu ứng Exploded View, giúp người chơi quan sát cấu tạo.

**Reconstruction — Lắp ráp**

Người chơi kéo thả các bộ phận để khôi phục mô hình hoàn chỉnh.

Cơ chế Snap-to-Position hỗ trợ tự động đặt bộ phận vào đúng vị trí khi người chơi kéo đủ gần.

Độ khó được thay đổi theo số lượng bộ phận, mức gợi ý và độ phức tạp của nhiệm vụ.

### 3.3. AR Explorer — Khám phá bằng thực tế tăng cường

Đây là chế độ mở rộng được ưu tiên sau khi hoàn thành gameplay 3D cốt lõi.

Quy trình trải nghiệm:

1. Chọn khu vực trên World Map.
2. Quét QR để truy cập trang WebAR.
3. Cho phép website sử dụng camera điện thoại.
4. Hướng camera vào hình ảnh mốc.
5. Quan sát sinh vật 3D xuất hiện trong môi trường thực.
6. Tương tác với sinh vật và hoàn thành nhiệm vụ.

Công nghệ dự kiến là Image Tracking AR. Mã QR dùng để mở website, còn ảnh mốc dùng để định vị sinh vật ảo.

### 3.4. Discovery Collection — Bộ sưu tập khám phá

Hệ thống ghi nhận sinh vật đã khám phá và kết quả nhiệm vụ.

Có thể mở rộng bằng điểm thưởng, huy hiệu và trạng thái mở khóa khu vực.

---

## 4. Luồng trải nghiệm (User Journey)

1. **Welcome:** Người chơi được hướng dẫn ngắn.
2. **World Map:** Chọn khu vực.
3. **Game Mode:** Chọn chế độ hiện có.
4. **Gameplay:** Thực hiện nhiệm vụ 3D hoặc AR.
5. **Result:** Nhận kết quả và thông tin sinh vật.
6. **Continue / Restart:** Tiếp tục khám phá hoặc bắt đầu lượt mới.

Trong MVP cốt lõi, luồng bắt buộc kết thúc khi người chơi hoàn thành thao tác tháo/lắp sinh vật. Màn hình kết quả và cơ chế reset tự động thuộc nhóm Should Have.

---

## 5. Phạm vi MVP (Minimum Viable Product)

### 5.1. MVP Core — Phạm vi bắt buộc

MVP phải chứng minh được khả năng khám phá và tương tác với sinh vật 3D thông qua một bản đồ.

Các thành phần cốt lõi:

- Bản đồ cho phép chọn khu vực.
- Hiển thị mô hình sinh vật 3D.
- Xoay và quan sát mô hình.
- Tháo rời các bộ phận.
- Kéo thả và lắp ráp lại sinh vật.
- Kiểm tra vị trí lắp đúng hoặc sai.

### 5.2. MVP Extended — Phạm vi nên có

Các chức năng nên triển khai nếu thời gian và nguồn lực cho phép:

- QR dẫn tới trang WebAR.
- Image Tracking AR.
- Nhiệm vụ khám phá AR.
- Kết quả và reset tự động.
- Điểm thưởng, huy hiệu.
- Đồng bộ tiến độ giữa thiết bị.
- Bộ sưu tập khám phá và mở khóa khu vực.

### 5.3. Cấu hình nội dung mục tiêu

| Hạng mục | Số lượng dự kiến |
|---|---|
| Khu vực | 2 |
| Sinh vật | 3 |
| Chế độ chơi định hướng | 2 |

Các sinh vật đề xuất gồm bọ rùa, bướm và cua.

Đây là mục tiêu nội dung của bản trải nghiệm mở rộng, không phải yêu cầu cứng của MVP Core. Để nghiệm thu phần cốt lõi, tối thiểu cần một mô hình sinh vật 3D có thể tháo và lắp hoàn chỉnh.

### 5.4. Functional Requirements

| ID | Chức năng | Priority |
|---|---|---|
| F01 | Hiển thị bản đồ và lựa chọn khu vực | **Must Have** |
| F02 | Hiển thị và xoay mô hình sinh vật 3D | **Must Have** |
| F03 | Tách các bộ phận của sinh vật | **Must Have** |
| F04 | Kéo thả và lắp ráp bộ phận | **Must Have** |
| F05 | Quét QR để mở trang WebAR | Should Have |
| F06 | Nhận diện ảnh mốc và hiển thị sinh vật AR | Should Have |
| F07 | Thực hiện ít nhất một nhiệm vụ AR | Should Have |
| F08 | Hiển thị kết quả và khởi động lại lượt chơi | Should Have |
| F09 | Hệ thống điểm thưởng và huy hiệu | Should Have |
| F10 | Đồng bộ tiến độ AR về màn hình laptop | Should Have |
| F11 | Mở khóa khu vực và bộ sưu tập nâng cao | Should Have |

**Nguyên tắc ưu tiên:** Phải hoàn thành F01–F04 trước khi dành nguồn lực đáng kể cho các chức năng F05–F11.

Các chức năng Should Have có thể được triển khai theo từng đợt. Việc chưa hoàn thành chúng không đồng nghĩa MVP Core thất bại.

### 5.5. Ngoài phạm vi hiện tại

- Xe thám hiểm IoT.
- Thế giới mở 3D.
- AR định vị bằng GPS.
- Multiplayer.
- Hệ thống tài khoản người dùng.
- AI tự sinh mô hình hoặc nhiệm vụ.

---

## 6. Tiêu chí nghiệm thu (Acceptance Criteria)

### 6.1. Nghiệm thu MVP Core

| ID | Tiêu chí bắt buộc |
|---|---|
| AC01 | Người chơi truy cập bản đồ và chọn được khu vực |
| AC02 | Mô hình sinh vật 3D hiển thị và có thể xoay |
| AC03 | Người chơi thực hiện thao tác tháo rời bộ phận |
| AC04 | Người chơi kéo thả và lắp ráp bộ phận về vị trí đúng |

MVP Core được nghiệm thu khi cả bốn tiêu chí này đều đạt trong quá trình kiểm thử.

### 6.2. Tiêu chí mở rộng

Các tiêu chí sau được kiểm tra khi triển khai tính năng Should Have tương ứng:

| ID | Tiêu chí |
|---|---|
| AC05 | Quét QR và mở WebAR trên thiết bị thử nghiệm |
| AC06 | Nhận diện hình ảnh mốc và hiển thị sinh vật 3D bám theo |
| AC07 | Hoàn thành một nhiệm vụ AR |
| AC08 | Hiển thị kết quả và khởi động lượt mới |
| AC09 | Hiển thị điểm thưởng hoặc huy hiệu |
| AC10 | Đồng bộ tiến độ từ điện thoại về laptop |
| AC11 | Ghi nhận bộ sưu tập và trạng thái mở khóa |

### 6.3. Trạng thái kiểm chứng hiện tại

Theo checklist đã cung cấp:

- Đã đánh dấu: Truy cập bản đồ, hoàn thành một lượt tháo/lắp, mở WebAR qua QR.
- Chưa đánh dấu: Image Tracking, nhiệm vụ AR, kết quả và khởi động lượt mới.

Checklist ban đầu có **3/6 tiêu chí được đánh dấu hoàn thành**. Đây là tiến độ tự báo cáo, chưa được xác nhận bằng kiểm thử độc lập.

Không nên dùng tỷ lệ 3/6 này làm tỷ lệ nghiệm thu của MVP Core mới, vì bộ tiêu chí đã được phân loại lại.

---

## 7. Giải pháp kỹ thuật (Technical Approach)

| Thành phần | Công nghệ |
|---|---|
| Frontend | React + TypeScript + Vite |
| 3D Engine | Three.js / React Three Fiber |
| WebAR | MindAR + Three.js |
| Modeling | Blender |
| Model Format | GLB |
| Game Configuration | JSON |
| Hosting | Static Hosting qua HTTPS |
| Realtime | WebSocket nếu triển khai F10 |

### Kiến trúc module

**World Map Module**

Quản lý các khu vực và điều hướng.

**Creature Lab Module**

Hiển thị sinh vật, xử lý tháo/lắp và kiểm tra tương tác.

**AR Explorer Module**

Xử lý camera, nhận diện ảnh mốc và tương tác AR.

**Game Progress Module**

Quản lý kết quả, phần thưởng và tiến độ.

**Shared Content Module**

Quản lý danh sách sinh vật, mô hình, mức độ khó và dữ liệu kiến thức.

Các module AR Explorer và Game Progress nâng cao được phát triển sau phần cốt lõi, tránh tạo phụ thuộc bắt buộc giữa Creature Lab và WebAR.

---

## 8. Phân tích khả thi (Feasibility Analysis)

### Khả thi kỹ thuật

Các chức năng World Map và tương tác 3D có tính khả thi cao khi sử dụng công nghệ web hiện có.

Khó khăn chính nằm ở:

- Thiết kế mô hình 3D gồm các bộ phận độc lập.
- Xây dựng thao tác tháo/lắp dễ sử dụng.
- Duy trì hiệu năng trên thiết bị.
- Đảm bảo WebAR tương thích với điện thoại người chơi khi triển khai mở rộng.

### Khả thi vận hành

Gian hàng cần laptop, màn hình trình chiếu và thiết bị điều khiển.

Nếu triển khai AR, cần thêm hình ảnh mốc, kết nối mạng và thiết bị điện thoại dự phòng.

### Khả thi kinh tế

Chi phí được tối ưu bằng cách sử dụng thư viện web mã nguồn mở và tận dụng thiết bị có sẵn.

MVP Core không phụ thuộc vào phần cứng IoT hoặc dịch vụ backend trả phí.

---

## 9. Lộ trình thực hiện (Implementation Roadmap)

| Phase | Công việc | Kết quả |
|---|---|---|
| 1 — Core Foundation | World Map và 3D viewer | F01–F02 |
| 2 — Creature Gameplay | Tháo/lắp mô hình, kiểm tra vị trí | F03–F04 |
| 3 — Core Validation | Kiểm thử gameplay và hiệu năng | Nghiệm thu MVP Core |
| 4 — WebAR Extension | QR, Image Tracking và tương tác AR | F05–F07 |
| 5 — Experience Enhancement | Kết quả, phần thưởng, đồng bộ và bộ sưu tập | F08–F11 |
| 6 — Booth Deployment | Kiểm thử cùng học sinh, tối ưu và chuẩn bị gian hàng | Bản triển khai sự kiện |

**Ưu tiên:** Phase 1–3 bắt buộc. Phase 4–5 triển khai theo thời gian và nguồn lực. Phase 6 áp dụng cho phạm vi tính năng thực tế được chọn đưa vào gian hàng.

Thời lượng tham khảo là 2–3 tuần cho Core và thêm 4–5 tuần cho các tính năng mở rộng, với nhóm có kinh nghiệm web cơ bản. Đây là ước lượng cần điều chỉnh theo nhân lực và tài nguyên 3D sẵn có.

---

## 10. Rủi ro (Risk Management)

| Rủi ro | Mức độ | Phương án |
|---|---|---|
| Khó tạo mô hình có thể tách/lắp | Cao | Kiểm thử một sinh vật mẫu trước |
| Gameplay khó với học sinh nhỏ | Cao | Snap-to-Position và hướng dẫn trực quan |
| WebAR không ổn định | Cao | Giữ WebAR ở mức Should Have |
| Mô hình nặng, giật lag | Trung bình | Low-poly và tối ưu asset |
| Phạm vi phát triển quá rộng | Cao | Ưu tiên F01–F04 |
| Thiếu thiết bị tại gian hàng | Trung bình | Tận dụng, mượn và chuẩn bị dự phòng |

---

## 11. Định hướng mở rộng (Future Development)

Sau khi sản phẩm đã có gameplay 3D ổn định, BioQuest có thể phát triển theo các hướng:

- Bổ sung khu vực và sinh vật.
- Tạo nhiều dạng nhiệm vụ tương tác.
- Hoàn thiện AR Explorer với các trạm khám phá.
- Thêm hệ thống huy hiệu và bộ sưu tập.
- Đồng bộ tiến độ giữa điện thoại và máy tính.
- Kết nối robot hoặc xe thám hiểm IoT.

---

## 12. Kết luận (Conclusion)

BioQuest là dự án gian hàng trải nghiệm khoa học được xây dựng trên ý tưởng kết hợp bản đồ khám phá, mô hình sinh vật 3D và thực tế tăng cường.

**MVP Core tập trung vào việc chứng minh trải nghiệm khám phá và tháo/lắp sinh vật 3D**, với bốn chức năng bắt buộc F01–F04.

Những tính năng từ F05 trở đi, bao gồm toàn bộ WebAR, được phân loại là Should Have để giữ khả năng mở rộng mà không tạo rủi ro cho việc hoàn thành phần cốt lõi.

Chiến lược này cho phép nhóm sớm tạo ra một sản phẩm chơi được, sau đó cải thiện trải nghiệm theo nguồn lực thực tế, hướng tới một gian hàng khoa học tương tác hấp dẫn và có thể tái sử dụng cho nhiều sự kiện giáo dục.
