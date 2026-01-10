// ============= TAX FORM DEFINITIONS =============
// Berdasarkan UU No. 1 Tahun 2022 tentang HKPD dan PP No. 35 Tahun 2023

const taxFormDefinitions = {
    // 1. PAJAK REKLAME
    reklame: `
        <div class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h5 class="text-sm font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <i class="fas fa-ad"></i> Data Objek Pajak Reklame
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Reklame <span class="text-red-500">*</span></label>
                    <select id="tax_jenis_reklame" required class="w-full px-4 py-2 border rounded-lg">
                        <option value="">Pilih Jenis Reklame</option>
                        <option value="billboard">Billboard/Papan</option>
                        <option value="megatron">Megatron/Videotron/LED</option>
                        <option value="baliho">Baliho</option>
                        <option value="kain">Kain/Spanduk/Umbul-umbul</option>
                        <option value="melekat">Melekat/Stiker/Poster</option>
                        <option value="selebaran">Selebaran/Brosur/Leaflet</option>
                        <option value="berjalan">Berjalan (Kendaraan)</option>
                        <option value="udara">Udara (Balon)</option>
                        <option value="suara">Suara</option>
                        <option value="film">Film/Slide</option>
                        <option value="neon_box">Neon Box/Shop Sign</option>
                        <option value="lainnya">Lainnya</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nama Brand/Produk <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_nama_brand" required placeholder="Nama brand yang diiklankan"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Isi/Teks Reklame</label>
                    <input type="text" id="tax_isi_reklame" placeholder="Isi/pesan reklame"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h5 class="text-sm font-semibold text-green-800 mb-4 flex items-center gap-2">
                <i class="fas fa-ruler-combined"></i> Ukuran Reklame
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Panjang (m) <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_panjang_reklame" required step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="hitungLuasReklame()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Lebar (m) <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_lebar_reklame" required step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="hitungLuasReklame()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Luas (m²)</label>
                    <input type="number" id="tax_luas_reklame" step="0.01" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-green-100">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Ketinggian (m)</label>
                    <input type="number" id="tax_ketinggian_reklame" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h5 class="text-sm font-semibold text-amber-800 mb-4 flex items-center gap-2">
                <i class="fas fa-info-circle"></i> Detail Reklame
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah Unit <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_jumlah_unit" required min="1" value="1"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah Sisi <span class="text-red-500">*</span></label>
                    <select id="tax_jumlah_sisi" required class="w-full px-4 py-2 border rounded-lg">
                        <option value="1">1 Sisi</option>
                        <option value="2">2 Sisi</option>
                        <option value="3">3 Sisi</option>
                        <option value="4">4 Sisi</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Masa Tayang (Hari) <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_masa_tayang" required min="1" placeholder="30"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Status Penerangan</label>
                    <select id="tax_penerangan" class="w-full px-4 py-2 border rounded-lg">
                        <option value="tidak">Tidak Berpenerangan</option>
                        <option value="ya">Berpenerangan</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Lokasi Penempatan <span class="text-red-500">*</span></label>
                    <select id="tax_lokasi_reklame" required class="w-full px-4 py-2 border rounded-lg">
                        <option value="">Pilih Lokasi</option>
                        <option value="protokol">Jalan Protokol</option>
                        <option value="ekonomi">Jalan Ekonomi/Strategis</option>
                        <option value="lingkungan">Jalan Lingkungan</option>
                        <option value="dalam_gedung">Dalam Gedung/Ruangan</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Mulai <span class="text-red-500">*</span></label>
                    <input type="date" id="tax_tgl_mulai" required
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Selesai <span class="text-red-500">*</span></label>
                    <input type="date" id="tax_tgl_selesai" required
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. Izin Reklame</label>
                    <input type="text" id="tax_no_izin_reklame" placeholder="Nomor izin (opsional)"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
    `,

    // 2. PAJAK AIR TANAH
    air_tanah: `
        <div class="mb-6 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
            <h5 class="text-sm font-semibold text-cyan-800 mb-4 flex items-center gap-2">
                <i class="fas fa-tint"></i> Data Objek Pajak Air Tanah
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. Izin/SIPA</label>
                    <input type="text" id="tax_no_sipa" placeholder="Nomor SIPA (opsional)"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Penggunaan <span class="text-red-500">*</span></label>
                    <select id="tax_jenis_penggunaan_air" required class="w-full px-4 py-2 border rounded-lg">
                        <option value="">Pilih Jenis Penggunaan</option>
                        <option value="industri">Industri</option>
                        <option value="pertanian">Pertanian/Irigasi</option>
                        <option value="peternakan">Peternakan</option>
                        <option value="perhotelan">Perhotelan/Pariwisata</option>
                        <option value="pdam">PDAM/Air Minum</option>
                        <option value="komersial">Komersial Lainnya</option>
                        <option value="non_komersial">Non Komersial</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Lokasi Sumur <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_lokasi_sumur" required placeholder="Alamat lokasi sumur"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h5 class="text-sm font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <i class="fas fa-water"></i> Data Sumur
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah Sumur Bor <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_jumlah_sumur_bor" required min="0" value="1"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah Sumur Resapan</label>
                    <input type="number" id="tax_jumlah_sumur_resapan" min="0" value="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Kedalaman Sumur (m) <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_kedalaman_sumur" required step="0.1" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Diameter Sumur (inch)</label>
                    <input type="number" id="tax_diameter_sumur" step="0.1" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h5 class="text-sm font-semibold text-green-800 mb-4 flex items-center gap-2">
                <i class="fas fa-chart-bar"></i> Volume Pemakaian Air
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Kapasitas Pompa (liter/detik)</label>
                    <input type="number" id="tax_kapasitas_pompa" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Pemakaian per Hari (m³) <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_pemakaian_hari" required step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="hitungPemakaianBulan()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Pemakaian per Bulan (m³)</label>
                    <input type="number" id="tax_pemakaian_bulan" step="0.01" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-green-100">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Meter Air Terpasang</label>
                    <select id="tax_meter_air" class="w-full px-4 py-2 border rounded-lg">
                        <option value="tidak">Tidak Ada</option>
                        <option value="ya">Ada</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nomor Meter Air</label>
                    <input type="text" id="tax_no_meter_air" placeholder="Nomor meter (jika ada)"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Masa Berlaku SIPA</label>
                    <input type="date" id="tax_masa_berlaku_sipa"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
    `,

    // 3. PAJAK SARANG BURUNG WALET
    sarang_walet: `
        <div class="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h5 class="text-sm font-semibold text-amber-800 mb-4 flex items-center gap-2">
                <i class="fas fa-dove"></i> Data Objek Pajak Sarang Burung Walet
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. Izin Usaha</label>
                    <input type="text" id="tax_no_izin_walet" placeholder="Nomor izin usaha (opsional)"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Lokasi Gedung Walet <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_lokasi_gedung" required placeholder="Alamat gedung walet"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Status Bangunan <span class="text-red-500">*</span></label>
                    <select id="tax_status_bangunan_walet" required class="w-full px-4 py-2 border rounded-lg">
                        <option value="">Pilih Status</option>
                        <option value="milik_sendiri">Milik Sendiri</option>
                        <option value="sewa">Sewa/Kontrak</option>
                        <option value="kerjasama">Kerjasama/Bagi Hasil</option>
                    </select>
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h5 class="text-sm font-semibold text-green-800 mb-4 flex items-center gap-2">
                <i class="fas fa-building"></i> Ukuran Gedung Walet
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Panjang Gedung (m) <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_panjang_gedung" required step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="hitungLuasGedungWalet()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Lebar Gedung (m) <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_lebar_gedung" required step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="hitungLuasGedungWalet()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Luas per Lantai (m²)</label>
                    <input type="number" id="tax_luas_gedung" step="0.01" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-green-100">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah Lantai <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_jumlah_lantai_walet" required min="1" value="1"
                        class="w-full px-4 py-2 border rounded-lg" oninput="hitungTotalLuasWalet()">
                </div>
                <div class="lg:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Total Luas Gedung (m²)</label>
                    <input type="number" id="tax_total_luas_gedung" step="0.01" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-green-200 font-semibold">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h5 class="text-sm font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <i class="fas fa-chart-line"></i> Data Produksi Sarang
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Frekuensi Panen (per tahun) <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_frekuensi_panen" required min="1" value="4"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Produksi per Panen (kg) <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_produksi_per_panen" required step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="hitungProduksiTahunan()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Produksi per Tahun (kg)</label>
                    <input type="number" id="tax_produksi_tahunan" step="0.01" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-blue-100">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Harga Jual per Kg (Rp)</label>
                    <input type="text" id="tax_harga_jual_walet" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="formatRupiah(this)">
                </div>
            </div>
        </div>
    `,

    // 4. PAJAK MINERAL BUKAN LOGAM DAN BATUAN
    mineral: `
        <div class="mb-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <h5 class="text-sm font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                <i class="fas fa-gem"></i> Data Objek Pajak Mineral
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. IUP/Izin Tambang</label>
                    <input type="text" id="tax_no_iup" placeholder="Nomor IUP (opsional)"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Mineral/Batuan <span class="text-red-500">*</span></label>
                    <select id="tax_jenis_mineral" required class="w-full px-4 py-2 border rounded-lg">
                        <option value="">Pilih Jenis</option>
                        <option value="pasir">Pasir</option>
                        <option value="batu">Batu/Kerikil</option>
                        <option value="tanah_urug">Tanah Urug/Sirtu</option>
                        <option value="batu_kapur">Batu Kapur/Gamping</option>
                        <option value="marmer">Marmer</option>
                        <option value="granit">Granit</option>
                        <option value="tanah_liat">Tanah Liat</option>
                        <option value="pasir_kuarsa">Pasir Kuarsa</option>
                        <option value="kaolin">Kaolin</option>
                        <option value="feldspar">Feldspar</option>
                        <option value="batu_apung">Batu Apung</option>
                        <option value="tras">Tras</option>
                        <option value="obsidian">Obsidian</option>
                        <option value="perlit">Perlit</option>
                        <option value="lainnya">Lainnya</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Lokasi Tambang <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_lokasi_tambang" required placeholder="Alamat lokasi tambang"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h5 class="text-sm font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                <i class="fas fa-ruler-horizontal"></i> Data Area Tambang
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Panjang Area (m)</label>
                    <input type="number" id="tax_panjang_tambang" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="hitungLuasTambang()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Lebar Area (m)</label>
                    <input type="number" id="tax_lebar_tambang" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="hitungLuasTambang()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Luas Area (m²)</label>
                    <input type="number" id="tax_luas_tambang" step="0.01" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-yellow-100">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Luas Area (Ha)</label>
                    <input type="number" id="tax_luas_tambang_ha" step="0.0001" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-yellow-100">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h5 class="text-sm font-semibold text-orange-800 mb-4 flex items-center gap-2">
                <i class="fas fa-truck-loading"></i> Data Produksi/Pengambilan
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Volume per Bulan (m³) <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_volume_bulan" required step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Satuan</label>
                    <select id="tax_satuan_mineral" class="w-full px-4 py-2 border rounded-lg">
                        <option value="m3">Meter Kubik (m³)</option>
                        <option value="ton">Ton</option>
                        <option value="kg">Kilogram</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Harga Pasar per m³/Ton (Rp)</label>
                    <input type="text" id="tax_harga_mineral" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="formatRupiah(this)">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Masa Berlaku IUP</label>
                    <input type="date" id="tax_masa_berlaku_iup"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
    `,

    // 6. BPHTB
    bphtb: `
        <!-- Cek Riwayat Perolehan Berdasarkan NIK -->
        <div class="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-300">
            <h5 class="text-sm font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                <i class="fas fa-search"></i> Cek Riwayat Perolehan Berdasarkan NIK
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-1">NIK Penerima Hak <span class="text-red-500">*</span></label>
                    <div class="flex gap-2">
                        <input type="text" id="tax_nik_penerima" required maxlength="16" placeholder="Masukkan 16 digit NIK"
                            class="flex-1 px-4 py-2 border rounded-lg font-mono" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                        <button type="button" onclick="cekRiwayatPerolehanNIK()" class="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center gap-2">
                            <i class="fas fa-search"></i> Cek Riwayat
                        </button>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">Masukkan NIK untuk mengecek apakah sudah pernah melakukan perolehan hak sebelumnya</p>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Status Perolehan</label>
                    <div id="status_perolehan_container" class="px-4 py-2 border rounded-lg bg-gray-100 text-gray-500 text-sm">
                        <i class="fas fa-info-circle mr-1"></i> Belum dicek
                    </div>
                </div>
            </div>
            
            <!-- Hasil Pengecekan -->
            <div id="hasil_cek_nik" class="hidden mt-4 p-3 rounded-lg">
                <!-- Hasil akan ditampilkan di sini -->
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h5 class="text-sm font-semibold text-purple-800 mb-4 flex items-center gap-2">
                <i class="fas fa-file-contract"></i> Data Perolehan Hak
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Perolehan Hak <span class="text-red-500">*</span></label>
                    <select id="tax_jenis_perolehan" required class="w-full px-4 py-2 border rounded-lg" onchange="updateNPOPTKP()">
                        <option value="">Pilih Jenis Perolehan</option>
                        <option value="jual_beli">Jual Beli</option>
                        <option value="tukar_menukar">Tukar Menukar</option>
                        <option value="hibah">Hibah</option>
                        <option value="hibah_wasiat">Hibah Wasiat</option>
                        <option value="waris">Waris</option>
                        <option value="pemasukan_modal">Pemasukan Modal Perusahaan</option>
                        <option value="pemisahan_hak">Pemisahan Hak</option>
                        <option value="penggabungan_usaha">Penggabungan Usaha</option>
                        <option value="peleburan_usaha">Peleburan Usaha</option>
                        <option value="hadiah">Hadiah</option>
                        <option value="lelang">Lelang</option>
                        <option value="pemberian_hak_baru">Pemberian Hak Baru Negara</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Perolehan Ke- <span class="text-red-500">*</span></label>
                    <select id="tax_perolehan_ke" required class="w-full px-4 py-2 border rounded-lg bg-gray-100" onchange="updateNPOPTKP()">
                        <option value="1">Perolehan Pertama</option>
                        <option value="2">Perolehan Kedua atau Lebih</option>
                    </select>
                    <p class="text-xs text-gray-500 mt-1"><i class="fas fa-info-circle text-blue-500"></i> Otomatis berdasarkan pengecekan NIK</p>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. Akta/Risalah Lelang</label>
                    <input type="text" id="tax_no_akta" placeholder="Nomor akta"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Akta <span class="text-red-500">*</span></label>
                    <input type="date" id="tax_tgl_akta" required
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nama Notaris/PPAT</label>
                    <input type="text" id="tax_nama_notaris" placeholder="Nama notaris/PPAT"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. Sertifikat/Letter C</label>
                    <input type="text" id="tax_no_sertifikat" placeholder="Nomor sertifikat"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Hak Tanah</label>
                    <select id="tax_jenis_hak" class="w-full px-4 py-2 border rounded-lg">
                        <option value="">Pilih Jenis Hak</option>
                        <option value="hm">Hak Milik (HM)</option>
                        <option value="hgb">Hak Guna Bangunan (HGB)</option>
                        <option value="hgu">Hak Guna Usaha (HGU)</option>
                        <option value="hp">Hak Pakai (HP)</option>
                        <option value="girik">Girik/Letter C</option>
                    </select>
                </div>
            </div>
        </div>
        
        <!-- Info Box NPOPTKP -->
        <div class="mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <h5 class="text-sm font-semibold text-indigo-800 mb-3 flex items-center gap-2">
                <i class="fas fa-info-circle"></i> Ketentuan NPOPTKP (Nilai Perolehan Objek Pajak Tidak Kena Pajak)
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div class="p-3 bg-white rounded-lg border">
                    <p class="font-semibold text-indigo-700 mb-1">Perolehan karena WARIS</p>
                    <p class="text-gray-600">NPOPTKP = <span class="font-bold text-indigo-800">Rp 300.000.000</span></p>
                    <p class="text-xs text-gray-500 mt-1">Berlaku untuk semua perolehan waris</p>
                </div>
                <div class="p-3 bg-white rounded-lg border">
                    <p class="font-semibold text-indigo-700 mb-1">Perolehan SELAIN Waris</p>
                    <p class="text-gray-600">NPOPTKP = <span class="font-bold text-indigo-800">Rp 80.000.000</span></p>
                    <p class="text-xs text-gray-500 mt-1">Hanya berlaku untuk perolehan PERTAMA</p>
                </div>
            </div>
            <p class="text-xs text-gray-500 mt-3"><i class="fas fa-exclamation-triangle text-amber-500 mr-1"></i> Perolehan kedua dan seterusnya (selain waris) tidak mendapat NPOPTKP</p>
        </div>
        
        <div class="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h5 class="text-sm font-semibold text-green-800 mb-4 flex items-center gap-2">
                <i class="fas fa-mountain"></i> Data Tanah
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Panjang Tanah (m)</label>
                    <input type="number" id="tax_panjang_tanah_bphtb" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="hitungLuasTanahBPHTB()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Lebar Tanah (m)</label>
                    <input type="number" id="tax_lebar_tanah_bphtb" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="hitungLuasTanahBPHTB()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Luas Tanah (m²) <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_luas_tanah_bphtb" required step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg bg-green-100">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">NJOP Tanah (Rp/m²) <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_njop_tanah_bphtb" required placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="formatRupiah(this); hitungBPHTB()">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h5 class="text-sm font-semibold text-amber-800 mb-4 flex items-center gap-2">
                <i class="fas fa-building"></i> Data Bangunan
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Panjang Bangunan (m)</label>
                    <input type="number" id="tax_panjang_bangunan_bphtb" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="hitungLuasBangunanBPHTB()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Lebar Bangunan (m)</label>
                    <input type="number" id="tax_lebar_bangunan_bphtb" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="hitungLuasBangunanBPHTB()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Luas Bangunan (m²)</label>
                    <input type="number" id="tax_luas_bangunan_bphtb" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg bg-amber-100">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">NJOP Bangunan (Rp/m²)</label>
                    <input type="text" id="tax_njop_bangunan_bphtb" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="formatRupiah(this); hitungBPHTB()">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h5 class="text-sm font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <i class="fas fa-calculator"></i> Perhitungan BPHTB
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nilai Transaksi/NPOP (Rp) <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_npop" required placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="formatRupiah(this); hitungBPHTB()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">NPOPTKP (Rp)</label>
                    <input type="text" id="tax_npoptkp" value="80.000.000" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-indigo-100 font-semibold text-indigo-800">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Keterangan NPOPTKP</label>
                    <input type="text" id="tax_npoptkp_keterangan" value="Perolehan Pertama (Selain Waris)" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-gray-100 text-sm">
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">NPOP Kena Pajak (Rp)</label>
                    <input type="text" id="tax_npop_kena_pajak" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-blue-100">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">BPHTB Terutang (5%)</label>
                    <input type="text" id="tax_bphtb_terutang" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-blue-200 font-bold text-lg">
                </div>
            </div>
        </div>
    `,

    // 7. PBJT MAKANAN DAN MINUMAN
    pbjt_makanan: `
        <div class="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
            <h5 class="text-sm font-semibold text-red-800 mb-4 flex items-center gap-2">
                <i class="fas fa-utensils"></i> Data Objek PBJT Makanan dan Minuman
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Usaha <span class="text-red-500">*</span></label>
                    <select id="tax_jenis_usaha_makanan" required class="w-full px-4 py-2 border rounded-lg">
                        <option value="">Pilih Jenis Usaha</option>
                        <option value="restoran">Restoran</option>
                        <option value="rumah_makan">Rumah Makan</option>
                        <option value="cafe">Cafe/Kedai Kopi</option>
                        <option value="bar">Bar/Pub</option>
                        <option value="katering">Jasa Katering/Boga</option>
                        <option value="kantin">Kantin</option>
                        <option value="warung">Warung Makan</option>
                        <option value="food_court">Food Court</option>
                        <option value="bakery">Bakery/Toko Roti</option>
                        <option value="lainnya">Lainnya</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nama Usaha <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_nama_usaha_makanan" required placeholder="Nama restoran/rumah makan"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. Izin Usaha/NIB</label>
                    <input type="text" id="tax_no_izin_makanan" placeholder="Nomor izin usaha"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h5 class="text-sm font-semibold text-orange-800 mb-4 flex items-center gap-2">
                <i class="fas fa-store"></i> Data Tempat Usaha
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Luas Tempat Usaha (m²)</label>
                    <input type="number" id="tax_luas_tempat_makanan" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Kapasitas Tempat Duduk</label>
                    <input type="number" id="tax_kapasitas_duduk" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah Karyawan</label>
                    <input type="number" id="tax_jumlah_karyawan_makanan" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Status Tempat</label>
                    <select id="tax_status_tempat_makanan" class="w-full px-4 py-2 border rounded-lg">
                        <option value="milik_sendiri">Milik Sendiri</option>
                        <option value="sewa">Sewa/Kontrak</option>
                    </select>
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h5 class="text-sm font-semibold text-green-800 mb-4 flex items-center gap-2">
                <i class="fas fa-chart-line"></i> Data Omzet
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Rata-rata Omzet per Hari (Rp)</label>
                    <input type="text" id="tax_omzet_hari" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="formatRupiah(this); hitungOmzetBulan()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Perkiraan Omzet per Bulan (Rp)</label>
                    <input type="text" id="tax_omzet_bulan" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-green-100">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jam Operasional</label>
                    <input type="text" id="tax_jam_operasional" placeholder="Contoh: 08:00 - 22:00"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
    `,

    // 8. PBJT TENAGA LISTRIK
    pbjt_listrik: `
        <div class="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h5 class="text-sm font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                <i class="fas fa-bolt"></i> Data Objek PBJT Tenaga Listrik
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Sumber Tenaga Listrik <span class="text-red-500">*</span></label>
                    <select id="tax_sumber_listrik" required class="w-full px-4 py-2 border rounded-lg">
                        <option value="">Pilih Sumber</option>
                        <option value="pln">PLN</option>
                        <option value="non_pln">Non-PLN (Pembangkit Sendiri)</option>
                        <option value="campuran">Campuran (PLN + Genset)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">ID Pelanggan PLN</label>
                    <input type="text" id="tax_id_pelanggan_pln" placeholder="Nomor ID Pelanggan"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Golongan Tarif <span class="text-red-500">*</span></label>
                    <select id="tax_golongan_tarif" required class="w-full px-4 py-2 border rounded-lg">
                        <option value="">Pilih Golongan</option>
                        <option value="sosial">Sosial (S)</option>
                        <option value="rumah_tangga">Rumah Tangga (R)</option>
                        <option value="bisnis">Bisnis (B)</option>
                        <option value="industri">Industri (I)</option>
                        <option value="pemerintah">Pemerintah (P)</option>
                        <option value="publik">Layanan Publik</option>
                    </select>
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h5 class="text-sm font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <i class="fas fa-plug"></i> Data Daya dan Pemakaian
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Daya Tersambung (VA) <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_daya_va" required min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Daya (kVA)</label>
                    <input type="number" id="tax_daya_kva" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Pemakaian per Bulan (kWh)</label>
                    <input type="number" id="tax_pemakaian_kwh" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Biaya Listrik per Bulan (Rp)</label>
                    <input type="text" id="tax_biaya_listrik" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="formatRupiah(this)">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h5 class="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <i class="fas fa-cog"></i> Data Genset (Jika Non-PLN/Campuran)
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Kapasitas Genset (kVA)</label>
                    <input type="number" id="tax_kapasitas_genset" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah Unit Genset</label>
                    <input type="number" id="tax_jumlah_genset" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jam Operasi per Hari</label>
                    <input type="number" id="tax_jam_operasi_genset" step="0.1" min="0" max="24" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Konsumsi BBM per Bulan (Liter)</label>
                    <input type="number" id="tax_konsumsi_bbm" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
    `,

    // 9. PBJT PERHOTELAN
    pbjt_hotel: `
        <div class="mb-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
            <h5 class="text-sm font-semibold text-teal-800 mb-4 flex items-center gap-2">
                <i class="fas fa-hotel"></i> Data Objek PBJT Perhotelan
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Akomodasi <span class="text-red-500">*</span></label>
                    <select id="tax_jenis_hotel" required class="w-full px-4 py-2 border rounded-lg">
                        <option value="">Pilih Jenis</option>
                        <option value="hotel">Hotel</option>
                        <option value="motel">Motel</option>
                        <option value="losmen">Losmen</option>
                        <option value="hostel">Hostel</option>
                        <option value="penginapan">Penginapan</option>
                        <option value="pesanggrahan">Pesanggrahan</option>
                        <option value="villa">Villa</option>
                        <option value="cottage">Cottage</option>
                        <option value="guest_house">Guest House</option>
                        <option value="homestay">Homestay</option>
                        <option value="bungalow">Bungalow</option>
                        <option value="resort">Resort</option>
                        <option value="apartemen">Apartemen (Harian)</option>
                        <option value="lainnya">Lainnya</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nama Hotel/Penginapan <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_nama_hotel" required placeholder="Nama hotel/penginapan"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Klasifikasi Bintang</label>
                    <select id="tax_klasifikasi_hotel" class="w-full px-4 py-2 border rounded-lg">
                        <option value="">Pilih Klasifikasi</option>
                        <option value="non_bintang">Non Bintang/Melati</option>
                        <option value="bintang_1">Bintang 1</option>
                        <option value="bintang_2">Bintang 2</option>
                        <option value="bintang_3">Bintang 3</option>
                        <option value="bintang_4">Bintang 4</option>
                        <option value="bintang_5">Bintang 5</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. TDUP (Tanda Daftar Usaha Pariwisata)</label>
                    <input type="text" id="tax_no_tdup" placeholder="Nomor TDUP"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. NIB</label>
                    <input type="text" id="tax_no_nib_hotel" placeholder="Nomor Induk Berusaha"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h5 class="text-sm font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <i class="fas fa-bed"></i> Data Kamar
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah Kamar <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_jumlah_kamar" required min="1" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah Tempat Tidur</label>
                    <input type="number" id="tax_jumlah_bed" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Tarif Terendah (Rp/malam)</label>
                    <input type="text" id="tax_tarif_terendah" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="formatRupiah(this)">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Tarif Tertinggi (Rp/malam)</label>
                    <input type="text" id="tax_tarif_tertinggi" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="formatRupiah(this)">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h5 class="text-sm font-semibold text-green-800 mb-4 flex items-center gap-2">
                <i class="fas fa-concierge-bell"></i> Fasilitas Tambahan
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="flex items-center gap-2">
                    <input type="checkbox" id="tax_fasilitas_restoran" class="rounded">
                    <label class="text-sm text-gray-700">Restoran/Cafe</label>
                </div>
                <div class="flex items-center gap-2">
                    <input type="checkbox" id="tax_fasilitas_kolam" class="rounded">
                    <label class="text-sm text-gray-700">Kolam Renang</label>
                </div>
                <div class="flex items-center gap-2">
                    <input type="checkbox" id="tax_fasilitas_spa" class="rounded">
                    <label class="text-sm text-gray-700">Spa/Massage</label>
                </div>
                <div class="flex items-center gap-2">
                    <input type="checkbox" id="tax_fasilitas_meeting" class="rounded">
                    <label class="text-sm text-gray-700">Meeting Room</label>
                </div>
                <div class="flex items-center gap-2">
                    <input type="checkbox" id="tax_fasilitas_gym" class="rounded">
                    <label class="text-sm text-gray-700">Gym/Fitness</label>
                </div>
                <div class="flex items-center gap-2">
                    <input type="checkbox" id="tax_fasilitas_laundry" class="rounded">
                    <label class="text-sm text-gray-700">Laundry</label>
                </div>
                <div class="flex items-center gap-2">
                    <input type="checkbox" id="tax_fasilitas_wifi" class="rounded">
                    <label class="text-sm text-gray-700">WiFi</label>
                </div>
                <div class="flex items-center gap-2">
                    <input type="checkbox" id="tax_fasilitas_parkir_hotel" class="rounded">
                    <label class="text-sm text-gray-700">Parkir</label>
                </div>
            </div>
        </div>
    `,

    // 10. PBJT PARKIR
    pbjt_parkir: `
        <div class="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h5 class="text-sm font-semibold text-orange-800 mb-4 flex items-center gap-2">
                <i class="fas fa-parking"></i> Data Objek PBJT Parkir
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Tempat Parkir <span class="text-red-500">*</span></label>
                    <select id="tax_jenis_parkir" required class="w-full px-4 py-2 border rounded-lg">
                        <option value="">Pilih Jenis</option>
                        <option value="gedung">Gedung Parkir</option>
                        <option value="pelataran">Pelataran/Lapangan Parkir</option>
                        <option value="basement">Basement</option>
                        <option value="mall">Area Parkir Mall/Pusat Perbelanjaan</option>
                        <option value="hotel">Area Parkir Hotel</option>
                        <option value="rumah_sakit">Area Parkir Rumah Sakit</option>
                        <option value="perkantoran">Area Parkir Perkantoran</option>
                        <option value="valet">Layanan Valet Parkir</option>
                        <option value="lainnya">Lainnya</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nama/Lokasi Parkir <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_nama_parkir" required placeholder="Nama tempat parkir"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. Izin Usaha</label>
                    <input type="text" id="tax_no_izin_parkir" placeholder="Nomor izin usaha"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h5 class="text-sm font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <i class="fas fa-ruler-combined"></i> Ukuran Area Parkir
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Panjang Area (m)</label>
                    <input type="number" id="tax_panjang_parkir" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="hitungLuasParkir()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Lebar Area (m)</label>
                    <input type="number" id="tax_lebar_parkir" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="hitungLuasParkir()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Luas Area (m²)</label>
                    <input type="number" id="tax_luas_parkir" step="0.01" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-blue-100">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah Lantai</label>
                    <input type="number" id="tax_lantai_parkir" min="1" value="1"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h5 class="text-sm font-semibold text-green-800 mb-4 flex items-center gap-2">
                <i class="fas fa-car"></i> Kapasitas dan Tarif
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Kapasitas Mobil <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_kapasitas_mobil" required min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Kapasitas Motor</label>
                    <input type="number" id="tax_kapasitas_motor" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Tarif Mobil (Rp/jam)</label>
                    <input type="text" id="tax_tarif_mobil" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="formatRupiah(this)">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Tarif Motor (Rp/jam)</label>
                    <input type="text" id="tax_tarif_motor" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="formatRupiah(this)">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jam Operasional</label>
                    <input type="text" id="tax_jam_operasional_parkir" placeholder="Contoh: 06:00 - 22:00"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Rata-rata Kendaraan per Hari</label>
                    <input type="number" id="tax_kendaraan_hari" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
    `,

    // 11. PBJT KESENIAN DAN HIBURAN
    pbjt_hiburan: `
        <div class="mb-6 p-4 bg-pink-50 rounded-lg border border-pink-200">
            <h5 class="text-sm font-semibold text-pink-800 mb-4 flex items-center gap-2">
                <i class="fas fa-theater-masks"></i> Data Objek PBJT Kesenian dan Hiburan
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Hiburan <span class="text-red-500">*</span></label>
                    <select id="tax_jenis_hiburan" required class="w-full px-4 py-2 border rounded-lg" onchange="updateTarifHiburan()">
                        <option value="">Pilih Jenis</option>
                        <optgroup label="Tarif 10%">
                            <option value="tontonan">Tontonan Film/Bioskop</option>
                            <option value="pagelaran">Pagelaran Kesenian/Musik</option>
                            <option value="kontes">Kontes Kecantikan/Binaraga</option>
                            <option value="pameran">Pameran</option>
                            <option value="sirkus">Sirkus/Akrobat/Sulap</option>
                            <option value="pacuan">Pacuan Kuda</option>
                            <option value="kendaraan">Kendaraan Bermotor/Permainan</option>
                        </optgroup>
                        <optgroup label="Tarif 40-75% (Tertentu)">
                            <option value="diskotek">Diskotek</option>
                            <option value="karaoke">Karaoke</option>
                            <option value="kelab_malam">Kelab Malam/Bar</option>
                            <option value="spa_dewasa">Spa (Dewasa)</option>
                            <option value="mandi_uap">Mandi Uap/Sauna</option>
                        </optgroup>
                        <optgroup label="Tarif Lainnya">
                            <option value="permainan">Permainan/Game Center</option>
                            <option value="bowling">Bowling</option>
                            <option value="bilyar">Biliar</option>
                            <option value="golf">Golf (Driving Range)</option>
                            <option value="refleksi">Panti Pijat/Refleksi</option>
                            <option value="lainnya">Lainnya</option>
                        </optgroup>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nama Tempat Hiburan <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_nama_hiburan" required placeholder="Nama tempat hiburan"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. Izin Usaha</label>
                    <input type="text" id="tax_no_izin_hiburan" placeholder="Nomor izin usaha"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h5 class="text-sm font-semibold text-purple-800 mb-4 flex items-center gap-2">
                <i class="fas fa-building"></i> Data Tempat Usaha
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Luas Tempat (m²)</label>
                    <input type="number" id="tax_luas_hiburan" step="0.01" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Kapasitas Pengunjung</label>
                    <input type="number" id="tax_kapasitas_hiburan" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah Karyawan</label>
                    <input type="number" id="tax_karyawan_hiburan" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jam Operasional</label>
                    <input type="text" id="tax_jam_operasional_hiburan" placeholder="Contoh: 10:00 - 24:00"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h5 class="text-sm font-semibold text-green-800 mb-4 flex items-center gap-2">
                <i class="fas fa-ticket-alt"></i> Tarif dan Pendapatan
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Harga Tiket Masuk (Rp)</label>
                    <input type="text" id="tax_harga_tiket" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="formatRupiah(this)">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Rata-rata Pengunjung/Hari</label>
                    <input type="number" id="tax_pengunjung_hari" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Perkiraan Pendapatan/Bulan (Rp)</label>
                    <input type="text" id="tax_pendapatan_hiburan" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="formatRupiah(this)">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Tarif Pajak</label>
                    <input type="text" id="tax_tarif_hiburan" readonly value="10%"
                        class="w-full px-4 py-2 border rounded-lg bg-green-100">
                </div>
            </div>
        </div>
    `,

    // 12. OPSEN PKB
    opsen_pkb: `
        <div class="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h5 class="text-sm font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <i class="fas fa-car"></i> Data Kendaraan Bermotor
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. Polisi <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_no_polisi" required placeholder="Contoh: DP 1234 AB"
                        class="w-full px-4 py-2 border rounded-lg uppercase">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. Rangka/NIK</label>
                    <input type="text" id="tax_no_rangka" placeholder="Nomor rangka kendaraan"
                        class="w-full px-4 py-2 border rounded-lg uppercase">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. Mesin</label>
                    <input type="text" id="tax_no_mesin" placeholder="Nomor mesin kendaraan"
                        class="w-full px-4 py-2 border rounded-lg uppercase">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h5 class="text-sm font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <i class="fas fa-info-circle"></i> Spesifikasi Kendaraan
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Kendaraan <span class="text-red-500">*</span></label>
                    <select id="tax_jenis_kendaraan" required class="w-full px-4 py-2 border rounded-lg">
                        <option value="">Pilih Jenis</option>
                        <option value="sedan">Sedan</option>
                        <option value="minibus">Minibus</option>
                        <option value="suv">SUV</option>
                        <option value="jeep">Jeep</option>
                        <option value="pick_up">Pick Up</option>
                        <option value="truck">Truck</option>
                        <option value="bus">Bus</option>
                        <option value="sepeda_motor">Sepeda Motor</option>
                        <option value="lainnya">Lainnya</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Merek <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_merek_kendaraan" required placeholder="Contoh: Toyota"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Tipe/Model</label>
                    <input type="text" id="tax_tipe_kendaraan" placeholder="Contoh: Avanza"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Tahun Pembuatan <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_tahun_kendaraan" required min="1900" max="2030" placeholder="2020"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Warna</label>
                    <input type="text" id="tax_warna_kendaraan" placeholder="Warna kendaraan"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Isi Silinder (CC)</label>
                    <input type="number" id="tax_cc_kendaraan" min="0" placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Bahan Bakar</label>
                    <select id="tax_bahan_bakar" class="w-full px-4 py-2 border rounded-lg">
                        <option value="bensin">Bensin</option>
                        <option value="solar">Solar/Diesel</option>
                        <option value="listrik">Listrik</option>
                        <option value="hybrid">Hybrid</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Kepemilikan Ke-</label>
                    <input type="number" id="tax_kepemilikan_ke" min="1" value="1"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h5 class="text-sm font-semibold text-green-800 mb-4 flex items-center gap-2">
                <i class="fas fa-money-bill-wave"></i> Nilai dan Perhitungan
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">NJKB (Nilai Jual Kendaraan) <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_njkb" required placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="formatRupiah(this); hitungOpsenPKB()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Bobot Kendaraan</label>
                    <input type="number" id="tax_bobot" step="0.01" value="1" min="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="hitungOpsenPKB()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">PKB Pokok (Rp)</label>
                    <input type="text" id="tax_pkb_pokok" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-green-100">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Opsen PKB 66% (Rp)</label>
                    <input type="text" id="tax_opsen_pkb_nilai" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-green-200 font-bold">
                </div>
            </div>
        </div>
    `,

    // 13. OPSEN BBNKB
    opsen_bbnkb: `
        <div class="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-300">
            <h5 class="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <i class="fas fa-exchange-alt"></i> Data Penyerahan Kendaraan
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Penyerahan <span class="text-red-500">*</span></label>
                    <select id="tax_jenis_penyerahan" required class="w-full px-4 py-2 border rounded-lg" onchange="updateTarifBBNKB()">
                        <option value="">Pilih Jenis</option>
                        <option value="baru">Kendaraan Baru (12%)</option>
                        <option value="bekas">Kendaraan Bekas/Second (1%)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. Polisi <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_no_polisi_bbnkb" required placeholder="Contoh: DP 1234 AB"
                        class="w-full px-4 py-2 border rounded-lg uppercase">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. Rangka/NIK</label>
                    <input type="text" id="tax_no_rangka_bbnkb" placeholder="Nomor rangka"
                        class="w-full px-4 py-2 border rounded-lg uppercase">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h5 class="text-sm font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <i class="fas fa-car-side"></i> Spesifikasi Kendaraan
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Kendaraan <span class="text-red-500">*</span></label>
                    <select id="tax_jenis_kendaraan_bbnkb" required class="w-full px-4 py-2 border rounded-lg">
                        <option value="">Pilih Jenis</option>
                        <option value="sedan">Sedan</option>
                        <option value="minibus">Minibus</option>
                        <option value="suv">SUV</option>
                        <option value="jeep">Jeep</option>
                        <option value="pick_up">Pick Up</option>
                        <option value="truck">Truck</option>
                        <option value="bus">Bus</option>
                        <option value="sepeda_motor">Sepeda Motor</option>
                        <option value="lainnya">Lainnya</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Merek <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_merek_bbnkb" required placeholder="Merek kendaraan"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Tipe/Model</label>
                    <input type="text" id="tax_tipe_bbnkb" placeholder="Tipe kendaraan"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Tahun Pembuatan <span class="text-red-500">*</span></label>
                    <input type="number" id="tax_tahun_bbnkb" required min="1900" max="2030" placeholder="2020"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h5 class="text-sm font-semibold text-amber-800 mb-4 flex items-center gap-2">
                <i class="fas fa-user-friends"></i> Data Pihak Terlibat
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nama Pemilik Lama</label>
                    <input type="text" id="tax_pemilik_lama" placeholder="Nama pemilik lama"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nama Pemilik Baru <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_pemilik_baru" required placeholder="Nama pemilik baru"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Penyerahan <span class="text-red-500">*</span></label>
                    <input type="date" id="tax_tgl_penyerahan" required
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">No. Faktur/Kwitansi</label>
                    <input type="text" id="tax_no_faktur_bbnkb" placeholder="Nomor faktur/kwitansi"
                        class="w-full px-4 py-2 border rounded-lg">
                </div>
            </div>
        </div>
        
        <div class="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h5 class="text-sm font-semibold text-green-800 mb-4 flex items-center gap-2">
                <i class="fas fa-calculator"></i> Perhitungan BBNKB dan Opsen
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nilai Penyerahan/NJKB (Rp) <span class="text-red-500">*</span></label>
                    <input type="text" id="tax_nilai_penyerahan" required placeholder="0"
                        class="w-full px-4 py-2 border rounded-lg" oninput="formatRupiah(this); hitungOpsenBBNKB()">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Tarif BBNKB</label>
                    <input type="text" id="tax_tarif_bbnkb" readonly value="12%"
                        class="w-full px-4 py-2 border rounded-lg bg-gray-100">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">BBNKB Pokok (Rp)</label>
                    <input type="text" id="tax_bbnkb_pokok" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-green-100">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Opsen BBNKB 66% (Rp)</label>
                    <input type="text" id="tax_opsen_bbnkb_nilai" readonly
                        class="w-full px-4 py-2 border rounded-lg bg-green-200 font-bold">
                </div>
            </div>
        </div>
    `
};

