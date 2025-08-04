# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Food Order App

Aplikasi Food Order berbasis React untuk kebutuhan restoran, dengan fitur admin dan customer.

---

## 🚀 Track Proses Pengerjaan

### Minggu 1
- Inisialisasi project React + Vite
- Setup struktur folder dan file dasar
- Setup eslint, prettier, dan konfigurasi Vite
- Membuat halaman utama dan layout dasar

### Minggu 2
- Membuat komponen Header, Footer, dan Logo
- Membuat halaman login dan validasi sederhana
- Membuat context untuk manajemen data makanan (FoodsContext)
- Membuat tampilan tabel data makanan (admin)

### Minggu 3
- Implementasi fitur tambah data makanan (admin)
- Integrasi upload gambar makanan
- Implementasi notifikasi sukses/gagal
- Membuat modal dialog untuk form tambah data
- Validasi form tambah data makanan

### Minggu 4
- Refactor: Memindahkan logika API ke context
- Membuat tampilan tabel lebih modern (zebra striping, hover, dsb)
- Menambah fitur reset form setelah submit
- Menambah validasi controlled component pada form
- Menambah UX: disable tombol saat loading

### Minggu 5
- Penambahan fitur edit data makanan (rencana)
- Penambahan fitur hapus data makanan (rencana)
- Penambahan halaman customer (rencana)
- Penambahan fitur checkout (rencana)

---

## 📦 Struktur Folder

- `src/components/` : Komponen umum
- `src/components/componentsAdmin/` : Komponen khusus admin
- `src/page/` : Halaman utama (Admin, Customer, Login)
- `src/store/` : Context API
- `src/assets/` : Gambar

---

## 🛠️ Teknologi
- React + Vite
- Context API
- Flowbite React
- Axios
- Tailwind CSS

---

## 💡 Catatan
- Project ini masih dalam tahap pengembangan.
- Silakan fork, pull request, atau beri saran untuk pengembangan lebih lanjut!

---

## 👨‍💻 Kontributor
- Bintang Fauzan Dyan

---

## Lisensi
MIT License
