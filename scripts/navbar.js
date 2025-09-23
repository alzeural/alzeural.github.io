// Navbar component
document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('navbar-container');
    
    if (navbarContainer) {
        navbarContainer.innerHTML = `
            <nav class="navbar">
                <div class="nav-container">
                    <div class="nav-logo">
                        <a href="index.html">
                            <i class="fas fa-graduation-cap"></i>
                            Mizuki Learn
                        </a>
                    </div>
                    
                    <button class="mobile-menu-btn">
                        <i class="fas fa-bars"></i>
                    </button>
                    
                    <ul class="nav-menu">
                        <li class="nav-item">
                            <a href="index.html" class="nav-link">
                                <i class="fas fa-home"></i>
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="content/mythology/index.html" class="nav-link">
                                <i class="fas fa-monument"></i>
                                Mythology
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="content/programming/index.html" class="nav-link">
                                <i class="fas fa-code"></i>
                                Programming
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="content/dsa/index.html" class="nav-link">
                                <i class="fas fa-diagram-project"></i>
                                DSA
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="content/ai-ml/index.html" class="nav-link">
                                <i class="fas fa-brain"></i>
                                AI & ML
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="content/hpc/index.html" class="nav-link">
                                <i class="fas fa-server"></i>
                                HPC
                            </a>
                        </li>
                        
                        <li class="nav-actions">
                            <div class="theme-toggle" id="theme-toggle">
                                <i class="fas fa-moon"></i>
                            </div>
                            <div class="auth-buttons">
                                <a href="#" class="auth-btn secondary">Sign In</a>
                                <a href="#" class="auth-btn primary">Sign Up</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        `;
        
        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('.nav-menu');
        
        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.addEventListener('click', function() {
                navMenu.classList.toggle('active');
            });
        }
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-container') && navMenu) {
                navMenu.classList.remove('active');
            }
        });
    }
});