// Koordinat section yang akan ditambahkan ke setiap form
const koordinatSection = `
    <div class="p-4 bg-gray-50 rounded-lg border">
        <h5 class="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <i class="fas fa-map-marker-alt text-red-500"></i> Koordinat Lokasi Objek Pajak
        </h5>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
                <input type="text" id="tax_latitude" class="w-full px-4 py-2 border rounded-lg bg-white" readonly placeholder="-">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
                <input type="text" id="tax_longitude" class="w-full px-4 py-2 border rounded-lg bg-white" readonly placeholder="-">
            </div>
            <div class="flex items-end">
                <button type="button" onclick="openMapModal()" class="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <i class="fas fa-map-marker-alt mr-2"></i> Pilih Lokasi dari Peta
                </button>
            </div>
        </div>
    </div>
`;

// Helper functions for calculations
function hitungLuasReklame() {
    const panjang = parseFloat(document.getElementById('tax_panjang_reklame')?.value) || 0;
    const lebar = parseFloat(document.getElementById('tax_lebar_reklame')?.value) || 0;
    const luas = panjang * lebar;
    const luasField = document.getElementById('tax_luas_reklame');
    if (luasField) luasField.value = luas.toFixed(2);
}

function hitungPemakaianBulan() {
    const perHari = parseFloat(document.getElementById('tax_pemakaian_hari')?.value) || 0;
    const perBulan = perHari * 30;
    const field = document.getElementById('tax_pemakaian_bulan');
    if (field) field.value = perBulan.toFixed(2);
}

