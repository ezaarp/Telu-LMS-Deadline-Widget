# TelU LMS Tasks Checker

Desktop app Windows untuk menampilkan deadline tugas dari LMS Telkom University dalam tampilan board yang rapi dan mudah dipantau. Aplikasi ini mengambil data langsung dari calendar export `ICS`, lalu menyusunnya ke kolom `Due Today`, `To Do`, dan `Done` agar tugas lebih mudah dilihat, dikelola, dan dibuka kembali ke halaman assignment di LMS.

## Cara Menggunakan

Unduh aplikasi dari halaman Releases GitHub:

- Release `v1.0.1`: [https://github.com/ezaarp/Telu-LMS-Deadline-Widget/releases/tag/v1.0.1](https://github.com/ezaarp/Telu-LMS-Deadline-Widget/releases/tag/v1.0.1)
- Installer Windows: [TelU-LMS-Tasks-Checker-0.1.1-x64.exe](https://github.com/ezaarp/Telu-LMS-Deadline-Widget/releases/download/v1.0.1/TelU-LMS-Tasks-Checker-0.1.1-x64.exe)
- Portable build: [TelU-LMS-Tasks-Checker-0.1.1-x64-portable.exe](https://github.com/ezaarp/Telu-LMS-Deadline-Widget/releases/download/v1.0.1/TelU-LMS-Tasks-Checker-0.1.1-x64-portable.exe)

Cara instal dan buka aplikasi:

1. Jika memilih installer, unduh file installer lalu jalankan `.exe`.
2. Ikuti langkah instalasi sampai selesai.
3. Buka aplikasi `TelU LMS Tasks Checker` dari desktop atau Start Menu.
4. Jika memilih portable build, cukup unduh lalu double-click file `.exe` tanpa instalasi.

Setelah aplikasi terbuka:

1. Paste URL export kalender LMS Anda
2. Klik `Simpan & autentikasi`
3. Login / selesaikan Cloudflare
4. Widget akan sinkron otomatis dan siap dipakai

## Fitur

- Board task `Due Today`, `To Do`, dan `Done`
- Drag-and-drop task ke kolom `Done`
- Countdown deadline dan warna prioritas
- Deskripsi task yang bisa di-expand
- Tombol langsung ke assignment LMS jika link tersedia
- Settings panel untuk update URL `ICS` kapan saja
- Auto update dari GitHub Releases pada build terpaket

## Menjalankan Untuk Development

1. Install dependency:

   ```powershell
   .\install-deps.cmd
   ```

2. Jalankan app:

   ```powershell
   .\start-widget.cmd
   ```

## Build Distribusi Windows

Build folder output akan dibuat di [dist](C:/Users/andra/Downloads/codex_project/dist).

1. Build installer + portable:

   ```powershell
   npm run dist
   ```

2. Build unpacked folder untuk testing lokal:

   ```powershell
   npm run pack
   ```

## Catatan

- URL kalender, pengaturan aplikasi, dan status task `Done` disimpan lokal di perangkat Anda.
- URL export `ICS` berisi `authtoken`, jadi perlakukan sebagai data sensitif.
- Auto update hanya aktif pada build terpaket, bukan saat development lewat terminal.
