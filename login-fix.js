// Data pengguna (biasanya dari database/API)
let users = [];
let currentUser = null;
let allTaxpayers = [];

// Load initial data
function loadInitialData() {
    fetch('data-initial.json')
        .then(response => response.json())
        .then(data => {
            users = data.users;
            allTaxpayers = data.taxpayers;
            console.log('Data loaded successfully');
        })
        .catch(error => console.error('Error loading data:', error));
}

// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Toggle user password visibility
function toggleUserPassword() {
    const passwordInput = document.getElementById('userPassword');
    const toggleIcon = document.getElementById('toggleUserPwIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Parse rupiah format
function parseRupiah(value) {
    if (!value) return 0;
    return parseInt(value.toString().replace(/[^\d]/g, '')) || 0;
}

// Format rupiah
function formatRupiah(element) {
    let value = element.value.replace(/[^\d]/g, '');
    if (value) {
        element.value = 'Rp ' + new Intl.NumberFormat('id-ID').format(value);
    }
}

// ===== SOLUSI UTAMA: Validasi login dengan pengecekan status akun =====
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('loginError');
    const errorMessage = document.getElementById('errorMessage');
    
    // LANGKAH 1: Cek apakah user ada
    const user = users.find(u => u.username === username);
    
    if (!user) {
        errorMessage.textContent = 'Username atau password salah';
        loginError.classList.remove('hidden');
        console.log('User tidak ditemukan:', username);
        return;
    }
    
    // LANGKAH 2: Cek password
    if (user.password !== password) {
        errorMessage.textContent = 'Username atau password salah';
        loginError.classList.remove('hidden');
        console.log('Password salah untuk user:', username);
        return;
    }
    
    // LANGKAH 3: *** PERBAIKAN UTAMA - CEK STATUS AKUN ***
    // Jika status akun bukan 'active', tampilkan pesan "Akun tidak aktif"
    if (user.status !== 'active') {
        errorMessage.innerHTML = '❌ <strong>Akun Anda tidak aktif.</strong><br>Hubungi administrator untuk mengaktifkan akun.';
        loginError.classList.remove('hidden');
        console.log('Akun tidak aktif:', username, 'Status:', user.status);
        return; // STOP - jangan lanjut ke login
    }
    
    // LANGKAH 4: Login berhasil - semua validasi lulus
    currentUser = user;
    loginError.classList.add('hidden');
    
    // Simpan session
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('rememberMe', document.getElementById('rememberMe').checked);
    
    // Update UI
    updateUserDisplay();
    
    // Tampilkan aplikasi utama
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('mainApp').classList.remove('hidden');
    
    // Load data
    loadDashboard();
    
    console.log('Login berhasil untuk:', username, 'Role:', user.role);
}

// Update tampilan pengguna
function updateUserDisplay() {
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.fullname;
        document.getElementById('userRole').textContent = currentUser.role;
        document.getElementById('userAvatar').textContent = currentUser.fullname.charAt(0).toUpperCase();
    }
}

// Logout
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('rememberMe');
    
    // Reset form
    document.getElementById('loginForm').reset();
    
    // Tampilkan login page
    document.getElementById('mainApp').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
    
    console.log('Logout berhasil');
}

// Check login status saat page load
function checkLoginStatus() {
    loadInitialData();
    
    // Tunggu data dimuat
    setTimeout(() => {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const savedUser = localStorage.getItem('currentUser');
        
        if (rememberMe && savedUser) {
            currentUser = JSON.parse(savedUser);
            
            // Verifikasi akun masih aktif
            const user = users.find(u => u.id === currentUser.id);
            if (user && user.status === 'active') {
                updateUserDisplay();
                document.getElementById('loginPage').classList.add('hidden');
                document.getElementById('mainApp').classList.remove('hidden');
                loadDashboard();
            } else {
                // Akun tidak lagi aktif
                localStorage.removeItem('currentUser');
                document.getElementById('loginPage').classList.remove('hidden');
                document.getElementById('mainApp').classList.add('hidden');
            }
        }
    }, 500);
}