function hitungLuasGedungWalet() {
    const panjang = parseFloat(document.getElementById('tax_panjang_gedung')?.value) || 0;
    const lebar = parseFloat(document.getElementById('tax_lebar_gedung')?.value) || 0;
    const luas = panjang * lebar;
    const luasField = document.getElementById('tax_luas_gedung');
    if (luasField) luasField.value = luas.toFixed(2);
    hitungTotalLuasWalet();
}

function hitungTotalLuasWalet() {
    const luas = parseFloat(document.getElementById('tax_luas_gedung')?.value) || 0;
    const lantai = parseInt(document.getElementById('tax_jumlah_lantai_walet')?.value) || 1;
    const total = luas * lantai;
    const field = document.getElementById('tax_total_luas_gedung');
    if (field) field.value = total.toFixed(2);
}

function hitungProduksiTahunan() {
    const perPanen = parseFloat(document.getElementById('tax_produksi_per_panen')?.value) || 0;
    const frekuensi = parseInt(document.getElementById('tax_frekuensi_panen')?.value) || 4;
    const tahunan = perPanen * frekuensi;
    const field = document.getElementById('tax_produksi_tahunan');
    if (field) field.value = tahunan.toFixed(2);
}

function hitungLuasTambang() {
    const panjang = parseFloat(document.getElementById('tax_panjang_tambang')?.value) || 0;
    const lebar = parseFloat(document.getElementById('tax_lebar_tambang')?.value) || 0;
    const luas = panjang * lebar;
    const luasField = document.getElementById('tax_luas_tambang');
    const luasHaField = document.getElementById('tax_luas_tambang_ha');
    if (luasField) luasField.value = luas.toFixed(2);
    if (luasHaField) luasHaField.value = (luas / 10000).toFixed(4);
}

