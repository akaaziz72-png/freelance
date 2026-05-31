<template>
  <div class="page-container">
    <h1 class="page-title">Gift Vouchers</h1>

    <div class="form-card">
      <p class="sign-note">Sign-in or create an account to redeem a gift</p>

      <div class="form-grid">

        <div class="field-row">
          <label class="field-label">Value: $</label>
          <input type="number" class="field-input value-input" />
          <span class="required-tag">(required)</span>
        </div>

        <div class="field-row">
          <label class="field-label">Date to send:</label>
          <div class="date-selects">
            <select class="field-select small-select" v-model="day">
              <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
            </select>
            <select class="field-select month-select" v-model="month">
              <option v-for="m in months" :key="m" :value="m">{{ m }}</option>
            </select>
            <input type="number" class="field-input year-input" v-model="year" />
          </div>
        </div>

        <div class="field-row hint-row">
          <span class="field-label"></span>
          <p class="hint-text">Gift vouchers do not expire</p>
        </div>

        <div class="field-row">
          <label class="field-label">To:</label>
          <input type="text" class="field-input to-input" />
          <span class="required-tag">(required)</span>
        </div>

        <div class="field-row">
          <label class="field-label">Send to:</label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" name="sendto" value="my" v-model="sendTo" />
              My Email Address
            </label>
            <label class="radio-label">
              <input type="radio" name="sendto" value="recipient" v-model="sendTo" />
              Recipient's Email Address
            </label>
            <input type="email" class="field-input email-input" v-model="recipientEmail" />
          </div>
        </div>

        <div class="field-row">
          <label class="field-label">From:</label>
          <input type="text" class="field-input from-input" />
          <span class="required-tag">(required)</span>
        </div>

        <div class="field-row align-top">
          <label class="field-label msg-label">Message:</label>
          <textarea class="field-textarea" v-model="message"></textarea>
        </div>

        <p class="cart-hint">You will have the option to add another gift voucher on the 'Cart' screen.</p>

        <div class="btn-row">
          <button class="add-btn">ADD TO CART</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const day           = ref(31)
const month         = ref('May')
const year          = ref(2026)
const sendTo        = ref('recipient')
const recipientEmail = ref('')
const message       = ref('')
const months = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
]
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin-left: 40px;
  margin-right: 0;
  padding: 40px 48px 80px;
}

.page-title {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 24px;
  color: #111;
}

.form-card {
  background: #ffffff;
  border: 1px solid #ddd;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.07);
  width: 100%;
}

.sign-note {
  font-size: 0.92rem;
  color: #333;
  padding: 22px 28px 22px;
  margin: 0;
  border-bottom: none;
}

.form-grid {
  display: flex;
  flex-direction: column;
  padding: 8px 28px 36px;
  gap: 0;
}

.field-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
}
.field-row.align-top { align-items: flex-start; padding-top: 12px; }
.field-row.hint-row  { padding-top: 2px; padding-bottom: 10px; }

.field-label {
  font-size: 0.9rem;
  font-weight: 400;
  color: #222;
  min-width: 120px;
  flex-shrink: 0;
}
.msg-label { padding-top: 4px; }

.field-input {
  border: 1px solid #bbb;
  padding: 5px 10px;
  font-size: 0.9rem;
  font-family: var(--font-body);
  color: #111;
  background: #fff;
  border-radius: 0;
  height: 30px;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.06);
}
.value-input { width: 210px; }
.to-input    { width: 210px; }
.from-input  { width: 210px; }
.email-input { width: 205px; height: 30px; }
.year-input  { width: 68px; }

.field-select {
  border: 1px solid #bbb;
  padding: 4px 4px;
  font-size: 0.9rem;
  font-family: var(--font-body);
  background: #fff;
  height: 30px;
  border-radius: 0;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.06);
}
.small-select  { width: 58px; }
.month-select  { width: 108px; }

.date-selects { display: flex; gap: 5px; align-items: center; }

.required-tag {
  font-size: 0.85rem;
  color: #555;
  white-space: nowrap;
}

.hint-text {
  font-size: 0.88rem;
  color: #333;
  margin: 0;
}

.radio-group {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
}
.radio-label {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.9rem;
  cursor: pointer;
  color: #222;
  white-space: nowrap;
}
.radio-label input[type="radio"] {
  width: 17px;
  height: 17px;
  margin: 0;
  accent-color: #555;
  cursor: pointer;
}

.field-textarea {
  border: 1px solid #bbb;
  padding: 6px 10px;
  font-size: 0.9rem;
  font-family: var(--font-body);
  resize: vertical;
  width: calc(100% - 130px);
  min-height: 100px;
  border-radius: 0;
  color: #111;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.06);
}

.cart-hint {
  font-size: 0.87rem;
  color: #333;
  margin: 18px 0 18px;
}

.btn-row { display: flex; }
.add-btn {
  background: #f5a623;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 0;
  transition: background 0.2s;
}
.add-btn:hover { background: #d4891a; }

@media (max-width: 900px) {
  .page-container {
    margin-left: 0;
    padding: 30px 24px 60px;
  }
}

@media (max-width: 768px) {
  .page-container {
    margin-left: 0;
    padding: 24px 16px 50px;
  }

  .page-title {
    font-size: 1.6rem;
  }

  .sign-note {
    padding: 16px 18px;
  }

  .form-grid {
    padding: 8px 18px 28px;
  }

  .field-row {
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .field-label {
    min-width: 100%;
    margin-bottom: 4px;
  }

  .msg-label {
    padding-top: 0;
  }

  .value-input,
  .to-input,
  .from-input {
    width: 100%;
  }

  .date-selects {
    flex-wrap: wrap;
  }

  .small-select { width: 64px; }
  .month-select { width: 120px; }
  .year-input   { width: 80px; }

  .radio-group {
    flex-wrap: wrap;
    gap: 10px;
  }

  .email-input {
    width: 100%;
  }

  .field-textarea {
    width: 100%;
  }

  .hint-row {
    padding-top: 0;
  }

  .cart-hint {
    font-size: 0.83rem;
  }
}

@media (max-width: 480px) {
  .page-container {
    padding: 16px 12px 40px;
  }

  .page-title {
    font-size: 1.3rem;
  }

  .form-grid {
    padding: 6px 14px 24px;
  }

  .add-btn {
    width: 100%;
    text-align: center;
    padding: 14px;
  }

  .btn-row {
    width: 100%;
  }
}
</style>