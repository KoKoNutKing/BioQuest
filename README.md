# BioQuest

BioQuest là trò chơi giáo dục cho gian hàng khoa học, giúp học sinh tiểu học và THCS khám phá sinh vật qua mô hình 3D. Mục tiêu của MVP Core là hoàn thành một lượt tháo và lắp ráp sinh vật trong Creature Lab.

Skeleton hiện có màn hình chọn khu vực, một bản xem trước bọ rùa 3D trong Tiny Forest và thao tác xoay, thu phóng. Blue Ocean đang chờ nội dung. Gameplay tháo và lắp ráp, mô hình GLB và AR Explorer nằm trong lộ trình triển khai.

## Chạy trên máy

Cần Node.js `^20.19.0 || >=22.12.0` và npm.

```sh
npm install
npm run dev
```

Mở URL Vite in ra trong terminal. Dùng `npm run build` để kiểm tra TypeScript và xuất bản build vào `dist/`. Dùng `npm run preview` để xem bản build trên máy.

## Cấu trúc

```text
docs/                       Proposal, phạm vi MVP và kiến trúc
public/models/              Vị trí dành cho mô hình GLB
src/content/                Dữ liệu khu vực và sinh vật
src/features/world-map/     Màn hình chọn khu vực
src/features/creature-lab/  Màn hình quan sát sinh vật 3D
```

Xem [mục lục tài liệu](docs/README.md) để bắt đầu phát triển MVP.