function hitungLuasTanahBPHTB() {
    const panjang = parseFloat(document.getElementById('tax_panjang_tanah_bphtb')?.value) || 0;
    const lebar = parseFloat(document.getElementById('tax_lebar_tanah_bphtb')?.value) || 0;
    const luas = panjang * lebar;
    const field = document.getElementById('tax_luas_tanah_bphtb');
    if (field && panjang > 0 && lebar > 0) field.value = luas.toFixed(2);
    hitungBPHTB();
}

function hitungLuasBangunanBPHTB() {
    const panjang = parseFloat(document.getElementById('tax_panjang_bangunan_bphtb')?.value) || 0;
    const lebar = parseFloat(document.getElementById('tax_lebar_bangunan_bphtb')?.value) || 0;
    const luas = panjang * lebar;
    const field = document.getElementById('tax_luas_bangunan_bphtb');
    if (field && panjang > 0 && lebar > 0) field.value = luas.toFixed(2);
    hitungBPHTB();
}

// Fungsi untuk update NPOPTKP berdasarkan jenis perolehan dan perolehan ke-
function updateNPOPTKP() {
    const jenisPerolehan = document.getElementById('tax_jenis_perolehan')?.value;
    const perolehanKe = document.getElementById('tax_perolehan_ke')?.value;
    
    const npoptkpField = document.getElementById('tax_npoptkp');
    const keteranganField = document.getElementById('tax_npoptkp_keterangan');
    
    if (!npoptkpField) return;
    
    let npoptkpValue = 0;
    let keterangan = '';
    
    if (jenisPerolehan === 'waris') {
        // Perolehan karena WARIS = Rp 300.000.000
        npoptkpValue = 300000000;
        keterangan = 'Perolehan karena Waris';
    } else if (jenisPerolehan && perolehanKe === '1') {
        // Perolehan PERTAMA selain waris = Rp 80.000.000
        npoptkpValue = 80000000;
        keterangan = 'Perolehan Pertama (Selain Waris)';
    } else if (jenisPerolehan && perolehanKe === '2') {
        // Perolehan KEDUA atau lebih selain waris = Rp 0
        npoptkpValue = 0;
        keterangan = 'Perolehan Kedua/Lebih (Tidak Ada NPOPTKP)';
    } else {
        // Default
        npoptkpValue = 80000000;
        keterangan = 'Perolehan Pertama (Selain Waris)';
    }
    
    npoptkpField.value = new Intl.NumberFormat('id-ID').format(npoptkpValue);
    
    // Update warna background berdasarkan nilai NPOPTKP
    if (npoptkpValue === 300000000) {
        npoptkpField.classList.remove('bg-indigo-100', 'bg-gray-100', 'bg-red-100');
        npoptkpField.classList.add('bg-green-100', 'text-green-800');
    } else if (npoptkpValue === 0) {
        npoptkpField.classList.remove('bg-indigo-100', 'bg-green-100', 'bg-gray-100');
        npoptkpField.classList.add('bg-red-100', 'text-red-800');
    } else {
        npoptkpField.classList.remove('bg-green-100', 'bg-red-100', 'bg-gray-100');
        npoptkpField.classList.add('bg-indigo-100', 'text-indigo-800');
    }
    
    if (keteranganField) keteranganField.value = keterangan;
    
    // Hitung ulang BPHTB
    hitungBPHTB();
}

