# Voltix Printing Studio — Vercel Ready

Website statis HTML, CSS, dan JavaScript. Tidak memerlukan proses build.

## Cara deploy
1. Ekstrak ZIP ini.
2. Buat repository GitHub baru, misalnya `voltix-printing`.
3. Upload seluruh file dan folder proyek (bukan ZIP) ke root repository.
4. Di https://vercel.com/new, impor repository tersebut.
5. Pilih Framework Preset **Other**, Root Directory `./`, dan biarkan Build Command kosong.
6. Klik **Deploy**.

## Mengubah nomor WhatsApp
Cari `6283893793285` di `index.html` dan `script.js`, lalu ganti dengan nomor resmi jika berbeda.

## Mengganti gambar katalog
Gambar produk saat ini berupa ilustrasi HTML/CSS, bukan foto katalog asli. Simpan gambar asli ke `assets/` dan ubah template di `script.js` agar memakai tag `<img>` yang menunjuk ke file terkait.

## Menambahkan QRIS
Simpan QR resmi sebagai `assets/qris.png`, lalu ganti isi `.qris-box` di `index.html` dengan gambar, misalnya `<img src="assets/qris.png" alt="QRIS Voltix Printing" style="max-width:240px;width:100%">`.

## Catatan
Ini rekonstruksi awal, bukan ekspor source code dari situs ChatGPT sebelumnya. Verifikasi nomor WhatsApp, alamat, harga, foto, dan QRIS sebelum dipublikasikan.
