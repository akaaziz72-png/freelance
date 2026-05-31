<template>
  <div class="login-outer">
    <div class="login-card">
      <h1 class="login-title">Login</h1>
      <div class="login-info">
        Please login to access your Lookingglass account.<br>
        If you need additional assistance, please contact the box office at <strong>312.337.0665</strong>.
      </div>
      <div class="login-field">
        <label class="login-label">Email address:</label>
        <input v-model="email" class="login-input" type="email" placeholder="your@email.com" />
        <div class="login-required">(required)</div>
      </div>
      <div class="login-field">
        <label class="login-label">Password:</label>
        <input v-model="password" class="login-input" type="password" placeholder="••••••••" />
        <div class="login-required">(required)</div>
      </div>
      <div class="login-btn-wrap">
        <button class="login-submit" @click="doLogin">LOGIN</button>
      </div>
      <div class="login-links">
        <span>New Customer? <a href="#" @click.prevent="$emit('register')">Register now</a></span>
        <span>Forgot your password? <a href="#" @click.prevent="$emit('reset')">Reset here</a></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['login-success', 'register', 'reset'])
const email    = ref('')
const password = ref('')

function doLogin() {
  if (!email.value || !password.value) {
    alert('Please enter your email and password.')
    return
  }
  emit('login-success', { email: email.value })
}
</script>

<style scoped>
.login-outer { 
  max-width: 660px; 
  margin: 0 auto; 
  padding: 60px 20px 80px; 
  min-height: calc(100vh - 106px);
  display: flex;
  align-items: center;
}

.login-card { 
  background: #fff; 
  border: 1px solid #e8e8e8; 
  padding: 48px 56px; 
  border-radius: 2px; 
  box-shadow: 0 2px 20px rgba(0,0,0,.06); 
  width: 100%;
}

.login-title { 
  font-family: 'Playfair Display', serif; 
  font-size: 2rem; 
  font-weight: 900; 
  text-align: center; 
  margin-bottom: 28px; 
  color: #0a0a0a; 
}

.login-info { 
  background: #f7f7f7; 
  border: 1px solid #e8e8e8; 
  padding: 18px 20px; 
  font-size: .92rem; 
  color: #555; 
  text-align: center; 
  margin-bottom: 32px; 
  line-height: 1.6; 
}

.login-info strong {
  color: #0a0a0a;
}

.login-field { 
  margin-bottom: 20px; 
}

.login-label { 
  display: block; 
  font-size: .9rem; 
  font-weight: 500; 
  margin-bottom: 6px; 
  color: #0a0a0a; 
}

.login-input { 
  width: 100%; 
  border: 1px solid #ccc; 
  padding: 10px 14px; 
  font-size: .9rem; 
  font-family: 'DM Sans', sans-serif; 
  transition: border-color .2s; 
  border-radius: 2px;
  box-sizing: border-box;
}

.login-input:focus { 
  border-color: #f5a623; 
  outline: none; 
}

.login-required { 
  font-size: .82rem; 
  color: #888; 
  margin-top: 4px; 
}

.login-btn-wrap { 
  text-align: center; 
  margin: 28px 0 24px; 
}

.login-submit { 
  background: #f5a623; 
  color: #fff; 
  border: none; 
  padding: 14px 60px; 
  font-family: 'DM Sans', sans-serif; 
  font-weight: 700; 
  font-size: 14px; 
  letter-spacing: 1.5px; 
  text-transform: uppercase; 
  cursor: pointer; 
  transition: background .2s; 
  border-radius: 2px; 
  width: auto;
}

.login-submit:hover { 
  background: #d4891a; 
}

.login-links { 
  font-size: .9rem; 
  display: flex; 
  flex-direction: column; 
  gap: 8px; 
  color: #333; 
  text-align: center;
}

.login-links a { 
  color: #0a0a0a; 
  font-weight: 600; 
  text-decoration: none; 
}

.login-links a:hover { 
  text-decoration: underline; 
}

@media (max-width: 900px) and (min-width: 768px) {
  .login-outer {
    padding: 40px 30px 60px;
    min-height: calc(100vh - 106px);
  }
  
  .login-card {
    padding: 40px 45px;
  }
  
  .login-title {
    font-size: 1.8rem;
    margin-bottom: 24px;
  }
  
  .login-info {
    padding: 15px 18px;
    font-size: 0.85rem;
  }
  
  .login-submit {
    padding: 12px 50px;
    font-size: 13px;
  }
}

