<template>
  <div id="app-wrapper">
    <header class="topbar">
      <div class="topbar-inner">
        <div class="topbar-left">
          <button class="hamburger-btn mobile-only" @click="toggleMenu" :aria-expanded="menuOpen">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
          <router-link to="/events" class="logo">
            <img src="/src/assets/img/logo.png" alt="Logo" class="logo-img">
          </router-link>
        </div>
        <div class="topbar-actions">
          <router-link to="/login" class="login-link login-desktop">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
            LOGIN
          </router-link>
          <button class="cart-btn">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span class="cart-full-text">CART: 0 &nbsp; $0.00</span>
            <span class="cart-short-text">0 $0.00</span>
          </button>
        </div>
      </div>
    </header>

    <nav class="main-nav desktop-only">
      <router-link to="/events" class="nav-link" active-class="nav-active">EVENTS</router-link>
      <router-link to="/gift-certificates" class="nav-link" active-class="nav-active">GIFT CERTIFICATES</router-link>
      <router-link to="/monthly-giving" class="nav-link" active-class="nav-active">MONTHLY GIVING</router-link>
      <router-link to="/donate" class="nav-link" active-class="nav-active">DONATE NOW</router-link>
      <a href="https://www.comeasyouarent.com" target="_blank" rel="noopener noreferrer" class="nav-link">COME AS YOU AREN'T BALL</a>
    </nav>

    <transition name="drawer">
      <div class="mobile-drawer" v-if="menuOpen">
        <nav class="drawer-nav">
          <router-link to="/events" class="drawer-link" @click="closeMenu">EVENTS</router-link>
          <router-link to="/gift-certificates" class="drawer-link" @click="closeMenu">GIFT CERTIFICATES</router-link>
          <router-link to="/monthly-giving" class="drawer-link" @click="closeMenu">MONTHLY GIVING</router-link>
          <router-link to="/donate" class="drawer-link" @click="closeMenu">DONATE NOW</router-link>
          <a href="https://www.comeasyouarent.com" target="_blank" rel="noopener noreferrer" class="drawer-link" @click="closeMenu">COME AS YOU AREN'T BALL</a>
        </nav>
        <div class="drawer-footer">
          <router-link to="/login" class="drawer-login-link" @click="closeMenu">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
            LOGIN
          </router-link>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div class="drawer-backdrop" v-if="menuOpen" @click="closeMenu"></div>
    </transition>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="site-footer">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms &amp; Conditions</a>
      <a href="#">Join Our Email List</a>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
function toggleMenu() { menuOpen.value = !menuOpen.value }
function closeMenu() { menuOpen.value = false }
</script>

<style scoped>
#app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.topbar {
  background: #0a0a0a;
  padding: 0 40px;
  height: 52px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
}

.main-nav {
  background: #ff9800;
  display: flex;
  align-items: center;
  padding: 0 40px;
  min-height: 54px;
  flex-wrap: wrap;
  justify-content: center;
  position: fixed;
  top: 52px;
  left: 0;
  right: 0;
  z-index: 199;
}

.topbar-inner {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-img {
  height: 36px;
  width: auto;
  object-fit: contain;
  display: block;
}

.topbar-actions {
  display: flex;
  gap: 36px;
  align-items: center;
}

.login-link,
.cart-btn {
  background: none;
  border: none;
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.2px;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 9px;
  text-transform: uppercase;
  transition: opacity 0.15s;
  text-decoration: none;
}

.login-link:hover,
.cart-btn:hover { opacity: 0.75; }

.icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  stroke-width: 1.8;
}

.cart-short-text {
  display: none;
}