function hitungBPHTB() {
    const npop = parseRupiah(document.getElementById('tax_npop')?.value);
    const jenisPerolehan = document.getElementById('tax_jenis_perolehan')?.value;
    const perolehanKe = document.getElementById('tax_perolehan_ke')?.value;
    
    // Hitung NPOPTKP berdasarkan jenis perolehan dan perolehan ke-
    let npoptkp = 0;
    
    if (jenisPerolehan === 'waris') {
        // Perolehan karena WARIS = Rp 300.000.000 (berlaku untuk semua)
        npoptkp = 300000000;
    } else if (jenisPerolehan && perolehanKe === '1') {
        // Perolehan PERTAMA selain waris = Rp 80.000.000
        npoptkp = 80000000;
    } else if (jenisPerolehan && perolehanKe === '2') {
        // Perolehan KEDUA atau lebih selain waris = Rp 0 (tidak ada NPOPTKP)
        npoptkp = 0;
    } else {
        // Default untuk perolehan pertama
        npoptkp = 80000000;
    }
    
    const npopKenaPajak = Math.max(0, npop - npoptkp);
    const bphtb = npopKenaPajak * 0.05; // 5%
    
    const kenaPajakField = document.getElementById('tax_npop_kena_pajak');
    const bphtbField = document.getElementById('tax_bphtb_terutang');
    
    if (kenaPajakField) kenaPajakField.value = 'Rp ' + new Intl.NumberFormat('id-ID').format(npopKenaPajak);
    if (bphtbField) bphtbField.value = 'Rp ' + new Intl.NumberFormat('id-ID').format(bphtb);
}

