// Fix untuk masalah "akun tidak aktif" pada halaman login SIMPATDA
// Tambahkan file ini atau merge ke dalam script utama

// Default users dengan status aktif/tidak aktif
const defaultUsers = [
    { 
        id: 1, 
        fullName: 'Administrator', 
        username: 'admin', 
        password: 'admin123', 
        role: 'Admin', 
        email: 'admin@sidrap.local',
        status: 'active',  // ← PENTING: tambahkan status
        phone: '082123456789'
    },
    { 
        id: 2, 
        fullName: 'Operator Pajak', 
        username: 'operator', 
        password: 'operator123', 
        role: 'Operator', 
        email: 'operator@sidrap.local',
        status: 'active',  // ← Status harus 'active'
        phone: '082987654321'
    },
    { 
        id: 3, 
        fullName: 'Viewer System', 
        username: 'viewer', 
        password: 'viewer123', 
        role: 'Viewer', 
        email: 'viewer@sidrap.local',
        status: 'inactive',  // ← Contoh akun tidak aktif
        phone: '082555666777'
    }
];

let users = [];
let currentUser = null;
let firebaseConnected = false;
let firebaseApp = null;
let firebaseDB = null;

// Fungsi login yang diperbaiki
async function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const loginError = document.getElementById('loginError');
    const errorMessage = document.getElementById('errorMessage');
    
    // Reset error display
    loginError.classList.add('hidden');
    errorMessage.textContent = '';
    
    // Validasi input kosong
    if (!username || !password) {
        errorMessage.textContent = 'Username dan password tidak boleh kosong!';
        loginError.classList.remove('hidden');
        return;
    }
    
    // Load users dari localStorage
    try {
        users = JSON.parse(localStorage.getItem('simpatdaUsers')) || defaultUsers;
    } catch (e) {
        users = defaultUsers;
    }
    
    // Cari user berdasarkan username dan password
    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) {
        // User tidak ditemukan atau password salah
        errorMessage.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i>Username atau password salah';
        loginError.classList.remove('hidden');
        console.warn(`Login attempt failed: Username ${username} atau password tidak cocok`);
        return;
    }
    
    // CEK STATUS AKUN - INI ADALAH SOLUSI UTAMA
    if (user.status === 'inactive' || !user.status) {
        errorMessage.innerHTML = `
            <i class="fas fa-lock mr-2"></i>
            <strong>Akun Tidak Aktif</strong><br>
            <small style="font-size: 12px; margin-top: 4px; display: block;">
                Akun Anda telah dinonaktifkan. Silakan hubungi administrator.
            </small>
        `;
        loginError.classList.remove('hidden');
        loginError.style.backgroundColor = '#fee2e2';
        loginError.style.borderColor = '#fecaca';
        loginError.style.color = '#991b1b';
        console.warn(`Login blocked: User ${username} has inactive status`);
        return;
    }
    
    // JIKA SEMUA VALIDASI BERHASIL - LANJUTKAN LOGIN
    try {
        // Simpan user ke localStorage dan sessionStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        currentUser = user;
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'mt-4 p-3 bg-green-100 border border-green-300 text-green-700 rounded-lg text-sm text-center animate-fade-in';
        successMsg.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Login berhasil! Membuka sistem...';
        loginError.parentElement.appendChild(successMsg);
        
        // Log login activity
        console.log(`✓ User ${user.username} (${user.fullName}) berhasil login pada ${new Date().toLocaleString()}`);
        
        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Show main app
        showMainApp();
        
    } catch (error) {
        console.error('Unexpected error during login:', error);
        errorMessage.textContent = 'Terjadi kesalahan sistem: ' + error.message;
        loginError.classList.remove('hidden');
    }
}

// Fungsi untuk menampilkan aplikasi utama
function showMainApp() {
    const loginPage = document.getElementById('loginPage');
    const mainApp = document.getElementById('mainApp');
    
    if (loginPage) loginPage.style.display = 'none';
    if (mainApp) mainApp.classList.remove('hidden');
    
    // Update user info di header
    if (currentUser) {
        const userAvatar = document.getElementById('userAvatar');
        const userName = document.getElementById('userName');
        const userRole = document.getElementById('userRole');
        
        if (userAvatar) userAvatar.textContent = currentUser.fullName.charAt(0).toUpperCase();
        if (userName) userName.textContent = currentUser.fullName;
        if (userRole) userRole.textContent = currentUser.role;
    }
    
    // Load data aplikasi
    loadWajibPajak();
    loadRealisasi();
    loadUsers();
}

