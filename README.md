# AIBA Lab Website

KAIST AI & Business Analytics Lab 홈페이지

## 📁 파일 구조
```
aiba-lab/
├── index.html          # 메인 페이지
├── style.css           # 스타일시트
├── script.js           # JavaScript
├── README.md           # 이 파일
└── images/
    ├── lab_logo.svg    # 연구실 로고 (교체 필요)
    ├── kaist_logo.svg  # KAIST 로고 (교체 필요)
    └── members/        # 멤버 프로필 사진
        └── shin.jpg    # 교수님 사진 (추가 필요)
```

## 🚀 GitHub Pages 배포

### 1. Repository 생성
GitHub에서 새 repository 생성 (예: `aiba-lab.github.io` 또는 `aiba-lab`)

### 2. 파일 업로드
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[username]/[repo-name].git
git push -u origin main
```

### 3. GitHub Pages 활성화
1. Repository → Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / (root)
4. Save

### 4. 접속 URL
- `https://[username].github.io/[repo-name]`

---

## ✏️ 수정 가이드

### 로고 교체
- `images/lab_logo.svg` → 실제 연구실 로고로 교체
- `images/kaist_logo.svg` → 실제 KAIST 로고로 교체

### 멤버 사진 추가
1. `images/members/` 폴더에 사진 추가
2. HTML에서 해당 멤버의 `photo-placeholder` 부분을 `<img>` 태그로 교체

```html
<!-- Before -->
<div class="photo-placeholder">이수현</div>

<!-- After -->
<img src="images/members/suhyeon.jpg" alt="Suhyeon Lee">
```

### 멤버 추가/수정
`index.html`의 Members 섹션에서 아래 형식으로 추가:

```html
<div class="member-card">
    <div class="member-photo">
        <div class="photo-placeholder">이름</div>
    </div>
    <div class="member-info">
        <h4>English Name</h4>
        <p class="member-research">Research Area</p>
    </div>
</div>
```

### 논문 추가
Publications 섹션에서:

```html
<div class="pub-item">
    <div class="pub-venue">JOURNAL NAME</div>
    <div class="pub-content">
        <p class="pub-title">Paper Title</p>
        <p class="pub-authors">Author1, Author2, ...</p>
        <p class="pub-year">2025</p>
    </div>
</div>
```

### 색상 변경
`style.css` 상단의 CSS 변수 수정:

```css
:root {
    --primary: #004c97;      /* 메인 컬러 */
    --primary-light: #0066cc;
    --primary-dark: #003366;
}
```

---

## 📧 Contact
Prof. Donghyuk Shin - dhs@kaist.ac.kr