function hitungOmzetBulan() {
    const perHari = parseRupiah(document.getElementById('tax_omzet_hari')?.value);
    const perBulan = perHari * 30;
    const field = document.getElementById('tax_omzet_bulan');
    if (field) field.value = 'Rp ' + new Intl.NumberFormat('id-ID').format(perBulan);
}

function hitungLuasParkir() {
    const panjang = parseFloat(document.getElementById('tax_panjang_parkir')?.value) || 0;
    const lebar = parseFloat(document.getElementById('tax_lebar_parkir')?.value) || 0;
    const luas = panjang * lebar;
    const field = document.getElementById('tax_luas_parkir');
    if (field) field.value = luas.toFixed(2);
}

function updateTarifHiburan() {
    const jenis = document.getElementById('tax_jenis_hiburan')?.value;
    const tarifField = document.getElementById('tax_tarif_hiburan');
    if (!tarifField) return;
    
    const tarifTinggi = ['diskotek', 'karaoke', 'kelab_malam', 'spa_dewasa', 'mandi_uap'];
    if (tarifTinggi.includes(jenis)) {
        tarifField.value = '40% - 75%';
    } else {
        tarifField.value = '10%';
    }
}

function hitungOpsenPKB() {
    const njkb = parseRupiah(document.getElementById('tax_njkb')?.value);
    const bobot = parseFloat(document.getElementById('tax_bobot')?.value) || 1;
    const tarifPKB = 0.02; // 2% untuk kepemilikan pertama
    
    const pkbPokok = njkb * bobot * tarifPKB;
    const opsen = pkbPokok * 0.66; // 66%
    
    const pkbField = document.getElementById('tax_pkb_pokok');
    const opsenField = document.getElementById('tax_opsen_pkb_nilai');
    
    if (pkbField) pkbField.value = 'Rp ' + new Intl.NumberFormat('id-ID').format(pkbPokok);
    if (opsenField) opsenField.value = 'Rp ' + new Intl.NumberFormat('id-ID').format(opsen);
}

