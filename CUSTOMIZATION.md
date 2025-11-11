# 🎨 Customization Guide - Potnuru Dinesh Portfolio

This guide provides step-by-step instructions to customize the portfolio for your specific needs.

---

## 📋 Table of Contents
1. [Personal Information](#personal-information)
2. [Color Scheme](#color-scheme)
3. [Adding/Removing Sections](#addingremoving-sections)
4. [Projects & Skills](#projects--skills)
5. [Images & Media](#images--media)
6. [Social Links](#social-links)
7. [Forms & Contact](#forms--contact)
8. [Advanced Customization](#advanced-customization)

---

## 📝 Personal Information

### Hero Section - Name & Title
**File**: `index.html`

Find this section:
```html
<h1 class="hero-title">Potnuru Dinesh</h1>
<h2 class="hero-subtitle">Full Stack Developer | Software Engineer | Data Enthusiast</h2>
<p class="hero-description">
    I'm a passionate Computer Science Engineering student...
</p>
```

Replace with your information:
```html
<h1 class="hero-title">Your Name</h1>
<h2 class="hero-subtitle">Your Title | Your Specialty | Your Focus</h2>
<p class="hero-description">
    Your professional summary here...
</p>
```

### About Section
Find:
```html
<p class="about-text">
    I'm a dedicated Computer Science Engineering student from Usha Rama College...
</p>
```

Replace with your about content.

### Highlight Items (CGPA, Graduation, Projects)
```html
<div class="highlight-item">
    <h3>2025</h3>
    <p>Expected Graduation</p>
</div>
```

Customize these three items to match your profile.

---

## 🎨 Color Scheme

### Change Colors Globally
**File**: `styles.css` (Top of the file)

```css
:root {
    --color-navy: #001F3F;        /* Change primary color */
    --color-white: #FFFFFF;       /* Keep or change */
    --color-light-gray: #F5F5F5;  /* Change secondary bg */
    --color-accent: #0078FF;      /* Change accent */
    --color-dark-gray: #333333;   /* Change text color */
    --color-medium-gray: #666666; /* Change secondary text */
}
```

### Popular Color Combinations

**Professional Blue:**
```css
--color-navy: #1E3A8A;
--color-accent: #3B82F6;
--color-light-gray: #F0F9FF;
```

**Modern Purple:**
```css
--color-navy: #4C1D95;
--color-accent: #A855F7;
--color-light-gray: #FAF5FF;
```

**Tech Green:**
```css
--color-navy: #064E3B;
--color-accent: #10B981;
--color-light-gray: #F0FDF4;
```

**Minimal Dark:**
```css
--color-navy: #1F2937;
--color-accent: #F59E0B;
--color-light-gray: #F9FAFB;
```

---

## ➕ Adding/Removing Sections

### Remove a Section
1. Find the section in `index.html` (e.g., `<section id="achievements">`)
2. Delete the entire section block
3. Remove the corresponding navbar link

Example - Remove Achievements:
```html
<!-- BEFORE: In navbar -->
<li><a href="#achievements" class="nav-link">Achievements</a></li>

<!-- DELETE THIS ENTIRE SECTION -->
<section id="achievements" class="achievements">
    ...all content...
</section>
```

### Add a New Section

**Step 1**: Add to HTML
```html
<section id="certifications" class="certifications">
    <div class="container">
        <h2 class="section-title">Certifications</h2>
        <div class="certifications-grid">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

**Step 2**: Add to navbar
```html
<li><a href="#certifications" class="nav-link">Certifications</a></li>
```

**Step 3**: Add CSS styling in `styles.css`
```css
.certifications {
    background-color: var(--color-white);
    padding: 80px 0;
}

.certifications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}
```

---

## 🚀 Projects & Skills

### Update Projects

**File**: `index.html` - Find Projects Section

```html
<div class="project-card fade-in-up">
    <div class="project-header">
        <h3 class="project-title">E-Pension System</h3>
        <p class="project-number">01</p>
    </div>
    <p class="project-description">
        A web application automating pension management...
    </p>
    <div class="project-tech">
        <span class="tech-badge">Java</span>
        <span class="tech-badge">Spring Boot</span>
    </div>
    <div class="project-links">
        <a href="#" class="project-link">
            <i class="fab fa-github"></i> View Code
        </a>
        <a href="#" class="project-link">
            <i class="fas fa-external-link-alt"></i> Live Demo
        </a>
    </div>
</div>
```

To modify:
1. Change `project-title` to your project name
2. Update `project-description` with your project details
3. Replace `tech-badge` with your technologies
4. Update links to point to your GitHub and live demo
5. Change `project-number` for correct numbering

### Add New Project
Simply duplicate a project card and update all fields.

### Update Skills

**File**: `index.html` - Find Skills Section

```html
<div class="skill-category fade-in-up">
    <h3 class="skill-category-title">
        <i class="fas fa-laptop-code"></i> Programming Languages
    </h3>
    <div class="skill-list">
        <span class="skill-tag">Java</span>
        <span class="skill-tag">Python</span>
        <span class="skill-tag">SQL</span>
    </div>
</div>
```

To modify:
1. Change icon (see Font Awesome reference below)
2. Update category title
3. Add/remove skill tags

**Font Awesome Icons:**
- `fa-laptop-code` → Computer
- `fa-globe` → Web
- `fa-server` → Server
- `fa-database` → Database
- `fa-brain` → Concepts
- `fa-chart-bar` → Analytics

Find more at [fontawesome.com](https://fontawesome.com/icons)

---

## 🖼️ Images & Media

### Replace Photo Placeholder

Find in `index.html`:
```html
<div class="image-placeholder">
    <i class="fas fa-user-circle"></i>
</div>
```

Replace with:
```html
<img src="path/to/your/photo.jpg" alt="Potnuru Dinesh" class="profile-photo">
```

Add this CSS to `styles.css`:
```css
.profile-photo {
    width: 300px;
    height: 300px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 0 20px 60px rgba(0, 120, 255, 0.2);
}

@media (max-width: 768px) {
    .profile-photo {
        width: 250px;
        height: 250px;
    }
}
```

### Adding Background Images

In `styles.css`:
```css
.hero::before {
    background-image: url('path/to/your/bg.jpg');
    background-size: cover;
    background-position: center;
}
```

---

## 🔗 Social Links

### Update Social Media Links

**File**: `index.html` - Search for social links

```html
<a href="https://linkedin.com/in/your-profile" target="_blank">
    <i class="fab fa-linkedin"></i>
</a>
<a href="https://github.com/your-username" target="_blank">
    <i class="fab fa-github"></i>
</a>
<a href="mailto:your-email@example.com">
    <i class="fas fa-envelope"></i>
</a>
```

### Available Social Icons
- `fab fa-linkedin` - LinkedIn
- `fab fa-github` - GitHub
- `fab fa-twitter` - Twitter
- `fab fa-instagram` - Instagram
- `fab fa-facebook` - Facebook
- `fas fa-envelope` - Email
- `fas fa-phone` - Phone
- `fas fa-globe` - Website

---

## 📧 Forms & Contact

### Setup Contact Form

1. Visit [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form project
4. Copy your form ID (looks like: `xyzqwert`)

**Update in `index.html`:**
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Add Custom Fields to Form

```html
<div class="form-group">
    <input type="text" name="phone" placeholder="Your Phone Number">
</div>

<div class="form-group">
    <select name="subject" required>
        <option value="">Select Subject</option>
        <option value="collaboration">Collaboration</option>
        <option value="job-offer">Job Offer</option>
        <option value="consultation">Consultation</option>
    </select>
</div>
```

Add CSS for select:
```css
.form-group select {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    font-family: var(--font-primary);
    font-size: 14px;
}
```

---

## 🎯 Advanced Customization

### Change Fonts

**File**: `index.html` - In `<head>` section

```html
<!-- Default: Poppins and Inter -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Alternative: Other Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
```

Then update CSS variables:
```css
--font-primary: 'Roboto', sans-serif;
--font-secondary: 'Open Sans', sans-serif;
```

### Modify Animation Speeds

**File**: `styles.css`

```css
/* Default animation durations */
@keyframes fadeIn {
    /* ... */
}

.fade-in {
    animation: fadeIn 0.8s ease-out forwards;  /* Change 0.8s to desired duration */
}
```

### Add More Animations

Add to `styles.css`:
```css
@keyframes slideInDown {
    from {
        opacity: 0;
        transform: translateY(-40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.slide-in-down {
    animation: slideInDown 0.8s ease-out forwards;
}
```

### Custom Hover Effects

```css
.skill-tag:hover {
    background-color: var(--color-accent);
    color: var(--color-white);
    transform: scale(1.05) rotate(2deg);  /* Add rotation */
}
```

### Responsive Breakpoints

The portfolio uses these breakpoints:
- **768px** - Tablet
- **480px** - Mobile

To add more:
```css
@media (max-width: 1024px) {
    /* Tablet landscape */
}

@media (max-width: 640px) {
    /* Mobile landscape */
}
```

### Dark Mode (Optional)

Add to `styles.css`:
```css
@media (prefers-color-scheme: dark) {
    :root {
        --color-white: #1a1a1a;
        --color-light-gray: #2d2d2d;
        --color-dark-gray: #e0e0e0;
    }
}
```

---

## 🔍 SEO Customization

### Update Meta Tags

**File**: `index.html`

```html
<title>Potnuru Dinesh - Full Stack Developer & Data Analyst</title>
<meta name="description" content="Portfolio of Potnuru Dinesh - Full Stack Developer, Software Engineer, and Data Enthusiast">
<meta name="keywords" content="developer, portfolio, java, react, spring boot">
<meta name="author" content="Potnuru Dinesh">
```

### Add Open Graph Tags (For Social Sharing)

```html
<meta property="og:title" content="Potnuru Dinesh - Portfolio">
<meta property="og:description" content="Full Stack Developer and Data Analyst">
<meta property="og:image" content="url-to-your-image.jpg">
<meta property="og:url" content="your-portfolio-url.com">
```

---

## 📊 Performance Tips

### Optimize Images
Use tools like:
- [TinyPNG](https://tinypng.com) - Compress images
- [ImageOptim](https://imageoptim.com) - Mac tool
- [OptiPNG](https://optipng.sourceforge.net/) - PNG optimizer

### Minify CSS & JS
- Use [CSS Minifier](https://cssminifier.com/)
- Use [JS Minifier](https://javascript-minifier.com/)

### Lazy Load Images
Already implemented with data attributes:
```html
<img data-src="image.jpg" class="lazy-load" alt="Description">
```

---

## 🚀 Deployment Checklist

- [ ] Updated all personal information
- [ ] Added professional photo
- [ ] Verified all links work
- [ ] Updated social media links
- [ ] Setup contact form with Formspree
- [ ] Tested on mobile devices
- [ ] Checked spelling and grammar
- [ ] Optimized images
- [ ] Updated resume link
- [ ] Tested form submission
- [ ] Cross-browser tested
- [ ] Verified navigation works smoothly

---

## 💡 Pro Tips

1. **Test on Real Devices**: Always test on actual phones, tablets, and computers
2. **Keep It Updated**: Update your portfolio regularly with new projects
3. **Use Analytics**: Add Google Analytics to track visitors
4. **Backup**: Keep backups of your original files
5. **Version Control**: Use Git to track changes
6. **Mobile First**: Make sure mobile experience is perfect
7. **Fast Loading**: Optimize all assets for speed
8. **Accessibility**: Test with screen readers

---

## 🆘 Common Issues & Solutions

### Issue: Navbar Links Not Working
**Solution**: Ensure section IDs in HTML match the href values in navbar

### Issue: Form Not Sending
**Solution**: Check Formspree form ID and verify email address

### Issue: Images Not Showing
**Solution**: Verify image paths are correct and images exist

### Issue: Mobile Menu Stays Open
**Solution**: Clear browser cache or check JavaScript console for errors

### Issue: Animations Not Smooth
**Solution**: Enable hardware acceleration in browser settings

---

## 📚 Useful Resources

- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)
- [CSS Tricks](https://css-tricks.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [Formspree.io](https://formspree.io/)

---

**Remember**: Customize this portfolio to make it truly yours. Your unique personality should shine through!

Happy customizing! 🎉