// Load dashboard
function loadDashboard() {
    updateStatistics();
    loadRecentEntries();
    loadUserList();
}

// Update statistik
function updateStatistics() {
    const total = allTaxpayers.length;
    const badan = allTaxpayers.filter(wp => wp.jenisWP === 'badan').length;
    const pribadi = allTaxpayers.filter(wp => wp.jenisWP === 'pribadi').length;
    
    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-badan').textContent = badan;
    document.getElementById('stat-pribadi').textContent = pribadi;
}

// Load recent entries
function loadRecentEntries() {
    const recentTable = document.getElementById('recent-table');
    const recent = allTaxpayers.slice(-5).reverse();
    
    if (recent.length === 0) {
        recentTable.innerHTML = '<tr><td colspan="4" class="px-4 py-8 text-center text-gray-500">Belum ada data</td></tr>';
        return;
    }
    
    recentTable.innerHTML = recent.map(wp => `
        <tr class="table-row">
            <td class="px-4 py-3 text-sm">${wp.npwpd || '-'}</td>
            <td class="px-4 py-3 text-sm">${wp.namaWP || '-'}</td>
            <td class="px-4 py-3 text-sm"><span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">${wp.jenisPajak || '-'}</span></td>
            <td class="px-4 py-3 text-sm">${wp.tanggalDaftar || '-'}</td>
        </tr>
    `).join('');
}

// Save wajib pajak
function saveWajibPajak(event) {
    event.preventDefault();
    
    if (!currentUser || currentUser.role === 'Viewer') {
        alert('Anda tidak memiliki izin untuk menambah data');
        return;
    }
    
    const wpData = {
        npwpd: 'NPWPD-' + Date.now(),
        jenisWP: document.getElementById('jenisWP').value,
        nikNpwp: document.getElementById('nikNpwp').value,
        namaWP: document.getElementById('namaWP').value,
        namaUsaha: document.getElementById('namaUsaha').value || null,
        telepon: document.getElementById('telepon').value,
        email: document.getElementById('email').value,
        alamat: document.getElementById('alamat').value,
        kelurahan: document.getElementById('kelurahan').value,
        kecamatan: document.getElementById('kecamatan').value,
        kabupaten: document.getElementById('kabupaten').value,
        kodePos: document.getElementById('kodePos').value,
        jenisPajak: document.getElementById('jenisPajak').value,
        tanggalDaftar: new Date().toLocaleDateString('id-ID')
    };
    
    allTaxpayers.push(wpData);
    localStorage.setItem('taxpayers', JSON.stringify(allTaxpayers));
    
    alert('Data wajib pajak berhasil disimpan!');
    document.getElementById('wpForm').reset();
    showSection('data');
}

// Show section
function showSection(section) {
    document.querySelectorAll('main > section').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.sidebar-item').forEach(item => item.classList.remove('active'));
    
    document.getElementById('section-' + section).classList.remove('hidden');
    document.getElementById('nav-' + section)?.classList.add('active');
    
    const titles = {
        'dashboard': 'Dashboard',
        'input': 'Input Wajib Pajak',
        'data': 'Data Wajib Pajak',
        'petablok': 'Peta Blok Pajak',
        'users': 'Manajemen User'
    };
    
    document.getElementById('page-title').textContent = titles[section] || 'Dashboard';
}

// Save user
function saveUser(event) {
    event.preventDefault();
    
    if (currentUser.role !== 'Admin') {
        alert('Hanya admin yang bisa menambah user');
        return;
    }
    
    const userData = {
        id: Date.now(),
        fullname: document.getElementById('userFullName').value,
        username: document.getElementById('userUsername').value,
        password: document.getElementById('userPassword').value,
        email: document.getElementById('userEmail').value,
        role: document.getElementById('userRole2').value,
        status: document.getElementById('userStatus').value,
        phone: document.getElementById('userPhone').value
    };
    
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('User berhasil ditambahkan!');
    document.getElementById('userForm').reset();
    loadUserList();
}

