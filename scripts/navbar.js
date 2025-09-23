// Odin Project-style Navbar component
document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('navbar-container');
    
    if (navbarContainer) {
        navbarContainer.innerHTML = `
            <nav class="navbar">
                <div class="nav-container">
                    <!-- Logo -->
                    <div class="nav-logo">
                        <a href="index.html">
                            <i class="fas fa-graduation-cap"></i>
                            Mizuki Learn
                        </a>
                    </div>
                    
                    <!-- Mobile menu button -->
                    <button class="mobile-menu-btn">
                        <i class="fas fa-bars"></i>
                    </button>
                    
                    <!-- Main navigation -->
                    <ul class="nav-menu">
                        <!-- All Paths Dropdown -->
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle">
                                <i class="fas fa-th"></i>
                                All Paths
                                <i class="fas fa-chevron-down"></i>
                            </a>
                            <div class="dropdown-menu">
                                <a href="content/mythology/index.html" class="dropdown-item">
                                    <i class="fas fa-monument"></i>
                                    Mythology
                                </a>
                                <a href="content/programming/index.html" class="dropdown-item">
                                    <i class="fas fa-code"></i>
                                    Programming
                                </a>
                                <a href="content/dsa/index.html" class="dropdown-item">
                                    <i class="fas fa-diagram-project"></i>
                                    DSA
                                </a>
                                <a href="content/ai-ml/index.html" class="dropdown-item">
                                    <i class="fas fa-brain"></i>
                                    AI & ML
                                </a>
                                <a href="content/hpc/index.html" class="dropdown-item">
                                    <i class="fas fa-server"></i>
                                    HPC
                                </a>
                            </div>
                        </li>
                        
                        <!-- Individual navigation items -->
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
                        
                        <!-- Right side items -->
                        <li class="nav-actions">
                            <!-- Theme toggle -->
                            <div class="theme-toggle" id="theme-toggle" title="Toggle theme">
                                <i class="fas fa-moon"></i>
                            </div>
                            
                            <!-- Sign in -->
                            <a href="#" class="nav-link sign-in-link">
                                <i class="fas fa-sign-in-alt"></i>
                                Sign In
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        `;
        
        // Dropdown functionality
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        });
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.dropdown')) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
        
        // Mobile menu functionality
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('.nav-menu');
        
        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
        }
    }
});
