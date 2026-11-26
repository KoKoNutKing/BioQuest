# Kiến trúc

Ứng dụng dùng React, TypeScript và Vite. Creature Lab dựng cảnh 3D bằng React Three Fiber trên Three.js. Dữ liệu nội dung nằm trong JSON và bản build có thể triển khai trên hosting tĩnh.

| Thành phần | Vị trí | Trách nhiệm |
| --- | --- | --- |
| Điều hướng | `src/App.tsx` | Giữ khu vực được chọn trong state và chỉ tải mã 3D khi người chơi vào Creature Lab. |
| World Map | `src/features/world-map/` | Hiển thị khu vực và cho phép mở khu vực đã có sinh vật. |
| Creature Lab | `src/features/creature-lab/` | Hiển thị mô hình và điều khiển camera. Gameplay tháo/lắp sẽ được bổ sung tại đây. |
| Shared Content | `src/content/` | Khai báo ID, tên, mô tả khu vực và sinh vật. `preview` chọn mô hình minh họa trong Creature Lab. |
| Mô hình GLB | `public/models/` | Chứa tài sản 3D được xuất từ Blender khi có mô hình chính thức. |

## Chuẩn bị mô hình tháo/lắp

File GLB cần có node riêng và tên ổn định cho từng bộ phận tương tác. Giữ transform ở trạng thái lắp hoàn chỉnh để gameplay dùng làm vị trí đích. Kiểm tra trục, tỉ lệ và điểm xoay sau khi xuất từ Blender. Khi triển khai ứng dụng ở đường dẫn con, xây URL tài sản dựa trên `import.meta.env.BASE_URL`.

Khi triển khai AR Explorer, bổ sung module WebAR riêng với MindAR. QR mở trang WebAR, còn hình ảnh mốc dùng để định vị mô hình qua camera. Tính năng Game Progress có thể được bổ sung khi có luồng kết quả và nhu cầu lưu tiến độ.