function updateTarifBBNKB() {
    const jenis = document.getElementById('tax_jenis_penyerahan')?.value;
    const tarifField = document.getElementById('tax_tarif_bbnkb');
    if (!tarifField) return;
    
    tarifField.value = jenis === 'baru' ? '12%' : '1%';
    hitungOpsenBBNKB();
}

function hitungOpsenBBNKB() {
    const nilai = parseRupiah(document.getElementById('tax_nilai_penyerahan')?.value);
    const jenis = document.getElementById('tax_jenis_penyerahan')?.value;
    const tarif = jenis === 'baru' ? 0.12 : 0.01;
    
    const bbnkbPokok = nilai * tarif;
    const opsen = bbnkbPokok * 0.66; // 66%
    
    const bbnkbField = document.getElementById('tax_bbnkb_pokok');
    const opsenField = document.getElementById('tax_opsen_bbnkb_nilai');
    
    if (bbnkbField) bbnkbField.value = 'Rp ' + new Intl.NumberFormat('id-ID').format(bbnkbPokok);
    if (opsenField) opsenField.value = 'Rp ' + new Intl.NumberFormat('id-ID').format(opsen);
}

// Replace the form input section in realisasiModal
function showInputRealisasiModal(editId = null) {
    document.getElementById('realisasiModal').classList.remove('hidden');
    document.getElementById('realisasiForm').reset();
    document.getElementById('editRealisasiId').value = '';
    document.getElementById('realisasiModalTitle').textContent = 'Input Realisasi Pajak';
    document.getElementById('inputCapaian').textContent = '0%';
    document.getElementById('inputProgressBar').style.width = '0%';
    
    // Populate WP dropdown
    populateWPDropdown();
    
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    document.getElementById('inputTanggal').value = todayStr;
    document.getElementById('inputTanggalSetor').value = todayStr;
    document.getElementById('inputTahun').value = now.getFullYear();
    document.getElementById('inputBulan').value = now.getMonth() + 1;
    
    if (editId) {
        const data = realisasiData.find(r => r.id === editId);
        if (data) {
            document.getElementById('editRealisasiId').value = data.id;
            document.getElementById('realisasiModalTitle').textContent = 'Edit Realisasi';
            document.getElementById('inputTanggal').value = data.tanggalInput || todayStr;
            document.getElementById('inputTanggalSetor').value = data.tanggalSetor || todayStr;
            document.getElementById('inputTahun').value = data.tahun;
            document.getElementById('inputBulan').value = data.bulan;
            document.getElementById('inputJenisPajak').value = data.jenisPajak;
            document.getElementById('inputTarget').value = new Intl.NumberFormat('id-ID').format(data.target);
            document.getElementById('inputPokok').value = new Intl.NumberFormat('id-ID').format(data.pokok || 0);
            document.getElementById('inputTunggakan').value = new Intl.NumberFormat('id-ID').format(data.tunggakan || 0);
            document.getElementById('inputMetodeBayar').value = data.metodeBayar || 'tunai';
            document.getElementById('inputWajibPajak').value = data.wpId || '';
            document.getElementById('inputJenisUsaha').value = data.jenisUsaha || '';
            document.getElementById('inputKeterangan').value = data.keterangan || '';
            
            // Update calculated fields
            const realisasiTotal = (data.pokok || 0) + (data.tunggakan || 0);
            document.getElementById('inputRealisasiNominal').value = new Intl.NumberFormat('id-ID').format(realisasiTotal);
            hitungCapaianInput();
            
            // If WP is selected, update jenis usaha
            if (data.wpId) {
                updateJenisUsaha(data.wpId);
            }
        }
    }
}

function populateWPDropdown() {
    const select = document.getElementById('inputWajibPajak');
    select.innerHTML = '<option value="">Pilih Wajib Pajak</option>';
    
    wajibPajakData.forEach(wp => {
        const option = document.createElement('option');
        option.value = wp.id;
        option.textContent = `${wp.npwpd} - ${wp.namaWP} (${taxTypes[wp.jenisPajak]?.name || wp.jenisPajak})`;
        select.appendChild(option);
    });
}

function updateJenisUsaha(wpId) {
    const wp = wajibPajakData.find(w => w.id.toString() === wpId.toString());
    const jenisUsahaField = document.getElementById('inputJenisUsaha');
    const jenisPajakField = document.getElementById('inputJenisPajak');
    
    if (wp) {
        jenisUsahaField.value = wp.jenisWP === 'badan' ? 'Badan Usaha' : 'Orang Pribadi';
        jenisPajakField.value = wp.jenisPajak;
        hitungCapaianInput();
    }
}