@media (max-width: 767px) and (min-width: 600px) {
  .login-outer {
    padding: 30px 20px 50px;
    min-height: calc(100vh - 106px);
  }
  
  .login-card {
    padding: 35px 40px;
  }
  
  .login-title {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
  
  .login-info {
    padding: 14px 16px;
    font-size: 0.82rem;
  }
  
  .login-label {
    font-size: 0.85rem;
  }
  
  .login-input {
    padding: 8px 12px;
    font-size: 0.85rem;
  }
  
  .login-submit {
    padding: 12px 45px;
    font-size: 13px;
  }
  
  .login-links {
    font-size: 0.85rem;
  }
}

@media (max-width: 599px) and (min-width: 480px) {
  .login-outer {
    padding: 20px 15px 40px;
    min-height: calc(100vh - 106px);
  }
  
  .login-card {
    padding: 25px 30px;
  }
  
  .login-title {
    font-size: 1.4rem;
    margin-bottom: 18px;
  }
  
  .login-info {
    padding: 12px 14px;
    font-size: 0.78rem;
    margin-bottom: 24px;
  }
  
  .login-field {
    margin-bottom: 16px;
  }
  
  .login-label {
    font-size: 0.82rem;
    margin-bottom: 4px;
  }
  
  .login-input {
    padding: 8px 12px;
    font-size: 0.82rem;
  }
  
  .login-required {
    font-size: 0.75rem;
    margin-top: 3px;
  }
  
  .login-btn-wrap {
    margin: 22px 0 20px;
  }
  
  .login-submit {
    padding: 10px 40px;
    font-size: 12px;
  }
  
  .login-links {
    font-size: 0.8rem;
    gap: 6px;
  }
}

@media (max-width: 479px) {
  .login-outer {
    padding: 15px 12px 30px;
    min-height: calc(100vh - 106px);
  }
  
  .login-card {
    padding: 20px 18px;
  }
  
  .login-title {
    font-size: 1.3rem;
    margin-bottom: 15px;
  }
  
  .login-info {
    padding: 10px 12px;
    font-size: 0.75rem;
    margin-bottom: 20px;
  }
  
  .login-field {
    margin-bottom: 14px;
  }
  
  .login-label {
    font-size: 0.78rem;
    margin-bottom: 4px;
  }
  
  .login-input {
    padding: 7px 10px;
    font-size: 0.78rem;
  }
  
  .login-required {
    font-size: 0.7rem;
    margin-top: 2px;
  }
  
  .login-btn-wrap {
    margin: 18px 0 16px;
  }
  
  .login-submit {
    padding: 10px 30px;
    font-size: 11px;
    letter-spacing: 1px;
    width: 100%;
  }
  
  .login-links {
    font-size: 0.75rem;
    gap: 5px;
  }
}

@media (max-width: 320px) {
  .login-outer {
    padding: 10px 10px 20px;
  }
  
  .login-card {
    padding: 15px 15px;
  }
  
  .login-title {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
  
  .login-info {
    padding: 8px 10px;
    font-size: 0.7rem;
  }
  
  .login-label {
    font-size: 0.75rem;
  }
  
  .login-input {
    padding: 6px 8px;
    font-size: 0.75rem;
  }
  
  .login-submit {
    padding: 8px 20px;
    font-size: 10px;
  }
  
  .login-links {
    font-size: 0.7rem;
  }
}

@media (max-height: 500px) and (orientation: landscape) {
  .login-outer {
    padding: 15px 20px;
    min-height: auto;
  }
  
  .login-card {
    padding: 20px 30px;
  }
  
  .login-title {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  .login-info {
    padding: 8px 12px;
    margin-bottom: 15px;
  }
  
  .login-field {
    margin-bottom: 10px;
  }
  
  .login-btn-wrap {
    margin: 15px 0 12px;
  }
  
  .login-links {
    gap: 4px;
  }
}

@media (min-width: 1440px) {
  .login-outer {
    max-width: 720px;
    padding: 80px 20px 100px;
  }
  
  .login-card {
    padding: 56px 64px;
  }
  
  .login-title {
    font-size: 2.2rem;
    margin-bottom: 32px;
  }
  
  .login-info {
    padding: 20px 24px;
    font-size: 1rem;
  }
  
  .login-label {
    font-size: 1rem;
  }
  
  .login-input {
    padding: 12px 16px;
    font-size: 1rem;
  }
  
  .login-submit {
    padding: 16px 70px;
    font-size: 15px;
  }
}
</style>