# MVP và nghiệm thu

MVP Core dùng một lượt chơi trong Creature Lab để kiểm chứng hành trình từ bản đồ đến khi lắp ráp xong một sinh vật. Thời lượng mục tiêu là 3–5 phút cho mỗi nhiệm vụ.

| Yêu cầu | Bước kiểm thử | Trạng thái trong skeleton |
| --- | --- | --- |
| F01 / AC01 | Mở ứng dụng, chọn Tiny Forest trên bản đồ và vào Creature Lab. | Có màn hình chọn khu vực dạng thẻ. |
| F02 / AC02 | Quan sát mô hình, kéo để xoay và thử thu phóng. | Có mẫu bọ rùa dựng bằng hình khối Three.js. |
| F03 / AC03 | Chọn bộ phận theo hướng dẫn và quan sát bộ phận tách khỏi thân. | Chờ triển khai. |
| F04 / AC04 | Kéo bộ phận về đúng vị trí để tự khớp. Thử thả ngoài vùng khớp và kiểm tra bộ phận chưa được tính là đã lắp. Lặp lại đến khi lắp hoàn chỉnh. | Chờ triển khai. |

## Thứ tự triển khai

1. Chuẩn bị một mô hình GLB có các bộ phận tách riêng. Nối mô hình vào luồng World Map → Creature Lab và kiểm tra thao tác quan sát.
2. Thêm trạng thái tháo/lắp và logic kiểm tra khoảng cách để bộ phận tự khớp khi đặt đủ gần vị trí gốc.
3. Chạy AC01–AC04 trên thiết bị dự kiến dùng tại gian hàng và ghi nhận kết quả cho từng tiêu chí. MVP Core đạt khi cả bốn tiêu chí đều qua kiểm thử.
4. Khi Core ổn định, chọn các hạng mục F05–F11 theo nguồn lực, bao gồm WebAR, kết quả lượt chơi, phần thưởng, đồng bộ và bộ sưu tập.

Hai khu vực và ba sinh vật là mục tiêu nội dung của bản mở rộng. MVP Core cần tối thiểu một sinh vật có thể tháo và lắp hoàn chỉnh. Xem chi tiết các tiêu chí mở rộng trong [proposal](proposal.md#6-tiêu-chí-nghiệm-thu-acceptance-criteria).