// Load user list
function loadUserList() {
    const userTableBody = document.getElementById('userTableBody');
    const userCount = document.getElementById('userCount');
    
    userCount.textContent = 'Total: ' + users.length + ' user';
    
    userTableBody.innerHTML = users.map(user => `
        <tr>
            <td class="px-4 py-3 text-sm">${user.fullname}</td>
            <td class="px-4 py-3 text-sm">${user.username}</td>
            <td class="px-4 py-3 text-sm"><span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">${user.role}</span></td>
            <td class="px-4 py-3 text-sm"><span class="px-2 py-1 ${user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} rounded text-xs">${user.status === 'active' ? 'Aktif' : 'Tidak Aktif'}</span></td>
            <td class="px-4 py-3 text-sm flex gap-2">
                <button onclick="editUser(${user.id})" class="text-blue-600 hover:text-blue-800"><i class="fas fa-edit"></i></button>
                <button onclick="deleteUser(${user.id})" class="text-red-600 hover:text-red-800"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

// Edit user
function editUser(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) return;
    
    document.getElementById('editUserId').value = userId;
    document.getElementById('userFullName').value = user.fullname;
    document.getElementById('userUsername').value = user.username;
    document.getElementById('userPassword').value = user.password;
    document.getElementById('userEmail').value = user.email;
    document.getElementById('userRole2').value = user.role;
    document.getElementById('userStatus').value = user.status;
    document.getElementById('userPhone').value = user.phone;
    document.getElementById('userFormTitle').textContent = 'Edit User';
    document.getElementById('userFormBtn').textContent = 'Update';
}

// Delete user
function deleteUser(userId) {
    if (confirm('Yakin ingin menghapus user ini?')) {
        users = users.filter(u => u.id !== userId);
        localStorage.setItem('users', JSON.stringify(users));
        loadUserList();
        alert('User berhasil dihapus!');
    }
}

// Reset user form
function resetUserForm() {
    document.getElementById('userForm').reset();
    document.getElementById('editUserId').value = '';
    document.getElementById('userFormTitle').textContent = 'Tambah User Baru';
    document.getElementById('userFormBtn').textContent = 'Simpan';
}

// Reset form
function resetForm() {
    document.getElementById('wpForm').reset();
}

// Filter users
function filterUsers() {
    const searchTerm = document.getElementById('searchUser').value.toLowerCase();
    const roleFilter = document.getElementById('filterRole').value;
    
    const filtered = users.filter(user => {
        const matchSearch = user.fullname.toLowerCase().includes(searchTerm) || 
                           user.username.toLowerCase().includes(searchTerm);
        const matchRole = roleFilter === '' || user.role === roleFilter;
        return matchSearch && matchRole;
    });
    
    const userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = filtered.map(user => `
        <tr>
            <td class="px-4 py-3 text-sm">${user.fullname}</td>
            <td class="px-4 py-3 text-sm">${user.username}</td>
            <td class="px-4 py-3 text-sm"><span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">${user.role}</span></td>
            <td class="px-4 py-3 text-sm"><span class="px-2 py-1 ${user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} rounded text-xs">${user.status === 'active' ? 'Aktif' : 'Tidak Aktif'}</span></td>
            <td class="px-4 py-3 text-sm flex gap-2">
                <button onclick="editUser(${user.id})" class="text-blue-600 hover:text-blue-800"><i class="fas fa-edit"></i></button>
                <button onclick="deleteUser(${user.id})" class="text-red-600 hover:text-red-800"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

// Initialize saat page load
window.addEventListener('DOMContentLoaded', checkLoginStatus);