.hamburger-btn {
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger-btn .bar {
  display: block;
  width: 22px;
  height: 2px;
  background: #ffffff;
  border-radius: 2px;
}

.nav-link {
  padding: 16px 20px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 15.5px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #0a0a0a;
  text-decoration: none;
  transition: background 0.18s;
  border-bottom: 3px solid transparent;
  white-space: nowrap;
}

.nav-link:hover { 
  background: rgba(0,0,0,0.08); 
}

.nav-active {
  background: rgba(0,0,0,0.06);
}

.main-content {
  flex: 1;
  margin-top: 106px;
  margin-bottom: 0;
  padding: 20px 0;
}

.site-footer {
  background: #fff;
  border-top: 1px solid #dcdcdc;
  padding: 20px 45px;
  display: flex;
  align-items: center;
  gap: 60px;
  font-family: Arial, sans-serif;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.site-footer a {
  color: #000;
  font-size: 20px;
  text-decoration: none;
  font-weight: 400;
}

.site-footer a:hover { text-decoration: underline; }

.mobile-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 72vw;
  max-width: 420px;
  height: 100vh;
  background: #ff9800;
  z-index: 250;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 52px;
}

.drawer-nav {
  display: flex;
  flex-direction: column;
  padding: 12px 0;
}

.drawer-link {
  display: block;
  padding: 22px 28px;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 1.35rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #0a0a0a;
  text-decoration: none;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  transition: background 0.15s;
}

.drawer-link:first-child { border-top: 1px solid rgba(0,0,0,0.08); }
.drawer-link:hover { background: rgba(0,0,0,0.07); }

.drawer-footer {
  background: #0a0a0a;
  padding: 18px 28px;
}

.drawer-login-link {
  background: none;
  border: none;
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  transition: opacity 0.15s;
  text-decoration: none;
}

.drawer-login-link:hover { opacity: 0.75; }

.drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);
  z-index: 240;
}

.drawer-enter-active,
.drawer-leave-active { transition: transform 0.28s cubic-bezier(0.4,0,0.2,1); }
.drawer-enter-from,
.drawer-leave-to { transform: translateX(-100%); }

.fade-enter-active,
.fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

.desktop-only { display: flex; }
.mobile-only  { display: none; }

@media (max-width: 900px) and (min-width: 600px) {
  .desktop-only { display: none !important; }
  .mobile-only  { display: flex !important; }

  .topbar { padding: 0 20px; }
  .topbar-actions { gap: 20px; }
  .logo-img { height: 28px; }

  .main-content {
    margin-top: 52px;
  }

  .site-footer {
    padding: 15px 20px;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .site-footer a { font-size: 16px; }
  
  .login-link.login-desktop {
    display: flex;
  }
}

@media (max-width: 599px) {
  .desktop-only { display: none !important; }
  .mobile-only  { display: flex !important; }

  .topbar { 
    padding: 0 15px; 
  }
  
  .topbar-actions { 
    gap: 12px; 
  }
  
  .logo-img { 
    height: 24px; 
  }
  
  .login-link.login-desktop {
    display: none !important;
  }
  
  .cart-full-text {
    display: none;
  }
  
  .cart-short-text {
    display: inline;
    font-size: 12px;
    font-weight: 600;
  }
  
  .cart-btn {
    gap: 5px;
    font-size: 11px;
  }
  
  .icon {
    width: 16px;
    height: 16px;
  }

  .main-content {
    margin-top: 52px;
  }

  .site-footer {
    padding: 12px 15px;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .site-footer a { 
    font-size: 12px; 
  }
}

@media (max-width: 480px) {
  .topbar-actions { 
    gap: 8px; 
  }
  
  .cart-short-text {
    font-size: 10px;
  }
  
  .icon {
    width: 14px;
    height: 14px;
  }
  
  .main-content {
    margin-top: 52px;
    margin-bottom: 60px;
  }
  
  .site-footer a { 
    font-size: 11px; 
  }
  
  .site-footer {
    gap: 12px;
    padding: 10px 12px;
  }
}

@media (max-width: 400px) {
  .topbar-actions { 
    gap: 6px; 
  }
  
  .cart-short-text {
    font-size: 9px;
  }
  
  .icon {
    width: 12px;
    height: 12px;
  }
}

@media (max-width: 768px) {
  .main-content {
    margin-bottom: 80px;
  }
}
</style>