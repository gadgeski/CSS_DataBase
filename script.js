// ブラウザ環境ではSQLiteを直接使用できないため、
// メモリ内でデータを管理します
let users = [];

function showStatus(message, type = 'info') {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = message;
    statusDiv.className = `status-message ${type}`;
    statusDiv.style.display = 'block';
    
    // 4秒後に自動的に非表示にする
    setTimeout(() => {
        statusDiv.style.display = 'none';
    }, 4000);
}

function loadAllUsers() {
    try {
        if (users.length > 0) {
            showStatus("--- 全ユーザーデータ ---", 'success');
            displayUsers();
        } else {
            showStatus("ユーザーデータがありません。", 'info');
            displayNoData();
        }
    } catch (error) {
        showStatus(`エラーが発生しました: ${error.message}`, 'error');
    }
}

function displayUsers() {
    const tableDiv = document.getElementById('userTable');
    
    let html = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>名前</th>
                    <th>メールアドレス</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    users.forEach(user => {
        html += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>
        `;
    });
    
    html += `
            </tbody>
        </table>
    `;
    
    tableDiv.innerHTML = html;
}

function displayNoData() {
    const tableDiv = document.getElementById('userTable');
    tableDiv.innerHTML = '<div class="no-data">📭 ユーザーデータがありません</div>';
}

function addSampleData() {
    users = [
        { id: 1, name: "田中太郎", email: "tanaka@example.com" },
        { id: 2, name: "佐藤花子", email: "sato@example.com" },
        { id: 3, name: "鈴木一郎", email: "suzuki@example.com" },
        { id: 4, name: "高橋美咲", email: "takahashi@example.com" },
        { id: 5, name: "伊藤健太", email: "ito@example.com" }
    ];
    
    showStatus("サンプルデータを追加しました。", 'success');
    loadAllUsers();
}

function clearData() {
    users = [];
    displayNoData();
    showStatus("データをクリアしました。", 'info');
}

// スムーズスクロール機能
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// ページ読み込み時のアニメーション
function initializeAnimations() {
    const sections = document.querySelectorAll('.control-section, .data-section, .code-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ページ読み込み時に初期状態を表示
window.onload = function() {
    displayNoData();
    initializeAnimations();
    
    // ヒーローセクションのアニメーション
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 200);
    
    setTimeout(() => {
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateY(0)';
    }, 400);
};