// Fungsi toggle visibility password
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

// Fungsi untuk management user (admin only)
async function saveUser(event) {
    event.preventDefault();
    
    if (currentUser?.role !== 'Admin') {
        showToast('Anda tidak memiliki akses ke fitur ini');
        return;
    }
    
    const editId = document.getElementById('editUserId').value;
    const fullName = document.getElementById('userFullName').value;
    const username = document.getElementById('userUsername').value;
    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('userPassword').value;
    const role = document.getElementById('userRole2').value;
    const status = document.getElementById('userStatus').value;  // ← Get status
    const phone = document.getElementById('userPhone').value;
    
    // Validasi
    if (!fullName || !username || !password || !role) {
        showToast('Harap isi semua field yang wajib!');
        return;
    }
    
    if (password.length < 6) {
        showToast('Password minimal 6 karakter');
        return;
    }
    
    try {
        let userData;
        
        if (editId) {
            // Update existing user
            const idx = users.findIndex(u => u.id === parseInt(editId));
            if (idx !== -1) {
                users[idx] = {
                    ...users[idx],
                    fullName,
                    username,
                    email,
                    role,
                    status,  // ← Set status
                    phone
                };
                if (password !== users[idx].password) {
                    users[idx].password = password;
                }
                showToast('User berhasil diperbarui!');
            }
        } else {
            // Create new user
            userData = {
                id: Math.max(...users.map(u => u.id), 0) + 1,
                fullName,
                username,
                email,
                password,
                role,
                status: status || 'active',  // ← Default active
                phone,
                createdAt: new Date().toISOString()
            };
            users.push(userData);
            showToast('User baru berhasil ditambahkan!');
        }
        
        // Simpan ke localStorage
        localStorage.setItem('simpatdaUsers', JSON.stringify(users));
        
        // Reset form
        resetUserForm();
        
        // Reload user list
        loadUsers();
        
    } catch (error) {
        console.error('Error saving user:', error);
        showToast('Gagal menyimpan user: ' + error.message);
    }
}

// Fungsi untuk mengaktifkan/menonaktifkan user
async function toggleUserStatus(userId, newStatus) {
    if (currentUser?.role !== 'Admin') {
        showToast('Anda tidak memiliki akses');
        return;
    }
    
    const userIdx = users.findIndex(u => u.id === userId);
    if (userIdx === -1) return;
    
    const user = users[userIdx];
    const oldStatus = user.status;
    user.status = newStatus;
    
    try {
        localStorage.setItem('simpatdaUsers', JSON.stringify(users));
        showToast(`Status user ${user.fullName} diubah menjadi ${newStatus === 'active' ? 'Aktif' : 'Tidak Aktif'}`);
        loadUsers();
    } catch (error) {
        user.status = oldStatus; // Revert on error
        showToast('Gagal mengubah status user');
    }
}

// Fungsi logout
function handleLogout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('currentUser');
        currentUser = null;
        
        const loginPage = document.getElementById('loginPage');
        const mainApp = document.getElementById('mainApp');
        
        if (loginPage) loginPage.style.display = 'flex';
        if (mainApp) mainApp.classList.add('hidden');
        
        // Reset form
        document.getElementById('loginForm').reset();
        document.getElementById('loginError').classList.add('hidden');
        
        console.log('✓ User telah logout');
    }
}

// Fungsi untuk check login status saat halaman load
function checkLoginStatus() {
    try {
        const savedUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
        if (savedUser && savedUser !== 'undefined') {
            currentUser = JSON.parse(savedUser);
            if (currentUser && currentUser.username) {
                showMainApp();
                return;
            }
        }
    } catch (error) {
        console.error('Error checking login status:', error);
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('currentUser');
    }
}

// Dummy functions - replace dengan implementasi sebenarnya
function loadWajibPajak() { console.log('Loading wajib pajak...'); }
function loadRealisasi() { console.log('Loading realisasi...'); }
function loadUsers() { console.log('Loading users...'); }
function resetUserForm() { document.getElementById('userForm').reset(); }
function showToast(message) { alert(message); }

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Ensure default users exist
    if (!localStorage.getItem('simpatdaUsers')) {
        localStorage.setItem('simpatdaUsers', JSON.stringify(defaultUsers));
    }
    
    // Load users
    try {
        users = JSON.parse(localStorage.getItem('simpatdaUsers'));
        if (!Array.isArray(users)) users = defaultUsers;
    } catch (e) {
        users = defaultUsers;
    }
    
    // Check if already logged in
    checkLoginStatus();
});
